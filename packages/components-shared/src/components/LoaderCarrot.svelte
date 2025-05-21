<script lang="ts">
	import LoaderBase from './LoaderBase.svelte';

	type Props = {
		oncomplete?: () => void;
	};

	const props: Props = $props();

	const CARROT_LOADER_MAX_WIDTH = 400;
	const CARROT_LOADER_BACKGROUND_COLOR = '#0C4144';
	const CARROT_LOADER_FINISH_ONCE_TIMEOUT = 2500;
	const CARROT_LOADER_SRC =
		'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/loaders/carrot-v2.gif';
</script>

<LoaderBase
	maxWidth={CARROT_LOADER_MAX_WIDTH}
	backgroundColor={CARROT_LOADER_BACKGROUND_COLOR}
	timeout={CARROT_LOADER_FINISH_ONCE_TIMEOUT}
	src={CARROT_LOADER_SRC}
	oncomplete={props.oncomplete}
/>
