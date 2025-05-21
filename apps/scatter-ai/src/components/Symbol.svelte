<script lang="ts">
	import SymbolSpine from './SymbolSpine.svelte';
	import SymbolSprite from './SymbolSprite.svelte';
	import { getSymbolBackgroundInfo, getSymbolInfo } from '../game/utils';
	import type { SymbolState, RawSymbol } from '../game/types';
	import { getContext } from '../game/context';
	import SymbolWin from './SymbolWin.svelte';
	import { SYMBOL_SIZE } from '../game/constants';

	type Props = {
		x?: number;
		y?: number;
		state: SymbolState;
		rawSymbol: RawSymbol;
		oncomplete?: () => void;
		loop?: boolean;
	};

	const props: Props = $props();
	const context = getContext();
	const symbolInfo = $derived(getSymbolInfo({ rawSymbol: props.rawSymbol, state: props.state }));
	const isSprite = $derived(symbolInfo.type === 'sprite');
	const isWinAnime = $derived(symbolInfo.type === 'winAnime');
	// const isWinAnime = true
	const texture = $derived(
		(context.stateApp.loadedAssets?.[symbolInfo.assetKey] || PIXI.Texture.EMPTY),
	);
</script>

{#if isSprite}
	<SymbolSprite {symbolInfo} x={props.x} y={props.y} oncomplete={props.oncomplete} />
{:else if isWinAnime}
    <!-- <SymbolWin 
	controls={{duration: 250,loopTimes:4}}
    oncomplete={props.oncomplete}
	{texture} anchor={0.5} x={props.x} y={props.y} width={SYMBOL_SIZE * symbolInfo.sizeRatios.width}
	height={SYMBOL_SIZE * symbolInfo.sizeRatios.height}
	/> -->
	<SymbolWin {symbolInfo} x={props.x} y={props.y} oncomplete={props.oncomplete} controls={{duration:250,loopTimes:4}}/>
{:else}
	{@const symbolBackgroundInfo = getSymbolBackgroundInfo({
		rawSymbol: props.rawSymbol,
		state: props.state,
	})}
	<SymbolSpine
		loop={props.loop}
		{symbolInfo}
		{symbolBackgroundInfo}
		x={props.x}
		y={props.y}
		showWinFrame={props.state === 'win' && !['S', 'M'].includes(props.rawSymbol.name)}
		listener={{
			complete: props.oncomplete,
			event: (_, event) => {
				if (event.data?.name === 'wildExplode') {
					context.eventEmitter?.broadcast({ type: 'soundOnce', name: 'sfx_wild_explode' });
				}
			},
		}}
	/>
{/if}
