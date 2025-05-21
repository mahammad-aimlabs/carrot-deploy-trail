import type { BetType } from 'rgs-requests';

import type { RawSymbol, GameType } from './types';

type Position = {
	reel: number;
	row: number;
};

type WinData = {
	win: number;
	mult: number;
	result: number;
	reel: 0 | 1 | 2 | 3 | 4 | 5;
	row: 1 | 2 | 3 | 4 | 5; // excluding the off top row and the off bottom row
};

type BookEventReveal = {
	index: number;
	type: 'reveal';
	board: RawSymbol[][];
	paddingPositions: number[];
	anticipation: number[];
	gameType: GameType;
};

type BookEventAnimateSymbols = {
	index: number;
	type: 'animateSymbols';
	reason: string;
	symbolPositions: Position[];
	payout?: number;
	symbol?: RawSymbol;
	payLineIndex?: number;
};

type BookEventClusterWin = {
	index: number;
	type: 'clusterWin';
	winInfo: WinData[];
};

type BookEventSetTumbleWin = {
	index: number;
	type: 'setTumbleWin';
	amount: number;
};

type BookEventSetTotalWin = {
	index: number;
	type: 'setTotalWin';
	amount: number;
};

type BookEventFreeSpinTrigger = {
	index: number;
	type: 'freeSpinTrigger';
	totFS: number;
	superBuy: boolean;
	extraSpins?: number;
};

type BookEventUpdateFreeSpin = {
	index: number;
	type: 'updateFreeSpin';
	amount: number;
	total?: number;
};

type BookEventUpdateGlobalMult = {
	index: number;
	type: 'updateGlobalMult';
	globalMult: number;
};

type BookEventFreeSpinEnd = {
	index: number;
	type: 'freeSpinEnd';
	amount: number;
};

type BookEventMultiplierSplashScreen = {
	index: number;
	type: 'multiplierSplashScreen';
	multiplier: number;
	actingOn: number;
	result: number;
	multiplierInfo: {
		reel: number;
		row: number;
		symbol: RawSymbol;
		currentTotalMult: number;
	}[];
};

type BookEventTumbleBoard = {
	index: number;
	type: 'tumbleBoard';
	level: string;
	explodingSymbols: Position[];
	newSymbols: RawSymbol[][];
	anticipation: boolean;
};

type BookEventCumulativeTumble = {
	index: number;
	type: 'cumulativeTumble';
	amount: number;
};

type BookEventWinCap = {
	index: number;
	type: 'winCap';
	amount: number;
};

type BookEventFinalWin = {
	index: number;
	type: 'finalWin';
	amount: number;
};

type BookEventBigWinAnimation = {
	index: number;
	type: 'bigWinAnimation';
	win: number;
};

type BookEventSetWin = {
	index: number;
	type: 'setWin';
	amount: number;
	multiplier?: number;
};

// customised
type BookEventCreateBonusSnapshot = {
	index: number;
	type: 'createBonusSnapshot';
	bookEvents: BookEvent[];
};

export type BookEvent =
	| BookEventReveal
	| BookEventAnimateSymbols
	| BookEventClusterWin
	| BookEventSetTumbleWin
	| BookEventSetTotalWin
	| BookEventFreeSpinTrigger
	| BookEventUpdateFreeSpin
	| BookEventUpdateGlobalMult
	| BookEventFreeSpinEnd
	| BookEventMultiplierSplashScreen
	| BookEventTumbleBoard
	| BookEventCumulativeTumble
	| BookEventWinCap
	| BookEventCreateBonusSnapshot
	| BookEventFinalWin
	| BookEventBigWinAnimation
	| BookEventSetWin
	// customised
	| BookEventCreateBonusSnapshot;

export type Bet = BetType<BookEvent>;
export type BookEventOfType<T> = Extract<BookEvent, { type: T }>;
export type BookEventContext = { bookEvents: BookEvent[] };
