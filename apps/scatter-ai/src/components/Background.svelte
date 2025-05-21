<script lang="ts">
	import { Rectangle, SpineProvider, SpineTrack, Sprite } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { SECOND } from 'constants-shared/time';
	import { getContext } from '../game/context';

	const context = getContext();
	// const backgroundProps = $derived(
	// 	context.stateLayoutDerived.normalBackgroundLayout({ scale: 0.5 }),
	// );
	const showBaseBackground = $derived(
		context.stateGame.gameType === 'baseGame' || context.stateGame.gameType === 'superSpinGame',
	);
	const showFeatureBackground = $derived(context.stateGame.gameType === 'freeGame');


	//Newly Added
	const SCALE_BASE = {x:1,y:1}
	const bgSpriteData:any = $derived(context.stateApp.loadedAssets?.['bg']);
	const baseSpriteProps:any= $derived(context.stateLayoutDerived.normalBackgroundLayout({ scale: 1 }))
	console.log(baseSpriteProps)
	// console.log(bgSpriteData)
	const scaleSize=$derived.by(()=>{
		// console.log(context.stateApp.pixiApplication)
		context.stateApp.pixiApplication?.renderer.resize(document.getElementsByTagName('body')[0].clientWidth,document.getElementsByTagName('body')[0].clientHeight)
		if (!bgSpriteData) return SCALE_BASE;
		if (!bgSpriteData?.width || !bgSpriteData?.height) return SCALE_BASE;
		if (!baseSpriteProps.width && !baseSpriteProps.height) return SCALE_BASE;
		if (!baseSpriteProps.width && baseSpriteProps.height) {
			console.log('height case '+baseSpriteProps.height,' : ',bgSpriteData.height)
			const scaleHeight = baseSpriteProps.height / bgSpriteData.height;
			return { x: scaleHeight, y: scaleHeight };
		}
		if (baseSpriteProps.width && !baseSpriteProps.height) {
			console.log('width case '+baseSpriteProps.width,' : ',bgSpriteData.width)
			const scaleWidth = baseSpriteProps.width / bgSpriteData.width;
			return { x: scaleWidth, y: scaleWidth };
		}
		if (baseSpriteProps.width && baseSpriteProps.height) {
			return {
				x: baseSpriteProps.width / bgSpriteData.width,
				y: baseSpriteProps.height / bgSpriteData.height,
			};
		}
		return SCALE_BASE;
	// });
	})
	// svelte-ignore state_referenced_locally
	console.log(scaleSize)
</script>

<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x000000} zIndex={-3} />
<Sprite zIndex={-2}
	key="bg"
	anchor={0.5}
	{...baseSpriteProps}
	scale={scaleSize}
/>
<!-- <FadeContainer show={showBaseBackground} duration={SECOND} zIndex={-2}>
	<SpineProvider key="foregroundAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'idle'} loop />
	</SpineProvider>
	<SpineProvider key="foregroundAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'dust'} loop />
	</SpineProvider>
</FadeContainer>

<FadeContainer show={showFeatureBackground} duration={SECOND} zIndex={-1}>
	<SpineProvider key="foregroundFeatureAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'idle'} loop />
	</SpineProvider>
	<SpineProvider key="foregroundFeatureAnimation" {...backgroundProps}>
		<SpineTrack trackIndex={0} animationName={'dust'} loop />
	</SpineProvider>
</FadeContainer> -->
