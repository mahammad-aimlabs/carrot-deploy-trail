{#if show}
<div class="top-bar">
    <div style="font-weight:700">{clock+' '+'Scatter AI'}</div>
    <!-- <div style="display: flex;gap:10px;">
        <div style="display: flex;flex-direction:column">
            <span style="text-align: center;font-size: medium;">Balance</span>
            <span style="text-align: center;font-size:large;font-weight:700">{balance}</span>
        </div>
    </div> -->
    <div>Logo</div>
</div>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="bottom-bar">
    <div class="bottom-bar-container">
        <div class="menu-btn">
            <div class="menu-icon"></div>
        </div>
        <div class="menu-btn">Buy</div>
        <div class="amounts">
            <div class="balance-amount">
                <span style="font-size: small;">Balance</span>
                <span style="font-size: large;font-weight:800">{balance}</span>
            </div>
        
            <div class="bet-controls">
                <div class="bet-amount">
                    <span style="font-size: small;">Bet</span>
                    <span style="font-size: large;font-weight:800">{betValue}</span>
                </div>
                <div class="bet-btns">
                    <div class="bet-btn">
                        <div class={["bet-icon-plus",incrementDisabled ? 'btn-disable' : '']} onclick={incrementBet}></div>
                    </div>
                    <div class="bet-btn">
                        <div class={["bet-icon-minus",decrementDisabled ? 'btn-disable' : '']} onclick={decrementBet}></div>
                    </div>
                </div>
            </div>

        </div>
        <div class="play-controls">
            <div class="p-menu-btn">
                <div class="menu-icon"></div>
            </div>
            <div class="play-controls-container">
                <div class={["turbo-btn",turboDisabled ? 'btn-disable' : '']} style={isTurbo ? 'border: 2px solid white' : ''} onclick={toggleTurbo}>
                    <div class={isTurbo ? 'turbo-on' : 'turbo-off'}></div>
                </div>
                <div class="spin-btn-container" onclick={placeBet}>
                    <div class={[['spin_default', 'spin_disabled'].includes(key) ? 'spin-btn' : 'stop-btn',['spin_disabled', 'stop_disabled'].includes(key) ? 'btn-disable' : ''] }>
                        {#if !['spin_default', 'spin_disabled'].includes(key) && stateBet.autoSpinsCounter > 0}
                            <span>{stateBet.autoSpinsCounter === Infinity ? '∞' : stateBet.autoSpinsCounter}</span>
                        {/if}
                    </div>
                </div>
                <div class={["turbo-btn",autoDisabled ? 'btn-disable' : '']} style={stateBetDerived.hasAutoBetCounter() ? 'border: 2px solid white' : ''} onclick={pressAutoplay}>
                    <div class="auto-icon"></div>
                </div>
            </div>
            <div class="p-menu-btn">
                Buy
            </div>
        </div>
        <div class="win-fs-wrapper">
            <div class="win-container">
                 {#if showFs && ['portrait','tablet'].includes(context.stateLayoutDerived.layoutType())}
                    <div class="win-amount">
                        <span style="font-size: small;">Free Spins</span>
                        <span style="font-size: large;font-weight:800">{current+' / '+total}</span>
                    </div>
                {/if}
                {#if winBookEventAmountTween.target > 0}
                    <div class="win-amount">
                        <span style="font-size: small;">Win</span>
                        <span style="font-size: large;font-weight:800">{winAmount}</span>
                    </div>
                {/if}
               
            </div>
           
        </div>
    </div>
</div>
{/if}
<script lang="ts" >
	import { getContext } from "../game/context";
	import { Tween } from "svelte/motion";
	import { SvelteDate } from "svelte/reactivity";
	import { numberToCurrencyString } from "utils-shared/amount";
    import { stateBet,stateBetDerived,stateConfig,stateModal } from 'state-shared';
    import { bookEventAmountToCurrencyString } from 'utils-shared/amount';
	const context = getContext();
    //Clock
    const reactiveDate = new SvelteDate();
	const clock = $derived(
		reactiveDate.toLocaleTimeString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			hour12: false,
		}),
	);
    $effect(() => {
		const interval = setInterval(() => {
			reactiveDate.setTime(Date.now());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
    //Balance
	const balanceTween = new Tween(stateBet.balanceAmount);
    $effect(() => {
		balanceTween.set(stateBet.balanceAmount);
        console.log(balanceTween.target+' balance')
	});
	const balance = $derived(numberToCurrencyString(balanceTween.current));
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
    //AutoPlay
    const stopAutoSpin = () => (stateBet.autoSpinsCounter = 0);
    const openAutoModal = () => (stateModal.modal = { name: 'autoSpin' });
	const pressAutoplay = () => {
		context.eventEmitter.broadcast({ type: 'soundPressGeneral' });
		stateBetDerived.hasAutoBetCounter() ? stopAutoSpin() : openAutoModal();
	};
    const autoDisabled = $derived.by(() => {
		if (stateBet.isSpaceHold) return true;
		if (!context.stateXstateDerived.isIdle() && !stateBetDerived.hasAutoBetCounter()) return true;
		if (!stateBetDerived.isBetCostAvailable()) return true;
		return false;
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
    //WinAmount
    const winBookEventAmountTween = new Tween(stateBet.winBookEventAmount);
	const winAmount = $derived(bookEventAmountToCurrencyString(winBookEventAmountTween.current));
	$effect(() => {
		winBookEventAmountTween.set(stateBet.winBookEventAmount);
        console.log('winAmount : '+winBookEventAmountTween.target)
	});

    //Free Spins But shown only in portrait
    let showFs = $state(false);
	let current = $state(0);
    let total = $state(0)
    context.eventEmitter.subscribeOnMount({
		freeSpinCounterShow: () => (showFs = true),
		freeSpinCounterHide: () => (showFs = false),
		freeSpinCounterUpdate: (emitterEvent) => {
			if (emitterEvent.current !== undefined) current = emitterEvent.current;
			if (emitterEvent.total !== undefined) total = emitterEvent.total;
		},
	});

</script>
<style>
    :root{
        --HUD_color:rgba(0,0,0,0.4);
    }

    .btn-disable{
        pointer-events: none;
        opacity: 70%;
    }
    .top-bar{
        position: absolute;
        top: 0;
        width: 100%;
        /* background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(5px); */
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
        padding: 10px;
        box-sizing: border-box;
        /* @media(orientation:portrait){
            font-size: small;
        } */
    }
    .bottom-bar{
        position: absolute;
        bottom: 0;
        width: 100%;
        /* background-color: var(--HUD_color);
        backdrop-filter: blur(5px); */
        .bottom-bar-container{
            position: relative;
            display: flex;
            /* justify-content: space-between; */
            justify-content: center;
            align-items: center;
            color: white;
            padding: 10px;
            box-sizing: border-box;
            gap:10px;
            @media(orientation:portrait){
                flex-direction: column-reverse;
                gap:10px;
            }
        }
        
        .play-controls{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 5px;
            @media(orientation:portrait){
                width: 100%;
                gap: 10px;
            }
            .p-menu-btn{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                aspect-ratio: 1/1;
                background-color: var(--HUD_color);
                backdrop-filter: blur(5px);
                padding: 10px;
                border-radius: 999px;
                box-sizing: border-box;
                @media(orientation:landscape){
                    display: none;
                }
            }
            .play-controls-container{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;
            }
            .spin-btn-container{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                background-color: var(--HUD_color);
                backdrop-filter: blur(5px);
                border-radius: 999px;
                border: 2px solid #fff;
                cursor: pointer;
                .spin-btn{
                    width: 80px;
                    /* height: 80px; */
                    aspect-ratio: 1/1;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-image: url('/assets/common/spin_btn.svg');
                    @media(max-width: 768px){
                        width: 50px;
                        height: 50px;
                    }
                }
                .stop-btn{
                    color: black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 80px;
                    /* height: 80px; */
                    aspect-ratio: 1/1;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-image: url('/assets/common/stop_btn.svg');
                    @media(max-width: 768px){
                        width: 50px;
                        height: 50px;
                        font-size: x-small;
                    }
                }
            }
            .turbo-btn{
                width: 50px;
                aspect-ratio: 1/1;
                background-color: var(--HUD_color);
                backdrop-filter: blur(5px);
                border-radius: 999px;
                box-sizing: border-box;
                padding: 10px;
                cursor: pointer;
                @media(max-width: 768px){
                    width: 30px;
                    padding: 5px;
                }
            }
            .turbo-off{
                width: 100%;
                height: 100%;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                background-image: url('/assets/common/turbo_off.svg');
            }
            .turbo-on{
                width: 100%;
                height: 100%;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                background-image: url('/assets/common/turbo_on.svg');
            }
            .auto-icon{
                width: 100%;
                height: 100%;
                background-position: center;
                background-size: cover;
                background-repeat: no-repeat;
                background-image: url('/assets/common/autoplay.svg');
            }
           
        }
        .amounts{
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            max-width: 400px;
            background-color: var(--HUD_color);
            backdrop-filter: blur(5px);
            box-sizing: border-box;
            border-radius: 10px;
            padding: 5px;
        }
        .balance-amount{
            display: flex;
            flex-direction: column;
            max-width: 250px;
            width: 100%;
            @media(orientation:portrait){
                max-width: 100%;
                /* width: 100%; */
                /* flex-direction: row; */
                /* justify-content: center; */
                gap: 5px;
            }
        }
        .bet-controls{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: stretch;
            background-color: var(--HUD_color);
            padding: 5px;
            border-radius: 10px;
            /* backdrop-filter: blur(5px); */
            box-sizing: border-box;
            width: 100%;
            max-width: 150px;
            /* @media(orientation:portrait){ */
                /* max-width: 100px; */
                /* width: 100%; */
            /* } */
            .bet-amount{
                display: flex;
                flex-direction: column;
                width: 100%;
                @media(orientation:portrait){
                    max-width: 100px;
                    width: 100%;
                }
            }
            .bet-btns{
               width: 30px;
               display: flex;
               flex-direction: column;
               /* height: 100%; */
                .bet-btn{
                    width: 100%;
                    height: 50%;
                    /* background-color: var(--HUD_color); */
                    /* backdrop-filter: blur(5px); */
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .bet-icon-plus{
                    cursor: pointer;
                    border: 1px solid #fff;
                    border-radius: 999px;
                    box-sizing: border-box;
                    width: 20px;
                    height: 20px;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-image: url('/assets/common/plus.svg');
                }
                .bet-icon-minus{
                    cursor: pointer;
                    border: 1px solid #fff;
                    border-radius: 999px;
                    box-sizing: border-box;
                    width: 20px;
                    height: 20px;
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-image: url('/assets/common/minus.svg');
                }
            }

        }
        .menu-btn{
            width: 70px;
            aspect-ratio: 1/1;
            background-color: var(--HUD_color);
            backdrop-filter: blur(5px);
            padding: 10px;
            border-radius: 999px;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            @media(orientation:portrait){
                display: none;
            }  
        }
        .menu-icon{
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url('/assets/common/menu.svg');
        }
        .win-fs-wrapper{
            position: absolute;
            top: calc(0% - 55px);
            width: 100%;
            .win-container{
                display: flex;
                flex-direction: row;
                justify-content: space-evenly;
                width: 100%;
                .win-amount{
                    min-width: 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 5px 10px;
                    background-color: var(--HUD_color);
                    backdrop-filter: blur(5px);
                    border-radius: 10px;
                }

            }
        }
    }
</style>