<script lang="ts" module>
	export type EmitterEventFreeSpinIntro =
		| { type: 'freeSpinIntroShow' }
		| { type: 'freeSpinIntroHide' }
		| { type: 'freeSpinIntroUpdate'; totFS: number; extraSpins?: number };
</script>

<script lang="ts">
	import { CanvasSizeRectangle } from 'components-layout';
	import { stateUrlDerived } from 'state-shared';
	import { FadeContainer } from 'components-pixi';
	import { waitForResolve } from 'utils-shared/wait';
	import { BitmapText, SpineProvider, SpineSlot, SpineTrack, Sprite } from 'pixi-svelte';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import PressToContinue from './PressToContinue.svelte';
	import FreeSpinAnimation from './FreeSpinAnimation.svelte';

	type AnimationName = 'intro' | 'idle';

	const context = getContext();

	const CONTENT_SIZES = {
		width: SYMBOL_SIZE * 1.7,
		height: SYMBOL_SIZE * 1.7,
	};

	let show = $state(false);
	let animationName = $state<AnimationName>('intro');
	let freeSpinsFromEvent = $state(0);
	let oncomplete = $state(() => {});

	context.eventEmitter.subscribeOnMount({
		freeSpinIntroShow: () => (show = true),
		freeSpinIntroHide: () => (show = false),
		freeSpinIntroUpdate: async (emitterEvent) => {
			if (emitterEvent.extraSpins) {
				context.eventEmitter.broadcast({ type: 'soundOnce', name: 'sfx_fs_respins' });
			}
			freeSpinsFromEvent = emitterEvent.extraSpins ?? emitterEvent.totFS;
			await waitForResolve((resolve) => (oncomplete = resolve));
		},
	});
</script>

<FadeContainer {show}>
	<CanvasSizeRectangle backgroundColor={0x000000} backgroundAlpha={0.5} />

	<FreeSpinAnimation>
		{#snippet children({ sizes })}
			<Sprite
				y={-SYMBOL_SIZE * 2.4}
				anchor={0.5}
				width={500 * 2.2}
				height={156 * 2.2}
				key="freespins_{stateUrlDerived.lang()}.png"
			/>

			<SpineProvider key="fsIntroNumber" width={CONTENT_SIZES.width} y={sizes.height * 0.1}>
				<SpineTrack
					trackIndex={0}
					{animationName}
					loop={animationName === 'idle'}
					listener={{
						complete: () => (animationName = 'idle'),
					}}
				/>
				<SpineSlot slotName="slot_number">
					<BitmapText
						anchor={{ x: 0.5, y: 0.5 }}
						text={freeSpinsFromEvent}
						style={{
							fontFamily: 'gold',
							fontSize: SYMBOL_SIZE,
							fontWeight: 'bold',
						}}
					/>
				</SpineSlot>
			</SpineProvider>
			<Sprite
				y={SYMBOL_SIZE * 3.5}
				anchor={0.5}
				width={183 * 2.2}
				height={42 * 2.2}
				key="freespins.png"
			/>
		{/snippet}
	</FreeSpinAnimation>

	<PressToContinue onpress={() => oncomplete()} />
</FadeContainer>
