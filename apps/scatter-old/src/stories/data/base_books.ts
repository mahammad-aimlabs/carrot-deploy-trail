export default [
	{
		id: 1,
		payoutMultiplier: 0.7,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
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
							name: 'H5',
						},
						{
							name: 'H5',
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
							name: 'H5',
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
					],
				],
				paddingPositions: [93, 18, 49, 79, 98, 12],
				level: 'lvl_0',
				gameType: 'baseGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'clusterWin',
				winInfo: [
					{
						win: 70,
						mult: 1,
						result: 70.0,
						reel: 2,
						row: 4,
					},
				],
			},
			{
				index: 2,
				type: 'animateSymbols',
				symbolPositions: [
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
				index: 3,
				type: 'setTotalWin',
				amount: 70,
			},
			{
				index: 4,
				type: 'setTumbleWin',
				amount: 70,
			},
			{
				index: 5,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
					],
					[],
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
							name: 'H5',
						},
						{
							name: 'H5',
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
							name: 'H5',
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
					],
				],
				explodingSymbols: [
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
							name: 'W',
						},
					],
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
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 6,
				type: 'setTumbleWin',
				amount: 70,
			},
			{
				index: 7,
				type: 'setTotalWin',
				amount: 70,
			},
			{
				index: 8,
				type: 'cumulativeTumble',
				amount: 70,
			},
			{
				index: 9,
				type: 'finalWin',
				amount: 70,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.7,
		freeGameWins: 0.0,
	},
	{
		id: 2,
		payoutMultiplier: 19,
		events: [
			{
				index: 0,
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
					],
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
						{
							name: 'H5',
						},
						{
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [108, 97, 80, 124, 41, 52],
				level: 'lvl_0',
				gameType: 'baseGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
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
				index: 2,
				type: 'animateSymbols',
				symbolPositions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 4,
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
						row: 3,
					},
					{
						reel: 2,
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
				],
				reason: 'symbolWin',
			},
			{
				index: 3,
				type: 'setTotalWin',
				amount: 30,
			},
			{
				index: 4,
				type: 'setTumbleWin',
				amount: 30,
			},
			{
				index: 5,
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
							name: 'L3',
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
					],
					[],
					[],
					[
						{
							name: 'H5',
						},
						{
							name: 'L4',
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
					],
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
						{
							name: 'H5',
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
						row: 1,
					},
					{
						reel: 0,
						row: 4,
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
						row: 3,
					},
					{
						reel: 2,
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
						{
							name: 'H4',
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
					],
				],
				anticipation: false,
			},
			{
				index: 6,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 1,
						row: 3,
					},
				],
			},
			{
				index: 7,
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
						reel: 1,
						row: 5,
					},
					{
						reel: 3,
						row: 1,
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
				],
				reason: 'symbolWin',
			},
			{
				index: 8,
				type: 'setTumbleWin',
				amount: 40,
			},
			{
				index: 9,
				type: 'setTotalWin',
				amount: 40,
			},
			{
				index: 10,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
					[],
					[
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H5',
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
							name: 'L3',
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
					],
					[
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
							name: 'H5',
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
						reel: 1,
						row: 5,
					},
					{
						reel: 3,
						row: 1,
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
					],
					[
						{
							name: 'L2',
						},
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
					],
					[
						{
							name: 'H5',
						},
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
							name: 'H5',
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
				index: 11,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 1,
						row: 3,
					},
				],
			},
			{
				index: 12,
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
						row: 5,
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
				index: 13,
				type: 'setTumbleWin',
				amount: 50,
			},
			{
				index: 14,
				type: 'setTotalWin',
				amount: 50,
			},
			{
				index: 15,
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
							name: 'L2',
						},
					],
					[
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L2',
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
					],
					[],
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
					],
					[
						{
							name: 'L2',
						},
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
					],
					[
						{
							name: 'H5',
						},
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
							name: 'H5',
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
						row: 5,
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
							name: 'L4',
						},
						{
							name: 'L3',
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
					],
					[
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
							name: 'H5',
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
							name: 'L1',
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
							name: 'H5',
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
				index: 16,
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
				index: 17,
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
						reel: 4,
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
				index: 18,
				type: 'setTumbleWin',
				amount: 200,
			},
			{
				index: 19,
				type: 'setTotalWin',
				amount: 200,
			},
			{
				index: 20,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
					[],
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
					],
				],
				oldBoard: [
					[
						{
							name: 'L4',
						},
						{
							name: 'L3',
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
					],
					[
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
							name: 'H5',
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
							name: 'L1',
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
							name: 'H5',
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
							name: 'L4',
						},
						{
							name: 'L3',
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
				index: 21,
				type: 'clusterWin',
				winInfo: [
					{
						win: 30,
						mult: 1,
						result: 30.0,
						reel: 3,
						row: 4,
					},
				],
			},
			{
				index: 22,
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
						reel: 3,
						row: 4,
					},
					{
						reel: 3,
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
				index: 23,
				type: 'setTumbleWin',
				amount: 230,
			},
			{
				index: 24,
				type: 'setTotalWin',
				amount: 230,
			},
			{
				index: 25,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
					],
					[],
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
							name: 'H4',
						},
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
							name: 'L4',
						},
						{
							name: 'L3',
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
						reel: 3,
						row: 4,
					},
					{
						reel: 3,
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
							name: 'L4',
						},
						{
							name: 'L4',
						},
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'L4',
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
				anticipation: false,
			},
			{
				index: 26,
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
				index: 27,
				type: 'animateSymbols',
				symbolPositions: [
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
						reel: 4,
						row: 1,
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
				index: 28,
				type: 'setTumbleWin',
				amount: 260,
			},
			{
				index: 29,
				type: 'setTotalWin',
				amount: 260,
			},
			{
				index: 30,
				type: 'tumbleBoard',
				newSymbols: [
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
					],
					[],
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
						{
							name: 'H4',
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
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'L4',
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
				explodingSymbols: [
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
						reel: 4,
						row: 1,
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H4',
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
							name: 'H4',
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
							name: 'H2',
						},
						{
							name: 'L1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 31,
				type: 'clusterWin',
				winInfo: [
					{
						win: 100,
						mult: 1,
						result: 100,
						reel: 1,
						row: 4,
					},
				],
			},
			{
				index: 32,
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
				index: 33,
				type: 'setTumbleWin',
				amount: 360,
			},
			{
				index: 34,
				type: 'setTotalWin',
				amount: 360,
			},
			{
				index: 35,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L2',
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
					],
					[],
					[],
					[
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H4',
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
							name: 'H4',
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
							name: 'H2',
						},
						{
							name: 'L1',
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
							name: 'L2',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 36,
				type: 'clusterWin',
				winInfo: [
					{
						win: 300,
						mult: 1,
						result: 300,
						reel: 3,
						row: 3,
					},
				],
			},
			{
				index: 37,
				type: 'animateSymbols',
				symbolPositions: [
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
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
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
				index: 38,
				type: 'setTumbleWin',
				amount: 660,
			},
			{
				index: 39,
				type: 'setTotalWin',
				amount: 660,
			},
			{
				index: 40,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[],
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
							name: 'L4',
						},
						{
							name: 'L4',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L4',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
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
						row: 4,
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
						reel: 3,
						row: 3,
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
							name: 'L2',
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
							name: 'L4',
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
							name: 'L1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 41,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 3,
						row: 3,
					},
				],
			},
			{
				index: 42,
				type: 'animateSymbols',
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
				index: 43,
				type: 'setTumbleWin',
				amount: 670,
			},
			{
				index: 44,
				type: 'setTotalWin',
				amount: 670,
			},
			{
				index: 45,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
					],
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
					],
					[],
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
							name: 'L4',
						},
						{
							name: 'L4',
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L4',
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
							name: 'L1',
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
							name: 'H5',
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
						{
							name: 'H3',
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
							name: 'L4',
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
							name: 'L1',
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
				index: 46,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 3,
						row: 3,
					},
				],
			},
			{
				index: 47,
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
				index: 48,
				type: 'setTumbleWin',
				amount: 680,
			},
			{
				index: 49,
				type: 'setTotalWin',
				amount: 680,
			},
			{
				index: 50,
				type: 'tumbleBoard',
				newSymbols: [
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
					],
					[],
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
							name: 'H1',
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
							name: 'H5',
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
						{
							name: 'H3',
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
							name: 'L4',
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
							name: 'L1',
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
						{
							name: 'L1',
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
							name: 'H5',
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
							name: 'H3',
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
							name: 'L4',
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
							name: 'L1',
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
				index: 51,
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
				index: 52,
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
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
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
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 1,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 53,
				type: 'setTumbleWin',
				amount: 710,
			},
			{
				index: 54,
				type: 'setTotalWin',
				amount: 710,
			},
			{
				index: 55,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H3',
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
						{
							name: 'H5',
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
							name: 'L2',
						},
					],
					[
						{
							name: 'H1',
						},
					],
				],
				oldBoard: [
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
							name: 'H1',
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
							name: 'H5',
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
							name: 'H3',
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
							name: 'L4',
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
							name: 'L1',
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
						row: 2,
					},
					{
						reel: 0,
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
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 4,
						row: 3,
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
							name: 'H1',
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
							name: 'H5',
						},
						{
							name: 'H5',
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
							name: 'L3',
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
							name: 'H3',
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'H4',
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
							name: 'L1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 56,
				type: 'clusterWin',
				winInfo: [
					{
						win: 200,
						mult: 1,
						result: 200,
						reel: 3,
						row: 2,
					},
					{
						win: 70,
						mult: 1,
						result: 70.0,
						reel: 3,
						row: 3,
					},
				],
			},
			{
				index: 57,
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
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 58,
				type: 'setTumbleWin',
				amount: 980,
			},
			{
				index: 59,
				type: 'setTotalWin',
				amount: 980,
			},
			{
				index: 60,
				type: 'tumbleBoard',
				newSymbols: [
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
							name: 'H1',
						},
					],
					[
						{
							name: 'L4',
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
							name: 'L1',
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
							name: 'H5',
						},
						{
							name: 'H5',
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
							name: 'L3',
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
							name: 'H3',
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'H4',
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
							name: 'L1',
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
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
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
							name: 'L4',
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
							name: 'H2',
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
					],
				],
				anticipation: false,
			},
			{
				index: 61,
				type: 'clusterWin',
				winInfo: [
					{
						win: 400,
						mult: 1,
						result: 400,
						reel: 2,
						row: 4,
					},
				],
			},
			{
				index: 62,
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
						row: 4,
					},
					{
						reel: 2,
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
				index: 63,
				type: 'setTumbleWin',
				amount: 1380,
			},
			{
				index: 64,
				type: 'setTotalWin',
				amount: 1380,
			},
			{
				index: 65,
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
							name: 'L1',
						},
						{
							name: 'L4',
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
							name: 'H2',
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
						row: 4,
					},
					{
						reel: 2,
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
							name: 'L4',
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
							name: 'H2',
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
							name: 'H2',
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
						{
							name: 'H2',
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
					],
				],
				anticipation: false,
			},
			{
				index: 66,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 2,
						row: 2,
					},
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
				index: 67,
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
						row: 4,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 4,
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
						reel: 2,
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
						reel: 3,
						row: 1,
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
						row: 2,
					},
				],
				reason: 'symbolWin',
			},
			{
				index: 68,
				type: 'setTumbleWin',
				amount: 1790,
			},
			{
				index: 69,
				type: 'setTotalWin',
				amount: 1790,
			},
			{
				index: 70,
				type: 'tumbleBoard',
				newSymbols: [
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H1',
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
					],
					[
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
							name: 'L4',
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
							name: 'L2',
						},
					],
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
							name: 'H2',
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
						{
							name: 'H2',
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
						row: 4,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 4,
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
						reel: 2,
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
						reel: 3,
						row: 1,
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
						row: 2,
					},
				],
				level: 'lvl_0',
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
							name: 'H3',
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
							name: 'L3',
						},
						{
							name: 'L3',
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
						{
							name: 'L3',
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
							name: 'L3',
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
					],
				],
				anticipation: false,
			},
			{
				index: 71,
				type: 'clusterWin',
				winInfo: [
					{
						win: 10,
						mult: 1,
						result: 10.0,
						reel: 3,
						row: 4,
					},
					{
						win: 30,
						mult: 1,
						result: 30.0,
						reel: 1,
						row: 3,
					},
					{
						win: 70,
						mult: 1,
						result: 70.0,
						reel: 2,
						row: 2,
					},
				],
			},
			{
				index: 72,
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
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 1,
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
						reel: 4,
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
						reel: 5,
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
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
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
				index: 73,
				type: 'setTumbleWin',
				amount: 1900,
			},
			{
				index: 74,
				type: 'setTotalWin',
				amount: 1900,
			},
			{
				index: 75,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
							name: 'H1',
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
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
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
							name: 'L4',
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
							name: 'W',
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
							name: 'L2',
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
							name: 'L3',
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
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 1,
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
						reel: 4,
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
						reel: 5,
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
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L4',
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
						{
							name: 'L1',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'H4',
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
							name: 'L1',
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
				index: 76,
				type: 'setTumbleWin',
				amount: 1900,
			},
			{
				index: 77,
				type: 'setTotalWin',
				amount: 1900,
			},
			{
				index: 78,
				type: 'cumulativeTumble',
				amount: 1900,
			},
			{
				index: 79,
				type: 'finalWin',
				amount: 1900,
			},
		],
		criteria: 'basegame',
		baseGameWins: 19,
		freeGameWins: 0.0,
	},
	{
		id: 3,
		payoutMultiplier: 8.1,
		events: [
			{
				index: 0,
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
							name: 'H1',
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
				paddingPositions: [110, 65, 56, 99, 98, 32],
				level: 'lvl_0',
				gameType: 'baseGame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
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
						win: 100,
						mult: 1,
						result: 100,
						reel: 2,
						row: 2,
					},
					{
						win: 150,
						mult: 1,
						result: 150.0,
						reel: 2,
						row: 4,
					},
				],
			},
			{
				index: 2,
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
						row: 1,
					},
					{
						reel: 1,
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
						reel: 4,
						row: 4,
					},
					{
						reel: 5,
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
						row: 2,
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
				],
				reason: 'symbolWin',
			},
			{
				index: 3,
				type: 'setTotalWin',
				amount: 280,
			},
			{
				index: 4,
				type: 'setTumbleWin',
				amount: 280,
			},
			{
				index: 5,
				type: 'tumbleBoard',
				newSymbols: [
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
					],
					[
						{
							name: 'L3',
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
							name: 'H5',
						},
						{
							name: 'H5',
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
							name: 'H1',
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
						row: 1,
					},
					{
						reel: 1,
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
						reel: 4,
						row: 4,
					},
					{
						reel: 5,
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
						row: 2,
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
				],
				level: 'lvl_0',
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
							name: 'L3',
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
							name: 'L1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 6,
				type: 'clusterWin',
				winInfo: [
					{
						win: 400,
						mult: 1,
						result: 400,
						reel: 3,
						row: 3,
					},
				],
			},
			{
				index: 7,
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
						row: 4,
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
						reel: 3,
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
				index: 8,
				type: 'setTumbleWin',
				amount: 680,
			},
			{
				index: 9,
				type: 'setTotalWin',
				amount: 680,
			},
			{
				index: 10,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'L1',
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
						{
							name: 'L3',
						},
					],
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
						row: 4,
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
						reel: 3,
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
						{
							name: 'L3',
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
				],
				anticipation: false,
			},
			{
				index: 11,
				type: 'clusterWin',
				winInfo: [
					{
						win: 30,
						mult: 1,
						result: 30.0,
						reel: 4,
						row: 3,
					},
				],
			},
			{
				index: 12,
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
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
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
				index: 13,
				type: 'setTumbleWin',
				amount: 710,
			},
			{
				index: 14,
				type: 'setTotalWin',
				amount: 710,
			},
			{
				index: 15,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L4',
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
					],
					[],
					[
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
				],
				oldBoard: [
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
							name: 'L2',
						},
						{
							name: 'L2',
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
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
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
							name: 'L4',
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
							name: 'W',
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
							name: 'L1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 16,
				type: 'clusterWin',
				winInfo: [
					{
						win: 100,
						mult: 1,
						result: 100,
						reel: 3,
						row: 4,
					},
				],
			},
			{
				index: 17,
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
				index: 18,
				type: 'setTumbleWin',
				amount: 810,
			},
			{
				index: 19,
				type: 'setTotalWin',
				amount: 810,
			},
			{
				index: 20,
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
							name: 'L4',
						},
					],
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
						{
							name: 'L3',
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
							name: 'L4',
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
							name: 'W',
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
							name: 'L1',
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
							name: 'H3',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
					],
				],
				anticipation: false,
			},
			{
				index: 21,
				type: 'setTumbleWin',
				amount: 810,
			},
			{
				index: 22,
				type: 'setTotalWin',
				amount: 810,
			},
			{
				index: 23,
				type: 'cumulativeTumble',
				amount: 810,
			},
			{
				index: 24,
				type: 'finalWin',
				amount: 810,
			},
		],
		criteria: 'basegame',
		baseGameWins: 8.1,
		freeGameWins: 0.0,
	},
];
