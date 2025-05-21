<script lang="ts">
	import { SpineProvider, SpineTrack, Container, Sprite } from 'pixi-svelte';
	import { FadeContainer, LoadingProgress } from 'components-pixi';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';
	import TransitionAnimation from './TransitionAnimation.svelte';
	import PressToContinue from './PressToContinue.svelte';
	import Background from './Background.svelte';
	import LoadingBar from './LoadingBar.svelte';
    
	type Props = {
		onloaded: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	let loadingType = $state<'start' | 'transition'>('start');
</script>

<!-- logo and loading progress -->
<FadeContainer show={loadingType === 'start'}>
	<MainContainer>
		<Container
			x={context.stateLayoutDerived.mainLayout().width * 0.5}
			y={context.stateLayoutDerived.mainLayout().height * 0.5}
		>
			<!-- <SpineProvider key="loader" width={300}> -->
				<!-- <SpineTrack trackIndex={0} animationName={'title_screen'} loop timeScale={3} /> -->
			<!-- </SpineProvider> -->
			<!-- <Sprite /> -->

			<!-- <Sprite
				anchor={0.5}
				key={'title'}
			/> -->

			{#if !context.stateApp.loaded}
				<LoadingBar y={270}/>
				<!-- <LoadingProgress y={250} width={1293} height={65}>
					{#snippet background(sizes)}
						<Sprite key="loading_base.png" {...sizes} />
					{/snippet}
					{#snippet progress(sizes)}
						<Sprite key="loading_fill.png" {...sizes} />
					{/snippet}
					{#snippet frame(sizes)}
						<Sprite key="loading_border.png" {...sizes} />
					{/snippet}
				</LoadingProgress> -->
			{/if}
		</Container>
	</MainContainer>
</FadeContainer>

<!-- press to continue -->
<FadeContainer show={loadingType === 'start' && context.stateApp.loaded}>
	<PressToContinue onpress={() => (loadingType = 'transition')} />
</FadeContainer>

<!-- transition between the loading screen and the game -->
<FadeContainer show={loadingType === 'transition'}>
	<TransitionAnimation oncomplete={props.onloaded} />
</FadeContainer>
