<script lang="ts" module>
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'MODE_BASE/bookEvent',
	});
</script>

<script lang="ts">
	import {
		StoryGameTemplate,
		StoryLocale,
		type TemplateArgs,
		templateArgs,
	} from 'components-storybook';

	import Game from '../components/Game.svelte';
	import { setContext } from '../game/context';
	import { playBookEvent } from '../game/utils';
	import events from './data/base_events';

	setTemplate(template);
	setContext();
</script>

{#snippet template(args: TemplateArgs<any>)}
	<StoryGameTemplate
		skipLoadingScreen={args.skipLoadingScreen}
		action={async () => {
			await args.action?.(args.data);
		}}
	>
		<StoryLocale lang="en">
			<Game />
		</StoryLocale>
	</StoryGameTemplate>
{/snippet}

<Story
	name="reveal"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.reveal,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="setTotalWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.setTotalWin,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="freeSpinTrigger"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.freeSpinTrigger,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="updateFreeSpin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.updateFreeSpin,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="animateSymbols"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.animateSymbols,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="setTumbleWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.setTumbleWin,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="tumbleBoard"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.tumbleBoard,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="updateGlobalMult"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.updateGlobalMult,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="multiplierSplashScreen"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.multiplierSplashScreen,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="cumulativeTumble"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.cumulativeTumble,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="freeSpinEnd"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.freeSpinEnd,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>

<Story
	name="finalWin"
	args={templateArgs({
		skipLoadingScreen: true,
		data: events.finalWin,
		action: async (data) => await playBookEvent(data, { bookEvents: [] }),
	})}
/>
