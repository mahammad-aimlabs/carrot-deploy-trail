<script lang="ts" module>
	export type EmitterEventBoardFrame =
		| { type: 'boardFrameGlowShow' }
		| { type: 'boardFrameGlowHide' };
</script>

<script lang="ts">
	import { Sprite, SpineProvider, SpineTrack } from 'pixi-svelte';

	import { getContext } from '../game/context';

	const context = getContext();
	const SPINE_SCALE = { width: 0.59, height: 0.62 };
	const SPRITE_SCALE = { width: 1, height: 1 };
	const BG_RATIO = 937 / 806;
	const POSITION_ADJUSTMENT = 1.05;

	// type AnimationName = 'reelhouse_glow_start' | 'reelhouse_glow_idle' | 'reelhouse_glow_exit';

	// let animationName = $state<AnimationName | undefined>(undefined);
	// let loop = $state(false);

	// context.eventEmitter.subscribeOnMount({
	// 	boardFrameGlowShow: () => {
	// 		animationName = 'reelhouse_glow_start';
	// 		loop = false;
	// 	},
	// 	boardFrameGlowHide: () => {
	// 		if (animationName) animationName = 'reelhouse_glow_exit';
	// 	},
	// });
	// $effect(()=>{
	// 	console.log(context.stateGameDerived.boardLayout().width)
	// })
</script>

<!-- {#if animationName}
	<SpineProvider
		zIndex={-1}
		key="reelhouse"
		x={context.stateGameDerived.boardLayout().x * POSITION_ADJUSTMENT}
		y={context.stateGameDerived.boardLayout().y * POSITION_ADJUSTMENT}
		width={context.stateGameDerived.boardLayout().width * SPINE_SCALE.width}
		height={context.stateGameDerived.boardLayout().height * SPINE_SCALE.height}
	>
		<SpineTrack
			trackIndex={0}
			{animationName}
			{loop}
			listener={{
				complete: (entry) => {
					if (entry.animation) {
						if (entry.animation.name === 'reelhouse_glow_start') {
							animationName = 'reelhouse_glow_idle';
							loop = true;
						}

						if (entry.animation.name === 'reelhouse_glow_exit') {
							animationName = undefined;
							loop = false;
						}
					}
				},
			}}
		/>
	</SpineProvider>
{/if} -->

<!-- <Sprite
	key="frame_bg"
	anchor={0.5}
	x={context.stateGameDerived.boardLayout().x + 5}
	y={context.stateGameDerived.boardLayout().y}
	width={context.stateGameDerived.boardLayout().width + 50}
	height={context.stateGameDerived.boardLayout().height + 50}
/> -->
<!-- <Sprite
	key="frame_bg"
	anchor={0.5}
	x={context.stateGameDerived.boardLayout().x }
	y={context.stateGameDerived.boardLayout().y}
	width={context.stateGameDerived.boardLayout().width+350}
	height={context.stateGameDerived.boardLayout().height+300}
/> -->
<Sprite
	key="frame_bg"
	anchor={0.5}
	x={context.stateGameDerived.boardLayout().x }
	y={context.stateGameDerived.boardLayout().y}
	width={context.stateGameDerived.boardLayout().width+150}
	height={context.stateGameDerived.boardLayout().height+150}
/>
{console.log(context.stateGameDerived.boardLayout().x)}
{console.log(context.stateGameDerived.boardLayout().width+' width')}
{console.log(context.stateGameDerived.boardLayout().height+' height')}


<!-- <Sprite
	key="frame_edge.png"
	anchor={0.5}
	x={context.stateGameDerived.boardLayout().x * POSITION_ADJUSTMENT}
	y={context.stateGameDerived.boardLayout().y * POSITION_ADJUSTMENT}
	width={context.stateGameDerived.boardLayout().width * BG_RATIO * SPRITE_SCALE.width}
	height={context.stateGameDerived.boardLayout().width * SPRITE_SCALE.height}
/> -->
