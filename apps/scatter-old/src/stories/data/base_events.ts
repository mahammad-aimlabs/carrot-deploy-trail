export default {
	reveal: {
		type: 'reveal' as const,
		board: [
			[
				{
					name: 'L2' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
			],
			[
				{
					name: 'L4' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'H5' as const,
				},
				{
					name: 'H5' as const,
				},
			],
			[
				{
					name: 'H4' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'H5' as const,
				},
				{
					name: 'H5' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H1' as const,
				},
				{
					name: 'H3' as const,
				},
			],
			[
				{
					name: 'H2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'H3' as const,
				},
				{
					name: 'L1' as const,
				},
			],
			[
				{
					name: 'L3' as const,
				},
				{
					name: 'L3' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'L4' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'H4' as const,
				},
				{
					name: 'L3' as const,
				},
			],
			[
				{
					name: 'L2' as const,
				},
				{
					name: 'L2' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'L1' as const,
				},
				{
					name: 'H5' as const,
				},
				{
					name: 'H5' as const,
				},
				{
					name: 'L4' as const,
				},
			],
		],
		paddingPositions: [86, 20, 51, 121, 58, 108],
		level: 'lvl_0' as const,
		gameType: 'baseGame' as const,
		anticipation: [0, 0, 0, 0, 0, 0],
	},
	setTotalWin: {
		type: 'setTotalWin',
		amount: 1000,
	},
	freeSpinTrigger: {
		type: 'freeSpinTrigger' as const,
		totFS: 10,
		superBuy: false,
	},
	updateFreeSpin: {
		type: 'updateFreeSpin',
		amount: 5,
		total: 10,
	},
	animateSymbols: {
		type: 'animateSymbols',
		symbolPositions: [
			{
				reel: 0,
				row: 1,
			},
			{
				reel: 1,
				row: 4,
			},
			{
				reel: 1,
				row: 5,
			},
			{
				reel: 3,
				row: 4,
			},
			{
				reel: 3,
				row: 5,
			},
			{
				reel: 4,
				row: 3,
			},
			{
				reel: 4,
				row: 4,
			},
			{
				reel: 5,
				row: 3,
			},
		],
		reason: 'symbolWin',
	},
	setTumbleWin: {
		type: 'setTumbleWin',
		amount: 120,
	},
	tumbleBoard: {
		type: 'tumbleBoard',
		newSymbols: [
			[
				{
					name: 'L4',
				},
			],
			[
				{
					name: 'L2',
				},
				{
					name: 'H2',
				},
			],
			[],
			[
				{
					name: 'H4',
				},
				{
					name: 'H1',
				},
			],
			[
				{
					name: 'L2',
				},
				{
					name: 'L2',
				},
			],
			[
				{
					name: 'H3',
				},
			],
		],
		oldBoard: [
			[
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H3',
				},
				{
					name: 'H3',
				},
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
				{
					name: 'L2',
				},
			],
			[
				{
					name: 'H2',
				},
				{
					name: 'L3',
				},
				{
					name: 'H1',
				},
				{
					name: 'H1',
				},
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H3',
				},
			],
			[
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
				{
					name: 'H2',
				},
			],
			[
				{
					name: 'H1',
				},
				{
					name: 'L3',
				},
				{
					name: 'L3',
				},
				{
					name: 'S',
				},
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H1',
				},
			],
			[
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'S',
				},
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
			],
			[
				{
					name: 'H3',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'W',
				},
				{
					name: 'S',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
			],
		],
		explodingSymbols: [
			{
				reel: 0,
				row: 1,
			},
			{
				reel: 1,
				row: 4,
			},
			{
				reel: 1,
				row: 5,
			},
			{
				reel: 3,
				row: 4,
			},
			{
				reel: 3,
				row: 5,
			},
			{
				reel: 4,
				row: 3,
			},
			{
				reel: 4,
				row: 4,
			},
			{
				reel: 5,
				row: 3,
			},
		],
		level: 'lvl_0',
		board: [
			[
				{
					name: 'L4',
				},
				{
					name: 'L4',
				},
				{
					name: 'H3',
				},
				{
					name: 'H3',
				},
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
				{
					name: 'L2',
				},
			],
			[
				{
					name: 'L2',
				},
				{
					name: 'H2',
				},
				{
					name: 'H2',
				},
				{
					name: 'L3',
				},
				{
					name: 'H1',
				},
				{
					name: 'H1',
				},
				{
					name: 'H3',
				},
			],
			[
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
				{
					name: 'H2',
				},
			],
			[
				{
					name: 'H4',
				},
				{
					name: 'H1',
				},
				{
					name: 'H1',
				},
				{
					name: 'L3',
				},
				{
					name: 'L3',
				},
				{
					name: 'S',
				},
				{
					name: 'H1',
				},
			],
			[
				{
					name: 'L2',
				},
				{
					name: 'L2',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'S',
				},
				{
					name: 'H5',
				},
				{
					name: 'H5',
				},
			],
			[
				{
					name: 'H3',
				},
				{
					name: 'H3',
				},
				{
					name: 'L1',
				},
				{
					name: 'L1',
				},
				{
					name: 'S',
				},
				{
					name: 'H4',
				},
				{
					name: 'H4',
				},
			],
		],
	},
	updateGlobalMult: {
		type: 'updateGlobalMult',
		globalMult: 2,
	},
	multiplierSplashScreen: {
		type: 'multiplierSplashScreen' as const,
		multiplier: 15,
		actingOn: 1950.0,
		result: 13650.0,
		multiplierInfo: [
			{ reel: 1, row: 2, symbol: { name: 'M' as const, subtype: '5' }, currentTotalMult: 5 },
			{
				reel: 3,
				row: 2,
				symbol: { name: 'M' as const, subtype: '10' },
				currentTotalMult: 15,
			},
		],
	},
	cumulativeTumble: {
		type: 'cumulativeTumble',
		amount: 360,
		winLevel: 4,
	},
	freeSpinEnd: {
		type: 'freeSpinEnd' as const,
		amount: 8000.0,
	},
	finalWin: {
		type: 'finalWin',
		amount: 4380,
	},
};
