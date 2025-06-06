const BASE_BUCKET = 'https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-2-mining-game';
const CDN_URL= '/games/scatter-ai/assets/game'
// import { page } from '$app/state';
// console.log(page)
// const getUrlSearchParam = (key:any) => page .url|| ' ';
// console.log(getUrlSearchParam('code'))
import {stateUrlDerived} from 'state-shared'
console.log('lang : ',stateUrlDerived.lang())
const urlParams = new URLSearchParams(document.location.search)
let uniqueCode = urlParams.get('gameCode') ?? 'default';
console.log('uniqueCode : ',uniqueCode)


export default {
	pressToContinueText: {
		type: 'sprites',
		src: `${BASE_BUCKET}/sprites/pressToContinueText/MM_pressanywhere.json`,
		preload: true,
	},
	// H1: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `${BASE_BUCKET}/spines/symbols/symbols.atlas`,
	// 		skeleton: `${BASE_BUCKET}/spines/symbols/h1.json`,
	// 		scale: 2,
	// 	},
	// },
	// H2: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `${BASE_BUCKET}/spines/symbols/symbols.atlas`,
	// 		skeleton: `${BASE_BUCKET}/spines/symbols/h2.json`,
	// 		scale: 2,
	// 	},
	// },
	// H3: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `${BASE_BUCKET}/spines/symbols/symbols.atlas`,
	// 		skeleton: `${BASE_BUCKET}/spines/symbols/h3.json`,
	// 		scale: 2,
	// 	},
	// },
	// H4: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `${BASE_BUCKET}/spines/symbols/symbols.atlas`,
	// 		skeleton: `${BASE_BUCKET}/spines/symbols/h4.json`,
	// 		scale: 2,
	// 	},
	// },
	// H5: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `${BASE_BUCKET}/spines/symbols/symbols.atlas`,
	// 		skeleton: `${BASE_BUCKET}/spines/symbols/h5.json`,
	// 		scale: 2,
	// 	},
	// },
	// L1: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `${BASE_BUCKET}/spines/symbols/symbols.atlas`,
	// 		skeleton: `${BASE_BUCKET}/spines/symbols/l1.json`,
	// 		scale: 2,
	// 	},
	// },
	// L2: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `${BASE_BUCKET}/spines/symbols/symbols.atlas`,
	// 		skeleton: `${BASE_BUCKET}/spines/symbols/l2.json`,
	// 		scale: 2,
	// 	},
	// },
	// L3: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `${BASE_BUCKET}/spines/symbols/symbols.atlas`,
	// 		skeleton: `${BASE_BUCKET}/spines/symbols/l3.json`,
	// 		scale: 2,
	// 	},
	// },
	// L4: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `${BASE_BUCKET}/spines/symbols/symbols.atlas`,
	// 		skeleton: `${BASE_BUCKET}/spines/symbols/l4.json`,
	// 		scale: 2,
	// 	},
	// },
	M: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/symbols2/symbols2.atlas`,
			skeleton: `${BASE_BUCKET}/spines/symbols2/M.json`,
			scale: 2,
		},
	},
	// S: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `${BASE_BUCKET}/spines/symbols2/symbols2.atlas`,
	// 		skeleton: `${BASE_BUCKET}/spines/symbols2/S.json`,
	// 		scale: 2,
	// 	},
	// },
	explosion: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/symbols3/symbols3.atlas`,
			skeleton: `${BASE_BUCKET}/spines/symbols3/explosion.json`,
			scale: 2,
		},
	},
	// W: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `${BASE_BUCKET}/spines/symbols3/symbols3.atlas`,
	// 		skeleton: `${BASE_BUCKET}/spines/symbols3/W.json`,
	// 		scale: 2,
	// 	},
	// },
	reelsFrame: {
		type: 'sprites',
		src: `${BASE_BUCKET}/sprites/reelsFrame/reels_frame.json`,
	},
	payFrame: {
		type: 'sprite',
		src: `${BASE_BUCKET}/sprites/payFrame/payFrame.png`,
	},
	anticipation: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/anticipation/anticipation.atlas`,
			skeleton: `${BASE_BUCKET}/spines/anticipation/anticipation.json`,
			scale: 2,
		},
	},
	goldFont: {
		type: 'font',
		src: `${BASE_BUCKET}/fonts/goldFont/mm_gold.xml`,
	},
	goldBlur: {
		type: 'font',
		src: `${BASE_BUCKET}/fonts/goldBlur/miningfont_gold_blur.xml`,
	},
	silverFont: {
		type: 'font',
		src: `${BASE_BUCKET}/fonts/silverFont/mm_silver.xml`,
	},
	purpleFont: {
		type: 'font',
		src: `${BASE_BUCKET}/fonts/purpleFont/mm_purple.xml`,
	},
	loader: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/loader/loader.atlas`,
			skeleton: `${BASE_BUCKET}/spines/loader/loader.json`,
			scale: 2,
		},
		preload: true,
	},
	bigwin: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/bigwin/big_wins.atlas`,
			skeleton: `${BASE_BUCKET}/spines/bigwin/mm_bigwin.json`,
			scale: 2,
		},
	},
	globalMultiplier: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/globalMultiplier/multiframe.atlas`,
			skeleton: `${BASE_BUCKET}/spines/globalMultiplier/multiframe.json`,
			scale: 2,
		},
	},
	fsIntro: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/fsIntro/fs_screen.atlas`,
			skeleton: `${BASE_BUCKET}/spines/fsIntro/fs_screen.json`,
			scale: 2,
		},
	},
	fsIntroNumber: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/fsIntro/fs_screen.atlas`,
			skeleton: `${BASE_BUCKET}/spines/fsIntro/fs_screen_number.json`,
			scale: 2,
		},
	},
	fsOutroNumber: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/fsIntro/fs_screen.atlas`,
			skeleton: `${BASE_BUCKET}/spines/fsIntro/fs_total_number.json`,
			scale: 2,
		},
	},
	foregroundAnimation: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/foregroundAnimation/mm_bg.atlas`,
			skeleton: `${BASE_BUCKET}/spines/foregroundAnimation/mm_bg.json`,
			scale: 2,
		},
		preload: true,
	},
	foregroundFeatureAnimation: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/foregroundFeatureAnimation/mm_bg_feature.atlas`,
			skeleton: `${BASE_BUCKET}/spines/foregroundFeatureAnimation/mm_bg_feature.json`,
			scale: 2,
		},
		preload: true,
	},
	tumble_multiplier: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/tumbleWin/tumble_win.atlas`,
			skeleton: `${BASE_BUCKET}/spines/tumbleWin/tumble_multiplier.json`,
			scale: 2,
		},
	},
	tumble_win: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/tumbleWin/tumble_win.atlas`,
			skeleton: `${BASE_BUCKET}/spines/tumbleWin/tumble_win.json`,
			scale: 2,
		},
	},
	reelhouse: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/reelhouse/reelhouse_glow.atlas`,
			skeleton: `${BASE_BUCKET}/spines/reelhouse/reelhouse_glow.json`,
			scale: 2,
		},
	},
	// progressBar: {
	// 	type: 'sprites',
	// 	src: `${BASE_BUCKET}/sprites/progressBar/progressBar.json`,
	// 	preload: true,
	// },
	freeSpins: {
		type: 'sprites',
		src: `${BASE_BUCKET}/sprites/freeSpins/freeSpins.json`,
	},
	winSmall: {
		type: 'sprites',
		src: `${BASE_BUCKET}/sprites/winSmall/MM_Localisation_winsmall.json`,
	},
	clusterWin: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/clusterWin/clusterpay.atlas`,
			skeleton: `${BASE_BUCKET}/spines/clusterWin/clusterpay.json`,
			scale: 2,
		},
	},
	transition: {
		type: 'spine',
		src: {
			atlas: `${BASE_BUCKET}/spines/transition/transition.atlas`,
			skeleton: `${BASE_BUCKET}/spines/transition/transition.json`,
			scale: 2,
		},
	},
	symbolsStatic: {
		type: 'sprites',
		src: `${BASE_BUCKET}/sprites/symbolsStatic/symbolsStatic.json`,
	},
	coins: {
		type: 'spriteSheet',
		src: `https://test-twist-front-2.s3.ap-southeast-2.amazonaws.com/1-7-samurai-dogs-2/sprites/coin/SD2_Coin.json`,
	},
	sound: {
		type: 'audio',
		src: `${BASE_BUCKET}/audio/sounds.json`,
		preload: true,
	},



	//New Assets
	//CDN Assets
	bg: {
		type: 'sprite',
		src: `${CDN_URL+'/'+uniqueCode}/main_bg.png`,
		preload: true
	},
	symbols: {
		type: 'sprites',
		src: `${CDN_URL+'/'+uniqueCode}/symbols.json`,
	},
	frame_bg: {
		type: 'sprite',
		src: `${CDN_URL+'/'+uniqueCode}/frame_bg.png`,
	},
	//Common for now
	// bg: {
	// 	type: 'sprite',
	// 	src: `/assets/${'default'}/game-screen/main_bg.png`,
	// 	preload: true
	// },
	// symbols: {
	// 	type: 'sprites',
	// 	src: `/assets/${'default'}/game-screen/symbols.json`,
	// },
	// frame_bg: {
	// 	type: 'sprite',
	// 	src: `/assets/${'default'}/game-screen/frame_bg.png`,
	// 	// preload: true
	// },
	frame_tumble: {
		type: 'sprite',
		src: `/assets/${'default'}/game-screen/frame_tumble.png`,
	},
	// title: {
	// 	type: 'sprite',
	// 	src: `/assets/${'default'}/game-screen/title.png`,
	// 	preload: true
	// },
	frame_tumbleWin: {
		type: 'sprite',
		src: `/assets/${'default'}/game-screen/frame_tumbleWin.png`,
	},
	frame_FSCounter: {
		type: 'sprite',
		src: `/assets/${'default'}/game-screen/frame_FSCounter.png`,
	},
	loadBarAssets: {
		type: 'sprites',
		src: `/assets/${'default'}/game-screen/loading.json`,
		preload: true
	},
	// globalMultiplier: {
	// 	type: 'spine',
	// 	src: {
	// 		atlas: `/assets/${'default'}/game-screen/multiframe.atlas`,
	// 		skeleton: `/assets/${'default'}/game-screen/multiframe.json`,
	// 		scale: 2,
	// 	},
	// },
} as const;
