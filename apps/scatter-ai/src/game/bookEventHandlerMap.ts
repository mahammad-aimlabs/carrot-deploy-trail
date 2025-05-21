import _ from 'lodash';

import { recordBookEvent, checkIsMultipleRevealEvents, type BookEventHandlerMap } from 'utils-book';
import { stateBet, stateUi } from 'state-shared';

import { eventEmitter } from './eventEmitter';
import { playBookEvent } from './utils';
import { stateGame, stateGameDerived } from './stateGame.svelte';
import type { BookEvent, BookEventOfType, BookEventContext } from './typesBookEvent';

type Suspended = null | (() => Promise<void>);

const suspendedMap = {
	clusterWinAmounts: null as Suspended,
};

const winLevelSoundsPlay = ({ bookEventAmount }: { bookEventAmount: number }) => {
	const winLevelData = stateGameDerived.getWinLevelDataByBookEventAmount(bookEventAmount);
	if (winLevelData?.alias === 'max') eventEmitter.broadcastAsync({ type: 'uiHide' });
	if (winLevelData?.sound?.sfx) {
		eventEmitter.broadcast({ type: 'soundOnce', name: winLevelData.sound.sfx });
	}
	if (winLevelData?.sound?.bgm) {
		eventEmitter.broadcast({ type: 'soundMusic', name: winLevelData.sound.bgm });
	}
	if (winLevelData?.type === 'big') {
		eventEmitter.broadcast({ type: 'soundLoop', name: 'sfx_bigwin_coinloop' });
	}
};

const winLevelSoundsStop = () => {
	eventEmitter.broadcast({ type: 'soundStop', name: 'sfx_bigwin_coinloop' });
	if (stateBet.activeBetModeKey === 'SUPERSPIN' || stateGame.gameType === 'freeGame') {
		// check if SUPERSPIN, when finishing a bet.
		eventEmitter.broadcast({ type: 'soundMusic', name: 'bgm_freespin' });
	} else {
		eventEmitter.broadcast({ type: 'soundMusic', name: 'bgm_main' });
	}
	eventEmitter.broadcastAsync({ type: 'uiShow' });
};

export const bookEventHandlerMap: BookEventHandlerMap<BookEvent, BookEventContext> = {
	reveal: async (bookEvent: BookEventOfType<'reveal'>, { bookEvents }: BookEventContext) => {
		const isBonusGame = checkIsMultipleRevealEvents({ bookEvents });
		if (isBonusGame) {
			eventEmitter.broadcast({ type: 'stopButtonEnable' });
			recordBookEvent({ bookEvent });
		}

		stateGame.gameType = bookEvent.gameType;
		await stateGameDerived.enhancedBoard.spin({ revealEvent: bookEvent });
		eventEmitter.broadcast({ type: 'soundScatterCounterClear' });
	},
	animateSymbols: async (bookEvent: BookEventOfType<'animateSymbols'>) => {
		const waitForAnimateSymbols = async () => {
			eventEmitter.broadcast({ type: 'boardShow' });
			if (bookEvent.reason === 'trigger_freeSpin') {
				eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_scatter_win_v2' });
			} else {
				eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_winlevel_small' });
			}
			await eventEmitter.broadcastAsync({
				type: 'boardWithAnimateSymbols',
				symbolPositions: bookEvent.symbolPositions,
			});
		};
		await Promise.all([waitForAnimateSymbols(), suspendedMap.clusterWinAmounts?.()]);
		suspendedMap.clusterWinAmounts = null;
	},
	clusterWin: async (bookEvent: BookEventOfType<'clusterWin'>) => {
		const clusterWin = async () => {
			await eventEmitter.broadcastAsync({
				type: 'showClusterWinAmounts',
				wins: bookEvent.winInfo,
			});
		};

		suspendedMap.clusterWinAmounts = clusterWin;
	},
	setTumbleWin: async (bookEvent: BookEventOfType<'setTumbleWin'>) => {
		if (bookEvent.amount > 0) {
			eventEmitter.broadcast({ type: 'tumbleWinAmountShow' });
			eventEmitter.broadcast({
				type: 'tumbleWinAmountUpdate',
				amount: bookEvent.amount,
				animate: false,
			});
		}
	},
	setTotalWin: async (bookEvent: BookEventOfType<'setTotalWin'>) => {
		stateBet.winBookEventAmount = bookEvent.amount;
	},
	freeSpinTrigger: async (bookEvent: BookEventOfType<'freeSpinTrigger'>) => {
		eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_superfreespin' });
		await eventEmitter.broadcastAsync({ type: 'uiHide' });
		await eventEmitter.broadcastAsync({ type: 'transition' });
		eventEmitter.broadcast({ type: 'freeSpinIntroShow' });
		eventEmitter.broadcast({ type: 'soundOnce', name: 'jng_intro_fs' });
		eventEmitter.broadcast({ type: 'soundMusic', name: 'bgm_freespin' });
		await eventEmitter.broadcastAsync({
			type: 'freeSpinIntroUpdate',
			totFS: bookEvent.totFS,
			extraSpins: bookEvent.extraSpins,
		});
		stateGame.gameType = 'freeGame';
		eventEmitter.broadcast({ type: 'freeSpinIntroHide' });
		eventEmitter.broadcast({ type: 'boardFrameGlowShow' });
		eventEmitter.broadcast({ type: 'globalMultiplierShow' });
		await eventEmitter.broadcastAsync({
			type: 'globalMultiplierUpdate',
			multiplier: 1, // resets when multiplier === 1
		});
		eventEmitter.broadcast({ type: 'freeSpinCounterShow' });
		stateUi.freeSpinCounterShow = true;
		eventEmitter.broadcast({
			type: 'freeSpinCounterUpdate',
			current: undefined,
			total: bookEvent.totFS,
		});
		stateUi.freeSpinCounterTotal = bookEvent.totFS;
		await eventEmitter.broadcastAsync({ type: 'uiShow' });
		await eventEmitter.broadcastAsync({ type: 'drawerButtonShow' });
		eventEmitter.broadcast({ type: 'drawerFold' });
	},
	updateFreeSpin: async (bookEvent: BookEventOfType<'updateFreeSpin'>) => {
		eventEmitter.broadcast({ type: 'freeSpinCounterShow' });
		stateUi.freeSpinCounterShow = true;
		eventEmitter.broadcast({
			type: 'freeSpinCounterUpdate',
			current: bookEvent.amount,
			total: undefined,
		});
		stateUi.freeSpinCounterCurrent = bookEvent.amount;
	},
	updateGlobalMult: async (bookEvent: BookEventOfType<'updateGlobalMult'>) => {
		eventEmitter.broadcast({ type: 'globalMultiplierShow' });
		if (bookEvent.globalMult === 1) {
			eventEmitter.broadcast({ type: 'tumbleWinAmountHide' });
			eventEmitter.broadcast({ type: 'tumbleWinAmountReset' });
		}
		await eventEmitter.broadcastAsync({
			type: 'globalMultiplierUpdate',
			multiplier: bookEvent.globalMult, // resets when multiplier === 1
		});
	},
	freeSpinEnd: async (bookEvent: BookEventOfType<'freeSpinEnd'>) => {
		await eventEmitter.broadcastAsync({ type: 'uiHide' });
		stateGame.gameType = 'baseGame';
		eventEmitter.broadcast({ type: 'boardFrameGlowHide' });
		eventEmitter.broadcast({ type: 'globalMultiplierHide' });
		eventEmitter.broadcast({ type: 'freeSpinOutroShow' });
		eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_youwon_panel' });
		winLevelSoundsPlay({ bookEventAmount: bookEvent.amount });
		await eventEmitter.broadcastAsync({
			type: 'freeSpinOutroCountUp',
			amount: bookEvent.amount,
		});
		winLevelSoundsStop();
		eventEmitter.broadcast({ type: 'freeSpinOutroHide' });
		eventEmitter.broadcast({ type: 'freeSpinCounterHide' });
		stateUi.freeSpinCounterShow = false;
		await eventEmitter.broadcastAsync({ type: 'transition' });
		await eventEmitter.broadcastAsync({ type: 'uiShow' });
		await eventEmitter.broadcastAsync({ type: 'drawerUnfold' });
		eventEmitter.broadcast({ type: 'drawerButtonHide' });
	},
	multiplierSplashScreen: async (bookEvent: BookEventOfType<'multiplierSplashScreen'>) => {
		eventEmitter.broadcast({ type: 'tumbleWinAmountShow' });
		await eventEmitter.broadcastAsync({
			type: 'tumbleWinAmountUpdate',
			amount: bookEvent.actingOn,
			animate: false,
		});
		eventEmitter.broadcast({ type: 'multiplierBoardShow' });
		eventEmitter.broadcast({ type: 'multiplierBoardInit' });
		eventEmitter.broadcast({ type: 'soundOnce', name: 'tumble_win_4' });
		await eventEmitter.broadcastAsync({ type: 'multiplierBoardAnimate' });
		eventEmitter.broadcast({ type: 'boardWithMovingMultiplierTexts' });
		await eventEmitter.broadcastAsync({ type: 'multiplierBoardMove' });
		eventEmitter.broadcast({ type: 'multiplierBoardReset' });
		eventEmitter.broadcast({ type: 'multiplierBoardHide' });
		eventEmitter.broadcast({ type: 'multiplierTotalShow' });
		eventEmitter.broadcast({
			type: 'multiplierTotalUpdate',
			totalMultiplier: bookEvent.multiplier,
		});
		eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_multiplier_win' });
		await eventEmitter.broadcastAsync({ type: 'multiplierTotalAnimate' });
		eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_multiplier_explosion_a' });
		eventEmitter.broadcast({ type: 'multiplierTotalHide' });
		await eventEmitter.broadcastAsync({
			type: 'tumbleWinAmountUpdate',
			amount: bookEvent.result,
			animate: true,
		});
	},
	tumbleBoard: async (bookEvent: BookEventOfType<'tumbleBoard'>) => {
		eventEmitter.broadcast({ type: 'boardHide' });
		eventEmitter.broadcast({ type: 'tumbleBoardShow' });
		eventEmitter.broadcast({ type: 'tumbleBoardInit', addingBoard: bookEvent.newSymbols });
		eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_multiplier_explosion_b' });
		await eventEmitter.broadcastAsync({
			type: 'tumbleBoardExplode',
			explodingPositions: bookEvent.explodingSymbols,
		});
		eventEmitter.broadcast({ type: 'tumbleBoardRemoveExploded' });
		await eventEmitter.broadcastAsync({ type: 'tumbleBoardSlideDown' });
		eventEmitter.broadcast({
			type: 'boardSettle',
			board: stateGameDerived
				.tumbleBoardCombined()
				.map((tumbleReel) => tumbleReel.map((tumbleSymbol) => tumbleSymbol.rawSymbol)),
		});
		eventEmitter.broadcast({ type: 'tumbleBoardReset' });
		eventEmitter.broadcast({ type: 'tumbleBoardHide' });
		eventEmitter.broadcast({ type: 'boardShow' });
	},
	cumulativeTumble: async (bookEvent: BookEventOfType<'cumulativeTumble'>) => {
		eventEmitter.broadcast({ type: 'winShow' });
		winLevelSoundsPlay({ bookEventAmount: bookEvent.amount });
		await eventEmitter.broadcastAsync({ type: 'winUpdate', amount: bookEvent.amount });
		eventEmitter.broadcast({ type: 'soundStop', name: 'sfx_bigwin_coinloop' });
		eventEmitter.broadcast({ type: 'winHide' });
	},
	winCap: async (bookEvent: BookEventOfType<'winCap'>) => {
		eventEmitter.broadcast({ type: 'winShow' });
		winLevelSoundsPlay({ bookEventAmount: bookEvent.amount });
		await eventEmitter.broadcastAsync({ type: 'winUpdate', amount: bookEvent.amount });
		winLevelSoundsStop();
		eventEmitter.broadcast({ type: 'winHide' });
	},
	finalWin: async (bookEvent: BookEventOfType<'finalWin'>) => {
		eventEmitter.broadcast({ type: 'globalMultiplierHide' });
		eventEmitter.broadcast({ type: 'tumbleWinAmountHide' });
	},
	bigWinAnimation: async (bookEvent: BookEventOfType<'bigWinAnimation'>) => {
		// Do nothing
	},
	setWin: async (bookEvent: BookEventOfType<'setWin'>) => {
		// Do nothing
	},
	// customised
	createBonusSnapshot: async (bookEvent: BookEventOfType<'createBonusSnapshot'>) => {
		const { bookEvents } = bookEvent;

		function findLastBookEvent<T>(type: T) {
			return _.findLast(bookEvents, (bookEvent) => bookEvent.type === type) as
				| BookEventOfType<T>
				| undefined;
		}

		const lastFreeSpinTriggerEvent = findLastBookEvent('freeSpinTrigger' as const);
		const lastUpdateFreeSpinEvent = findLastBookEvent('updateFreeSpin' as const);
		const lastSetTotalWinEvent = findLastBookEvent('setTotalWin' as const);
		const lastUpdateGlobalMultEvent = findLastBookEvent('updateGlobalMult' as const);

		if (lastFreeSpinTriggerEvent) await playBookEvent(lastFreeSpinTriggerEvent, { bookEvents });
		if (lastUpdateFreeSpinEvent) playBookEvent(lastUpdateFreeSpinEvent, { bookEvents });
		if (lastSetTotalWinEvent) playBookEvent(lastSetTotalWinEvent, { bookEvents });
		if (lastUpdateGlobalMultEvent) playBookEvent(lastUpdateGlobalMultEvent, { bookEvents });
	},
};
