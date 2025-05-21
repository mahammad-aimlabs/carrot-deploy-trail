<script lang="ts" module>
	export type EmitterEventFreeSpinOutro =
		| { type: 'freeSpinOutroShow' }
		| { type: 'freeSpinOutroHide' }
		| { type: 'freeSpinOutroCountUp'; amount: number };
</script>

<script lang="ts">
	import { Sprite, SpineProvider, SpineTrack, SpineSlot } from 'pixi-svelte';
	import { FadeContainer, WinCountUpProvider, ResponsiveBitmapText } from 'components-pixi';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	import { waitForResolve } from 'utils-shared/wait';
	import { CanvasSizeRectangle } from 'components-layout';
	import { OnMount } from 'components-shared';
	import { stateUrlDerived } from 'state-shared';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import FreeSpinAnimation from './FreeSpinAnimation.svelte';
	import PressToContinue from './PressToContinue.svelte';
	import WinCoins from './WinCoins.svelte';

	type AnimationName = 'intro' | 'idle';

	const context = getContext();
	const CONTENT_SIZES = {
		width: SYMBOL_SIZE * 1.7,
		height: SYMBOL_SIZE * 1.7,
	};

	let show = $state(false);
	let animationName = $state<AnimationName>('intro');
	let amount = $state(0);
	let oncomplete = $state(() => {});
	let onCountUpComplete = $state(() => {});

	context.eventEmitter.subscribeOnMount({
		freeSpinOutroShow: () => (show = true),
		freeSpinOutroHide: async () => (show = false),
		freeSpinOutroCountUp: async (emitterEvent) => {
			amount = emitterEvent.amount;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});

	const winLevelData = $derived(context.stateGameDerived.getWinLevelDataByBookEventAmount(amount));
</script>

<FadeContainer {show}>
	{#if winLevelData}
		{@const duration = winLevelData.presentDuration}
		{@const isBigWin = winLevelData.type === 'big'}
		{@const contentY = isBigWin ? 0.1 : -0.08}
		<WinCountUpProvider {amount} {duration} oncomplete={() => onCountUpComplete()}>
			{#snippet children({ countUpAmount, startCountUp, finishCountUp, countUpCompleted })}
				<OnMount onmount={() => startCountUp()} />

				<CanvasSizeRectangle backgroundColor={0x000000} backgroundAlpha={0.5} />

				<FreeSpinAnimation>
					{#snippet children({ sizes })}
						{#if isBigWin}
							<Sprite
								y={-SYMBOL_SIZE * 2.4}
								anchor={0.5}
								width={500 * 2.2}
								height={156 * 2.2}
								key="freespins_{stateUrlDerived.lang()}.png"
							/>
						{:else}
							<Sprite
								y={-SYMBOL_SIZE * 2.7}
								anchor={0.5}
								width={500 * 4.5}
								height={80 * 4.5}
								key="winsmall_{stateUrlDerived.lang()}.png"
							/>
						{/if}

						<Sprite
							y={SYMBOL_SIZE * (isBigWin ? 3.3 : 3)}
							anchor={0.5}
							width={177 * (isBigWin ? 2.2 : 3)}
							height={42 * (isBigWin ? 2.2 : 3)}
							key="totalwin.png"
						/>
						<SpineProvider
							key="fsOutroNumber"
							width={CONTENT_SIZES.width}
							y={sizes.height * contentY}
						>
							<SpineTrack
								trackIndex={0}
								{animationName}
								loop={animationName === 'idle'}
								listener={{
									complete: () => (animationName = 'idle'),
								}}
							/>
							<SpineSlot slotName="slot_number">
								<ResponsiveBitmapText
									anchor={0.5}
									style={{
										fontFamily: 'gold',
										fontSize: 1.5 * SYMBOL_SIZE,
									}}
									text={bookEventAmountToCurrencyString(countUpAmount)}
									maxWidth={sizes.width}
								/>
							</SpineSlot>
						</SpineProvider>
					{/snippet}
				</FreeSpinAnimation>

				<WinCoins emit={!countUpCompleted} levelAlias={winLevelData?.alias} />

				<PressToContinue onpress={() => (countUpCompleted ? oncomplete() : finishCountUp())} />
			{/snippet}
		</WinCountUpProvider>
	{/if}
</FadeContainer>
