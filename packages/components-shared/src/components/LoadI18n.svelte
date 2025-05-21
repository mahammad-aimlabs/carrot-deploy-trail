<script lang="ts">
	// https://lingui.dev/installation#vite
	// https://lingui.dev/tutorials/javascript
	// https://lingui.dev/ref/vite-plugin

	import { i18n, type Messages } from '@lingui/core';
	import { onMount, type Snippet } from 'svelte';

	import { stateUrlDerived, type Language } from 'state-shared';
	import type { MessagesMap } from 'utils-shared/i18n';

	type Props = {
		debug?: boolean;
		children: Snippet;
		messagesMap: MessagesMap;
	};

	const props: Props = $props();

	let loaded = $state(false);

	const loadMessages = (lang: Language) => {
		const messages = props.messagesMap[lang];
		if (props.debug) console.log({ messages });
		return messages;
	};

	const initI18n = (lang: Language, messages: Messages) => {
		i18n.load(lang, messages as Messages);
		i18n.activate(lang);
		loaded = true;
	};

	onMount(() => {
		try {
			const messages = loadMessages(stateUrlDerived.lang());
			initI18n(stateUrlDerived.lang(), messages);
		} catch (error) {
			console.error("Loading fallback locale 'en' because of error", error);
			try {
				const messages = loadMessages('en');
				initI18n('en', messages);
			} catch (error) {
				console.error("Loading fallback locale 'en' without any messages because of error", error);
				initI18n('en', {});
			}
		}
	});
</script>

{#if loaded}
	{@render props.children()}
{/if}
