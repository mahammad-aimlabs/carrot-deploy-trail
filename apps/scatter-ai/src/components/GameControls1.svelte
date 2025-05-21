<script lang="ts">
    import { getContext } from '../game/context';
    import { stateModal } from 'state-shared';
	import { numberToCurrencyString } from 'utils-shared/amount';
	import { stateBet,stateBetDerived,stateConfig } from 'state-shared';
	import { Tween } from 'svelte/motion';
	import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	import { waitForResolve } from 'utils-shared/wait';


	const context = getContext();

    //Buy Options
	context.eventEmitter.subscribeOnMount({
		buyBonusConfirm: () => {
			stateModal.modal = { name: 'buyBonusConfirm' };
		},
	});
    //WinAmount
    const winBookEventAmountTween = new Tween(stateBet.winBookEventAmount);
	const winAmount = $derived(bookEventAmountToCurrencyString(winBookEventAmountTween.current));
	$effect(() => {
		winBookEventAmountTween.set(stateBet.winBookEventAmount);
        console.log('winAmount : '+winBookEventAmountTween.target)
	});

    //Balance
	const balanceTween = new Tween(stateBet.balanceAmount);
    $effect(() => {
		balanceTween.set(stateBet.balanceAmount);
        console.log(balanceTween.target+' balance')
	});
	const balanceValue = $derived(numberToCurrencyString(balanceTween.current));


	//bet-btn
	let stopDisabled = $state(false);
	const bet = () => context.eventEmitter.broadcast({ type: 'bet' });
	const stop = () => {
		if (!stopDisabled) {
			if (stateBetDerived.hasAutoBetCounter()) stateBet.autoSpinsCounter = 0;
			context.eventEmitter.broadcast({ type: 'stopButtonClick' });
		}
	};
	const placeBet = () => {
		context.eventEmitter.broadcast({ type: 'soundPressBet' });

		if (context.stateXstateDerived.isIdle()) {
			bet();
		} else {
			stop();
		}
	};
	const getKey = () => {
		if (context.stateXstateDerived.isIdle()) {
			if (!stateBetDerived.isBetCostAvailable()) return 'spin_disabled';
			return 'spin_default';
		}

		if (!context.stateXstateDerived.isIdle()) {
			if (stopDisabled) return 'stop_disabled';
			if (stateBetDerived.hasAutoBetCounter()) return 'stop_default';
			if (stateBet.isTurbo) return 'stop_disabled';
			return 'stop_default';
		}

		return 'spin_default';
	};
	const key = $derived.by(getKey);
	context.eventEmitter.subscribeOnMount({
		stopButtonClick: () => (stopDisabled = true),
		stopButtonEnable: () => (stopDisabled = false),
	});
	const disabled = $derived(!stateBetDerived.isBetCostAvailable());
	//Bet
	const betValue = $derived(numberToCurrencyString(stateBetDerived.betCost()));
	//Increment buton
	const biggest = $derived(stateConfig.betAmountOptions[stateConfig.betAmountOptions.length - 1]);
	const incrementDisabled = $derived(!context.stateXstateDerived.isIdle() || stateBet.betAmount === biggest);
	const incrementBet = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		const nextBigger = [...stateConfig.betAmountOptions]
			.sort((a, b) => a - b)
			.find((option) => option > stateBet.betAmount);

		stateBetDerived.setBetAmount(nextBigger || biggest);
	};
    //Decrease button
	const smallest = $derived(stateConfig.betAmountOptions[0]);
	const decrementDisabled = $derived(
		!context.stateXstateDerived.isIdle() || stateBet.betAmount === smallest,
	);
	const decrementBet = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });

		const nextSmaller = [...stateConfig.betAmountOptions]
			.sort((a, b) => b - a)
			.find((option) => option < stateBet.betAmount);

		stateBetDerived.setBetAmount(nextSmaller || smallest);
	};
	//Turbo
	const isTurbo = $derived(stateBet.isTurbo);
	const turboDisabled = $derived(stateBet.isSpaceHold);

	const toggleTurbo = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateBetDerived.updateIsTurbo(!stateBet.isTurbo, { persistent: true });
	};

	context.eventEmitter.subscribeOnMount({
		stopButtonClick: () => stateBetDerived.updateIsTurbo(true, { persistent: false }),
		stopButtonEnable: () => stateBetDerived.updateIsTurbo(false, { persistent: false }),
	});

	//To show and hide top and bottom bars
	let show = $state(true)
	context.eventEmitter.subscribeOnMount({
		uiShow: async () => {
			console.log(show," show")
			if (show === false) {
				show = true;
				// await waitForResolve((resolve) => (oncomplete = resolve));
			}
		},
		uiHide: async () => {
			console.log(show," show")
			if (show === true) {
				show = false;
				// await waitForResolve((resolve) => (oncomplete = resolve));
			}
		},
	});

	//toggleFullScreen
	let isFullScreen=$state(false)
	function toggleFullScreen(){
		const elem = document.body;
		if (elem.requestFullscreen) {
			isFullScreen ? document.exitFullscreen() : elem.requestFullscreen();
			isFullScreen = !isFullScreen
			
		}
		// else if (elem.mozRequestFullScreen()) { /* Firefox */
		// 	elem.mozRequestFullScreen();
		// } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
		// 	elem.webkitRequestFullscreen();
		// } else if (elem.msRequestFullscreen) { /* IE/Edge */
		// 	elem.msRequestFullscreen();
		// }
	}
</script>
{#if show}
	<div class="top-bar">
		<div style="font-size: medium;font-weight:700">{'Sparkling Riches'}</div>
		<div>Logo</div>
	</div>
	<div class="bottom-bar-container" >
		<div class="bottom-bar">
			<div class="menu-btn-container">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="menu-btn" onclick={toggleFullScreen}>
				</div>
			</div>
			<div style="display: flex;gap:10px;">
				<div style="display: flex;flex-direction:column">
					<span style="text-align: center;font-size: medium;">Balance</span>
					<span style="text-align: center;font-size:large;font-weight:700">{balanceValue}</span>
				</div>
			</div>
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div class="bet-container" style="display: flex;align-items:center;gap:3px;height:100%">
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<div class="bet-controls" onclick={decrementBet}>-</div>
				<div class="bet" style="display: flex;flex-direction:column">
					<span style="text-align: center;font-size: medium;">Bet</span>
					<span style="text-align: center;font-size:large;font-weight:700">{betValue}</span>
				</div>
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="bet-controls" onclick={incrementBet}>+</div>
			</div>
			
			<div class="spin-controls-container">
				<div class="turbo-btn-container">
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div class={['turbo-btn',isTurbo ? 'turbo-on' : 'turbo-off']} onclick={toggleTurbo}>
					</div>
				</div>
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div class="spin-btn-container">
					<!-- svelte-ignore a11y_consider_explicit_label -->
					<div class={ ['spin_default', 'spin_disabled'].includes(key) ? 'spin-btn' : 'stop-btn' } onclick={placeBet}>
	
					</div>
				</div>
				<div class="auto-btn-container">
					<div class="auto-btn"></div>
				</div>
			</div>
	
			{#if winBookEventAmountTween.target > 0}
				<div class="win-container">
					<div class="win-amount">
						<span>Win</span>
						<span style="font-weight: 700;">{winAmount}</span>
					</div>
				</div>
			{/if}
		   
		</div>
	</div>
{/if}
<style>
	.bottom-bar-container{
		width:100%;
		height: 100px;
		/* background-color:rgba(0,0,0,0.4); 
		backdrop-filter: blur(5px); */
		position:absolute; 
		bottom:0;
		padding: 10px 10px;
		box-sizing:border-box;
		
		color: white;
		@media(orientation: portrait) {
			height: 50px;
		}
        .bottom-bar{
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
			@media(orientation: portrait) {
				flex-direction: column-reverse;
				gap:10px;
			}
        }
	}

    .spin-controls-container{
	   /* width: 40%; */
	   height: 100%;
	   display: flex;
	   align-items: center;
	   gap: 5px;
	    .spin-btn-container{
			/* width: 100px; */
			height: 100%;
			aspect-ratio: 1/1;
			padding: 5px;
			background-color: rgba(0,0,0,0.4);
			backdrop-filter: blur(5px);
			border-radius: 1000px;
			
			.spin-btn{
				width: 100%;
				height: 100%;
				background-image: url('/assets/default/game-screen/spin_btn.svg');
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				cursor: pointer;
			}
			.stop-btn{
				width: 100%;
				height: 100%;
				background-image: url('/assets/default/game-screen/stop_btn.svg');
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				cursor: pointer;
			}
	    }
		.turbo-btn-container{
			height: 50%;
			aspect-ratio: 1/1;
			background-color: rgba(255,255,255,0.2);
			border-radius: 1000px;
			padding: 5px;
			.turbo-btn{
				width: 100%;
				height: 100%;
				background-image: url('/assets/default/game-screen/turbo_off.svg');
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				position: relative;
				cursor: pointer;
			}
			.turbo-on{
				background-image: url('/assets/default/game-screen/turbo_on.svg');
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
			}
			.turbo-off{
				background-image: url('/assets/default/game-screen/turbo_off.svg');
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
			}
		}
		.auto-btn-container{
			height: 50%;
			aspect-ratio: 1/1;
			background-color: rgba(255,255,255,0.2);
			border-radius: 1000px;
			padding: 5px;
			.auto-btn{
				width: 100%;
				height: 100%;
				background-image: url('/assets/default/game-screen/autoplay.svg');
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
			}
		}
    }
	.menu-btn-container{
		height: 50%;
		aspect-ratio: 1/1;
		background-color: rgba(255,255,255,0.2);
		border-radius: 1000px;
		padding: 5px;
		cursor: pointer;
		.menu-btn{
			width: 100%;
			height: 100%;
			background-image: url('/assets/default/game-screen/menu.svg');
			background-repeat: no-repeat;
			background-position: center;
			background-size: cover;
			position: relative;
		}
	}
	.bet-controls{
		height: 50%;
		aspect-ratio: 1/1;
		background-color: rgba(255,255,255,0.2);
        border-radius: 1000px;
		/* text-align: center; */
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.top-bar{
		width:100%;
		/* height: 100px; */
		padding-left: 10px;
		padding-right: 10px;
		/* background-color:rgba(0,0,0,0);  */
		background-color:rgba(0,0,0,0.4); 
		backdrop-filter: blur(5px);
		position:absolute; 
		top:0;
		padding: 10px 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: white;
		box-sizing: border-box;
	}

    .win-container{
       position: absolute;
       box-sizing: border-box;
       bottom: calc(100% + 15px);
       width: 100%;
       display: flex;
       justify-content: center;
       align-items: center;
        .win-amount{
            backdrop-filter: blur(5px);
            border-radius: 1000px;
            padding: 10px 30px;
            min-width: 120px;
            background-color: rgba(0,0,0,0.6);
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: medium;
        }
    }
</style>