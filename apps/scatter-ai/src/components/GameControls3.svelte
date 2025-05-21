<div class="top-bar">
    <div style="font-weight:700">{clock+' '+'Sparkling Riches'}</div>
    <div style="display: flex;gap:10px;">
        <div style="display: flex;flex-direction:column">
            <span style="text-align: center;font-size: medium;">Balance</span>
            <span style="text-align: center;font-size:large;font-weight:700">{balance}</span>
        </div>
    </div>
    <div>Logo</div>
</div>
<div class="bottom-bar">
    <div class="menu-btn-container">
        <div class="menu-btn">
            <div class="menu-icon"></div>
        </div>
    </div>
   <div class="balance-container">
        <!-- <div style="display: flex;flex-direction:column">
            <span style="text-align: center;font-size: medium;color:yellow">Balance</span>
            <span style="text-align: center;font-size:large;font-weight:700">{balance}</span>
        </div> -->
        <!-- <div style="display: flex;flex-direction:column">
            <span style="text-align: center;font-size: medium;">Win</span>
            <span style="text-align: center;font-size:large;font-weight:700">{balance}</span>        
        </div> -->
        <div class="bet-controls">
            <div class="bet-buttons">
               <div class="bet-btn" style="background-image: url(/assets/default/game-screen/plus.svg);"></div>
            </div>
            <div class="bet-amount">
                <span style="font-size: medium;">Bet</span>
                <span style="font-weight: 700;font-size:large">{6354637}</span>
            </div>
            <div class="bet-buttons">
                <div class="bet-btn" style="background-image: url(/assets/default/game-screen/minus.svg);"></div>

            </div>
        </div>
    </div>
    <div class="play-controls-container">
        <div class="turbo-btn-bg">
            <div class="turbo-icon-on"></div>
        </div>
        <div class="spin-btn-bg">
            <div class="spin-btn">
            </div>
        </div>
        <div class="turbo-btn-bg">
            <div class="auto-icon"></div>
        </div>
    </div>
</div>
<script lang="ts">
	import { stateBet } from "state-shared";
	import { Tween } from "svelte/motion";
	import { SvelteDate } from "svelte/reactivity";
	import { numberToCurrencyString } from "utils-shared/amount";
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
</script>
<style>
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
        bottom: 15px;
        width: 100%;
        /* background-color: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(5px); */
        display: flex;
        justify-content: space-between;
        /* align-items: stretch; */
        color: white;
        padding: 10px;
        box-sizing: border-box;
        @media(orientation:portrait){
            /* font-size: small; */
            /* scale: 0.5; */
        }
        .menu-btn-container{
            display: flex;
            justify-content: center;
            align-items: center;
            .menu-btn{
                width: 50px;
                height: 50px;
                /* padding: ; */
                background-color: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(5px);
                padding: 10px;
                box-sizing: border-box;
                border-radius: 999px;
                .menu-icon{
                    width: 100%;
                    height: 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-image: url('/assets/default/game-screen/menu.svg');
                }
            }
        }
        
        .balance-container{
            /* width: 50%; */
            padding: 10px;
            border-radius: 10px;
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(5px);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            .bet-controls{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 4px;
                .bet-amount{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    width: 100px;
                    height: 100%;
                    background-color: rgba(255, 255, 255, 0.2);
                    text-wrap: wrap;
                    word-break: break-all;
                    text-align: center;
                    border-radius: 10px;
                    padding: 2px;
                }
                .bet-buttons{
                    height: 40px;
                    width: 40px;
                    background-color: rgba(255, 255, 255, 0.2);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    .bet-btn{
                        width: 50%;
                        height: 50%;
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: cover;
                    }
                }
            }
        }
        .play-controls-container{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 4px;
            /* width: 300px; */
            /* background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(5px); */
            padding: 10px;
            border-radius: 10px;
            .spin-btn-bg{
                width: 100px;
                height: 100%;
                position: relative;
                /* background-color: black; */
                .spin-btn{
                    position: relative;
                    bottom: 0%;
                    width: 100px;
                    height: 100px;
                    background-color: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(5px);
                    border-radius: 999px;
                    box-sizing: border-box;
                    border: 2px solid #fff;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-image: url('/assets/default/game-screen/spin_btn.svg');
                    @media(max-width: 768px){
                        width: 50px;
                        height: 50px;
                    }
                }
            }
            .turbo-btn-bg{
                width: 50px;
                height: 50px;
                /* background-color: black; */
                background-color: rgba(255, 255, 255, 0.2);
                backdrop-filter: blur(5px);
                border-radius: 999px;
                box-sizing: border-box;
                padding: 10px;
            }
            .turbo-icon-on{
                width: 100%;
                height: 100%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                background-image: url('/assets/default/game-screen/turbo_off.svg');
            }
            .auto-icon{
                width: 100%;
                height: 100%;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                background-image: url('/assets/default/game-screen/autoplay.svg');
            }
            
        }
    }
</style>