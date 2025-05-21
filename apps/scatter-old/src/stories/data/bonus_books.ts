export default [
	{
		id: 1,
		payoutMultiplier: 65.8,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
						{
							name: 'L2',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'S',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'S',
						},
						{
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
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
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
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
					],
				],
				paddingPositions: [79, 33, 116, 112, 3, 32],
				level: 'lvl_0',
				gameType: 'baseGame',
				anticipation: [0, 0, 1, 2, 3, 4],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 3,
				type: 'animateSymbols',
				reason: 'trigger_freeSpin',
				payout: 0,
				kind: 3,
				symbol: 'scatter',
				symbolPositions: [
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 4,
					},
				],
			},
			{
				index: 4,
				type: 'freeSpinTrigger',
				totFS: 10,
			},
			{
				index: 5,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 6,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 7,
				type: 'updateFreeSpin',
				amount: 1,
			},
			{
				index: 8,
				type: 'reveal',
				board: [
					[
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
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
							name: 'W',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'L1',
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L4',
						},
					],
				],
				paddingPositions: [112, 5, 14, 83, 16, 5],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 9,
				type: 'clusterWin',
				winInfo: [
					{
						win: 150,
						mult: 1,
						result: 150.0,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 10,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 11,
				type: 'setTumbleWin',
				amount: 150,
			},
			{
				index: 12,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 13,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
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
							name: 'W',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'L1',
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L4',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
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
							name: 'H5',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'H2',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
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
							name: 'L1',
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
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 14,
				type: 'setTumbleWin',
				amount: 150,
			},
			{
				index: 15,
				type: 'cumulativeTumble',
				amount: 150,
			},
			{
				index: 16,
				type: 'setTotalWin',
				amount: 150,
			},
			{
				index: 17,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 18,
				type: 'updateFreeSpin',
				amount: 2,
			},
			{
				index: 19,
				type: 'reveal',
				board: [
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
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
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
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
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'W',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
						},
					],
				],
				paddingPositions: [40, 101, 13, 8, 14, 45],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 20,
				type: 'clusterWin',
				winInfo: [
					{
						win: 70,
						mult: 1,
						result: 70.0,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 21,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 22,
				type: 'setTumbleWin',
				amount: 70,
			},
			{
				index: 23,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 24,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[],
					[
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
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
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
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
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'W',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
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
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H3',
						},
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
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
							name: 'L4',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 25,
				type: 'setTumbleWin',
				amount: 70,
			},
			{
				index: 26,
				type: 'multiplierSplashScreen',
				multiplier: 5,
				actingOn: 70.0,
				result: 350.0,
				multiplierInfo: [
					{
						reel: 1,
						row: 2,
						symbol: {
							name: 'M',
							subtype: '5',
						},
						currentTotalMult: 5,
					},
				],
			},
			{
				index: 27,
				type: 'cumulativeTumble',
				amount: 350,
			},
			{
				index: 28,
				type: 'setTotalWin',
				amount: 500,
			},
			{
				index: 29,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 30,
				type: 'updateFreeSpin',
				amount: 3,
			},
			{
				index: 31,
				type: 'reveal',
				board: [
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H2',
						},
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				paddingPositions: [13, 74, 60, 120, 49, 44],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 32,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 2,
						row: 4,
					},
				],
			},
			{
				index: 33,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
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
				],
				reason: 'symbolWin',
			},
			{
				index: 34,
				type: 'setTumbleWin',
				amount: 10,
			},
			{
				index: 35,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 36,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[],
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
					],
					[],
				],
				oldBoard: [
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H2',
						},
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
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
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
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
							name: 'L4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
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
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
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
							name: 'H2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H2',
						},
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 37,
				type: 'clusterWin',
				winInfo: [
					{
						win: 30,
						mult: 2,
						result: 60.0,
						reel: 2,
						row: 4,
					},
				],
			},
			{
				index: 38,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 39,
				type: 'setTumbleWin',
				amount: 70,
			},
			{
				index: 40,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 41,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[],
					[
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
					[],
					[
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
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
							name: 'L4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
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
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
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
							name: 'H2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H2',
						},
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
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
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'H2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 42,
				type: 'setTumbleWin',
				amount: 70,
			},
			{
				index: 43,
				type: 'cumulativeTumble',
				amount: 70,
			},
			{
				index: 44,
				type: 'setTotalWin',
				amount: 570,
			},
			{
				index: 45,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 46,
				type: 'updateFreeSpin',
				amount: 4,
			},
			{
				index: 47,
				type: 'reveal',
				board: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
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
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
					],
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
							name: 'L2',
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
							name: 'L4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '5',
						},
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
					],
				],
				paddingPositions: [86, 81, 77, 5, 87, 32],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 48,
				type: 'clusterWin',
				winInfo: [
					{
						win: 100,
						mult: 1,
						result: 100,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 49,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 50,
				type: 'setTumbleWin',
				amount: 100,
			},
			{
				index: 51,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 52,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
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
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
					],
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
							name: 'L2',
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
							name: 'L4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '5',
						},
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
					],
				],
				explodingSymbols: [
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
						{
							name: 'L2',
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
							name: 'L4',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 53,
				type: 'clusterWin',
				winInfo: [
					{
						win: 500,
						mult: 2,
						result: 1000,
						reel: 4,
						row: 3,
					},
				],
			},
			{
				index: 54,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 55,
				type: 'setTumbleWin',
				amount: 1100,
			},
			{
				index: 56,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 57,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
							name: 'H2',
						},
					],
					[
						{
							name: 'H2',
						},
					],
					[],
					[
						{
							name: 'H5',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
						{
							name: 'L2',
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
							name: 'L4',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 2,
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
					],
					[
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 58,
				type: 'setTumbleWin',
				amount: 1100,
			},
			{
				index: 59,
				type: 'multiplierSplashScreen',
				multiplier: 5,
				actingOn: 1100,
				result: 5500,
				multiplierInfo: [
					{
						reel: 5,
						row: 4,
						symbol: {
							name: 'M',
							subtype: '5',
						},
						currentTotalMult: 5,
					},
				],
			},
			{
				index: 60,
				type: 'bigWinAnimation',
				winLevel: 'lvl_3',
				win: 5500,
			},
			{
				index: 61,
				type: 'cumulativeTumble',
				amount: 5500,
			},
			{
				index: 62,
				type: 'setTotalWin',
				amount: 6070,
			},
			{
				index: 63,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 64,
				type: 'updateFreeSpin',
				amount: 5,
			},
			{
				index: 65,
				type: 'reveal',
				board: [
					[
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
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L1',
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
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'M',
							subtype: '4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
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
					],
				],
				paddingPositions: [92, 67, 44, 100, 57, 105],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 66,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 67,
				type: 'setTotalWin',
				amount: 6070,
			},
			{
				index: 68,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 69,
				type: 'updateFreeSpin',
				amount: 6,
			},
			{
				index: 70,
				type: 'reveal',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'L2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
					],
					[
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
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'M',
							subtype: '4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
					],
				],
				paddingPositions: [65, 68, 64, 34, 50, 55],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 71,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 72,
				type: 'setTotalWin',
				amount: 6070,
			},
			{
				index: 73,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 74,
				type: 'updateFreeSpin',
				amount: 7,
			},
			{
				index: 75,
				type: 'reveal',
				board: [
					[
						{
							name: 'H4',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '2',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
					],
				],
				paddingPositions: [48, 12, 59, 73, 93, 70],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 76,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 77,
				type: 'setTotalWin',
				amount: 6070,
			},
			{
				index: 78,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 79,
				type: 'updateFreeSpin',
				amount: 8,
			},
			{
				index: 80,
				type: 'reveal',
				board: [
					[
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
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
							name: 'L3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L1',
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
							name: 'H5',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
				],
				paddingPositions: [109, 43, 65, 74, 79, 119],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 81,
				type: 'clusterWin',
				winInfo: [
					{
						win: 30,
						mult: 1,
						result: 30.0,
						reel: 4,
						row: 2,
					},
				],
			},
			{
				index: 82,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 83,
				type: 'setTumbleWin',
				amount: 30,
			},
			{
				index: 84,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 85,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H4',
						},
					],
					[],
					[],
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
							name: 'L2',
						},
						{
							name: 'H5',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
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
							name: 'L3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L1',
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
							name: 'H5',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L1',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 86,
				type: 'setTumbleWin',
				amount: 30,
			},
			{
				index: 87,
				type: 'cumulativeTumble',
				amount: 30,
			},
			{
				index: 88,
				type: 'setTotalWin',
				amount: 6100,
			},
			{
				index: 89,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 90,
				type: 'updateFreeSpin',
				amount: 9,
			},
			{
				index: 91,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H5',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '4',
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
							name: 'H2',
						},
					],
					[
						{
							name: 'H5',
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
							name: 'L3',
						},
						{
							name: 'L2',
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
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H5',
						},
					],
				],
				paddingPositions: [55, 40, 38, 12, 33, 46],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 92,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 4,
						row: 3,
					},
				],
			},
			{
				index: 93,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 1,
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
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 94,
				type: 'setTumbleWin',
				amount: 10,
			},
			{
				index: 95,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 96,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H2',
						},
					],
					[],
					[],
					[
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H5',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '4',
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
							name: 'H2',
						},
					],
					[
						{
							name: 'H5',
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
							name: 'L3',
						},
						{
							name: 'L2',
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
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 1,
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
						row: 2,
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
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
							name: 'L2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '4',
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
							name: 'H2',
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
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
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
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 97,
				type: 'setTumbleWin',
				amount: 10,
			},
			{
				index: 98,
				type: 'multiplierSplashScreen',
				multiplier: 4,
				actingOn: 10.0,
				result: 40.0,
				multiplierInfo: [
					{
						reel: 3,
						row: 1,
						symbol: {
							name: 'M',
							subtype: '4',
						},
						currentTotalMult: 4,
					},
				],
			},
			{
				index: 99,
				type: 'cumulativeTumble',
				amount: 40,
			},
			{
				index: 100,
				type: 'setTotalWin',
				amount: 6140,
			},
			{
				index: 101,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 102,
				type: 'updateFreeSpin',
				amount: 10,
			},
			{
				index: 103,
				type: 'reveal',
				board: [
					[
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
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
					],
					[
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [44, 102, 104, 109, 11, 2],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 104,
				type: 'clusterWin',
				winInfo: [
					{
						win: 30,
						mult: 1,
						result: 30.0,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 105,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 5,
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
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 106,
				type: 'setTumbleWin',
				amount: 30,
			},
			{
				index: 107,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 108,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H3',
						},
					],
					[],
					[
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
					],
				],
				oldBoard: [
					[
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
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
					],
					[
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 5,
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
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 109,
				type: 'clusterWin',
				winInfo: [
					{
						win: 100,
						mult: 2,
						result: 200,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 110,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 111,
				type: 'setTumbleWin',
				amount: 230,
			},
			{
				index: 112,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 113,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[],
					[
						{
							name: 'H4',
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
							name: 'H2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L4',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
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
							name: 'H2',
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
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 114,
				type: 'clusterWin',
				winInfo: [
					{
						win: 70,
						mult: 3,
						result: 210.0,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 115,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 116,
				type: 'setTumbleWin',
				amount: 440,
			},
			{
				index: 117,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 118,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[],
					[
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
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
							name: 'H2',
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
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
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
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 119,
				type: 'setTumbleWin',
				amount: 440,
			},
			{
				index: 120,
				type: 'cumulativeTumble',
				amount: 440,
			},
			{
				index: 121,
				type: 'setTotalWin',
				amount: 6580,
			},
			{
				index: 122,
				type: 'freeSpinEnd',
				amount: 6580.0,
			},
			{
				index: 123,
				type: 'finalWin',
				amount: 6580,
			},
		],
		criteria: 'basegame',
		baseGameWins: 65.8,
		freeGameWins: 0.0,
	},
	{
		id: 2,
		payoutMultiplier: 22.0,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'S',
						},
						{
							name: 'L1',
						},
					],
					[
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
					[
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
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
					],
				],
				paddingPositions: [107, 72, 24, 27, 110, 10],
				level: 'lvl_0',
				gameType: 'baseGame',
				anticipation: [0, 0, 1, 2, 3, 4],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 3,
				type: 'animateSymbols',
				reason: 'trigger_freeSpin',
				payout: 0,
				kind: 3,
				symbol: 'scatter',
				symbolPositions: [
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 3,
						row: 4,
					},
				],
			},
			{
				index: 4,
				type: 'freeSpinTrigger',
				totFS: 10,
			},
			{
				index: 5,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 6,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 7,
				type: 'updateFreeSpin',
				amount: 1,
			},
			{
				index: 8,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
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
							name: 'L4',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
						},
					],
					[
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
							name: 'W',
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
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
				],
				paddingPositions: [114, 76, 16, 80, 15, 26],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 9,
				type: 'clusterWin',
				winInfo: [
					{
						win: 400,
						mult: 1,
						result: 400,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 10,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 11,
				type: 'setTumbleWin',
				amount: 400,
			},
			{
				index: 12,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 13,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
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
							name: 'L4',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
						},
					],
					[
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
							name: 'W',
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
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H5',
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
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
					],
				],
				anticipation: false,
			},
			{
				index: 14,
				type: 'clusterWin',
				winInfo: [
					{
						win: 50,
						mult: 2,
						result: 100.0,
						reel: 3,
						row: 2,
					},
				],
			},
			{
				index: 15,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 16,
				type: 'setTumbleWin',
				amount: 500,
			},
			{
				index: 17,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 18,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L3',
						},
					],
					[],
					[
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
					],
					[],
					[
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H5',
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
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H5',
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
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 19,
				type: 'clusterWin',
				winInfo: [
					{
						win: 30,
						mult: 3,
						result: 90.0,
						reel: 2,
						row: 4,
					},
				],
			},
			{
				index: 20,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 21,
				type: 'setTumbleWin',
				amount: 590,
			},
			{
				index: 22,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 23,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
					],
					[],
					[
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H5',
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
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
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
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
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
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H3',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'M',
							subtype: '5',
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
						{
							name: 'H1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 24,
				type: 'setTumbleWin',
				amount: 590,
			},
			{
				index: 25,
				type: 'multiplierSplashScreen',
				multiplier: 12,
				actingOn: 590.0,
				result: 7080.0,
				multiplierInfo: [
					{
						reel: 1,
						row: 3,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 7,
					},
					{
						reel: 5,
						row: 2,
						symbol: {
							name: 'M',
							subtype: '5',
						},
						currentTotalMult: 12,
					},
				],
			},
			{
				index: 26,
				type: 'bigWinAnimation',
				winLevel: 'lvl_3',
				win: 7080,
			},
			{
				index: 27,
				type: 'cumulativeTumble',
				amount: 7080,
			},
			{
				index: 28,
				type: 'setTotalWin',
				amount: 7080,
			},
			{
				index: 29,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 30,
				type: 'updateFreeSpin',
				amount: 2,
			},
			{
				index: 31,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
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
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'W',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
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
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				paddingPositions: [18, 8, 10, 19, 5, 2],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 32,
				type: 'clusterWin',
				winInfo: [
					{
						win: 1000,
						mult: 1,
						result: 1000,
						reel: 1,
						row: 2,
					},
				],
			},
			{
				index: 33,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 5,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 34,
				type: 'setTumbleWin',
				amount: 1000,
			},
			{
				index: 35,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 36,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'L2',
						},
						{
							name: 'H5',
						},
					],
					[],
					[],
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
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
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'W',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
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
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 5,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'H5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
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
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
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
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 37,
				type: 'clusterWin',
				winInfo: [
					{
						win: 300,
						mult: 2,
						result: 600,
						reel: 1,
						row: 4,
					},
				],
			},
			{
				index: 38,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
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
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 39,
				type: 'setTumbleWin',
				amount: 1600,
			},
			{
				index: 40,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 41,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H3',
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
							name: 'M',
							subtype: '10',
						},
					],
					[],
					[],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'H5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
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
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
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
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
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
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
				],
				level: 'lvl_0',
				board: [
					[
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
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
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
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
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
							name: 'H4',
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
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 42,
				type: 'clusterWin',
				winInfo: [
					{
						win: 70,
						mult: 3,
						result: 210.0,
						reel: 3,
						row: 3,
					},
				],
			},
			{
				index: 43,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
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
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 44,
				type: 'setTumbleWin',
				amount: 1810,
			},
			{
				index: 45,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 46,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
					],
					[],
					[
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
					],
					[],
					[
						{
							name: 'L1',
						},
						{
							name: 'W',
						},
					],
				],
				oldBoard: [
					[
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
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
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
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
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
							name: 'H4',
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
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
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
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'H1',
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
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
							name: 'H4',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 47,
				type: 'clusterWin',
				winInfo: [
					{
						win: 30,
						mult: 4,
						result: 120.0,
						reel: 2,
						row: 4,
					},
				],
			},
			{
				index: 48,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
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
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 49,
				type: 'setTumbleWin',
				amount: 1930,
			},
			{
				index: 50,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 51,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
					],
					[],
					[],
					[
						{
							name: 'L1',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'H1',
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
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
							name: 'H4',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
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
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'H1',
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
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
							name: 'H4',
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
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 52,
				type: 'clusterWin',
				winInfo: [
					{
						win: 100,
						mult: 5,
						result: 500,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 53,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 54,
				type: 'setTumbleWin',
				amount: 2430,
			},
			{
				index: 55,
				type: 'updateGlobalMult',
				globalMult: 6,
			},
			{
				index: 56,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L3',
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
					],
					[],
					[],
					[],
				],
				oldBoard: [
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'H1',
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
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
							name: 'H4',
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
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
				],
				level: 'lvl_0',
				board: [
					[
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'H1',
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
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
							name: 'H4',
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
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 57,
				type: 'setTumbleWin',
				amount: 2430,
			},
			{
				index: 58,
				type: 'multiplierSplashScreen',
				multiplier: 60,
				actingOn: 2430.0,
				result: 145800.0,
				multiplierInfo: [
					{
						reel: 0,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 10,
					},
					{
						reel: 1,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 20,
					},
					{
						reel: 2,
						row: 1,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 30,
					},
					{
						reel: 2,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 40,
					},
					{
						reel: 3,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 50,
					},
					{
						reel: 5,
						row: 4,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 60,
					},
				],
			},
			{
				index: 59,
				type: 'bigWinAnimation',
				winLevel: 'lvl_4',
				win: 145800,
			},
			{
				index: 60,
				type: 'cumulativeTumble',
				amount: 145800,
			},
			{
				index: 61,
				type: 'setTotalWin',
				amount: 152880,
			},
			{
				index: 62,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 63,
				type: 'updateFreeSpin',
				amount: 3,
			},
			{
				index: 64,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
						},
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
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
							name: 'H5',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
						{
							name: 'L2',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [4, 125, 65, 37, 98, 1],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 1],
			},
			{
				index: 65,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 66,
				type: 'setTotalWin',
				amount: 152880,
			},
			{
				index: 67,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 68,
				type: 'updateFreeSpin',
				amount: 4,
			},
			{
				index: 69,
				type: 'reveal',
				board: [
					[
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
							name: 'W',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
							name: 'L2',
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
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H5',
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
							name: 'L3',
						},
					],
				],
				paddingPositions: [26, 4, 60, 43, 38, 23],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 70,
				type: 'clusterWin',
				winInfo: [
					{
						win: 70,
						mult: 1,
						result: 70.0,
						reel: 2,
						row: 3,
					},
					{
						win: 30,
						mult: 1,
						result: 30.0,
						reel: 3,
						row: 2,
					},
				],
			},
			{
				index: 71,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 72,
				type: 'setTumbleWin',
				amount: 100,
			},
			{
				index: 73,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 74,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'W',
						},
					],
				],
				oldBoard: [
					[
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
							name: 'W',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
							name: 'L2',
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
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H5',
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
							name: 'L3',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H5',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
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
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H5',
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
							name: 'L3',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 75,
				type: 'setTumbleWin',
				amount: 100,
			},
			{
				index: 76,
				type: 'multiplierSplashScreen',
				multiplier: 17,
				actingOn: 100.0,
				result: 1700.0,
				multiplierInfo: [
					{
						reel: 1,
						row: 1,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 7,
					},
					{
						reel: 3,
						row: 4,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 17,
					},
				],
			},
			{
				index: 77,
				type: 'bigWinAnimation',
				winLevel: 'lvl_2',
				win: 1700,
			},
			{
				index: 78,
				type: 'cumulativeTumble',
				amount: 1700,
			},
			{
				index: 79,
				type: 'setTotalWin',
				amount: 154580,
			},
			{
				index: 80,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 81,
				type: 'updateFreeSpin',
				amount: 5,
			},
			{
				index: 82,
				type: 'reveal',
				board: [
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'L4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L2',
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
							name: 'L4',
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
					],
				],
				paddingPositions: [89, 69, 58, 1, 106, 49],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 83,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 3,
						row: 4,
					},
				],
			},
			{
				index: 84,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 2,
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
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 85,
				type: 'setTumbleWin',
				amount: 10,
			},
			{
				index: 86,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 87,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
					],
					[],
					[
						{
							name: 'L4',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'L4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L2',
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
							name: 'L4',
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 2,
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
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 5,
						row: 2,
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
							name: 'L3',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L2',
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
							name: 'L4',
						},
					],
					[
						{
							name: 'L4',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 88,
				type: 'setTumbleWin',
				amount: 10,
			},
			{
				index: 89,
				type: 'multiplierSplashScreen',
				multiplier: 17,
				actingOn: 10.0,
				result: 170.0,
				multiplierInfo: [
					{
						reel: 1,
						row: 2,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 10,
					},
					{
						reel: 1,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 17,
					},
				],
			},
			{
				index: 90,
				type: 'cumulativeTumble',
				amount: 170,
			},
			{
				index: 91,
				type: 'setTotalWin',
				amount: 154750,
			},
			{
				index: 92,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 93,
				type: 'updateFreeSpin',
				amount: 6,
			},
			{
				index: 94,
				type: 'reveal',
				board: [
					[
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
					[
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
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
							name: 'H3',
						},
						{
							name: 'H3',
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
							name: 'H2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [13, 41, 45, 2, 62, 50],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 95,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 96,
				type: 'setTotalWin',
				amount: 154750,
			},
			{
				index: 97,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 98,
				type: 'updateFreeSpin',
				amount: 7,
			},
			{
				index: 99,
				type: 'reveal',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
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
							name: 'W',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
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
					],
				],
				paddingPositions: [54, 41, 42, 62, 70, 61],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 100,
				type: 'clusterWin',
				winInfo: [
					{
						win: 30,
						mult: 1,
						result: 30.0,
						reel: 3,
						row: 3,
					},
				],
			},
			{
				index: 101,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 102,
				type: 'setTumbleWin',
				amount: 30,
			},
			{
				index: 103,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 104,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[],
					[
						{
							name: 'H3',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
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
							name: 'W',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
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
					],
				],
				explodingSymbols: [
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
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
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L2',
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
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 105,
				type: 'setTumbleWin',
				amount: 30,
			},
			{
				index: 106,
				type: 'cumulativeTumble',
				amount: 30,
			},
			{
				index: 107,
				type: 'setTotalWin',
				amount: 154780,
			},
			{
				index: 108,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 109,
				type: 'updateFreeSpin',
				amount: 8,
			},
			{
				index: 110,
				type: 'reveal',
				board: [
					[
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
					],
					[
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'W',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L1',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [29, 52, 56, 48, 29, 86],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 111,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 2,
						row: 3,
					},
					{
						win: 30,
						mult: 1,
						result: 30.0,
						reel: 3,
						row: 2,
					},
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 112,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 3,
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
						row: 1,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 113,
				type: 'setTumbleWin',
				amount: 50,
			},
			{
				index: 114,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 115,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
					],
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
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
					],
				],
				oldBoard: [
					[
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
					],
					[
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'W',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L1',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 3,
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
						row: 1,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
						{
							name: 'H3',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'W',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'L1',
						},
					],
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
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 116,
				type: 'setTumbleWin',
				amount: 50,
			},
			{
				index: 117,
				type: 'cumulativeTumble',
				amount: 50,
			},
			{
				index: 118,
				type: 'setTotalWin',
				amount: 154830,
			},
			{
				index: 119,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 120,
				type: 'updateFreeSpin',
				amount: 9,
			},
			{
				index: 121,
				type: 'reveal',
				board: [
					[
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'L3',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
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
							name: 'H5',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [46, 123, 84, 7, 33, 104],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 122,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 123,
				type: 'setTotalWin',
				amount: 154830,
			},
			{
				index: 124,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 125,
				type: 'updateFreeSpin',
				amount: 10,
			},
			{
				index: 126,
				type: 'reveal',
				board: [
					[
						{
							name: 'M',
							subtype: '7',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
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
						{
							name: 'M',
							subtype: '10',
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
							name: 'H4',
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
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [10, 21, 19, 4, 20, 9],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 1, 2, 3],
			},
			{
				index: 127,
				type: 'clusterWin',
				winInfo: [
					{
						win: 200,
						mult: 1,
						result: 200,
						reel: 0,
						row: 1,
					},
					{
						win: 200,
						mult: 1,
						result: 200,
						reel: 0,
						row: 2,
					},
					{
						win: 200,
						mult: 1,
						result: 200,
						reel: 0,
						row: 3,
					},
					{
						win: 200,
						mult: 1,
						result: 200,
						reel: 0,
						row: 4,
					},
					{
						win: 200,
						mult: 1,
						result: 200,
						reel: 0,
						row: 5,
					},
					{
						win: 200,
						mult: 1,
						result: 200,
						reel: 3,
						row: 2,
					},
					{
						win: 150,
						mult: 1,
						result: 150.0,
						reel: 2,
						row: 3,
					},
					{
						win: 400,
						mult: 1,
						result: 400,
						reel: 3,
						row: 4,
					},
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 2,
						row: 5,
					},
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 3,
						row: 1,
					},
				],
			},
			{
				index: 128,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 129,
				type: 'setTumbleWin',
				amount: 770,
			},
			{
				index: 130,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 131,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H4',
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
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'M',
							subtype: '7',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
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
						{
							name: 'M',
							subtype: '10',
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
							name: 'H4',
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
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '7',
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
						reel: 0,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '7',
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
							name: 'S',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H4',
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
							name: 'M',
							subtype: '10',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'S',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				anticipation: true,
			},
			{
				index: 132,
				type: 'clusterWin',
				winInfo: [
					{
						win: 100,
						mult: 2,
						result: 200,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 133,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 3,
						row: 1,
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
						reel: 5,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 134,
				type: 'setTumbleWin',
				amount: 970,
			},
			{
				index: 135,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 136,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L4',
						},
						{
							name: 'L1',
						},
					],
					[],
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
					],
					[],
					[
						{
							name: 'L3',
						},
					],
				],
				oldBoard: [
					[
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '7',
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
							name: 'S',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H4',
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
							name: 'M',
							subtype: '10',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'S',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '7',
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
						reel: 0,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 3,
						row: 1,
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
						reel: 5,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
							name: 'L3',
						},
						{
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L1',
						},
						{
							name: 'S',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'M',
							subtype: '7',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'S',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H4',
						},
					],
				],
				anticipation: true,
			},
			{
				index: 137,
				type: 'setTumbleWin',
				amount: 970,
			},
			{
				index: 138,
				type: 'multiplierSplashScreen',
				multiplier: 21,
				actingOn: 970.0,
				result: 20370.0,
				multiplierInfo: [
					{
						reel: 2,
						row: 3,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 7,
					},
					{
						reel: 5,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 14,
					},
				],
			},
			{
				index: 139,
				type: 'bigWinAnimation',
				winLevel: 'lvl_4',
				win: 20370,
			},
			{
				index: 140,
				type: 'cumulativeTumble',
				amount: 20370,
			},
			{
				index: 141,
				type: 'setTotalWin',
				amount: 175200,
			},
			{
				index: 142,
				type: 'animateSymbols',
				reason: 'trigger_freeSpin',
				payout: 0,
				kind: 2,
				symbol: 'scatter',
				symbolPositions: [
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 4,
						row: 5,
					},
				],
			},
			{
				index: 143,
				type: 'freeSpinTrigger',
				totFS: 13,
				extraSpins: 3,
			},
			{
				index: 144,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 145,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 146,
				type: 'updateFreeSpin',
				amount: 11,
			},
			{
				index: 147,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L4',
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
						{
							name: 'L2',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
					],
				],
				paddingPositions: [16, 65, 35, 88, 49, 82],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 148,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 2,
						row: 4,
					},
				],
			},
			{
				index: 149,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
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
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 150,
				type: 'setTumbleWin',
				amount: 10,
			},
			{
				index: 151,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 152,
				type: 'tumbleBoard',
				newSymbols: [
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
					],
					[],
					[
						{
							name: 'L4',
						},
					],
					[],
					[
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L4',
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
						{
							name: 'L2',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'L3',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
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
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
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
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 153,
				type: 'clusterWin',
				winInfo: [
					{
						win: 100,
						mult: 2,
						result: 200,
						reel: 2,
						row: 2,
					},
				],
			},
			{
				index: 154,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 155,
				type: 'setTumbleWin',
				amount: 210,
			},
			{
				index: 156,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 157,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
					],
				],
				oldBoard: [
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
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L3',
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
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L3',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 158,
				type: 'setTumbleWin',
				amount: 210,
			},
			{
				index: 159,
				type: 'cumulativeTumble',
				amount: 210,
			},
			{
				index: 160,
				type: 'setTotalWin',
				amount: 175410,
			},
			{
				index: 161,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 162,
				type: 'updateFreeSpin',
				amount: 12,
			},
			{
				index: 163,
				type: 'reveal',
				board: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
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
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'W',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
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
							name: 'L4',
						},
					],
					[
						{
							name: 'L1',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				paddingPositions: [15, 30, 37, 76, 44, 47],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 164,
				type: 'clusterWin',
				winInfo: [
					{
						win: 30,
						mult: 1,
						result: 30.0,
						reel: 2,
						row: 3,
					},
					{
						win: 300,
						mult: 1,
						result: 300,
						reel: 2,
						row: 4,
					},
				],
			},
			{
				index: 165,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
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
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 166,
				type: 'setTumbleWin',
				amount: 330,
			},
			{
				index: 167,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 168,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
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
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
					],
					[],
					[
						{
							name: 'H1',
						},
						{
							name: 'L4',
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
				],
				oldBoard: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
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
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'W',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
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
							name: 'L4',
						},
					],
					[
						{
							name: 'L1',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
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
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L3',
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
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
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
							name: 'L2',
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L1',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
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
							name: 'L4',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 169,
				type: 'clusterWin',
				winInfo: [
					{
						win: 100,
						mult: 2,
						result: 200,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 170,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 171,
				type: 'setTumbleWin',
				amount: 530,
			},
			{
				index: 172,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 173,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H5',
						},
					],
					[],
					[
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
					],
					[],
				],
				oldBoard: [
					[
						{
							name: 'L3',
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
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
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
							name: 'L2',
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L1',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
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
							name: 'L4',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
						{
							name: 'L4',
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
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L1',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L2',
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
							name: 'L4',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 174,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 3,
						result: 30.0,
						reel: 3,
						row: 3,
					},
				],
			},
			{
				index: 175,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 176,
				type: 'setTumbleWin',
				amount: 560,
			},
			{
				index: 177,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 178,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H1',
						},
					],
					[],
					[
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
					],
					[],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
						{
							name: 'L4',
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
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L1',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L2',
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
							name: 'L4',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				level: 'lvl_0',
				board: [
					[
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
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
					],
					[
						{
							name: 'L2',
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
							name: 'L4',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 179,
				type: 'setTumbleWin',
				amount: 560,
			},
			{
				index: 180,
				type: 'multiplierSplashScreen',
				multiplier: 7,
				actingOn: 560.0,
				result: 3920.0,
				multiplierInfo: [
					{
						reel: 1,
						row: 3,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 7,
					},
				],
			},
			{
				index: 181,
				type: 'bigWinAnimation',
				winLevel: 'lvl_2',
				win: 3920,
			},
			{
				index: 182,
				type: 'cumulativeTumble',
				amount: 3920,
			},
			{
				index: 183,
				type: 'setTotalWin',
				amount: 179330,
			},
			{
				index: 184,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 185,
				type: 'updateFreeSpin',
				amount: 13,
			},
			{
				index: 186,
				type: 'reveal',
				board: [
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
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '7',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'H4',
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
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [23, 19, 22, 21, 20, 20],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 1, 2, 3],
			},
			{
				index: 187,
				type: 'clusterWin',
				winInfo: [
					{
						win: 50,
						mult: 1,
						result: 50.0,
						reel: 2,
						row: 3,
					},
					{
						win: 150,
						mult: 1,
						result: 150.0,
						reel: 3,
						row: 2,
					},
				],
			},
			{
				index: 188,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 189,
				type: 'setTumbleWin',
				amount: 200,
			},
			{
				index: 190,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 191,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
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
							name: 'W',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H2',
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
				],
				oldBoard: [
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
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '7',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'H4',
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
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
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
							name: 'H1',
						},
						{
							name: 'H2',
						},
					],
				],
				anticipation: true,
			},
			{
				index: 192,
				type: 'clusterWin',
				winInfo: [
					{
						win: 300,
						mult: 2,
						result: 600,
						reel: 1,
						row: 3,
					},
				],
			},
			{
				index: 193,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 194,
				type: 'setTumbleWin',
				amount: 800,
			},
			{
				index: 195,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 196,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'W',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
					[],
				],
				oldBoard: [
					[
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
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
							name: 'H1',
						},
						{
							name: 'H2',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'W',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H2',
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
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
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
							name: 'H1',
						},
						{
							name: 'H2',
						},
					],
				],
				anticipation: true,
			},
			{
				index: 197,
				type: 'setTumbleWin',
				amount: 800,
			},
			{
				index: 198,
				type: 'multiplierSplashScreen',
				multiplier: 17,
				actingOn: 800.0,
				result: 13600.0,
				multiplierInfo: [
					{
						reel: 1,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 10,
					},
					{
						reel: 3,
						row: 4,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 17,
					},
				],
			},
			{
				index: 199,
				type: 'bigWinAnimation',
				winLevel: 'lvl_3',
				win: 13600,
			},
			{
				index: 200,
				type: 'cumulativeTumble',
				amount: 13600,
			},
			{
				index: 201,
				type: 'setTotalWin',
				amount: 192930,
			},
			{
				index: 202,
				type: 'animateSymbols',
				reason: 'trigger_freeSpin',
				payout: 0,
				kind: 2,
				symbol: 'scatter',
				symbolPositions: [
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 4,
						row: 3,
					},
				],
			},
			{
				index: 203,
				type: 'freeSpinTrigger',
				totFS: 16,
				extraSpins: 3,
			},
			{
				index: 204,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 205,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 206,
				type: 'updateFreeSpin',
				amount: 14,
			},
			{
				index: 207,
				type: 'reveal',
				board: [
					[
						{
							name: 'L3',
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
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
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
							name: 'W',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
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
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H5',
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
							name: 'H1',
						},
					],
					[
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
							name: 'L4',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				paddingPositions: [10, 28, 15, 71, 41, 48],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 208,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 209,
				type: 'setTotalWin',
				amount: 192930,
			},
			{
				index: 210,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 211,
				type: 'updateFreeSpin',
				amount: 15,
			},
			{
				index: 212,
				type: 'reveal',
				board: [
					[
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
							name: 'L4',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
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
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H4',
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H5',
						},
					],
				],
				paddingPositions: [91, 39, 40, 77, 40, 49],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 213,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 214,
				type: 'setTotalWin',
				amount: 192930,
			},
			{
				index: 215,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 216,
				type: 'updateFreeSpin',
				amount: 16,
			},
			{
				index: 217,
				type: 'reveal',
				board: [
					[
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H1',
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
							name: 'L3',
						},
						{
							name: 'H5',
						},
					],
					[
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
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
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [6, 17, 18, 16, 22, 9],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 1, 2, 3],
			},
			{
				index: 218,
				type: 'clusterWin',
				winInfo: [
					{
						win: 100,
						mult: 1,
						result: 100,
						reel: 2,
						row: 2,
					},
				],
			},
			{
				index: 219,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 220,
				type: 'setTumbleWin',
				amount: 100,
			},
			{
				index: 221,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 222,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
					],
					[],
					[
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
					[],
					[
						{
							name: 'L4',
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
					],
				],
				oldBoard: [
					[
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H1',
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
							name: 'L3',
						},
						{
							name: 'H5',
						},
					],
					[
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
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
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '10',
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
						reel: 0,
						row: 2,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
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
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H1',
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
							name: 'L3',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
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
							name: 'W',
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
							name: 'H5',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
					],
				],
				anticipation: true,
			},
			{
				index: 223,
				type: 'setTumbleWin',
				amount: 100,
			},
			{
				index: 224,
				type: 'multiplierSplashScreen',
				multiplier: 27,
				actingOn: 100,
				result: 2700,
				multiplierInfo: [
					{
						reel: 0,
						row: 4,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 7,
					},
					{
						reel: 1,
						row: 3,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 17,
					},
					{
						reel: 5,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 27,
					},
				],
			},
			{
				index: 225,
				type: 'bigWinAnimation',
				winLevel: 'lvl_2',
				win: 2700,
			},
			{
				index: 226,
				type: 'cumulativeTumble',
				amount: 2700,
			},
			{
				index: 227,
				type: 'setTotalWin',
				amount: 195630,
			},
			{
				index: 228,
				type: 'animateSymbols',
				reason: 'trigger_freeSpin',
				payout: 0,
				kind: 2,
				symbol: 'scatter',
				symbolPositions: [
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 4,
						row: 3,
					},
				],
			},
			{
				index: 229,
				type: 'freeSpinTrigger',
				totFS: 19,
				extraSpins: 3,
			},
			{
				index: 230,
				type: 'setTumbleWin',
				amount: 0,
			},
			{
				index: 231,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 232,
				type: 'updateFreeSpin',
				amount: 17,
			},
			{
				index: 233,
				type: 'reveal',
				board: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
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
							name: 'W',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '5',
						},
					],
					[
						{
							name: 'M',
							subtype: '7',
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
							name: 'W',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
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
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
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
							name: 'W',
						},
					],
				],
				paddingPositions: [15, 23, 16, 14, 7, 16],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 234,
				type: 'clusterWin',
				winInfo: [
					{
						win: 400,
						mult: 1,
						result: 400,
						reel: 2,
						row: 4,
					},
					{
						win: 500,
						mult: 1,
						result: 500,
						reel: 3,
						row: 3,
					},
					{
						win: 100,
						mult: 1,
						result: 100,
						reel: 1,
						row: 5,
					},
					{
						win: 30,
						mult: 1,
						result: 30.0,
						reel: 2,
						row: 1,
					},
					{
						win: 100,
						mult: 1,
						result: 100,
						reel: 2,
						row: 2,
					},
				],
			},
			{
				index: 235,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 3,
						row: 2,
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
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
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
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 236,
				type: 'setTumbleWin',
				amount: 1130,
			},
			{
				index: 237,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 238,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H3',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L3',
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
							name: 'M',
							subtype: '10',
						},
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
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
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
							name: 'W',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '5',
						},
					],
					[
						{
							name: 'M',
							subtype: '7',
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
							name: 'W',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
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
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
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
							name: 'W',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 3,
						row: 2,
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
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
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
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
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
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'M',
							subtype: '7',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '7',
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
							name: 'M',
							subtype: '7',
						},
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 239,
				type: 'clusterWin',
				winInfo: [
					{
						win: 70,
						mult: 2,
						result: 140.0,
						reel: 3,
						row: 2,
					},
					{
						win: 80,
						mult: 2,
						result: 160.0,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 240,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
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
						reel: 2,
						row: 5,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 241,
				type: 'setTumbleWin',
				amount: 1430,
			},
			{
				index: 242,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 243,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
				],
				oldBoard: [
					[
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
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'M',
							subtype: '7',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '7',
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
							name: 'M',
							subtype: '7',
						},
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 2,
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
						reel: 2,
						row: 5,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
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
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 244,
				type: 'clusterWin',
				winInfo: [
					{
						win: 100,
						mult: 3,
						result: 300,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 245,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 246,
				type: 'setTumbleWin',
				amount: 1730,
			},
			{
				index: 247,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 248,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'W',
						},
					],
					[],
					[
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'W',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
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
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
				],
				level: 'lvl_1',
				board: [
					[
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
					],
					[
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
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
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 249,
				type: 'bigWinAnimation',
				winLevel: 'lvl_2',
				win: 1600,
			},
			{
				index: 250,
				type: 'clusterWin',
				winInfo: [
					{
						win: 400,
						mult: 4,
						result: 1600,
						reel: 2,
						row: 2,
					},
				],
			},
			{
				index: 251,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 4,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 252,
				type: 'setTumbleWin',
				amount: 3330,
			},
			{
				index: 253,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 254,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[],
					[
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'S',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[],
				],
				oldBoard: [
					[
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
					],
					[
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
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
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
					{
						reel: 4,
						row: 4,
					},
				],
				level: 'lvl_0',
				board: [
					[
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '5',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
					],
					[
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 255,
				type: 'clusterWin',
				winInfo: [
					{
						win: 100,
						mult: 5,
						result: 500,
						reel: 3,
						row: 3,
					},
				],
			},
			{
				index: 256,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 3,
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
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 257,
				type: 'setTumbleWin',
				amount: 3830,
			},
			{
				index: 258,
				type: 'updateGlobalMult',
				globalMult: 6,
			},
			{
				index: 259,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[],
					[],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
					],
				],
				oldBoard: [
					[
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
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '5',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
					],
					[
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 3,
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
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							subtype: '5',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '10',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'L1',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
					],
					[
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
							name: 'H2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L3',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'W',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 260,
				type: 'setTumbleWin',
				amount: 3830,
			},
			{
				index: 261,
				type: 'multiplierSplashScreen',
				multiplier: 76,
				actingOn: 3830.0,
				result: 291080.0,
				multiplierInfo: [
					{
						reel: 0,
						row: 1,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 10,
					},
					{
						reel: 0,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 20,
					},
					{
						reel: 1,
						row: 4,
						symbol: {
							name: 'M',
							subtype: '5',
						},
						currentTotalMult: 25,
					},
					{
						reel: 2,
						row: 2,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 32,
					},
					{
						reel: 2,
						row: 4,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 42,
					},
					{
						reel: 2,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 49,
					},
					{
						reel: 3,
						row: 4,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 56,
					},
					{
						reel: 3,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 66,
					},
					{
						reel: 5,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 76,
					},
				],
			},
			{
				index: 262,
				type: 'bigWinAnimation',
				winLevel: 'lvl_4',
				win: 291080,
			},
			{
				index: 263,
				type: 'cumulativeTumble',
				amount: 291080,
			},
			{
				index: 264,
				type: 'setTotalWin',
				amount: 486710,
			},
			{
				index: 265,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 266,
				type: 'updateFreeSpin',
				amount: 18,
			},
			{
				index: 267,
				type: 'reveal',
				board: [
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'W',
						},
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
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
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
					],
				],
				paddingPositions: [47, 54, 22, 59, 77, 25],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 268,
				type: 'clusterWin',
				winInfo: [
					{
						win: 200,
						mult: 1,
						result: 200,
						reel: 2,
						row: 3,
					},
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 2,
						row: 1,
					},
					{
						win: 30,
						mult: 1,
						result: 30.0,
						reel: 1,
						row: 2,
					},
					{
						win: 50,
						mult: 1,
						result: 50.0,
						reel: 2,
						row: 4,
					},
					{
						win: 300,
						mult: 1,
						result: 300,
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 269,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 1,
						row: 3,
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
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 4,
						row: 2,
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
						reel: 0,
						row: 5,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 270,
				type: 'setTumbleWin',
				amount: 590,
			},
			{
				index: 271,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 272,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
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
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
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
							name: 'H2',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'W',
						},
						{
							name: 'W',
						},
						{
							name: 'W',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
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
						{
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 1,
						row: 3,
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
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 4,
						row: 2,
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
						reel: 0,
						row: 5,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L1',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 273,
				type: 'clusterWin',
				winInfo: [
					{
						win: 30,
						mult: 2,
						result: 60.0,
						reel: 2,
						row: 3,
					},
				],
			},
			{
				index: 274,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 275,
				type: 'setTumbleWin',
				amount: 650,
			},
			{
				index: 276,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 277,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[],
					[
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H5',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L1',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
				level: 'lvl_0',
				board: [
					[
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L1',
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
							name: 'H5',
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
							name: 'L1',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L4',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 278,
				type: 'setTumbleWin',
				amount: 650,
			},
			{
				index: 279,
				type: 'cumulativeTumble',
				amount: 650,
			},
			{
				index: 280,
				type: 'setTotalWin',
				amount: 487360,
			},
			{
				index: 281,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 282,
				type: 'updateFreeSpin',
				amount: 19,
			},
			{
				index: 283,
				type: 'reveal',
				board: [
					[
						{
							name: 'L2',
						},
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
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
					],
					[
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [16, 13, 22, 10, 22, 12],
				level: 'lvl_0',
				gameType: 'freeGame',
				anticipation: [0, 0, 0, 1, 2, 3],
			},
			{
				index: 284,
				type: 'clusterWin',
				winInfo: [
					{
						win: 400,
						mult: 1,
						result: 400,
						reel: 2,
						row: 4,
					},
					{
						win: 200,
						mult: 1,
						result: 200,
						reel: 1,
						row: 2,
					},
				],
			},
			{
				index: 285,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 3,
						row: 1,
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
						reel: 5,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 286,
				type: 'setTumbleWin',
				amount: 600,
			},
			{
				index: 287,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 288,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H5',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
					],
					[
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
							name: 'H2',
						},
						{
							name: 'L3',
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
							name: 'H3',
						},
					],
				],
				oldBoard: [
					[
						{
							name: 'L2',
						},
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
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L4',
						},
						{
							name: 'W',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'W',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'W',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'W',
						},
					],
					[
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'W',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 3,
						row: 1,
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
						reel: 5,
						row: 5,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
					},
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 2,
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
							name: 'H5',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
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
							name: 'H1',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'W',
						},
						{
							name: 'L4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'W',
						},
						{
							name: 'H5',
						},
						{
							name: 'H5',
						},
						{
							name: 'S',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							subtype: '7',
						},
						{
							name: 'W',
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
							name: 'W',
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
							name: 'H3',
						},
						{
							name: 'W',
						},
						{
							name: 'M',
							subtype: '10',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
					],
				],
				anticipation: true,
			},
			{
				index: 289,
				type: 'setTumbleWin',
				amount: 600,
			},
			{
				index: 290,
				type: 'multiplierSplashScreen',
				multiplier: 27,
				actingOn: 600,
				result: 16200,
				multiplierInfo: [
					{
						reel: 3,
						row: 3,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 10,
					},
					{
						reel: 3,
						row: 5,
						symbol: {
							name: 'M',
							subtype: '7',
						},
						currentTotalMult: 17,
					},
					{
						reel: 5,
						row: 4,
						symbol: {
							name: 'M',
							subtype: '10',
						},
						currentTotalMult: 27,
					},
				],
			},
			{
				index: 291,
				type: 'bigWinAnimation',
				winLevel: 'lvl_4',
				win: 16200,
			},
			{
				index: 292,
				type: 'cumulativeTumble',
				amount: 16200,
			},
			{
				index: 293,
				type: 'setTotalWin',
				amount: 503560,
			},
			{
				index: 294,
				type: 'winCap',
				amount: 500000,
			},
			{
				index: 295,
				type: 'freeSpinEnd',
				amount: 500000,
			},
			{
				index: 296,
				type: 'finalWin',
				amount: 500000,
			},
		],
		criteria: 'basegame',
		baseGameWins: 22.0,
		freeGameWins: 0.0,
	},
];
