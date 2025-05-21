<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	import { requestAuthenticate } from 'rgs-requests';
	import { stateUrlDerived, stateBet, stateConfig, stateMeta, stateModal } from 'state-shared';
	import { API_AMOUNT_MULTIPLIER, MOST_USED_BET_INDEXES } from 'constants-shared/bet';

	type Props = { children: Snippet };

	const props: Props = $props();

	let authenticated = $state(false);

	const authenticate = async () => {
		try {
			const authenticateData = await requestAuthenticate({
				rgsUrl: stateUrlDerived.rgsUrl(),
				gameID: stateUrlDerived.gameID(),
				sessionID: stateUrlDerived.sessionID(),
				language: stateUrlDerived.socialCasino() ? 'sweeps_en' : stateUrlDerived.lang(),
			});

			if (authenticateData?.error) throw authenticateData;

			if (authenticateData?.balance) {
				stateBet.currency = authenticateData.balance.currency;
				stateBet.balanceAmount = authenticateData.balance.amount / API_AMOUNT_MULTIPLIER;
			}

			if (authenticateData?.round) {
				// TODO fix typing
				stateBet.lastBet = authenticateData.round;
				if (authenticateData.round.mode) stateBet.activeBetModeKey = authenticateData.round.mode;

				const betAmountValue =
					authenticateData.round.amount! > 0
						? authenticateData.round.amount! / API_AMOUNT_MULTIPLIER
						: 0;
				stateBet.betAmount = betAmountValue;
				stateBet.wageredBetAmount = betAmountValue;
			}

			if (authenticateData?.config) {
				stateConfig.jurisdiction = authenticateData?.config?.jurisdiction;
				stateConfig.betAmountOptions = authenticateData.config.betLevels!.map(
					(level) => level / API_AMOUNT_MULTIPLIER,
				);
				stateConfig.betMenuOptions = stateConfig.betAmountOptions.filter((_, index) =>
					MOST_USED_BET_INDEXES.includes(index),
				);
			}

			if (authenticateData?.meta) {
				stateMeta.betModeMeta = authenticateData.meta.betModes;
				stateMeta.gameRuleMeta = authenticateData.meta.rules;
			}
		} catch (error) {
			console.error(error);
			stateModal.modal = { name: 'error', error };
		}
	};

	onMount(async () => {
		await authenticate();
		authenticated = true;
	});
</script>

{#if authenticated}
	{@render props.children()}
{/if}
