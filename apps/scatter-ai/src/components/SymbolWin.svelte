<script lang="ts" module>
	import * as PIXI from 'pixi.js';

	import { Sprite, type OverwriteCursor } from 'pixi-svelte';

	export type Props = OverwriteCursor<PIXI.SpriteOptions> & {
		isMask?: boolean;
	};
</script>

<!-- <script lang="ts">
	import { propsSyncEffect } from 'pixi-svelte';
	import { getContextParent } from 'pixi-svelte';
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';

	const props: Props = $props();

	const parentContext = getContextParent();
	const sprite = new PIXI.Sprite(props.texture);

	propsSyncEffect({ props, target: sprite, ignore: ['isMask'] });

	$effect(() => {
		if (props.isMask !== undefined) {
			parentContext.parent.mask = props.isMask ? sprite : null;
		}
	});

	parentContext.addToParent(sprite);
  
  //Animation 
	let scaleValue:any;
	let started=$state(false)
	let counter = 0;
	let initialValue:any;
	// let initScale:any
	$effect(()=>{
    if(started){
			// console.log(scaleValue?.current+' current')
			sprite.scale = {x: scaleValue.current,y:scaleValue.current}
		}
		if(started && scaleValue.target === scaleValue.current){
			// console.log('completed')
			if(scaleValue.target === 0.2){
				scaleValue.target = initialValue
				// console.log('going backwards')
			}
			if(scaleValue.current === initialValue){
				counter += 1
				// console.log(counter,' counter')
				// console.log(`completed ${counter} cycle`)
				if(counter === props.controls.loopTimes){
					started = false
					counter = 0
					console.log('complted enitre animation')
					// console.log(sprite.scale.x,' final scaleX')
					props.oncomplete()
					// console.log('final width', sprite.width)
				}
				else{
					scaleValue.target = 0.2
				}
			}
		}
	})
	onMount(()=>{
		console.log(sprite.scale.x)
		scaleValue = new Tween(sprite.scale.x,{duration: props.controls.duration})
		initialValue = sprite.scale.x
		scaleValue.target = 0.2
		started = true
    // console.log('original width', sprite.width)


		// console.log('MNounted SpriteWin')
		// sprite.anchor = 0
		// sprite.scale = {x: sprite.scale.x-0.2,y:sprite.scale.y-0.2}
		// console.log(sprite.anchor)
		// console.log(sprite.scale)
		// sprite.scale = {x:0.5,y:0.5}
		// console.log(sprite.scale)
		// setTimeout(()=>{
		// 	console.log('completed Animation')
		// 	props.oncomplete?.();
		// },2000)
	})
</script> -->
<script lang="ts">
	import { getSymbolInfo } from '../game/utils';
	import { onMount } from 'svelte';
	import { Tween } from 'svelte/motion';
	import { SYMBOL_SIZE } from '../game/constants';
	type Props = {
		x?: number;
		y?: number;
		symbolInfo: ReturnType<typeof getSymbolInfo>;
		oncomplete?: () => void;
		controls: {duration:number,loopTimes:number}
	};
	const props: Props = $props()
    // let spriteScale = $derived(scaleValue)
   


	//Animation 
	let scaleValue:any;
	let width:any = $state(SYMBOL_SIZE * props.symbolInfo.sizeRatios.width);
	// let height:any = $state(SYMBOL_SIZE * props.symbolInfo.sizeRatios.height)
	let started=$state(false)
	let counter = 0;
	let initialValue:any;
	// let initScale:any
	$effect(()=>{
		if(started){
			// console.log(scaleValue?.current+' current')
			width = scaleValue.current
		}
		if(started && scaleValue.target === scaleValue.current){
			// console.log('completed')
			if(scaleValue.target === 150){
				scaleValue.target = initialValue
				// console.log('going backwards')
			}
			if(scaleValue.current === initialValue){
				counter += 1
				// console.log(counter,' counter')
				// console.log(`completed ${counter} cycle`)
				if(counter === props.controls.loopTimes){
					started = false
					counter = 0
					console.log('complted enitre animation')
					// console.log(sprite.scale.x,' final scaleX')
					props.oncomplete?.()
					// console.log('final width', sprite.width)
				}
				else{
					scaleValue.target = 150
				}
			}
		}
	})
	onMount(()=>{
		scaleValue = new Tween(SYMBOL_SIZE * props.symbolInfo.sizeRatios.width,{duration: props.controls.duration})
		initialValue = SYMBOL_SIZE * props.symbolInfo.sizeRatios.width
		scaleValue.target = 150
		started = true
	})
	$effect(()=>{
		// console.log(SYMBOL_SIZE * props.symbolInfo.sizeRatios.width+' width')
		// console.log(SYMBOL_SIZE * props.symbolInfo.sizeRatios.height+' height')
	})
</script>
<!-- width={SYMBOL_SIZE * props.symbolInfo.sizeRatios.width}
height={SYMBOL_SIZE * props.symbolInfo.sizeRatios.height} -->
<Sprite key={props.symbolInfo.assetKey} x={props.x} y={props.y} anchor={0.5} 
width={width}
height={width}
/>