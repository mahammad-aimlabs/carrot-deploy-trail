export default [
	{
		id: 1,
		payoutMultiplier: 7.7,
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
							name: 'H1',
						},
						{
							name: 'L1',
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
							name: 'L3',
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
							name: 'H4',
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
							name: 'H4',
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
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H2',
						},
					],
				],
				paddingPositions: [216, 205, 195, 16, 65, 30],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 120,
				wins: [
					{
						symbol: 'L2',
						win: 120,
						positions: [
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
								row: 3,
							},
							{
								reel: 1,
								row: 4,
							},
							{
								reel: 2,
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
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 120,
							overlay: {
								reel: 2,
								row: 5,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 120,
			},
			{
				index: 3,
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
						{
							name: 'L1',
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
					[],
					[
						{
							name: 'H2',
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
						reel: 1,
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
						reel: 2,
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
				],
			},
			{
				index: 4,
				type: 'winInfo',
				totalWin: 400,
				wins: [
					{
						symbol: 'L1',
						win: 400,
						positions: [
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
								row: 4,
							},
							{
								reel: 1,
								row: 1,
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
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 400,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 5,
				type: 'updateTumbleWin',
				amount: 520,
			},
			{
				index: 6,
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
							name: 'L3',
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
							name: 'H3',
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
						{
							name: 'H4',
						},
					],
					[
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
						reel: 0,
						row: 4,
					},
					{
						reel: 1,
						row: 1,
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
				],
			},
			{
				index: 7,
				type: 'winInfo',
				totalWin: 250,
				wins: [
					{
						symbol: 'H4',
						win: 250,
						positions: [
							{
								reel: 1,
								row: 1,
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
								reel: 4,
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
								reel: 5,
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 8,
				type: 'updateTumbleWin',
				amount: 770,
			},
			{
				index: 9,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L3',
						},
					],
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 1,
						row: 1,
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
						reel: 4,
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
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 10,
				type: 'setWin',
				amount: 770,
				winLevel: 5,
			},
			{
				index: 11,
				type: 'setTotalWin',
				amount: 770,
			},
			{
				index: 12,
				type: 'finalWin',
				amount: 770,
			},
		],
		criteria: 'basegame',
		baseGameWins: 7.7,
		freeGameWins: 0.0,
	},
	{
		id: 2,
		payoutMultiplier: 0.0,
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
							name: 'L1',
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
							name: 'L2',
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
							name: 'L1',
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
							name: 'L2',
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
							name: 'H1',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
				],
				paddingPositions: [242, 217, 14, 23, 21, 92],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 3,
		payoutMultiplier: 2.5,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'L3',
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
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L2',
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
							name: 'L3',
						},
						{
							name: 'L1',
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
							name: 'H1',
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [139, 33, 94, 234, 154, 121],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L3',
						win: 20,
						positions: [
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
								reel: 4,
								row: 2,
							},
							{
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 20,
			},
			{
				index: 3,
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
					[],
					[
						{
							name: 'H1',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
					[],
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
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 5,
					},
				],
			},
			{
				index: 4,
				type: 'winInfo',
				totalWin: 100,
				wins: [
					{
						symbol: 'H4',
						win: 100,
						positions: [
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
								row: 1,
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
								row: 5,
							},
							{
								reel: 5,
								row: 1,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 5,
				type: 'updateTumbleWin',
				amount: 120,
			},
			{
				index: 6,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H4',
						},
					],
					[],
					[
						{
							name: 'L1',
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
							name: 'L1',
						},
					],
					[
						{
							name: 'H1',
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
						row: 1,
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
						row: 5,
					},
					{
						reel: 5,
						row: 1,
					},
				],
			},
			{
				index: 7,
				type: 'winInfo',
				totalWin: 130,
				wins: [
					{
						symbol: 'H3',
						win: 130,
						positions: [
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
								reel: 5,
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 8,
				type: 'updateTumbleWin',
				amount: 250,
			},
			{
				index: 9,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H1',
						},
					],
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
							name: 'L1',
						},
						{
							name: 'H1',
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
							name: 'H4',
						},
						{
							name: 'L2',
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
				],
			},
			{
				index: 10,
				type: 'setWin',
				amount: 250,
				winLevel: 4,
			},
			{
				index: 11,
				type: 'setTotalWin',
				amount: 250,
			},
			{
				index: 12,
				type: 'finalWin',
				amount: 250,
			},
		],
		criteria: 'basegame',
		baseGameWins: 2.5,
		freeGameWins: 0.0,
	},
	{
		id: 4,
		payoutMultiplier: 1.6,
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
							name: 'L1',
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
							name: 'H2',
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
							name: 'L1',
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
							name: 'S',
							scatter: true,
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
							name: 'H4',
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
							name: 'H2',
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
							name: 'H4',
						},
					],
				],
				paddingPositions: [26, 184, 101, 122, 39, 23],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 100,
				wins: [
					{
						symbol: 'H4',
						win: 100,
						positions: [
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
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 100,
			},
			{
				index: 3,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
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
					[],
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
					],
					[],
					[
						{
							name: 'L3',
						},
						{
							name: 'L2',
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
						reel: 1,
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
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 4,
				type: 'winInfo',
				totalWin: 60,
				wins: [
					{
						symbol: 'L1',
						win: 60,
						positions: [
							{
								reel: 0,
								row: 1,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 5,
				type: 'updateTumbleWin',
				amount: 160,
			},
			{
				index: 6,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
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
							name: 'H3',
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
			},
			{
				index: 7,
				type: 'setWin',
				amount: 160,
				winLevel: 3,
			},
			{
				index: 8,
				type: 'setTotalWin',
				amount: 160,
			},
			{
				index: 9,
				type: 'finalWin',
				amount: 160,
			},
		],
		criteria: 'basegame',
		baseGameWins: 1.6,
		freeGameWins: 0.0,
	},
	{
		id: 5,
		payoutMultiplier: 11.4,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
						},
						{
							name: 'H2',
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
							name: 'L1',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
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
							name: 'L1',
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
							name: 'H3',
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
							name: 'L1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
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
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
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
				],
				paddingPositions: [189, 91, 203, 176, 241, 215],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 190,
				wins: [
					{
						symbol: 'L1',
						win: 60,
						positions: [
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
								row: 3,
							},
							{
								reel: 4,
								row: 2,
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
								row: 3,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
					{
						symbol: 'H3',
						win: 130,
						positions: [
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
								row: 3,
							},
							{
								reel: 3,
								row: 4,
							},
							{
								reel: 5,
								row: 2,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 190,
			},
			{
				index: 3,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L2',
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
					],
					[
						{
							name: 'H4',
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
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 4,
						row: 2,
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
						row: 3,
					},
					{
						reel: 5,
						row: 2,
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
			},
			{
				index: 4,
				type: 'winInfo',
				totalWin: 500,
				wins: [
					{
						symbol: 'H2',
						win: 500,
						positions: [
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
								reel: 2,
								row: 3,
							},
							{
								reel: 3,
								row: 1,
							},
							{
								reel: 4,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 500,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 5,
				type: 'updateTumbleWin',
				amount: 690,
			},
			{
				index: 6,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H3',
						},
					],
					[
						{
							name: 'H3',
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
							name: 'L3',
						},
					],
					[
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
							name: 'L2',
						},
					],
				],
				explodingSymbols: [
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
						reel: 2,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 4,
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
			},
			{
				index: 7,
				type: 'winInfo',
				totalWin: 450,
				wins: [
					{
						symbol: 'L2',
						win: 350,
						positions: [
							{
								reel: 0,
								row: 1,
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
								reel: 1,
								row: 4,
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
								reel: 5,
								row: 2,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 350,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
					{
						symbol: 'H4',
						win: 100,
						positions: [
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
								row: 3,
							},
							{
								reel: 5,
								row: 3,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 8,
				type: 'updateTumbleWin',
				amount: 1140,
			},
			{
				index: 9,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
							name: 'L3',
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
					[
						{
							name: 'H4',
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
							name: 'L3',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'L2',
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
						row: 3,
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
			},
			{
				index: 10,
				type: 'setWin',
				amount: 1140,
				winLevel: 5,
			},
			{
				index: 11,
				type: 'setTotalWin',
				amount: 1140,
			},
			{
				index: 12,
				type: 'finalWin',
				amount: 1140,
			},
		],
		criteria: 'basegame',
		baseGameWins: 11.4,
		freeGameWins: 0.0,
	},
	{
		id: 6,
		payoutMultiplier: 0.0,
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
							name: 'L3',
						},
						{
							name: 'H3',
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
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H2',
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
							name: 'H2',
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
							name: 'H3',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [210, 20, 124, 195, 66, 9],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 7,
		payoutMultiplier: 791.8,
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
							name: 'H1',
						},
						{
							name: 'S',
							scatter: true,
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
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'H2',
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
							name: 'H3',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L3',
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
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [17, 23, 61, 30, 46, 41],
				gameType: 'basegame',
				anticipation: [0, 0, 1, 2, 3, 4],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'freeSpinTrigger',
				totalFs: 10,
				positions: [
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 1,
						row: 1,
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
						row: 4,
					},
				],
			},
			{
				index: 3,
				type: 'updateFreeSpin',
				amount: 1,
				total: 10,
			},
			{
				index: 4,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 5,
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'L1',
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
							name: 'H3',
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
							name: 'L3',
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
							name: 'L2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'M',
							multiplier: 2,
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
							name: 'L3',
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
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
				],
				paddingPositions: [108, 15, 211, 144, 31, 242],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 6,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 7,
				type: 'updateFreeSpin',
				amount: 2,
				total: 10,
			},
			{
				index: 8,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 9,
				type: 'reveal',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							multiplier: 10,
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
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
					[
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
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
							name: 'L2',
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
							name: 'H3',
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
							name: 'L1',
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
							name: 'H3',
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
					],
				],
				paddingPositions: [242, 15, 147, 149, 101, 12],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 10,
				type: 'winInfo',
				totalWin: 600,
				wins: [
					{
						symbol: 'H4',
						win: 600,
						positions: [
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
								row: 3,
							},
							{
								reel: 3,
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
							{
								reel: 5,
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 600,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 11,
				type: 'updateTumbleWin',
				amount: 600,
			},
			{
				index: 12,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H3',
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
							name: 'L2',
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
						reel: 3,
						row: 1,
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
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 13,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 14,
				type: 'winInfo',
				totalWin: 1000,
				wins: [
					{
						symbol: 'H2',
						win: 1000,
						positions: [
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
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 500,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 15,
				type: 'updateTumbleWin',
				amount: 1600,
			},
			{
				index: 16,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
							name: 'H3',
						},
					],
					[
						{
							name: 'H3',
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
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
					],
				],
				explodingSymbols: [
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
			},
			{
				index: 17,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 18,
				type: 'winInfo',
				totalWin: 180,
				wins: [
					{
						symbol: 'L1',
						win: 180,
						positions: [
							{
								reel: 0,
								row: 1,
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
								reel: 3,
								row: 3,
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
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 19,
				type: 'updateTumbleWin',
				amount: 1780,
			},
			{
				index: 20,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
						},
					],
					[
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
							name: 'H3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
					],
					[],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
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
						reel: 3,
						row: 3,
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
				],
			},
			{
				index: 21,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 22,
				type: 'winInfo',
				totalWin: 2960,
				wins: [
					{
						symbol: 'L2',
						win: 160,
						positions: [
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
								row: 4,
							},
							{
								reel: 1,
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
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 1,
								row: 4,
							},
						},
					},
					{
						symbol: 'H3',
						win: 2800,
						positions: [
							{
								reel: 1,
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
							{
								reel: 4,
								row: 5,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 700,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 23,
				type: 'updateTumbleWin',
				amount: 4740,
			},
			{
				index: 24,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
					],
					[
						{
							name: 'L1',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
						row: 5,
					},
					{
						reel: 1,
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
						reel: 1,
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
					{
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 25,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 26,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 0,
							row: 5,
							multiplier: 10,
						},
					],
				},
				winInfo: {
					tumbleWin: 4740,
					boardMult: 10,
					totalWin: 47400,
				},
			},
			{
				index: 27,
				type: 'updateTumbleWin',
				amount: 47400,
			},
			{
				index: 28,
				type: 'setWin',
				amount: 47400,
				winLevel: 9,
			},
			{
				index: 29,
				type: 'setTotalWin',
				amount: 47400,
			},
			{
				index: 30,
				type: 'updateFreeSpin',
				amount: 3,
				total: 10,
			},
			{
				index: 31,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 32,
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
							name: 'L3',
						},
						{
							name: 'L2',
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
					[
						{
							name: 'L2',
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
							name: 'L1',
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
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							multiplier: 2,
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
							name: 'H1',
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
							name: 'M',
							multiplier: 2,
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
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [219, 34, 74, 107, 36, 138],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 33,
				type: 'setTotalWin',
				amount: 47400,
			},
			{
				index: 34,
				type: 'updateFreeSpin',
				amount: 4,
				total: 10,
			},
			{
				index: 35,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 36,
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
							name: 'H2',
						},
						{
							name: 'H1',
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
							name: 'L1',
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
							name: 'H4',
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
							name: 'L1',
						},
					],
				],
				paddingPositions: [46, 26, 148, 146, 163, 48],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 37,
				type: 'winInfo',
				totalWin: 120,
				wins: [
					{
						symbol: 'L2',
						win: 120,
						positions: [
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
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 120,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 38,
				type: 'updateTumbleWin',
				amount: 120,
			},
			{
				index: 39,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
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
					[],
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
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
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
						reel: 1,
						row: 3,
					},
					{
						reel: 1,
						row: 4,
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
				],
			},
			{
				index: 40,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 41,
				type: 'winInfo',
				totalWin: 400,
				wins: [
					{
						symbol: 'H2',
						win: 400,
						positions: [
							{
								reel: 1,
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
								reel: 2,
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
								row: 5,
							},
							{
								reel: 5,
								row: 2,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 42,
				type: 'updateTumbleWin',
				amount: 520,
			},
			{
				index: 43,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'L1',
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
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
					[],
					[
						{
							name: 'H3',
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
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 5,
						row: 2,
					},
				],
			},
			{
				index: 44,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 45,
				type: 'setWin',
				amount: 520,
				winLevel: 5,
			},
			{
				index: 46,
				type: 'setTotalWin',
				amount: 47920,
			},
			{
				index: 47,
				type: 'updateFreeSpin',
				amount: 5,
				total: 10,
			},
			{
				index: 48,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 49,
				type: 'reveal',
				board: [
					[
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H4',
						},
						{
							name: 'L3',
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
							name: 'H1',
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
							name: 'L3',
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
							name: 'L2',
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
				paddingPositions: [140, 182, 16, 144, 15, 158],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 50,
				type: 'winInfo',
				totalWin: 160,
				wins: [
					{
						symbol: 'H4',
						win: 100,
						positions: [
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
								row: 4,
							},
							{
								reel: 1,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 1,
								row: 4,
							},
						},
					},
					{
						symbol: 'L1',
						win: 60,
						positions: [
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
								row: 1,
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
								reel: 4,
								row: 2,
							},
							{
								reel: 4,
								row: 3,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 51,
				type: 'updateTumbleWin',
				amount: 160,
			},
			{
				index: 52,
				type: 'tumbleBoard',
				newSymbols: [
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
						reel: 0,
						row: 5,
					},
					{
						reel: 1,
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
						row: 1,
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
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
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
			},
			{
				index: 53,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 54,
				type: 'winInfo',
				totalWin: 500,
				wins: [
					{
						symbol: 'L3',
						win: 500,
						positions: [
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
								row: 5,
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
							{
								reel: 4,
								row: 4,
							},
							{
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 55,
				type: 'updateTumbleWin',
				amount: 660,
			},
			{
				index: 56,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H1',
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
							name: 'H2',
						},
					],
					[
						{
							name: 'L1',
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
							name: 'H3',
						},
					],
					[],
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
						row: 5,
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
					{
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
				],
			},
			{
				index: 57,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 58,
				type: 'winInfo',
				totalWin: 1890,
				wins: [
					{
						symbol: 'H2',
						win: 1500,
						positions: [
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
								reel: 5,
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 500,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
					{
						symbol: 'H3',
						win: 390,
						positions: [
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
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 59,
				type: 'updateTumbleWin',
				amount: 2550,
			},
			{
				index: 60,
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
					],
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
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
						reel: 2,
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
						reel: 3,
						row: 2,
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
				],
			},
			{
				index: 61,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 62,
				type: 'winInfo',
				totalWin: 6480,
				wins: [
					{
						symbol: 'H1',
						win: 6000,
						positions: [
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
								row: 3,
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
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 1500,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
					{
						symbol: 'L2',
						win: 480,
						positions: [
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
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 120,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 63,
				type: 'updateTumbleWin',
				amount: 9030,
			},
			{
				index: 64,
				type: 'tumbleBoard',
				newSymbols: [
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
							name: 'L1',
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
							name: 'H3',
						},
					],
					[
						{
							name: 'H3',
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
							name: 'H1',
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
						reel: 2,
						row: 1,
					},
					{
						reel: 3,
						row: 3,
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
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 65,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 66,
				type: 'setWin',
				amount: 9030,
				winLevel: 8,
			},
			{
				index: 67,
				type: 'setTotalWin',
				amount: 56950,
			},
			{
				index: 68,
				type: 'updateFreeSpin',
				amount: 6,
				total: 10,
			},
			{
				index: 69,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 70,
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
							name: 'H4',
						},
						{
							name: 'H2',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
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
							name: 'L3',
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'H3',
						},
					],
				],
				paddingPositions: [174, 136, 109, 198, 80, 119],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 71,
				type: 'winInfo',
				totalWin: 600,
				wins: [
					{
						symbol: 'H4',
						win: 600,
						positions: [
							{
								reel: 0,
								row: 2,
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
								row: 5,
							},
							{
								reel: 5,
								row: 3,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 600,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 72,
				type: 'updateTumbleWin',
				amount: 600,
			},
			{
				index: 73,
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
							name: 'L1',
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
							name: 'H2',
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
							name: 'L3',
						},
					],
					[
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H4',
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
						row: 5,
					},
					{
						reel: 5,
						row: 3,
					},
				],
			},
			{
				index: 74,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 75,
				type: 'winInfo',
				totalWin: 40,
				wins: [
					{
						symbol: 'L3',
						win: 40,
						positions: [
							{
								reel: 0,
								row: 1,
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
								reel: 3,
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
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 76,
				type: 'updateTumbleWin',
				amount: 640,
			},
			{
				index: 77,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H3',
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
					],
					[],
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
				],
			},
			{
				index: 78,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 79,
				type: 'winInfo',
				totalWin: 3000,
				wins: [
					{
						symbol: 'H2',
						win: 3000,
						positions: [
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
								row: 3,
							},
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 1000,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 80,
				type: 'updateTumbleWin',
				amount: 3640,
			},
			{
				index: 81,
				type: 'tumbleBoard',
				newSymbols: [
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
							name: 'L2',
						},
						{
							name: 'L1',
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
					],
					[],
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
						row: 3,
					},
				],
			},
			{
				index: 82,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 83,
				type: 'winInfo',
				totalWin: 1640,
				wins: [
					{
						symbol: 'L2',
						win: 1400,
						positions: [
							{
								reel: 0,
								row: 1,
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
								reel: 3,
								row: 2,
							},
							{
								reel: 3,
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
								reel: 5,
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
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 350,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
					{
						symbol: 'L1',
						win: 240,
						positions: [
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
								reel: 4,
								row: 4,
							},
							{
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 84,
				type: 'updateTumbleWin',
				amount: 5280,
			},
			{
				index: 85,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H1',
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
							name: 'H3',
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
							name: 'H1',
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
							name: 'H3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H2',
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
						row: 3,
					},
					{
						reel: 1,
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
						reel: 3,
						row: 5,
					},
					{
						reel: 3,
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
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 86,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 87,
				type: 'setWin',
				amount: 5280,
				winLevel: 8,
			},
			{
				index: 88,
				type: 'setTotalWin',
				amount: 62230,
			},
			{
				index: 89,
				type: 'updateFreeSpin',
				amount: 7,
				total: 10,
			},
			{
				index: 90,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 91,
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
							name: 'H3',
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
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'H4',
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
							name: 'H1',
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
							name: 'H2',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L1',
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
							name: 'L2',
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
							name: 'H2',
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
				],
				paddingPositions: [116, 92, 76, 63, 203, 46],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 92,
				type: 'winInfo',
				totalWin: 120,
				wins: [
					{
						symbol: 'L2',
						win: 120,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 1,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 120,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 93,
				type: 'updateTumbleWin',
				amount: 120,
			},
			{
				index: 94,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
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
							name: 'H4',
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
							name: 'H4',
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
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 1,
						row: 1,
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
			},
			{
				index: 95,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 96,
				type: 'winInfo',
				totalWin: 260,
				wins: [
					{
						symbol: 'H3',
						win: 260,
						positions: [
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
								reel: 2,
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
								row: 5,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 2,
								row: 5,
							},
						},
					},
				],
			},
			{
				index: 97,
				type: 'updateTumbleWin',
				amount: 380,
			},
			{
				index: 98,
				type: 'tumbleBoard',
				newSymbols: [
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
							name: 'H4',
						},
					],
					[],
					[
						{
							name: 'L1',
						},
					],
					[],
					[],
					[
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
						reel: 2,
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
						row: 5,
					},
				],
			},
			{
				index: 99,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 100,
				type: 'winInfo',
				totalWin: 1200,
				wins: [
					{
						symbol: 'H4',
						win: 750,
						positions: [
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
								reel: 3,
								row: 3,
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
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
					{
						symbol: 'L1',
						win: 450,
						positions: [
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
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 150,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 101,
				type: 'updateTumbleWin',
				amount: 1580,
			},
			{
				index: 102,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H3',
						},
					],
					[
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
							name: 'H2',
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
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H4',
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
							name: 'H2',
						},
						{
							name: 'H3',
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
						row: 3,
					},
					{
						reel: 4,
						row: 2,
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
					{
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 3,
					},
				],
			},
			{
				index: 103,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 104,
				type: 'setWin',
				amount: 1580,
				winLevel: 6,
			},
			{
				index: 105,
				type: 'setTotalWin',
				amount: 63810,
			},
			{
				index: 106,
				type: 'updateFreeSpin',
				amount: 8,
				total: 10,
			},
			{
				index: 107,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 108,
				type: 'reveal',
				board: [
					[
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
							name: 'H2',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H2',
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
							name: 'H1',
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
					[
						{
							name: 'H4',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
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
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
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
							name: 'L2',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [62, 20, 147, 76, 134, 126],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 109,
				type: 'winInfo',
				totalWin: 500,
				wins: [
					{
						symbol: 'H2',
						win: 500,
						positions: [
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
								row: 2,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 500,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 110,
				type: 'updateTumbleWin',
				amount: 500,
			},
			{
				index: 111,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
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
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
						},
					],
					[],
					[
						{
							name: 'L2',
						},
						{
							name: 'H3',
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
						row: 2,
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
			},
			{
				index: 112,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 113,
				type: 'winInfo',
				totalWin: 640,
				wins: [
					{
						symbol: 'H3',
						win: 640,
						positions: [
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
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 320,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 114,
				type: 'updateTumbleWin',
				amount: 1140,
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
							name: 'H1',
						},
					],
					[],
					[
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
					],
					[],
					[
						{
							name: 'H2',
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
							name: 'L2',
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
			},
			{
				index: 116,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 117,
				type: 'winInfo',
				totalWin: 120,
				wins: [
					{
						symbol: 'L2',
						win: 120,
						positions: [
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
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 3,
								row: 5,
							},
						},
					},
				],
			},
			{
				index: 118,
				type: 'updateTumbleWin',
				amount: 1260,
			},
			{
				index: 119,
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
					],
					[],
					[
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L1',
						},
					],
					[
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
						reel: 3,
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
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 120,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 121,
				type: 'winInfo',
				totalWin: 3600,
				wins: [
					{
						symbol: 'H1',
						win: 1200,
						positions: [
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
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 300,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
					{
						symbol: 'H4',
						win: 2400,
						positions: [
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
								row: 2,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 600,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 122,
				type: 'updateTumbleWin',
				amount: 4860,
			},
			{
				index: 123,
				type: 'tumbleBoard',
				newSymbols: [
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
							name: 'L2',
						},
						{
							name: 'H3',
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
							name: 'H4',
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
							name: 'L1',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H2',
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
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
						row: 1,
					},
					{
						reel: 3,
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
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 124,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 125,
				type: 'winInfo',
				totalWin: 1300,
				wins: [
					{
						symbol: 'H2',
						win: 1000,
						positions: [
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
								reel: 4,
								row: 5,
							},
							{
								reel: 5,
								row: 1,
							},
						],
						meta: {
							globalMult: 5,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
					{
						symbol: 'L1',
						win: 300,
						positions: [
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
								row: 5,
							},
						],
						meta: {
							globalMult: 5,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 2,
								row: 5,
							},
						},
					},
				],
			},
			{
				index: 126,
				type: 'updateTumbleWin',
				amount: 6160,
			},
			{
				index: 127,
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
						reel: 4,
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
						row: 1,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 128,
				type: 'updateGlobalMult',
				globalMult: 6,
			},
			{
				index: 129,
				type: 'winInfo',
				totalWin: 1920,
				wins: [
					{
						symbol: 'H3',
						win: 1920,
						positions: [
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
						],
						meta: {
							globalMult: 6,
							clusterMult: 1,
							winWithoutMult: 320,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 130,
				type: 'updateTumbleWin',
				amount: 8080,
			},
			{
				index: 131,
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
							name: 'H1',
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
					],
					[
						{
							name: 'L3',
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
				],
			},
			{
				index: 132,
				type: 'updateGlobalMult',
				globalMult: 7,
			},
			{
				index: 133,
				type: 'winInfo',
				totalWin: 2450,
				wins: [
					{
						symbol: 'L2',
						win: 2450,
						positions: [
							{
								reel: 1,
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
								row: 3,
							},
							{
								reel: 3,
								row: 4,
							},
							{
								reel: 4,
								row: 5,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 7,
							clusterMult: 1,
							winWithoutMult: 350,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 134,
				type: 'updateTumbleWin',
				amount: 10530,
			},
			{
				index: 135,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
					],
					[
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
							name: 'H4',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
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
						reel: 2,
						row: 4,
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
						reel: 3,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 136,
				type: 'updateGlobalMult',
				globalMult: 8,
			},
			{
				index: 137,
				type: 'setWin',
				amount: 10530,
				winLevel: 9,
			},
			{
				index: 138,
				type: 'setTotalWin',
				amount: 74340,
			},
			{
				index: 139,
				type: 'updateFreeSpin',
				amount: 9,
				total: 10,
			},
			{
				index: 140,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 141,
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
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
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
							name: 'L2',
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
							name: 'H4',
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
							name: 'L1',
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
							name: 'L3',
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
							name: 'L2',
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
							name: 'H1',
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
				paddingPositions: [186, 114, 73, 155, 250, 18],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 142,
				type: 'winInfo',
				totalWin: 60,
				wins: [
					{
						symbol: 'L1',
						win: 60,
						positions: [
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
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 143,
				type: 'updateTumbleWin',
				amount: 60,
			},
			{
				index: 144,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[],
					[
						{
							name: 'M',
							multiplier: 4,
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
							name: 'L1',
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
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
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
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 145,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 146,
				type: 'winInfo',
				totalWin: 240,
				wins: [
					{
						symbol: 'L2',
						win: 240,
						positions: [
							{
								reel: 0,
								row: 2,
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
								row: 1,
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
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 120,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 147,
				type: 'updateTumbleWin',
				amount: 300,
			},
			{
				index: 148,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
					],
					[],
					[
						{
							name: 'L1',
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
							name: 'H4',
						},
					],
					[
						{
							name: 'L1',
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
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 2,
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
						row: 1,
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
			},
			{
				index: 149,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 150,
				type: 'winInfo',
				totalWin: 960,
				wins: [
					{
						symbol: 'H3',
						win: 960,
						positions: [
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
								row: 5,
							},
							{
								reel: 2,
								row: 3,
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
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 320,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 151,
				type: 'updateTumbleWin',
				amount: 1260,
			},
			{
				index: 152,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H1',
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
							name: 'H2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L1',
						},
					],
					[],
					[
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H3',
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
						row: 5,
					},
					{
						reel: 2,
						row: 3,
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
			},
			{
				index: 153,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 154,
				type: 'winInfo',
				totalWin: 1000,
				wins: [
					{
						symbol: 'H4',
						win: 1000,
						positions: [
							{
								reel: 0,
								row: 1,
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
								reel: 3,
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
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 155,
				type: 'updateTumbleWin',
				amount: 2260,
			},
			{
				index: 156,
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H1',
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
							name: 'L2',
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
						row: 3,
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
						row: 4,
					},
					{
						reel: 3,
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
			},
			{
				index: 157,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 158,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 2,
							row: 4,
							multiplier: 2,
						},
					],
				},
				winInfo: {
					tumbleWin: 2260,
					boardMult: 2,
					totalWin: 4520,
				},
			},
			{
				index: 159,
				type: 'updateTumbleWin',
				amount: 4520,
			},
			{
				index: 160,
				type: 'setWin',
				amount: 4520,
				winLevel: 7,
			},
			{
				index: 161,
				type: 'setTotalWin',
				amount: 78860,
			},
			{
				index: 162,
				type: 'updateFreeSpin',
				amount: 10,
				total: 10,
			},
			{
				index: 163,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 164,
				type: 'reveal',
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
							name: 'L3',
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
							name: 'H2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
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
							name: 'H4',
						},
						{
							name: 'H2',
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
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'M',
							multiplier: 4,
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
							name: 'L3',
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
						{
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'L3',
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
					],
				],
				paddingPositions: [38, 238, 125, 107, 10, 246],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 165,
				type: 'winInfo',
				totalWin: 80,
				wins: [
					{
						symbol: 'L3',
						win: 80,
						positions: [
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
								row: 1,
							},
							{
								reel: 1,
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
								row: 2,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 80,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 166,
				type: 'updateTumbleWin',
				amount: 80,
			},
			{
				index: 167,
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
							name: 'L3',
						},
						{
							name: 'H2',
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
						row: 4,
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
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 168,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 169,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 3,
							row: 4,
							multiplier: 4,
						},
					],
				},
				winInfo: {
					tumbleWin: 80,
					boardMult: 4,
					totalWin: 320,
				},
			},
			{
				index: 170,
				type: 'updateTumbleWin',
				amount: 320,
			},
			{
				index: 171,
				type: 'setWin',
				amount: 320,
				winLevel: 4,
			},
			{
				index: 172,
				type: 'setTotalWin',
				amount: 79180,
			},
			{
				index: 173,
				type: 'freeSpinEnd',
				amount: 79180,
				winLevel: 9,
			},
			{
				index: 174,
				type: 'finalWin',
				amount: 79180,
			},
		],
		criteria: 'freegame',
		baseGameWins: 0.0,
		freeGameWins: 791.8,
	},
	{
		id: 8,
		payoutMultiplier: 5.5,
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
							name: 'H4',
						},
						{
							name: 'L3',
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
							name: 'S',
							scatter: true,
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'H2',
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
							name: 'H2',
						},
						{
							name: 'H1',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H1',
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
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [246, 96, 32, 49, 180, 11],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 290,
				wins: [
					{
						symbol: 'L2',
						win: 40,
						positions: [
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
								row: 4,
							},
							{
								reel: 4,
								row: 4,
							},
							{
								reel: 5,
								row: 1,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
					{
						symbol: 'H4',
						win: 250,
						positions: [
							{
								reel: 0,
								row: 2,
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
								row: 4,
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
								reel: 5,
								row: 2,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 5,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 290,
			},
			{
				index: 3,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
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
							name: 'H2',
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
					[
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
						row: 4,
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
						reel: 1,
						row: 4,
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
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 4,
				type: 'winInfo',
				totalWin: 200,
				wins: [
					{
						symbol: 'H2',
						win: 200,
						positions: [
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
								reel: 5,
								row: 2,
							},
							{
								reel: 5,
								row: 3,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 5,
				type: 'updateTumbleWin',
				amount: 490,
			},
			{
				index: 6,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H2',
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
							name: 'L1',
						},
					],
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
							name: 'H2',
						},
						{
							name: 'H2',
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
						row: 2,
					},
					{
						reel: 2,
						row: 3,
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
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 3,
					},
				],
			},
			{
				index: 7,
				type: 'winInfo',
				totalWin: 60,
				wins: [
					{
						symbol: 'L1',
						win: 60,
						positions: [
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
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 8,
				type: 'updateTumbleWin',
				amount: 550,
			},
			{
				index: 9,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H4',
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
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
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
					],
					[],
				],
				explodingSymbols: [
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
				],
			},
			{
				index: 10,
				type: 'setWin',
				amount: 550,
				winLevel: 5,
			},
			{
				index: 11,
				type: 'setTotalWin',
				amount: 550,
			},
			{
				index: 12,
				type: 'finalWin',
				amount: 550,
			},
		],
		criteria: 'basegame',
		baseGameWins: 5.5,
		freeGameWins: 0.0,
	},
	{
		id: 9,
		payoutMultiplier: 1476.2,
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'S',
							scatter: true,
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
							name: 'L3',
						},
						{
							name: 'H3',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'L2',
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
							name: 'L2',
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
							name: 'H1',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
				],
				paddingPositions: [203, 195, 211, 180, 208, 242],
				gameType: 'basegame',
				anticipation: [0, 0, 1, 2, 3, 4],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'freeSpinTrigger',
				totalFs: 10,
				positions: [
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
						row: 4,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 5,
						row: 2,
					},
				],
			},
			{
				index: 3,
				type: 'updateFreeSpin',
				amount: 1,
				total: 10,
			},
			{
				index: 4,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 5,
				type: 'reveal',
				board: [
					[
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
							name: 'H3',
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'L1',
						},
					],
					[
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
							name: 'H4',
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
					],
					[
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
					],
				],
				paddingPositions: [185, 108, 40, 43, 60, 13],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 6,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 7,
				type: 'updateFreeSpin',
				amount: 2,
				total: 10,
			},
			{
				index: 8,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 9,
				type: 'reveal',
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
							name: 'H3',
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
							name: 'L3',
						},
						{
							name: 'H3',
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
							name: 'H2',
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
							name: 'L1',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [129, 223, 236, 151, 16, 198],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 10,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L3',
						win: 20,
						positions: [
							{
								reel: 0,
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
								reel: 1,
								row: 5,
							},
							{
								reel: 2,
								row: 2,
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
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 11,
				type: 'updateTumbleWin',
				amount: 20,
			},
			{
				index: 12,
				type: 'tumbleBoard',
				newSymbols: [
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
							name: 'H2',
						},
					],
					[],
					[
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
					[],
				],
				explodingSymbols: [
					{
						reel: 0,
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
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 2,
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
				],
			},
			{
				index: 13,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 14,
				type: 'winInfo',
				totalWin: 300,
				wins: [
					{
						symbol: 'L1',
						win: 300,
						positions: [
							{
								reel: 0,
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
								reel: 4,
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 150,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 15,
				type: 'updateTumbleWin',
				amount: 320,
			},
			{
				index: 16,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'M',
							multiplier: 5,
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
							name: 'L3',
						},
					],
					[
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
						reel: 4,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 17,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 18,
				type: 'winInfo',
				totalWin: 390,
				wins: [
					{
						symbol: 'H3',
						win: 390,
						positions: [
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
								reel: 4,
								row: 1,
							},
							{
								reel: 4,
								row: 4,
							},
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 19,
				type: 'updateTumbleWin',
				amount: 710,
			},
			{
				index: 20,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L2',
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
							name: 'L2',
						},
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
						},
					],
					[],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
					[],
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
						reel: 1,
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
						row: 4,
					},
					{
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 4,
					},
				],
			},
			{
				index: 21,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 22,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 1,
							row: 3,
							multiplier: 4,
						},
					],
				},
				winInfo: {
					tumbleWin: 710,
					boardMult: 4,
					totalWin: 2840,
				},
			},
			{
				index: 23,
				type: 'updateTumbleWin',
				amount: 2840,
			},
			{
				index: 24,
				type: 'setWin',
				amount: 2840,
				winLevel: 6,
			},
			{
				index: 25,
				type: 'setTotalWin',
				amount: 2840,
			},
			{
				index: 26,
				type: 'updateFreeSpin',
				amount: 3,
				total: 10,
			},
			{
				index: 27,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 28,
				type: 'reveal',
				board: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							multiplier: 5,
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
							name: 'H2',
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
							name: 'H4',
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
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
							name: 'L2',
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
							name: 'H4',
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
				],
				paddingPositions: [235, 74, 52, 172, 57, 185],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 29,
				type: 'setTotalWin',
				amount: 2840,
			},
			{
				index: 30,
				type: 'updateFreeSpin',
				amount: 4,
				total: 10,
			},
			{
				index: 31,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 32,
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
							name: 'H2',
						},
						{
							name: 'L3',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
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
							name: 'L1',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'H2',
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
							name: 'H3',
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
							name: 'H1',
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
							name: 'H2',
						},
					],
				],
				paddingPositions: [197, 68, 233, 53, 101, 71],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 33,
				type: 'winInfo',
				totalWin: 100,
				wins: [
					{
						symbol: 'H4',
						win: 100,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 0,
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
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 34,
				type: 'updateTumbleWin',
				amount: 100,
			},
			{
				index: 35,
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
							name: 'H3',
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
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 36,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 37,
				type: 'winInfo',
				totalWin: 120,
				wins: [
					{
						symbol: 'L1',
						win: 120,
						positions: [
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
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 38,
				type: 'updateTumbleWin',
				amount: 220,
			},
			{
				index: 39,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
						},
					],
					[],
					[
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H3',
						},
					],
					[
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
						reel: 2,
						row: 1,
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
				],
			},
			{
				index: 40,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 41,
				type: 'winInfo',
				totalWin: 1500,
				wins: [
					{
						symbol: 'H2',
						win: 1500,
						positions: [
							{
								reel: 0,
								row: 3,
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
								row: 4,
							},
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 500,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 42,
				type: 'updateTumbleWin',
				amount: 1720,
			},
			{
				index: 43,
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
							name: 'H3',
						},
						{
							name: 'H1',
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
							name: 'L2',
						},
					],
					[],
					[
						{
							name: 'H3',
						},
					],
					[],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 3,
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
						row: 4,
					},
				],
			},
			{
				index: 44,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 45,
				type: 'winInfo',
				totalWin: 160,
				wins: [
					{
						symbol: 'L2',
						win: 160,
						positions: [
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
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 46,
				type: 'updateTumbleWin',
				amount: 1880,
			},
			{
				index: 47,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H3',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
					[],
					[],
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
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 2,
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
				],
			},
			{
				index: 48,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 49,
				type: 'winInfo',
				totalWin: 650,
				wins: [
					{
						symbol: 'H3',
						win: 650,
						positions: [
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
								row: 5,
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
								row: 5,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 5,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 50,
				type: 'updateTumbleWin',
				amount: 2530,
			},
			{
				index: 51,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
					[],
					[
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L1',
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
							name: 'H3',
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
						reel: 1,
						row: 5,
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
						row: 5,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 52,
				type: 'updateGlobalMult',
				globalMult: 6,
			},
			{
				index: 53,
				type: 'setWin',
				amount: 2530,
				winLevel: 6,
			},
			{
				index: 54,
				type: 'setTotalWin',
				amount: 5370,
			},
			{
				index: 55,
				type: 'updateFreeSpin',
				amount: 5,
				total: 10,
			},
			{
				index: 56,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 57,
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
							name: 'H2',
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
							name: 'L1',
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
							name: 'H1',
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
							name: 'L2',
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
							name: 'H1',
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
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H1',
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
							name: 'L3',
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
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [11, 51, 181, 226, 1, 225],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 58,
				type: 'winInfo',
				totalWin: 60,
				wins: [
					{
						symbol: 'L1',
						win: 60,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 0,
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
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 59,
				type: 'updateTumbleWin',
				amount: 60,
			},
			{
				index: 60,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
					],
					[],
					[],
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
							name: 'L3',
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
						reel: 3,
						row: 1,
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
				],
			},
			{
				index: 61,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 62,
				type: 'winInfo',
				totalWin: 3040,
				wins: [
					{
						symbol: 'H1',
						win: 3000,
						positions: [
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
								row: 1,
							},
							{
								reel: 2,
								row: 2,
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
								reel: 4,
								row: 4,
							},
							{
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 1500,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
					{
						symbol: 'L3',
						win: 40,
						positions: [
							{
								reel: 0,
								row: 5,
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
								reel: 3,
								row: 4,
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
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 63,
				type: 'updateTumbleWin',
				amount: 3100,
			},
			{
				index: 64,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H1',
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
					[],
					[
						{
							name: 'L3',
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
							name: 'H3',
						},
						{
							name: 'L2',
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
						reel: 0,
						row: 3,
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
						row: 2,
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
						row: 1,
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
						reel: 5,
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
				],
			},
			{
				index: 65,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 66,
				type: 'winInfo',
				totalWin: 1050,
				wins: [
					{
						symbol: 'L2',
						win: 1050,
						positions: [
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
								reel: 3,
								row: 4,
							},
							{
								reel: 4,
								row: 2,
							},
							{
								reel: 4,
								row: 4,
							},
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 350,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 67,
				type: 'updateTumbleWin',
				amount: 4150,
			},
			{
				index: 68,
				type: 'tumbleBoard',
				newSymbols: [
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
						reel: 1,
						row: 1,
					},
					{
						reel: 1,
						row: 2,
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
						reel: 3,
						row: 4,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 4,
					},
				],
			},
			{
				index: 69,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 70,
				type: 'winInfo',
				totalWin: 600,
				wins: [
					{
						symbol: 'L1',
						win: 600,
						positions: [
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
								row: 2,
							},
							{
								reel: 2,
								row: 1,
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
								row: 1,
							},
							{
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 150,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 71,
				type: 'updateTumbleWin',
				amount: 4750,
			},
			{
				index: 72,
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
							name: 'H2',
						},
					],
					[
						{
							name: 'H3',
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
							name: 'L2',
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
						reel: 1,
						row: 2,
					},
					{
						reel: 2,
						row: 1,
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
						row: 1,
					},
					{
						reel: 4,
						row: 5,
					},
				],
			},
			{
				index: 73,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 74,
				type: 'winInfo',
				totalWin: 400,
				wins: [
					{
						symbol: 'L3',
						win: 400,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 2,
								row: 1,
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
								row: 2,
							},
							{
								reel: 3,
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
						],
						meta: {
							globalMult: 5,
							clusterMult: 1,
							winWithoutMult: 80,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 75,
				type: 'updateTumbleWin',
				amount: 5150,
			},
			{
				index: 76,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
							name: 'H3',
						},
						{
							name: 'L2',
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
							name: 'H2',
						},
					],
					[
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H3',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 2,
						row: 1,
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
						row: 2,
					},
					{
						reel: 3,
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
				],
			},
			{
				index: 77,
				type: 'updateGlobalMult',
				globalMult: 6,
			},
			{
				index: 78,
				type: 'winInfo',
				totalWin: 3600,
				wins: [
					{
						symbol: 'H4',
						win: 600,
						positions: [
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
						meta: {
							globalMult: 6,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 5,
								row: 3,
							},
						},
					},
					{
						symbol: 'H2',
						win: 3000,
						positions: [
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
								reel: 1,
								row: 5,
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
								reel: 5,
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 6,
							clusterMult: 1,
							winWithoutMult: 500,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 79,
				type: 'updateTumbleWin',
				amount: 8750,
			},
			{
				index: 80,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
							name: 'H4',
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
					],
					[
						{
							name: 'H4',
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
					[
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
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
			},
			{
				index: 81,
				type: 'updateGlobalMult',
				globalMult: 7,
			},
			{
				index: 82,
				type: 'winInfo',
				totalWin: 910,
				wins: [
					{
						symbol: 'H3',
						win: 910,
						positions: [
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
								reel: 5,
								row: 2,
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
						meta: {
							globalMult: 7,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 83,
				type: 'updateTumbleWin',
				amount: 9660,
			},
			{
				index: 84,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[],
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
							name: 'H2',
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
						reel: 2,
						row: 1,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
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
						reel: 5,
						row: 2,
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
			},
			{
				index: 85,
				type: 'updateGlobalMult',
				globalMult: 8,
			},
			{
				index: 86,
				type: 'setWin',
				amount: 9660,
				winLevel: 8,
			},
			{
				index: 87,
				type: 'setTotalWin',
				amount: 15030,
			},
			{
				index: 88,
				type: 'updateFreeSpin',
				amount: 6,
				total: 10,
			},
			{
				index: 89,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 90,
				type: 'reveal',
				board: [
					[
						{
							name: 'L2',
						},
						{
							name: 'H2',
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
							name: 'H4',
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
							name: 'L3',
						},
					],
					[
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
					],
					[
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
							name: 'L1',
						},
						{
							name: 'L3',
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
							name: 'H2',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [229, 96, 216, 125, 35, 6],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 91,
				type: 'winInfo',
				totalWin: 350,
				wins: [
					{
						symbol: 'L2',
						win: 350,
						positions: [
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
								reel: 2,
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
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 350,
							overlay: {
								reel: 2,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 92,
				type: 'updateTumbleWin',
				amount: 350,
			},
			{
				index: 93,
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
					[
						{
							name: 'L2',
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
							name: 'H3',
						},
						{
							name: 'L3',
						},
					],
					[],
					[],
					[
						{
							name: 'H4',
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
						row: 2,
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
						reel: 2,
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
						row: 5,
					},
				],
			},
			{
				index: 94,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 95,
				type: 'winInfo',
				totalWin: 1000,
				wins: [
					{
						symbol: 'H2',
						win: 1000,
						positions: [
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
								row: 5,
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
							{
								reel: 5,
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 500,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 96,
				type: 'updateTumbleWin',
				amount: 1350,
			},
			{
				index: 97,
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
					[
						{
							name: 'L2',
						},
					],
					[],
					[
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
						{
							name: 'H2',
						},
						{
							name: 'H4',
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
						row: 5,
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
					{
						reel: 5,
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 98,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 99,
				type: 'setWin',
				amount: 1350,
				winLevel: 5,
			},
			{
				index: 100,
				type: 'setTotalWin',
				amount: 16380,
			},
			{
				index: 101,
				type: 'updateFreeSpin',
				amount: 7,
				total: 10,
			},
			{
				index: 102,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 103,
				type: 'reveal',
				board: [
					[
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
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
							name: 'L1',
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
							name: 'H1',
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
							name: 'H4',
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
							name: 'H3',
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
				],
				paddingPositions: [188, 232, 217, 28, 246, 152],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 104,
				type: 'winInfo',
				totalWin: 80,
				wins: [
					{
						symbol: 'L3',
						win: 80,
						positions: [
							{
								reel: 1,
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
								reel: 2,
								row: 2,
							},
							{
								reel: 2,
								row: 3,
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
								reel: 4,
								row: 3,
							},
							{
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 80,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 105,
				type: 'updateTumbleWin',
				amount: 80,
			},
			{
				index: 106,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'L3',
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
					],
					[],
				],
				explodingSymbols: [
					{
						reel: 1,
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
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
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
						reel: 4,
						row: 3,
					},
					{
						reel: 4,
						row: 5,
					},
				],
			},
			{
				index: 107,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 108,
				type: 'winInfo',
				totalWin: 80,
				wins: [
					{
						symbol: 'L2',
						win: 80,
						positions: [
							{
								reel: 0,
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
								reel: 4,
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
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 109,
				type: 'updateTumbleWin',
				amount: 160,
			},
			{
				index: 110,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H3',
						},
					],
					[],
					[
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
					],
					[],
					[
						{
							name: 'L1',
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
							name: 'H3',
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
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 4,
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
			},
			{
				index: 111,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 112,
				type: 'winInfo',
				totalWin: 390,
				wins: [
					{
						symbol: 'H3',
						win: 390,
						positions: [
							{
								reel: 0,
								row: 2,
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
								reel: 3,
								row: 5,
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
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 113,
				type: 'updateTumbleWin',
				amount: 550,
			},
			{
				index: 114,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H3',
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
							name: 'L3',
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
				explodingSymbols: [
					{
						reel: 0,
						row: 2,
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
						reel: 3,
						row: 5,
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
			},
			{
				index: 115,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 116,
				type: 'winInfo',
				totalWin: 1000,
				wins: [
					{
						symbol: 'H4',
						win: 1000,
						positions: [
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
								reel: 3,
								row: 2,
							},
							{
								reel: 3,
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
								reel: 5,
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 117,
				type: 'updateTumbleWin',
				amount: 1550,
			},
			{
				index: 118,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H3',
						},
						{
							name: 'L1',
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
							name: 'M',
							multiplier: 2,
						},
					],
					[
						{
							name: 'H2',
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
						reel: 3,
						row: 5,
					},
					{
						reel: 4,
						row: 2,
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
			},
			{
				index: 119,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 120,
				type: 'winInfo',
				totalWin: 300,
				wins: [
					{
						symbol: 'L1',
						win: 300,
						positions: [
							{
								reel: 1,
								row: 1,
							},
							{
								reel: 1,
								row: 4,
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
								row: 2,
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
						meta: {
							globalMult: 5,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 121,
				type: 'updateTumbleWin',
				amount: 1850,
			},
			{
				index: 122,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
					],
					[],
					[],
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
						row: 2,
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
			},
			{
				index: 123,
				type: 'updateGlobalMult',
				globalMult: 6,
			},
			{
				index: 124,
				type: 'winInfo',
				totalWin: 3000,
				wins: [
					{
						symbol: 'H2',
						win: 3000,
						positions: [
							{
								reel: 0,
								row: 3,
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
								row: 1,
							},
							{
								reel: 5,
								row: 2,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 6,
							clusterMult: 1,
							winWithoutMult: 500,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 125,
				type: 'updateTumbleWin',
				amount: 4850,
			},
			{
				index: 126,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L2',
						},
					],
					[
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
							name: 'H4',
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
						row: 3,
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
						row: 1,
					},
					{
						reel: 5,
						row: 2,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 127,
				type: 'updateGlobalMult',
				globalMult: 7,
			},
			{
				index: 128,
				type: 'winInfo',
				totalWin: 140,
				wins: [
					{
						symbol: 'L3',
						win: 140,
						positions: [
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
								reel: 2,
								row: 4,
							},
							{
								reel: 3,
								row: 4,
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
						meta: {
							globalMult: 7,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 129,
				type: 'updateTumbleWin',
				amount: 4990,
			},
			{
				index: 130,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'M',
							multiplier: 2,
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
							name: 'M',
							multiplier: 5,
						},
					],
					[
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
					],
					[],
				],
				explodingSymbols: [
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
						reel: 2,
						row: 4,
					},
					{
						reel: 3,
						row: 4,
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
			},
			{
				index: 131,
				type: 'updateGlobalMult',
				globalMult: 8,
			},
			{
				index: 132,
				type: 'winInfo',
				totalWin: 5600,
				wins: [
					{
						symbol: 'H3',
						win: 5600,
						positions: [
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
								reel: 4,
								row: 1,
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
						meta: {
							globalMult: 8,
							clusterMult: 1,
							winWithoutMult: 700,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 133,
				type: 'updateTumbleWin',
				amount: 10590,
			},
			{
				index: 134,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
							name: 'L2',
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
							name: 'H3',
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
					[
						{
							name: 'M',
							multiplier: 7,
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
						reel: 4,
						row: 1,
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
			},
			{
				index: 135,
				type: 'updateGlobalMult',
				globalMult: 9,
			},
			{
				index: 136,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 1,
							row: 3,
							multiplier: 5,
						},
						{
							reel: 2,
							row: 4,
							multiplier: 5,
						},
						{
							reel: 3,
							row: 4,
							multiplier: 2,
						},
					],
				},
				winInfo: {
					tumbleWin: 10590,
					boardMult: 12,
					totalWin: 127080,
				},
			},
			{
				index: 137,
				type: 'updateTumbleWin',
				amount: 127080,
			},
			{
				index: 138,
				type: 'setWin',
				amount: 127080,
				winLevel: 9,
			},
			{
				index: 139,
				type: 'setTotalWin',
				amount: 143460,
			},
			{
				index: 140,
				type: 'updateFreeSpin',
				amount: 8,
				total: 10,
			},
			{
				index: 141,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 142,
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
							name: 'M',
							multiplier: 4,
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
							name: 'H3',
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
							name: 'H3',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							multiplier: 2,
						},
						{
							name: 'L3',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							multiplier: 2,
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
							name: 'L2',
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
							name: 'H4',
						},
					],
				],
				paddingPositions: [234, 4, 128, 21, 146, 127],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 143,
				type: 'winInfo',
				totalWin: 80,
				wins: [
					{
						symbol: 'L3',
						win: 80,
						positions: [
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
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 80,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 144,
				type: 'updateTumbleWin',
				amount: 80,
			},
			{
				index: 145,
				type: 'tumbleBoard',
				newSymbols: [
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
					],
					[],
					[
						{
							name: 'H3',
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
							name: 'H4',
						},
						{
							name: 'H1',
						},
						{
							name: 'H1',
						},
					],
					[],
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
						row: 5,
					},
				],
			},
			{
				index: 146,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 147,
				type: 'winInfo',
				totalWin: 400,
				wins: [
					{
						symbol: 'H2',
						win: 400,
						positions: [
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
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 148,
				type: 'updateTumbleWin',
				amount: 480,
			},
			{
				index: 149,
				type: 'tumbleBoard',
				newSymbols: [
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
					[],
					[
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
			},
			{
				index: 150,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 151,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 0,
							row: 4,
							multiplier: 4,
						},
						{
							reel: 3,
							row: 3,
							multiplier: 2,
						},
						{
							reel: 4,
							row: 4,
							multiplier: 2,
						},
					],
				},
				winInfo: {
					tumbleWin: 480,
					boardMult: 8,
					totalWin: 3840,
				},
			},
			{
				index: 152,
				type: 'updateTumbleWin',
				amount: 3840,
			},
			{
				index: 153,
				type: 'setWin',
				amount: 3840,
				winLevel: 7,
			},
			{
				index: 154,
				type: 'setTotalWin',
				amount: 147300,
			},
			{
				index: 155,
				type: 'updateFreeSpin',
				amount: 9,
				total: 10,
			},
			{
				index: 156,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 157,
				type: 'reveal',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'H4',
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
							name: 'L2',
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
							name: 'H4',
						},
						{
							name: 'H2',
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
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'H1',
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
					],
					[
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
							name: 'H2',
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
				],
				paddingPositions: [195, 23, 179, 148, 37, 44],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 158,
				type: 'winInfo',
				totalWin: 200,
				wins: [
					{
						symbol: 'H2',
						win: 200,
						positions: [
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
								reel: 3,
								row: 3,
							},
							{
								reel: 5,
								row: 3,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 159,
				type: 'updateTumbleWin',
				amount: 200,
			},
			{
				index: 160,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
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
							name: 'H2',
						},
					],
					[],
					[
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
					],
					[],
					[
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
						row: 1,
					},
					{
						reel: 1,
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
						row: 1,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 5,
						row: 3,
					},
				],
			},
			{
				index: 161,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 162,
				type: 'setWin',
				amount: 200,
				winLevel: 4,
			},
			{
				index: 163,
				type: 'setTotalWin',
				amount: 147500,
			},
			{
				index: 164,
				type: 'updateFreeSpin',
				amount: 10,
				total: 10,
			},
			{
				index: 165,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 166,
				type: 'reveal',
				board: [
					[
						{
							name: 'H4',
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
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H4',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
					],
					[
						{
							name: 'H4',
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
							name: 'H3',
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
							name: 'H4',
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
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [184, 245, 10, 13, 69, 142],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 167,
				type: 'winInfo',
				totalWin: 120,
				wins: [
					{
						symbol: 'L2',
						win: 120,
						positions: [
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
								reel: 2,
								row: 2,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 120,
							overlay: {
								reel: 2,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 168,
				type: 'updateTumbleWin',
				amount: 120,
			},
			{
				index: 169,
				type: 'tumbleBoard',
				newSymbols: [
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
					],
					[],
					[
						{
							name: 'H3',
						},
						{
							name: 'H1',
						},
					],
					[],
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
						reel: 2,
						row: 2,
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
			},
			{
				index: 170,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 171,
				type: 'setWin',
				amount: 120,
				winLevel: 3,
			},
			{
				index: 172,
				type: 'setTotalWin',
				amount: 147620,
			},
			{
				index: 173,
				type: 'freeSpinEnd',
				amount: 147620,
				winLevel: 9,
			},
			{
				index: 174,
				type: 'finalWin',
				amount: 147620,
			},
		],
		criteria: 'freegame',
		baseGameWins: 0.0,
		freeGameWins: 1476.2,
	},
	{
		id: 10,
		payoutMultiplier: 11.0,
		events: [
			{
				index: 0,
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
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
							name: 'L1',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H1',
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
					[
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
					],
					[
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
							name: 'H1',
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
					],
				],
				paddingPositions: [109, 123, 147, 3, 52, 118],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 650,
				wins: [
					{
						symbol: 'L2',
						win: 350,
						positions: [
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
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 350,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
					{
						symbol: 'H1',
						win: 300,
						positions: [
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 300,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 650,
			},
			{
				index: 3,
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
							name: 'L1',
						},
						{
							name: 'H2',
						},
					],
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
							name: 'L3',
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
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H3',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
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
						row: 1,
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
						row: 4,
					},
					{
						reel: 4,
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
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
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
			},
			{
				index: 4,
				type: 'winInfo',
				totalWin: 100,
				wins: [
					{
						symbol: 'H4',
						win: 100,
						positions: [
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
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 5,
				type: 'updateTumbleWin',
				amount: 750,
			},
			{
				index: 6,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
					],
					[],
					[
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
					],
					[],
					[
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
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
			},
			{
				index: 7,
				type: 'winInfo',
				totalWin: 330,
				wins: [
					{
						symbol: 'H3',
						win: 130,
						positions: [
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
								reel: 2,
								row: 4,
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
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
					{
						symbol: 'H2',
						win: 200,
						positions: [
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
								row: 2,
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
								reel: 5,
								row: 2,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 8,
				type: 'updateTumbleWin',
				amount: 1080,
			},
			{
				index: 9,
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
							name: 'H3',
						},
					],
					[
						{
							name: 'H4',
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
							name: 'H4',
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
							name: 'L3',
						},
						{
							name: 'L2',
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
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
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
						reel: 3,
						row: 5,
					},
					{
						reel: 3,
						row: 4,
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
						row: 2,
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
			},
			{
				index: 10,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L3',
						win: 20,
						positions: [
							{
								reel: 0,
								row: 1,
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
								row: 2,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 11,
				type: 'updateTumbleWin',
				amount: 1100,
			},
			{
				index: 12,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
						{
							name: 'S',
							scatter: true,
						},
					],
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
							name: 'L2',
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
						reel: 0,
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
						row: 2,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 13,
				type: 'setWin',
				amount: 1100,
				winLevel: 5,
			},
			{
				index: 14,
				type: 'setTotalWin',
				amount: 1100,
			},
			{
				index: 15,
				type: 'finalWin',
				amount: 1100,
			},
		],
		criteria: 'basegame',
		baseGameWins: 11.0,
		freeGameWins: 0.0,
	},
	{
		id: 11,
		payoutMultiplier: 0.0,
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
							name: 'L3',
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
							name: 'H3',
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
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'H3',
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
							name: 'H3',
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
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
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
							name: 'H3',
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
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H2',
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
							name: 'H1',
						},
					],
				],
				paddingPositions: [143, 219, 236, 199, 119, 115],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 12,
		payoutMultiplier: 38.6,
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
							name: 'L3',
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
							name: 'S',
							scatter: true,
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
							name: 'S',
							scatter: true,
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
							name: 'L3',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'H3',
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
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H1',
						},
					],
				],
				paddingPositions: [86, 191, 100, 214, 47, 100],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 1, 2, 3],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'freeSpinTrigger',
				totalFs: 10,
				positions: [
					{
						reel: 1,
						row: 5,
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
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 2,
					},
				],
			},
			{
				index: 3,
				type: 'updateFreeSpin',
				amount: 1,
				total: 10,
			},
			{
				index: 4,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 5,
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'H3',
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
							name: 'L1',
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
							name: 'M',
							multiplier: 4,
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
							name: 'H3',
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
							name: 'L2',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
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
				],
				paddingPositions: [15, 147, 209, 51, 19, 131],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 6,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L3',
						win: 20,
						positions: [
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
								row: 4,
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
								row: 4,
							},
							{
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 7,
				type: 'updateTumbleWin',
				amount: 20,
			},
			{
				index: 8,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
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
							name: 'H2',
						},
					],
					[
						{
							name: 'H3',
						},
					],
					[],
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
					],
					[],
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
						row: 4,
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
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
				],
			},
			{
				index: 9,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 10,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 2,
							row: 2,
							multiplier: 4,
						},
					],
				},
				winInfo: {
					tumbleWin: 20,
					boardMult: 4,
					totalWin: 80,
				},
			},
			{
				index: 11,
				type: 'updateTumbleWin',
				amount: 80,
			},
			{
				index: 12,
				type: 'setWin',
				amount: 80,
				winLevel: 2,
			},
			{
				index: 13,
				type: 'setTotalWin',
				amount: 80,
			},
			{
				index: 14,
				type: 'updateFreeSpin',
				amount: 2,
				total: 10,
			},
			{
				index: 15,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 16,
				type: 'reveal',
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
							name: 'L3',
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
							name: 'L3',
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
							name: 'M',
							multiplier: 2,
						},
						{
							name: 'L3',
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
					[
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
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
							name: 'L1',
						},
					],
				],
				paddingPositions: [103, 204, 215, 22, 4, 235],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 17,
				type: 'winInfo',
				totalWin: 120,
				wins: [
					{
						symbol: 'L3',
						win: 80,
						positions: [
							{
								reel: 0,
								row: 1,
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
								row: 3,
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
								reel: 3,
								row: 2,
							},
							{
								reel: 5,
								row: 3,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 80,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
					{
						symbol: 'L2',
						win: 40,
						positions: [
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
								row: 4,
							},
							{
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 18,
				type: 'updateTumbleWin',
				amount: 120,
			},
			{
				index: 19,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
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
							name: 'M',
							multiplier: 4,
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
							name: 'H3',
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
							name: 'H1',
						},
					],
					[
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
						row: 1,
					},
					{
						reel: 1,
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
						row: 4,
					},
					{
						reel: 2,
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
				],
			},
			{
				index: 20,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 21,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 3,
							row: 2,
							multiplier: 2,
						},
					],
				},
				winInfo: {
					tumbleWin: 120,
					boardMult: 2,
					totalWin: 240,
				},
			},
			{
				index: 22,
				type: 'updateTumbleWin',
				amount: 240,
			},
			{
				index: 23,
				type: 'setWin',
				amount: 240,
				winLevel: 4,
			},
			{
				index: 24,
				type: 'setTotalWin',
				amount: 320,
			},
			{
				index: 25,
				type: 'updateFreeSpin',
				amount: 3,
				total: 10,
			},
			{
				index: 26,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 27,
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'L1',
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
							name: 'H2',
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
							name: 'L1',
						},
					],
					[
						{
							name: 'H2',
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
							name: 'L3',
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L2',
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
				paddingPositions: [108, 242, 113, 28, 169, 108],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 28,
				type: 'winInfo',
				totalWin: 120,
				wins: [
					{
						symbol: 'L2',
						win: 120,
						positions: [
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
								reel: 5,
								row: 2,
							},
							{
								reel: 5,
								row: 3,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 120,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 29,
				type: 'updateTumbleWin',
				amount: 120,
			},
			{
				index: 30,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
							name: 'H2',
						},
						{
							name: 'L3',
						},
					],
					[],
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
						{
							name: 'L2',
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
						reel: 1,
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
						reel: 4,
						row: 1,
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
			},
			{
				index: 31,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 32,
				type: 'winInfo',
				totalWin: 160,
				wins: [
					{
						symbol: 'L3',
						win: 160,
						positions: [
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
								row: 5,
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
								reel: 4,
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
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 80,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 33,
				type: 'updateTumbleWin',
				amount: 280,
			},
			{
				index: 34,
				type: 'tumbleBoard',
				newSymbols: [
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
						row: 2,
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
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 35,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 36,
				type: 'winInfo',
				totalWin: 390,
				wins: [
					{
						symbol: 'H3',
						win: 390,
						positions: [
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
								reel: 0,
								row: 4,
							},
							{
								reel: 0,
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
								reel: 3,
								row: 5,
							},
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 37,
				type: 'updateTumbleWin',
				amount: 670,
			},
			{
				index: 38,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
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
					],
					[],
					[],
					[
						{
							name: 'L3',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
						},
					],
					[],
					[],
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
						reel: 0,
						row: 4,
					},
					{
						reel: 0,
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
						reel: 3,
						row: 5,
					},
				],
			},
			{
				index: 39,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 40,
				type: 'setWin',
				amount: 670,
				winLevel: 5,
			},
			{
				index: 41,
				type: 'setTotalWin',
				amount: 990,
			},
			{
				index: 42,
				type: 'updateFreeSpin',
				amount: 4,
				total: 10,
			},
			{
				index: 43,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 44,
				type: 'reveal',
				board: [
					[
						{
							name: 'H1',
						},
						{
							name: 'H2',
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
							name: 'H2',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
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
							name: 'H2',
						},
						{
							name: 'H2',
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
					],
					[
						{
							name: 'H3',
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [138, 80, 225, 159, 142, 41],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 45,
				type: 'winInfo',
				totalWin: 100,
				wins: [
					{
						symbol: 'H4',
						win: 100,
						positions: [
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
								reel: 5,
								row: 1,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 46,
				type: 'updateTumbleWin',
				amount: 100,
			},
			{
				index: 47,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
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
							name: 'L2',
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
							name: 'H2',
						},
						{
							name: 'H3',
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
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 48,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 49,
				type: 'setWin',
				amount: 100,
				winLevel: 3,
			},
			{
				index: 50,
				type: 'setTotalWin',
				amount: 1090,
			},
			{
				index: 51,
				type: 'updateFreeSpin',
				amount: 5,
				total: 10,
			},
			{
				index: 52,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 53,
				type: 'reveal',
				board: [
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
							name: 'L2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
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
							name: 'H2',
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
					],
					[
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'H1',
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
							name: 'H2',
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
							name: 'H3',
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
							name: 'H4',
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
					],
				],
				paddingPositions: [226, 13, 142, 43, 129, 208],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 54,
				type: 'winInfo',
				totalWin: 300,
				wins: [
					{
						symbol: 'H2',
						win: 200,
						positions: [
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 1,
								row: 1,
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
								row: 4,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
					{
						symbol: 'H4',
						win: 100,
						positions: [
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
								row: 2,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 55,
				type: 'updateTumbleWin',
				amount: 300,
			},
			{
				index: 56,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
							name: 'L2',
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
					[
						{
							name: 'H2',
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
							name: 'L1',
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
						reel: 3,
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
						reel: 4,
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
						reel: 4,
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
					{
						reel: 5,
						row: 2,
					},
				],
			},
			{
				index: 57,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 58,
				type: 'winInfo',
				totalWin: 1340,
				wins: [
					{
						symbol: 'H3',
						win: 640,
						positions: [
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
								reel: 2,
								row: 4,
							},
							{
								reel: 3,
								row: 1,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 320,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
					{
						symbol: 'L2',
						win: 700,
						positions: [
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
								reel: 5,
								row: 1,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 350,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 59,
				type: 'updateTumbleWin',
				amount: 1640,
			},
			{
				index: 60,
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
							name: 'L3',
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
							name: 'L1',
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
						row: 4,
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
						reel: 4,
						row: 3,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 61,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 62,
				type: 'setWin',
				amount: 1640,
				winLevel: 6,
			},
			{
				index: 63,
				type: 'setTotalWin',
				amount: 2730,
			},
			{
				index: 64,
				type: 'updateFreeSpin',
				amount: 6,
				total: 10,
			},
			{
				index: 65,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 66,
				type: 'reveal',
				board: [
					[
						{
							name: 'L1',
						},
						{
							name: 'H2',
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
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
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
				],
				paddingPositions: [155, 107, 171, 152, 120, 122],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 67,
				type: 'winInfo',
				totalWin: 130,
				wins: [
					{
						symbol: 'H3',
						win: 130,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 2,
								row: 2,
							},
							{
								reel: 4,
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
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 68,
				type: 'updateTumbleWin',
				amount: 130,
			},
			{
				index: 69,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L2',
						},
						{
							name: 'L1',
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
						row: 3,
					},
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 2,
						row: 2,
					},
					{
						reel: 4,
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
						row: 4,
					},
				],
			},
			{
				index: 70,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 71,
				type: 'winInfo',
				totalWin: 880,
				wins: [
					{
						symbol: 'L1',
						win: 800,
						positions: [
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
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 400,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
					{
						symbol: 'L2',
						win: 80,
						positions: [
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
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 72,
				type: 'updateTumbleWin',
				amount: 1010,
			},
			{
				index: 73,
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
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
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
							name: 'H4',
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
					],
					[
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
						row: 4,
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
						row: 4,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 74,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 75,
				type: 'setWin',
				amount: 1010,
				winLevel: 5,
			},
			{
				index: 76,
				type: 'setTotalWin',
				amount: 3740,
			},
			{
				index: 77,
				type: 'updateFreeSpin',
				amount: 7,
				total: 10,
			},
			{
				index: 78,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 79,
				type: 'reveal',
				board: [
					[
						{
							name: 'H1',
						},
						{
							name: 'H2',
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
							name: 'L3',
						},
						{
							name: 'L3',
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
					],
					[
						{
							name: 'L2',
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
							name: 'H4',
						},
					],
				],
				paddingPositions: [138, 7, 164, 185, 21, 247],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 80,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L3',
						win: 20,
						positions: [
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
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 81,
				type: 'updateTumbleWin',
				amount: 20,
			},
			{
				index: 82,
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
							name: 'H2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
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
						row: 2,
					},
					{
						reel: 2,
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
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 83,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 84,
				type: 'setWin',
				amount: 20,
				winLevel: 2,
			},
			{
				index: 85,
				type: 'setTotalWin',
				amount: 3760,
			},
			{
				index: 86,
				type: 'updateFreeSpin',
				amount: 8,
				total: 10,
			},
			{
				index: 87,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 88,
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
							name: 'H2',
						},
					],
					[
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							multiplier: 5,
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
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'H1',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
				],
				paddingPositions: [201, 169, 66, 91, 240, 92],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 89,
				type: 'setTotalWin',
				amount: 3760,
			},
			{
				index: 90,
				type: 'updateFreeSpin',
				amount: 9,
				total: 10,
			},
			{
				index: 91,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 92,
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
							name: 'H3',
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
						{
							name: 'H2',
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
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							multiplier: 2,
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'L2',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [79, 29, 64, 60, 85, 93],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 93,
				type: 'winInfo',
				totalWin: 100,
				wins: [
					{
						symbol: 'H4',
						win: 100,
						positions: [
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
								row: 2,
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
								row: 1,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 94,
				type: 'updateTumbleWin',
				amount: 100,
			},
			{
				index: 95,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
					],
					[],
					[
						{
							name: 'L2',
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
							name: 'L2',
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
						row: 2,
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
						row: 1,
					},
				],
			},
			{
				index: 96,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 97,
				type: 'setWin',
				amount: 100,
				winLevel: 3,
			},
			{
				index: 98,
				type: 'setTotalWin',
				amount: 3860,
			},
			{
				index: 99,
				type: 'updateFreeSpin',
				amount: 10,
				total: 10,
			},
			{
				index: 100,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 101,
				type: 'reveal',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'H3',
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
						{
							name: 'L1',
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'H1',
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
							name: 'H2',
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
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [195, 128, 45, 7, 97, 210],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 102,
				type: 'setTotalWin',
				amount: 3860,
			},
			{
				index: 103,
				type: 'freeSpinEnd',
				amount: 3860,
				winLevel: 5,
			},
			{
				index: 104,
				type: 'finalWin',
				amount: 3860,
			},
		],
		criteria: 'winCap',
		baseGameWins: 0.0,
		freeGameWins: 38.6,
	},
	{
		id: 13,
		payoutMultiplier: 100.4,
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
							name: 'H1',
						},
						{
							name: 'S',
							scatter: true,
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
					],
					[
						{
							name: 'H4',
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
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H4',
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
							name: 'H3',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H4',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H1',
						},
					],
				],
				paddingPositions: [17, 190, 75, 217, 45, 100],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 1, 2],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'freeSpinTrigger',
				totalFs: 8,
				positions: [
					{
						reel: 0,
						row: 2,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 2,
					},
				],
			},
			{
				index: 3,
				type: 'updateFreeSpin',
				amount: 1,
				total: 8,
			},
			{
				index: 4,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 5,
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L1',
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
						{
							name: 'L2',
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
							name: 'L3',
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
							name: 'H1',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'H3',
						},
					],
				],
				paddingPositions: [32, 214, 175, 155, 3, 70],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 6,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 7,
				type: 'updateFreeSpin',
				amount: 2,
				total: 8,
			},
			{
				index: 8,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 9,
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
							name: 'H2',
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
					],
					[
						{
							name: 'H3',
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
							name: 'H4',
						},
						{
							name: 'H1',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'L1',
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
							name: 'L3',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [21, 223, 203, 207, 227, 206],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 10,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 11,
				type: 'updateFreeSpin',
				amount: 3,
				total: 8,
			},
			{
				index: 12,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 13,
				type: 'reveal',
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
							name: 'H3',
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
							name: 'L2',
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
							name: 'L2',
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
							name: 'L1',
						},
						{
							name: 'H2',
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
							name: 'L2',
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
							name: 'L3',
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'L1',
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
							name: 'L1',
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
							name: 'L2',
						},
					],
				],
				paddingPositions: [115, 190, 111, 243, 35, 203],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 14,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 15,
				type: 'updateFreeSpin',
				amount: 4,
				total: 8,
			},
			{
				index: 16,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 17,
				type: 'reveal',
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
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'M',
							multiplier: 4,
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
							name: 'H3',
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
							name: 'H2',
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
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [91, 217, 59, 124, 229, 193],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 18,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 19,
				type: 'updateFreeSpin',
				amount: 5,
				total: 8,
			},
			{
				index: 20,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 21,
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
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'L2',
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
							name: 'H2',
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
						{
							name: 'M',
							multiplier: 4,
						},
						{
							name: 'H4',
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
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [171, 93, 227, 110, 163, 80],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 22,
				type: 'winInfo',
				totalWin: 120,
				wins: [
					{
						symbol: 'L2',
						win: 120,
						positions: [
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
								row: 4,
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
								row: 2,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 120,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 23,
				type: 'updateTumbleWin',
				amount: 120,
			},
			{
				index: 24,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
							name: 'H3',
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
						row: 2,
					},
					{
						reel: 2,
						row: 4,
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
						row: 2,
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
			},
			{
				index: 25,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 26,
				type: 'winInfo',
				totalWin: 400,
				wins: [
					{
						symbol: 'H2',
						win: 400,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 0,
								row: 4,
							},
							{
								reel: 2,
								row: 3,
							},
							{
								reel: 2,
								row: 5,
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
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 27,
				type: 'updateTumbleWin',
				amount: 520,
			},
			{
				index: 28,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L2',
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
							name: 'L1',
						},
					],
					[],
					[],
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
							name: 'H3',
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
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 5,
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
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 29,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 30,
				type: 'winInfo',
				totalWin: 300,
				wins: [
					{
						symbol: 'H4',
						win: 300,
						positions: [
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
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 31,
				type: 'updateTumbleWin',
				amount: 820,
			},
			{
				index: 32,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
					[],
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
					],
					[],
					[
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
						reel: 1,
						row: 2,
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
				],
			},
			{
				index: 33,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 34,
				type: 'winInfo',
				totalWin: 480,
				wins: [
					{
						symbol: 'L2',
						win: 480,
						positions: [
							{
								reel: 0,
								row: 1,
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
								row: 3,
							},
							{
								reel: 3,
								row: 4,
							},
							{
								reel: 4,
								row: 2,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 120,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 35,
				type: 'updateTumbleWin',
				amount: 1300,
			},
			{
				index: 36,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H1',
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
					],
					[
						{
							name: 'L3',
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
					],
					[
						{
							name: 'L3',
						},
					],
					[],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
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
						row: 3,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 4,
						row: 2,
					},
				],
			},
			{
				index: 37,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 38,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 3,
							row: 5,
							multiplier: 4,
						},
					],
				},
				winInfo: {
					tumbleWin: 1300,
					boardMult: 4,
					totalWin: 5200,
				},
			},
			{
				index: 39,
				type: 'updateTumbleWin',
				amount: 5200,
			},
			{
				index: 40,
				type: 'setWin',
				amount: 5200,
				winLevel: 8,
			},
			{
				index: 41,
				type: 'setTotalWin',
				amount: 5200,
			},
			{
				index: 42,
				type: 'updateFreeSpin',
				amount: 6,
				total: 8,
			},
			{
				index: 43,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 44,
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H2',
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
							name: 'H4',
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
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
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
					],
				],
				paddingPositions: [152, 204, 162, 67, 176, 114],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 45,
				type: 'winInfo',
				totalWin: 120,
				wins: [
					{
						symbol: 'L2',
						win: 120,
						positions: [
							{
								reel: 0,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 120,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 46,
				type: 'updateTumbleWin',
				amount: 120,
			},
			{
				index: 47,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
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
							name: 'H4',
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
							name: 'H4',
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
					],
				],
				explodingSymbols: [
					{
						reel: 0,
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
			},
			{
				index: 48,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 49,
				type: 'winInfo',
				totalWin: 40,
				wins: [
					{
						symbol: 'L3',
						win: 40,
						positions: [
							{
								reel: 0,
								row: 1,
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
								row: 4,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 50,
				type: 'updateTumbleWin',
				amount: 160,
			},
			{
				index: 51,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
						},
					],
					[
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
					],
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
							name: 'L1',
						},
					],
					[],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
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
						row: 4,
					},
				],
			},
			{
				index: 52,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 53,
				type: 'winInfo',
				totalWin: 300,
				wins: [
					{
						symbol: 'H4',
						win: 300,
						positions: [
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
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 54,
				type: 'updateTumbleWin',
				amount: 460,
			},
			{
				index: 55,
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
							name: 'L1',
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
					],
				],
				explodingSymbols: [
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
			},
			{
				index: 56,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 57,
				type: 'winInfo',
				totalWin: 1600,
				wins: [
					{
						symbol: 'L1',
						win: 1600,
						positions: [
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
								row: 5,
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
								reel: 4,
								row: 4,
							},
							{
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 400,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 58,
				type: 'updateTumbleWin',
				amount: 2060,
			},
			{
				index: 59,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
					],
					[
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
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[],
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
						row: 5,
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
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
				],
			},
			{
				index: 60,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 61,
				type: 'winInfo',
				totalWin: 1000,
				wins: [
					{
						symbol: 'H2',
						win: 1000,
						positions: [
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
								row: 4,
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
								row: 2,
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
						meta: {
							globalMult: 5,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 62,
				type: 'updateTumbleWin',
				amount: 3060,
			},
			{
				index: 63,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H4',
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
					[],
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
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
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
						row: 5,
					},
					{
						reel: 1,
						row: 4,
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
						row: 2,
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
			},
			{
				index: 64,
				type: 'updateGlobalMult',
				globalMult: 6,
			},
			{
				index: 65,
				type: 'winInfo',
				totalWin: 240,
				wins: [
					{
						symbol: 'L2',
						win: 240,
						positions: [
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
								reel: 3,
								row: 2,
							},
							{
								reel: 4,
								row: 2,
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
						meta: {
							globalMult: 6,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 66,
				type: 'updateTumbleWin',
				amount: 3300,
			},
			{
				index: 67,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'L2',
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
							name: 'L2',
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
					],
				],
				explodingSymbols: [
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
						reel: 3,
						row: 2,
					},
					{
						reel: 4,
						row: 2,
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
			},
			{
				index: 68,
				type: 'updateGlobalMult',
				globalMult: 7,
			},
			{
				index: 69,
				type: 'winInfo',
				totalWin: 140,
				wins: [
					{
						symbol: 'L3',
						win: 140,
						positions: [
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
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 7,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 70,
				type: 'updateTumbleWin',
				amount: 3440,
			},
			{
				index: 71,
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
							name: 'L3',
						},
					],
					[],
					[
						{
							name: 'L2',
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
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 72,
				type: 'updateGlobalMult',
				globalMult: 8,
			},
			{
				index: 73,
				type: 'winInfo',
				totalWin: 1040,
				wins: [
					{
						symbol: 'H3',
						win: 1040,
						positions: [
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
								row: 5,
							},
						],
						meta: {
							globalMult: 8,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 74,
				type: 'updateTumbleWin',
				amount: 4480,
			},
			{
				index: 75,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
						row: 5,
					},
				],
			},
			{
				index: 76,
				type: 'updateGlobalMult',
				globalMult: 9,
			},
			{
				index: 77,
				type: 'winInfo',
				totalWin: 360,
				wins: [
					{
						symbol: 'L2',
						win: 360,
						positions: [
							{
								reel: 1,
								row: 2,
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
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 9,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 78,
				type: 'updateTumbleWin',
				amount: 4840,
			},
			{
				index: 79,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H4',
						},
						{
							name: 'L2',
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
							name: 'H4',
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
						row: 4,
					},
					{
						reel: 3,
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
						reel: 4,
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
			},
			{
				index: 80,
				type: 'updateGlobalMult',
				globalMult: 10,
			},
			{
				index: 81,
				type: 'setWin',
				amount: 4840,
				winLevel: 7,
			},
			{
				index: 82,
				type: 'setTotalWin',
				amount: 10040,
			},
			{
				index: 83,
				type: 'updateFreeSpin',
				amount: 7,
				total: 8,
			},
			{
				index: 84,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 85,
				type: 'reveal',
				board: [
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
							name: 'L1',
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
							name: 'L2',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'H2',
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
							name: 'L3',
						},
						{
							name: 'H3',
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
							name: 'H3',
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
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
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
				],
				paddingPositions: [191, 34, 112, 173, 186, 113],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 86,
				type: 'setTotalWin',
				amount: 10040,
			},
			{
				index: 87,
				type: 'updateFreeSpin',
				amount: 8,
				total: 8,
			},
			{
				index: 88,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 89,
				type: 'reveal',
				board: [
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
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
						{
							name: 'L1',
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
							name: 'H3',
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
						{
							name: 'H2',
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
							name: 'L1',
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
							name: 'L2',
						},
						{
							name: 'H2',
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
							name: 'L1',
						},
					],
				],
				paddingPositions: [75, 51, 45, 133, 91, 64],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 90,
				type: 'setTotalWin',
				amount: 10040,
			},
			{
				index: 91,
				type: 'freeSpinEnd',
				amount: 10040,
				winLevel: 7,
			},
			{
				index: 92,
				type: 'finalWin',
				amount: 10040,
			},
		],
		criteria: 'freegame',
		baseGameWins: 0.0,
		freeGameWins: 100.4,
	},
	{
		id: 14,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
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
							name: 'H4',
						},
						{
							name: 'H1',
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
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
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
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'H1',
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
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
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
					],
				],
				paddingPositions: [179, 193, 166, 134, 240, 63],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 15,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
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
							name: 'H2',
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
							name: 'H4',
						},
						{
							name: 'H3',
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
							name: 'H1',
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
						{
							name: 'S',
							scatter: true,
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
							name: 'H3',
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
					],
					[
						{
							name: 'H1',
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
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [94, 61, 29, 86, 119, 181],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 16,
		payoutMultiplier: 0.0,
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
							name: 'H1',
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
						{
							name: 'H3',
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
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'H4',
						},
						{
							name: 'H4',
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
				],
				paddingPositions: [123, 72, 106, 58, 114, 1],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 17,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H3',
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
							name: 'L2',
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
							name: 'L2',
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
							name: 'H1',
						},
						{
							name: 'L1',
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
							name: 'H4',
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
							name: 'H2',
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
							name: 'S',
							scatter: true,
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
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
				],
				paddingPositions: [206, 77, 245, 93, 74, 44],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 18,
		payoutMultiplier: 0.0,
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
							name: 'H3',
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
							name: 'H3',
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
					],
					[
						{
							name: 'H3',
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
							name: 'L1',
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
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'H3',
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
							name: 'H1',
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
							name: 'S',
							scatter: true,
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
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
				],
				paddingPositions: [169, 114, 85, 61, 50, 243],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 19,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
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
							name: 'H1',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'L3',
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
							name: 'L3',
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
							name: 'L1',
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
							name: 'H3',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L3',
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
							name: 'H2',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H2',
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
							name: 'H3',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [200, 229, 133, 30, 130, 51],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 20,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
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
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
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
							name: 'L3',
						},
						{
							name: 'H1',
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
							name: 'L1',
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
							name: 'L3',
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
							name: 'H2',
						},
						{
							name: 'H2',
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
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [175, 201, 196, 225, 231, 38],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 21,
		payoutMultiplier: 0.0,
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
							name: 'H2',
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
							name: 'L2',
						},
					],
					[
						{
							name: 'H3',
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
							name: 'H4',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'H3',
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
							name: 'H1',
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
						{
							name: 'L3',
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
							name: 'L1',
						},
						{
							name: 'H3',
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
				],
				paddingPositions: [176, 107, 162, 72, 122, 215],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 22,
		payoutMultiplier: 0.0,
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
							name: 'H4',
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
							name: 'L1',
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
							name: 'L2',
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
							name: 'H4',
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
						{
							name: 'L3',
						},
					],
				],
				paddingPositions: [35, 62, 6, 156, 114, 47],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 23,
		payoutMultiplier: 9.4,
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
							name: 'L1',
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
							name: 'L2',
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
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'L3',
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
							name: 'L1',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'L3',
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
				paddingPositions: [242, 74, 228, 212, 21, 4],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 540,
				wins: [
					{
						symbol: 'L2',
						win: 40,
						positions: [
							{
								reel: 0,
								row: 5,
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
								row: 3,
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
								reel: 5,
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
					{
						symbol: 'H2',
						win: 500,
						positions: [
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
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 500,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 540,
			},
			{
				index: 3,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
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
						{
							name: 'L1',
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
						reel: 1,
						row: 5,
					},
					{
						reel: 2,
						row: 1,
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
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
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
			},
			{
				index: 4,
				type: 'winInfo',
				totalWin: 250,
				wins: [
					{
						symbol: 'L3',
						win: 250,
						positions: [
							{
								reel: 0,
								row: 1,
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
								row: 5,
							},
							{
								reel: 3,
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
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 5,
				type: 'updateTumbleWin',
				amount: 790,
			},
			{
				index: 6,
				type: 'tumbleBoard',
				newSymbols: [
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
					],
					[],
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
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
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
						reel: 0,
						row: 5,
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
				],
			},
			{
				index: 7,
				type: 'winInfo',
				totalWin: 150,
				wins: [
					{
						symbol: 'L1',
						win: 150,
						positions: [
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
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 150,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 8,
				type: 'updateTumbleWin',
				amount: 940,
			},
			{
				index: 9,
				type: 'tumbleBoard',
				newSymbols: [
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
							name: 'L2',
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
							name: 'H1',
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
							name: 'H3',
						},
					],
					[],
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
						reel: 4,
						row: 1,
					},
					{
						reel: 4,
						row: 2,
					},
				],
			},
			{
				index: 10,
				type: 'setWin',
				amount: 940,
				winLevel: 5,
			},
			{
				index: 11,
				type: 'setTotalWin',
				amount: 940,
			},
			{
				index: 12,
				type: 'finalWin',
				amount: 940,
			},
		],
		criteria: 'basegame',
		baseGameWins: 9.4,
		freeGameWins: 0.0,
	},
	{
		id: 24,
		payoutMultiplier: 0.0,
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'H3',
						},
					],
				],
				paddingPositions: [185, 236, 196, 3, 112, 119],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 25,
		payoutMultiplier: 0.0,
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
						{
							name: 'L3',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
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
							name: 'S',
							scatter: true,
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
							name: 'H4',
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
							name: 'H1',
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
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
						},
						{
							name: 'S',
							scatter: true,
						},
					],
				],
				paddingPositions: [237, 215, 215, 3, 54, 238],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 26,
		payoutMultiplier: 0.0,
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
							name: 'L1',
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
							name: 'H4',
						},
					],
					[
						{
							name: 'H4',
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
							name: 'H4',
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
							name: 'H2',
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
							name: 'L1',
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
							name: 'H1',
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
				],
				paddingPositions: [51, 168, 52, 110, 153, 139],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 27,
		payoutMultiplier: 0.0,
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
							name: 'H3',
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
							name: 'L1',
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
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [211, 138, 85, 64, 95, 213],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 28,
		payoutMultiplier: 3.8,
		events: [
			{
				index: 0,
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
							name: 'H4',
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
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
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
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [33, 139, 152, 182, 45, 57],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L3',
						win: 20,
						positions: [
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
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 20,
			},
			{
				index: 3,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
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
							name: 'H3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
					],
					[],
					[],
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
				],
			},
			{
				index: 4,
				type: 'winInfo',
				totalWin: 40,
				wins: [
					{
						symbol: 'L2',
						win: 40,
						positions: [
							{
								reel: 1,
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
								reel: 5,
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 5,
				type: 'updateTumbleWin',
				amount: 60,
			},
			{
				index: 6,
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
							name: 'H4',
						},
					],
					[],
					[
						{
							name: 'L2',
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
							name: 'L1',
						},
						{
							name: 'L2',
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
						reel: 1,
						row: 5,
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
						reel: 5,
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 7,
				type: 'winInfo',
				totalWin: 320,
				wins: [
					{
						symbol: 'H3',
						win: 320,
						positions: [
							{
								reel: 0,
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
								reel: 2,
								row: 1,
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
								reel: 4,
								row: 2,
							},
							{
								reel: 4,
								row: 3,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 320,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 8,
				type: 'updateTumbleWin',
				amount: 380,
			},
			{
				index: 9,
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
							name: 'H2',
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
							name: 'L2',
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
							name: 'L1',
						},
						{
							name: 'H3',
						},
					],
					[],
				],
				explodingSymbols: [
					{
						reel: 0,
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
						reel: 2,
						row: 1,
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
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
				],
			},
			{
				index: 10,
				type: 'setWin',
				amount: 380,
				winLevel: 4,
			},
			{
				index: 11,
				type: 'setTotalWin',
				amount: 380,
			},
			{
				index: 12,
				type: 'finalWin',
				amount: 380,
			},
		],
		criteria: 'basegame',
		baseGameWins: 3.8,
		freeGameWins: 0.0,
	},
	{
		id: 29,
		payoutMultiplier: 0.0,
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
							name: 'H3',
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
							name: 'H1',
						},
						{
							name: 'H4',
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
							name: 'L3',
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
							name: 'H3',
						},
						{
							name: 'H3',
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
							name: 'H2',
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
				],
				paddingPositions: [88, 153, 216, 155, 73, 22],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 30,
		payoutMultiplier: 167.1,
		events: [
			{
				index: 0,
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
							name: 'H1',
						},
						{
							name: 'H2',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H2',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H4',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H4',
						},
						{
							name: 'H3',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'L2',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
						},
					],
				],
				paddingPositions: [204, 101, 6, 26, 18, 231],
				gameType: 'basegame',
				anticipation: [0, 0, 1, 2, 3, 4],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 250,
				wins: [
					{
						symbol: 'H4',
						win: 250,
						positions: [
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
								row: 3,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 250,
			},
			{
				index: 3,
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
					],
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
							name: 'L3',
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
						row: 1,
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
						row: 3,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 4,
				type: 'setWin',
				amount: 250,
				winLevel: 4,
			},
			{
				index: 5,
				type: 'setTotalWin',
				amount: 250,
			},
			{
				index: 6,
				type: 'freeSpinTrigger',
				totalFs: 8,
				positions: [
					{
						reel: 0,
						row: 4,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 3,
						row: 5,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 7,
				type: 'updateFreeSpin',
				amount: 1,
				total: 8,
			},
			{
				index: 8,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 9,
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
							name: 'L2',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							multiplier: 4,
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'M',
							multiplier: 5,
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
							name: 'M',
							multiplier: 2,
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H3',
						},
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
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
				paddingPositions: [232, 215, 208, 153, 135, 234],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 10,
				type: 'setTotalWin',
				amount: 250,
			},
			{
				index: 11,
				type: 'updateFreeSpin',
				amount: 2,
				total: 8,
			},
			{
				index: 12,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 13,
				type: 'reveal',
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
							name: 'L3',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H2',
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
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							multiplier: 2,
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
							name: 'L2',
						},
						{
							name: 'L1',
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
				paddingPositions: [102, 6, 63, 206, 144, 172],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 14,
				type: 'winInfo',
				totalWin: 40,
				wins: [
					{
						symbol: 'L2',
						win: 40,
						positions: [
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
								reel: 3,
								row: 1,
							},
							{
								reel: 3,
								row: 2,
							},
							{
								reel: 5,
								row: 2,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 15,
				type: 'updateTumbleWin',
				amount: 40,
			},
			{
				index: 16,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H4',
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
							name: 'H4',
						},
						{
							name: 'L2',
						},
					],
					[],
					[
						{
							name: 'H4',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
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
						reel: 3,
						row: 1,
					},
					{
						reel: 3,
						row: 2,
					},
					{
						reel: 5,
						row: 2,
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
			},
			{
				index: 17,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 18,
				type: 'winInfo',
				totalWin: 160,
				wins: [
					{
						symbol: 'L3',
						win: 160,
						positions: [
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
								reel: 3,
								row: 2,
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
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 80,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 19,
				type: 'updateTumbleWin',
				amount: 200,
			},
			{
				index: 20,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
					],
					[],
					[],
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
							name: 'H3',
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
						reel: 3,
						row: 2,
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
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 21,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 22,
				type: 'winInfo',
				totalWin: 750,
				wins: [
					{
						symbol: 'H4',
						win: 750,
						positions: [
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
								row: 4,
							},
							{
								reel: 5,
								row: 2,
							},
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 23,
				type: 'updateTumbleWin',
				amount: 950,
			},
			{
				index: 24,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
						},
						{
							name: 'L1',
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
						{
							name: 'H4',
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
							name: 'L2',
						},
					],
					[
						{
							name: 'H4',
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
						row: 4,
					},
					{
						reel: 5,
						row: 2,
					},
				],
			},
			{
				index: 25,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 26,
				type: 'winInfo',
				totalWin: 520,
				wins: [
					{
						symbol: 'H3',
						win: 520,
						positions: [
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
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 4,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 27,
				type: 'updateTumbleWin',
				amount: 1470,
			},
			{
				index: 28,
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
							name: 'H3',
						},
						{
							name: 'H4',
						},
					],
					[],
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
							name: 'H2',
						},
						{
							name: 'H4',
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
				],
			},
			{
				index: 29,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 30,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 4,
							row: 5,
							multiplier: 2,
						},
					],
				},
				winInfo: {
					tumbleWin: 1470,
					boardMult: 2,
					totalWin: 2940,
				},
			},
			{
				index: 31,
				type: 'updateTumbleWin',
				amount: 2940,
			},
			{
				index: 32,
				type: 'setWin',
				amount: 2940,
				winLevel: 6,
			},
			{
				index: 33,
				type: 'setTotalWin',
				amount: 3190,
			},
			{
				index: 34,
				type: 'updateFreeSpin',
				amount: 3,
				total: 8,
			},
			{
				index: 35,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 36,
				type: 'reveal',
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
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'L1',
						},
						{
							name: 'L1',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
						{
							name: 'H4',
						},
					],
					[
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
							name: 'H4',
						},
						{
							name: 'H4',
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
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							multiplier: 10,
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
							name: 'H4',
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
				],
				paddingPositions: [24, 172, 71, 163, 143, 229],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 37,
				type: 'setTotalWin',
				amount: 3190,
			},
			{
				index: 38,
				type: 'updateFreeSpin',
				amount: 4,
				total: 8,
			},
			{
				index: 39,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 40,
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
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H2',
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
							name: 'H1',
						},
						{
							name: 'H2',
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
							name: 'L2',
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
							name: 'H4',
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
						{
							name: 'L3',
						},
					],
				],
				paddingPositions: [239, 79, 33, 212, 79, 224],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 41,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L3',
						win: 20,
						positions: [
							{
								reel: 0,
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
								row: 1,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 42,
				type: 'updateTumbleWin',
				amount: 20,
			},
			{
				index: 43,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
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
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 0,
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
						row: 1,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 44,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 45,
				type: 'winInfo',
				totalWin: 400,
				wins: [
					{
						symbol: 'H2',
						win: 400,
						positions: [
							{
								reel: 1,
								row: 3,
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
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 46,
				type: 'updateTumbleWin',
				amount: 420,
			},
			{
				index: 47,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
							name: 'L2',
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
							name: 'H3',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 1,
						row: 3,
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
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 48,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 49,
				type: 'winInfo',
				totalWin: 750,
				wins: [
					{
						symbol: 'H4',
						win: 750,
						positions: [
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
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 50,
				type: 'updateTumbleWin',
				amount: 1170,
			},
			{
				index: 51,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
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
							name: 'H1',
						},
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L2',
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
						{
							name: 'H3',
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
						row: 2,
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
			},
			{
				index: 52,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 53,
				type: 'winInfo',
				totalWin: 160,
				wins: [
					{
						symbol: 'L2',
						win: 160,
						positions: [
							{
								reel: 1,
								row: 2,
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
								row: 2,
							},
							{
								reel: 4,
								row: 3,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 54,
				type: 'updateTumbleWin',
				amount: 1330,
			},
			{
				index: 55,
				type: 'tumbleBoard',
				newSymbols: [
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
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H3',
						},
					],
					[],
				],
				explodingSymbols: [
					{
						reel: 1,
						row: 2,
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
						row: 2,
					},
					{
						reel: 4,
						row: 3,
					},
				],
			},
			{
				index: 56,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 57,
				type: 'winInfo',
				totalWin: 750,
				wins: [
					{
						symbol: 'L1',
						win: 750,
						positions: [
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
								row: 5,
							},
						],
						meta: {
							globalMult: 5,
							clusterMult: 1,
							winWithoutMult: 150,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 58,
				type: 'updateTumbleWin',
				amount: 2080,
			},
			{
				index: 59,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
						},
						{
							name: 'M',
							multiplier: 2,
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
							name: 'L3',
						},
					],
					[],
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
							name: 'L3',
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
						row: 5,
					},
				],
			},
			{
				index: 60,
				type: 'updateGlobalMult',
				globalMult: 6,
			},
			{
				index: 61,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 0,
							row: 1,
							multiplier: 2,
						},
					],
				},
				winInfo: {
					tumbleWin: 2080,
					boardMult: 2,
					totalWin: 4160,
				},
			},
			{
				index: 62,
				type: 'updateTumbleWin',
				amount: 4160,
			},
			{
				index: 63,
				type: 'setWin',
				amount: 4160,
				winLevel: 7,
			},
			{
				index: 64,
				type: 'setTotalWin',
				amount: 7350,
			},
			{
				index: 65,
				type: 'updateFreeSpin',
				amount: 5,
				total: 8,
			},
			{
				index: 66,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 67,
				type: 'reveal',
				board: [
					[
						{
							name: 'L3',
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
							name: 'L3',
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
							name: 'H3',
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
							name: 'L2',
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
							name: 'H4',
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
							name: 'M',
							multiplier: 2,
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'L1',
						},
					],
				],
				paddingPositions: [35, 62, 179, 80, 30, 197],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 68,
				type: 'winInfo',
				totalWin: 300,
				wins: [
					{
						symbol: 'H1',
						win: 300,
						positions: [
							{
								reel: 1,
								row: 4,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 300,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 69,
				type: 'updateTumbleWin',
				amount: 300,
			},
			{
				index: 70,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
							name: 'L1',
						},
					],
					[],
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
				explodingSymbols: [
					{
						reel: 1,
						row: 4,
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
			},
			{
				index: 71,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 72,
				type: 'winInfo',
				totalWin: 80,
				wins: [
					{
						symbol: 'L2',
						win: 80,
						positions: [
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
								row: 3,
							},
							{
								reel: 4,
								row: 4,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 73,
				type: 'updateTumbleWin',
				amount: 380,
			},
			{
				index: 74,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
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
					],
					[
						{
							name: 'H2',
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
				],
				explodingSymbols: [
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
						row: 3,
					},
					{
						reel: 4,
						row: 4,
					},
				],
			},
			{
				index: 75,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 76,
				type: 'winInfo',
				totalWin: 750,
				wins: [
					{
						symbol: 'H4',
						win: 750,
						positions: [
							{
								reel: 0,
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
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 77,
				type: 'updateTumbleWin',
				amount: 1130,
			},
			{
				index: 78,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H1',
						},
						{
							name: 'H4',
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
							name: 'H1',
						},
					],
					[],
					[
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'L2',
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
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 79,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 80,
				type: 'winInfo',
				totalWin: 80,
				wins: [
					{
						symbol: 'L3',
						win: 80,
						positions: [
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
								reel: 0,
								row: 4,
							},
							{
								reel: 2,
								row: 2,
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
								row: 2,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 81,
				type: 'updateTumbleWin',
				amount: 1210,
			},
			{
				index: 82,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H3',
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
					[],
					[
						{
							name: 'H2',
						},
						{
							name: 'H3',
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
					],
					[],
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
						reel: 0,
						row: 4,
					},
					{
						reel: 2,
						row: 2,
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
						row: 2,
					},
				],
			},
			{
				index: 83,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 84,
				type: 'winInfo',
				totalWin: 1000,
				wins: [
					{
						symbol: 'H2',
						win: 1000,
						positions: [
							{
								reel: 0,
								row: 1,
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
								row: 4,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 5,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 85,
				type: 'updateTumbleWin',
				amount: 2210,
			},
			{
				index: 86,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
						},
					],
					[],
					[],
					[
						{
							name: 'L2',
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
						reel: 3,
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
						reel: 4,
						row: 2,
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
			},
			{
				index: 87,
				type: 'updateGlobalMult',
				globalMult: 6,
			},
			{
				index: 88,
				type: 'winInfo',
				totalWin: 780,
				wins: [
					{
						symbol: 'H3',
						win: 780,
						positions: [
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
								reel: 3,
								row: 1,
							},
						],
						meta: {
							globalMult: 6,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 1,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 89,
				type: 'updateTumbleWin',
				amount: 2990,
			},
			{
				index: 90,
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
					],
					[],
					[],
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
						reel: 3,
						row: 1,
					},
				],
			},
			{
				index: 91,
				type: 'updateGlobalMult',
				globalMult: 7,
			},
			{
				index: 92,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 4,
							row: 5,
							multiplier: 2,
						},
					],
				},
				winInfo: {
					tumbleWin: 2990,
					boardMult: 2,
					totalWin: 5980,
				},
			},
			{
				index: 93,
				type: 'updateTumbleWin',
				amount: 5980,
			},
			{
				index: 94,
				type: 'setWin',
				amount: 5980,
				winLevel: 8,
			},
			{
				index: 95,
				type: 'setTotalWin',
				amount: 13330,
			},
			{
				index: 96,
				type: 'updateFreeSpin',
				amount: 6,
				total: 8,
			},
			{
				index: 97,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 98,
				type: 'reveal',
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
							name: 'L1',
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
							name: 'H1',
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
							name: 'H1',
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
							name: 'H2',
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
					],
				],
				paddingPositions: [129, 77, 45, 134, 164, 47],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 99,
				type: 'setTotalWin',
				amount: 13330,
			},
			{
				index: 100,
				type: 'updateFreeSpin',
				amount: 7,
				total: 8,
			},
			{
				index: 101,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 102,
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H1',
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
					],
					[
						{
							name: 'H2',
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
							name: 'L3',
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'L3',
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
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
						{
							name: 'L3',
						},
					],
				],
				paddingPositions: [84, 131, 115, 220, 168, 242],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 103,
				type: 'winInfo',
				totalWin: 40,
				wins: [
					{
						symbol: 'L2',
						win: 40,
						positions: [
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
								row: 2,
							},
							{
								reel: 4,
								row: 5,
							},
							{
								reel: 5,
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 104,
				type: 'updateTumbleWin',
				amount: 40,
			},
			{
				index: 105,
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
					[],
					[],
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
						row: 2,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 106,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 107,
				type: 'winInfo',
				totalWin: 340,
				wins: [
					{
						symbol: 'L1',
						win: 300,
						positions: [
							{
								reel: 0,
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
								row: 2,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 150,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
					{
						symbol: 'L3',
						win: 40,
						positions: [
							{
								reel: 0,
								row: 4,
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
								row: 5,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 3,
								row: 5,
							},
						},
					},
				],
			},
			{
				index: 108,
				type: 'updateTumbleWin',
				amount: 380,
			},
			{
				index: 109,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H4',
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
							name: 'L2',
						},
					],
					[
						{
							name: 'L2',
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
						row: 4,
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
						row: 1,
					},
					{
						reel: 5,
						row: 5,
					},
				],
			},
			{
				index: 110,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 111,
				type: 'winInfo',
				totalWin: 3000,
				wins: [
					{
						symbol: 'H2',
						win: 3000,
						positions: [
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
								reel: 5,
								row: 1,
							},
							{
								reel: 5,
								row: 2,
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
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 1000,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 112,
				type: 'updateTumbleWin',
				amount: 3380,
			},
			{
				index: 113,
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
							name: 'L2',
						},
					],
					[
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
					[],
					[
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
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
						reel: 1,
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
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 2,
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
			},
			{
				index: 114,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 115,
				type: 'setWin',
				amount: 3380,
				winLevel: 7,
			},
			{
				index: 116,
				type: 'setTotalWin',
				amount: 16710,
			},
			{
				index: 117,
				type: 'updateFreeSpin',
				amount: 8,
				total: 8,
			},
			{
				index: 118,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 119,
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
							name: 'L3',
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
							name: 'H4',
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
							name: 'H2',
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
							name: 'H4',
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
							name: 'L2',
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
							name: 'H2',
						},
						{
							name: 'H2',
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
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [86, 17, 5, 239, 167, 241],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 120,
				type: 'setTotalWin',
				amount: 16710,
			},
			{
				index: 121,
				type: 'freeSpinEnd',
				amount: 16460,
				winLevel: 7,
			},
			{
				index: 122,
				type: 'finalWin',
				amount: 16710,
			},
		],
		criteria: 'freegame',
		baseGameWins: 2.5,
		freeGameWins: 164.6,
	},
	{
		id: 31,
		payoutMultiplier: 0.2,
		events: [
			{
				index: 0,
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
							name: 'H3',
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
							name: 'L2',
						},
					],
					[
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H3',
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
							name: 'H2',
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
							name: 'H4',
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
							name: 'H4',
						},
						{
							name: 'H2',
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
							name: 'H3',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [28, 137, 59, 182, 193, 35],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L3',
						win: 20,
						positions: [
							{
								reel: 1,
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
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 20,
			},
			{
				index: 3,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
							name: 'H2',
						},
					],
					[
						{
							name: 'H3',
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
							name: 'H3',
						},
					],
					[],
				],
				explodingSymbols: [
					{
						reel: 1,
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
				],
			},
			{
				index: 4,
				type: 'setWin',
				amount: 20,
				winLevel: 2,
			},
			{
				index: 5,
				type: 'setTotalWin',
				amount: 20,
			},
			{
				index: 6,
				type: 'finalWin',
				amount: 20,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.2,
		freeGameWins: 0.0,
	},
	{
		id: 32,
		payoutMultiplier: 0.0,
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'H4',
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
							name: 'L3',
						},
						{
							name: 'H1',
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
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'H3',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [133, 176, 241, 225, 120, 94],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 33,
		payoutMultiplier: 18.6,
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
							name: 'H1',
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
						{
							name: 'H3',
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
						{
							name: 'H3',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'L3',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'L1',
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
							name: 'L2',
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
							name: 'H2',
						},
					],
					[
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
				],
				paddingPositions: [161, 59, 209, 215, 70, 122],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 320,
				wins: [
					{
						symbol: 'H3',
						win: 320,
						positions: [
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
								row: 2,
							},
							{
								reel: 2,
								row: 3,
							},
							{
								reel: 2,
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
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 320,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 320,
			},
			{
				index: 3,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
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
							name: 'H3',
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
					],
				],
				explodingSymbols: [
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
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
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
						row: 3,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 4,
				type: 'winInfo',
				totalWin: 40,
				wins: [
					{
						symbol: 'L2',
						win: 40,
						positions: [
							{
								reel: 1,
								row: 5,
							},
							{
								reel: 3,
								row: 1,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 5,
				type: 'updateTumbleWin',
				amount: 360,
			},
			{
				index: 6,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H2',
						},
					],
					[],
					[
						{
							name: 'L2',
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
							name: 'L2',
						},
					],
				],
				explodingSymbols: [
					{
						reel: 1,
						row: 5,
					},
					{
						reel: 3,
						row: 1,
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
			},
			{
				index: 7,
				type: 'winInfo',
				totalWin: 1500,
				wins: [
					{
						symbol: 'H1',
						win: 1500,
						positions: [
							{
								reel: 0,
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
								reel: 1,
								row: 1,
							},
							{
								reel: 1,
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
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 1500,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 8,
				type: 'updateTumbleWin',
				amount: 1860,
			},
			{
				index: 9,
				type: 'tumbleBoard',
				newSymbols: [
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
					[],
					[],
					[
						{
							name: 'H2',
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
						reel: 4,
						row: 2,
					},
					{
						reel: 4,
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
				],
			},
			{
				index: 10,
				type: 'setWin',
				amount: 1860,
				winLevel: 6,
			},
			{
				index: 11,
				type: 'setTotalWin',
				amount: 1860,
			},
			{
				index: 12,
				type: 'finalWin',
				amount: 1860,
			},
		],
		criteria: 'basegame',
		baseGameWins: 18.6,
		freeGameWins: 0.0,
	},
	{
		id: 34,
		payoutMultiplier: 0.0,
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
							name: 'L3',
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
						{
							name: 'H2',
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
						{
							name: 'L3',
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
							name: 'H2',
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
							name: 'L2',
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
							name: 'H2',
						},
					],
					[
						{
							name: 'L1',
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
							name: 'H4',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [24, 149, 130, 210, 39, 24],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 35,
		payoutMultiplier: 2.1,
		events: [
			{
				index: 0,
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
							name: 'L1',
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
							name: 'H3',
						},
						{
							name: 'H3',
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
						{
							name: 'H3',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L3',
						},
						{
							name: 'H3',
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
							name: 'H2',
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
						{
							name: 'H3',
						},
						{
							name: 'S',
							scatter: true,
						},
					],
				],
				paddingPositions: [192, 33, 191, 87, 221, 39],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 130,
				wins: [
					{
						symbol: 'H3',
						win: 130,
						positions: [
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
								row: 5,
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
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 130,
			},
			{
				index: 3,
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
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
					],
					[],
					[
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
						row: 2,
					},
					{
						reel: 2,
						row: 3,
					},
					{
						reel: 2,
						row: 5,
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
						row: 5,
					},
				],
			},
			{
				index: 4,
				type: 'winInfo',
				totalWin: 80,
				wins: [
					{
						symbol: 'L3',
						win: 80,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 0,
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
								row: 1,
							},
							{
								reel: 4,
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 80,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 5,
				type: 'updateTumbleWin',
				amount: 210,
			},
			{
				index: 6,
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
							name: 'H4',
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
							name: 'H1',
						},
					],
					[],
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
						reel: 2,
						row: 2,
					},
					{
						reel: 2,
						row: 3,
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
						row: 1,
					},
					{
						reel: 4,
						row: 4,
					},
				],
			},
			{
				index: 7,
				type: 'setWin',
				amount: 210,
				winLevel: 4,
			},
			{
				index: 8,
				type: 'setTotalWin',
				amount: 210,
			},
			{
				index: 9,
				type: 'finalWin',
				amount: 210,
			},
		],
		criteria: 'basegame',
		baseGameWins: 2.1,
		freeGameWins: 0.0,
	},
	{
		id: 36,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'H1',
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
							name: 'L3',
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
							name: 'H4',
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
							name: 'H1',
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
							name: 'L2',
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
							name: 'H2',
						},
						{
							name: 'L2',
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
							name: 'L3',
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
							name: 'L1',
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
							name: 'H3',
						},
						{
							name: 'L1',
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
				],
				paddingPositions: [5, 245, 205, 235, 232, 202],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 37,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
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
							name: 'H2',
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
							name: 'H3',
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
							name: 'H2',
						},
					],
				],
				paddingPositions: [23, 239, 158, 170, 215, 191],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 38,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
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
							name: 'H2',
						},
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H3',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'L2',
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
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [109, 193, 185, 26, 16, 93],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 1, 2],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 39,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
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
							name: 'H1',
						},
						{
							name: 'H4',
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
							name: 'L1',
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
							name: 'L2',
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
							name: 'H2',
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
					[
						{
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'S',
							scatter: true,
						},
						{
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
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
				paddingPositions: [181, 221, 11, 166, 48, 234],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 40,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
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
							name: 'H3',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
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
							name: 'L1',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [224, 134, 8, 62, 72, 170],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 41,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
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
							name: 'H2',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'H4',
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
							name: 'H2',
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
							name: 'H2',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
						},
						{
							name: 'H2',
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
							name: 'L2',
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
						{
							name: 'H4',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
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
					],
				],
				paddingPositions: [59, 42, 230, 233, 98, 147],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 42,
		payoutMultiplier: 0.0,
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
							name: 'L1',
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
							name: 'L2',
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
							name: 'H4',
						},
						{
							name: 'H2',
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
							name: 'H3',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [6, 189, 70, 62, 57, 35],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 43,
		payoutMultiplier: 0.0,
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
							name: 'H1',
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
							name: 'S',
							scatter: true,
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
						{
							name: 'H2',
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
						{
							name: 'L3',
						},
						{
							name: 'H1',
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
							name: 'H1',
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
							name: 'H3',
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
							name: 'H4',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [178, 195, 36, 245, 118, 94],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 44,
		payoutMultiplier: 0.0,
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
							name: 'H4',
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
							name: 'L1',
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
							name: 'H3',
						},
						{
							name: 'H3',
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
							name: 'H3',
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
							name: 'S',
							scatter: true,
						},
					],
				],
				paddingPositions: [131, 176, 77, 177, 162, 96],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 45,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'H1',
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
							name: 'H1',
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
							name: 'H1',
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
							name: 'H1',
						},
						{
							name: 'H2',
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
							name: 'L2',
						},
					],
				],
				paddingPositions: [124, 65, 20, 77, 86, 5],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 46,
		payoutMultiplier: 0.2,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'S',
							scatter: true,
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
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
							name: 'L1',
						},
						{
							name: 'L1',
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
					],
					[
						{
							name: 'H4',
						},
						{
							name: 'H2',
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
							name: 'L3',
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
							name: 'L3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'S',
							scatter: true,
						},
					],
				],
				paddingPositions: [102, 10, 150, 150, 220, 227],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 20,
				wins: [
					{
						symbol: 'L3',
						win: 20,
						positions: [
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
								reel: 2,
								row: 4,
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
								row: 1,
							},
							{
								reel: 5,
								row: 3,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 20,
			},
			{
				index: 3,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L1',
						},
						{
							name: 'L3',
						},
						{
							name: 'H4',
						},
					],
					[],
					[
						{
							name: 'H2',
						},
					],
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
							name: 'L3',
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
						row: 5,
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
						row: 4,
					},
					{
						reel: 5,
						row: 1,
					},
					{
						reel: 5,
						row: 3,
					},
				],
			},
			{
				index: 4,
				type: 'setWin',
				amount: 20,
				winLevel: 2,
			},
			{
				index: 5,
				type: 'setTotalWin',
				amount: 20,
			},
			{
				index: 6,
				type: 'finalWin',
				amount: 20,
			},
		],
		criteria: 'basegame',
		baseGameWins: 0.2,
		freeGameWins: 0.0,
	},
	{
		id: 47,
		payoutMultiplier: 0.0,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
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
							name: 'H3',
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
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
							name: 'H4',
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
							name: 'L1',
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
							name: 'L1',
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
							name: 'H4',
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
							name: 'H3',
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
							name: 'L1',
						},
						{
							name: 'H4',
						},
					],
				],
				paddingPositions: [110, 141, 116, 146, 87, 65],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'finalWin',
				amount: 0,
			},
		],
		criteria: '0',
		baseGameWins: 0.0,
		freeGameWins: 0.0,
	},
	{
		id: 48,
		payoutMultiplier: 746.1,
		events: [
			{
				index: 0,
				type: 'reveal',
				board: [
					[
						{
							name: 'H2',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H3',
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
							name: 'S',
							scatter: true,
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
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H3',
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
							name: 'S',
							scatter: true,
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
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H4',
						},
						{
							name: 'S',
							scatter: true,
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
							name: 'H4',
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
							name: 'S',
							scatter: true,
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
							name: 'H1',
						},
					],
				],
				paddingPositions: [207, 195, 98, 130, 100, 100],
				gameType: 'basegame',
				anticipation: [0, 0, 1, 2, 3, 4],
			},
			{
				index: 1,
				type: 'setTotalWin',
				amount: 0,
			},
			{
				index: 2,
				type: 'freeSpinTrigger',
				totalFs: 10,
				positions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 4,
						row: 2,
					},
					{
						reel: 5,
						row: 2,
					},
				],
			},
			{
				index: 3,
				type: 'updateFreeSpin',
				amount: 1,
				total: 10,
			},
			{
				index: 4,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 5,
				type: 'reveal',
				board: [
					[
						{
							name: 'L3',
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'H4',
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
							name: 'L3',
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
							name: 'H3',
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
							name: 'L3',
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
				paddingPositions: [130, 39, 120, 55, 7, 18],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 6,
				type: 'winInfo',
				totalWin: 40,
				wins: [
					{
						symbol: 'L2',
						win: 40,
						positions: [
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
								row: 3,
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
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 7,
				type: 'updateTumbleWin',
				amount: 40,
			},
			{
				index: 8,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
					],
					[],
					[
						{
							name: 'L1',
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
							name: 'L1',
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
						reel: 3,
						row: 2,
					},
					{
						reel: 3,
						row: 3,
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
						row: 4,
					},
				],
			},
			{
				index: 9,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 10,
				type: 'winInfo',
				totalWin: 40,
				wins: [
					{
						symbol: 'L3',
						win: 40,
						positions: [
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
								reel: 2,
								row: 1,
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
								reel: 5,
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 11,
				type: 'updateTumbleWin',
				amount: 80,
			},
			{
				index: 12,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H3',
						},
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H3',
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
					[
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H4',
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
						reel: 1,
						row: 2,
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
						reel: 4,
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
				],
			},
			{
				index: 13,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 14,
				type: 'setWin',
				amount: 80,
				winLevel: 2,
			},
			{
				index: 15,
				type: 'setTotalWin',
				amount: 80,
			},
			{
				index: 16,
				type: 'updateFreeSpin',
				amount: 2,
				total: 10,
			},
			{
				index: 17,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 18,
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
							name: 'H4',
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
							name: 'L2',
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
							name: 'L3',
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
							name: 'H2',
						},
						{
							name: 'H3',
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
							name: 'H1',
						},
						{
							name: 'L1',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [33, 127, 172, 41, 243, 32],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 19,
				type: 'setTotalWin',
				amount: 80,
			},
			{
				index: 20,
				type: 'updateFreeSpin',
				amount: 3,
				total: 10,
			},
			{
				index: 21,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 22,
				type: 'reveal',
				board: [
					[
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
							name: 'L3',
						},
						{
							name: 'L3',
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
							name: 'H2',
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
							name: 'H4',
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
							name: 'H3',
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
							name: 'H4',
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
							name: 'H4',
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
							name: 'L3',
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
							name: 'L2',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'H3',
						},
						{
							name: 'M',
							multiplier: 2,
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'H3',
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [140, 74, 239, 86, 178, 86],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 23,
				type: 'winInfo',
				totalWin: 100,
				wins: [
					{
						symbol: 'H4',
						win: 100,
						positions: [
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
								reel: 4,
								row: 1,
							},
							{
								reel: 5,
								row: 3,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 24,
				type: 'updateTumbleWin',
				amount: 100,
			},
			{
				index: 25,
				type: 'tumbleBoard',
				newSymbols: [
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
					],
					[
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L3',
						},
					],
					[
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
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
						reel: 4,
						row: 1,
					},
					{
						reel: 5,
						row: 3,
					},
				],
			},
			{
				index: 26,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 27,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 5,
							row: 3,
							multiplier: 2,
						},
					],
				},
				winInfo: {
					tumbleWin: 100,
					boardMult: 2,
					totalWin: 200,
				},
			},
			{
				index: 28,
				type: 'updateTumbleWin',
				amount: 200,
			},
			{
				index: 29,
				type: 'setWin',
				amount: 200,
				winLevel: 4,
			},
			{
				index: 30,
				type: 'setTotalWin',
				amount: 280,
			},
			{
				index: 31,
				type: 'updateFreeSpin',
				amount: 4,
				total: 10,
			},
			{
				index: 32,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 33,
				type: 'reveal',
				board: [
					[
						{
							name: 'H3',
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
							name: 'H3',
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
							name: 'L1',
						},
						{
							name: 'L1',
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
					],
					[
						{
							name: 'H2',
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
							name: 'L1',
						},
						{
							name: 'L3',
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
							name: 'L1',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
					],
				],
				paddingPositions: [67, 165, 3, 239, 225, 146],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 34,
				type: 'winInfo',
				totalWin: 130,
				wins: [
					{
						symbol: 'H3',
						win: 130,
						positions: [
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
								row: 1,
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
								reel: 4,
								row: 4,
							},
							{
								reel: 4,
								row: 5,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 130,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 35,
				type: 'updateTumbleWin',
				amount: 130,
			},
			{
				index: 36,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
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
							name: 'H4',
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
						reel: 1,
						row: 1,
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
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 5,
						row: 4,
					},
				],
			},
			{
				index: 37,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 38,
				type: 'winInfo',
				totalWin: 200,
				wins: [
					{
						symbol: 'H4',
						win: 200,
						positions: [
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
								reel: 5,
								row: 1,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 39,
				type: 'updateTumbleWin',
				amount: 330,
			},
			{
				index: 40,
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
							name: 'M',
							multiplier: 4,
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
					],
					[],
					[],
					[
						{
							name: 'H2',
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
						reel: 1,
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
						reel: 1,
						row: 4,
					},
					{
						reel: 2,
						row: 4,
					},
					{
						reel: 5,
						row: 1,
					},
				],
			},
			{
				index: 41,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 42,
				type: 'winInfo',
				totalWin: 450,
				wins: [
					{
						symbol: 'L1',
						win: 450,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 1,
								row: 1,
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
								row: 3,
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
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 150,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 43,
				type: 'updateTumbleWin',
				amount: 780,
			},
			{
				index: 44,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
						},
					],
					[
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
					],
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
							name: 'H2',
						},
						{
							name: 'L1',
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
						row: 1,
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
						row: 3,
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
			},
			{
				index: 45,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 46,
				type: 'winInfo',
				totalWin: 800,
				wins: [
					{
						symbol: 'H2',
						win: 800,
						positions: [
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
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 47,
				type: 'updateTumbleWin',
				amount: 1580,
			},
			{
				index: 48,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H1',
						},
					],
					[
						{
							name: 'L1',
						},
						{
							name: 'H4',
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
					],
					[],
					[
						{
							name: 'L3',
						},
						{
							name: 'M',
							multiplier: 2,
						},
						{
							name: 'H2',
						},
					],
				],
				explodingSymbols: [
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
			},
			{
				index: 49,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 50,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 1,
							row: 3,
							multiplier: 7,
						},
						{
							reel: 5,
							row: 1,
							multiplier: 2,
						},
					],
				},
				winInfo: {
					tumbleWin: 1580,
					boardMult: 9,
					totalWin: 14220,
				},
			},
			{
				index: 51,
				type: 'updateTumbleWin',
				amount: 14220,
			},
			{
				index: 52,
				type: 'setWin',
				amount: 14220,
				winLevel: 9,
			},
			{
				index: 53,
				type: 'setTotalWin',
				amount: 14500,
			},
			{
				index: 54,
				type: 'updateFreeSpin',
				amount: 5,
				total: 10,
			},
			{
				index: 55,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 56,
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
							name: 'H4',
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
					[
						{
							name: 'H2',
						},
						{
							name: 'H4',
						},
						{
							name: 'H1',
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L2',
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
							name: 'H1',
						},
						{
							name: 'H1',
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
							name: 'H1',
						},
						{
							name: 'H1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H3',
						},
						{
							name: 'L1',
						},
						{
							name: 'L2',
						},
					],
				],
				paddingPositions: [51, 102, 203, 208, 216, 200],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 57,
				type: 'setTotalWin',
				amount: 14500,
			},
			{
				index: 58,
				type: 'updateFreeSpin',
				amount: 6,
				total: 10,
			},
			{
				index: 59,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 60,
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
							name: 'H1',
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
							name: 'L1',
						},
						{
							name: 'L1',
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
					],
					[
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
							name: 'H3',
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
							name: 'H1',
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
							name: 'H4',
						},
						{
							name: 'L3',
						},
						{
							name: 'L3',
						},
						{
							name: 'M',
							multiplier: 4,
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
							name: 'H4',
						},
						{
							name: 'H4',
						},
						{
							name: 'H3',
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
							name: 'H2',
						},
					],
				],
				paddingPositions: [6, 93, 24, 73, 146, 74],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 61,
				type: 'setTotalWin',
				amount: 14500,
			},
			{
				index: 62,
				type: 'updateFreeSpin',
				amount: 7,
				total: 10,
			},
			{
				index: 63,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 64,
				type: 'reveal',
				board: [
					[
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L3',
						},
						{
							name: 'H2',
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
							name: 'H2',
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
							name: 'H4',
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
					],
					[
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
				],
				paddingPositions: [199, 29, 57, 37, 84, 120],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 65,
				type: 'winInfo',
				totalWin: 250,
				wins: [
					{
						symbol: 'H4',
						win: 250,
						positions: [
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
								reel: 3,
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
								row: 2,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 66,
				type: 'updateTumbleWin',
				amount: 250,
			},
			{
				index: 67,
				type: 'tumbleBoard',
				newSymbols: [
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
					],
					[
						{
							name: 'L2',
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
						row: 3,
					},
					{
						reel: 2,
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
				],
			},
			{
				index: 68,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 69,
				type: 'winInfo',
				totalWin: 440,
				wins: [
					{
						symbol: 'H2',
						win: 400,
						positions: [
							{
								reel: 0,
								row: 1,
							},
							{
								reel: 0,
								row: 3,
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
								reel: 3,
								row: 4,
							},
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
					{
						symbol: 'L3',
						win: 40,
						positions: [
							{
								reel: 0,
								row: 2,
							},
							{
								reel: 0,
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
						],
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 70,
				type: 'updateTumbleWin',
				amount: 690,
			},
			{
				index: 71,
				type: 'tumbleBoard',
				newSymbols: [
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
							name: 'L1',
						},
						{
							name: 'H4',
						},
					],
					[
						{
							name: 'H1',
						},
					],
					[
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
							name: 'H2',
						},
						{
							name: 'L1',
						},
					],
					[],
				],
				explodingSymbols: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 0,
						row: 5,
					},
					{
						reel: 0,
						row: 2,
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
						reel: 2,
						row: 3,
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
				],
			},
			{
				index: 72,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 73,
				type: 'winInfo',
				totalWin: 120,
				wins: [
					{
						symbol: 'L2',
						win: 120,
						positions: [
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
								reel: 1,
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
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 40,
							overlay: {
								reel: 4,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 74,
				type: 'updateTumbleWin',
				amount: 810,
			},
			{
				index: 75,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H2',
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
					[],
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
			},
			{
				index: 76,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 77,
				type: 'winInfo',
				totalWin: 400,
				wins: [
					{
						symbol: 'H4',
						win: 400,
						positions: [
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
								reel: 3,
								row: 1,
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
								reel: 5,
								row: 1,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 78,
				type: 'updateTumbleWin',
				amount: 1210,
			},
			{
				index: 79,
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
							name: 'L1',
						},
					],
					[
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
							name: 'L3',
						},
					],
					[],
					[
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
						row: 1,
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
						row: 2,
					},
					{
						reel: 3,
						row: 4,
					},
					{
						reel: 5,
						row: 1,
					},
				],
			},
			{
				index: 80,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 81,
				type: 'winInfo',
				totalWin: 1600,
				wins: [
					{
						symbol: 'H3',
						win: 1600,
						positions: [
							{
								reel: 2,
								row: 1,
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
								row: 3,
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
								row: 5,
							},
						],
						meta: {
							globalMult: 5,
							clusterMult: 1,
							winWithoutMult: 320,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 82,
				type: 'updateTumbleWin',
				amount: 2810,
			},
			{
				index: 83,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[],
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
							name: 'H4',
						},
					],
					[
						{
							name: 'L3',
						},
					],
					[
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
						row: 3,
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
						row: 5,
					},
				],
			},
			{
				index: 84,
				type: 'updateGlobalMult',
				globalMult: 6,
			},
			{
				index: 85,
				type: 'winInfo',
				totalWin: 3000,
				wins: [
					{
						symbol: 'H2',
						win: 3000,
						positions: [
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
								row: 3,
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
								reel: 5,
								row: 1,
							},
						],
						meta: {
							globalMult: 6,
							clusterMult: 1,
							winWithoutMult: 500,
							overlay: {
								reel: 4,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 86,
				type: 'updateTumbleWin',
				amount: 5810,
			},
			{
				index: 87,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
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
							name: 'L1',
						},
					],
					[],
					[
						{
							name: 'H1',
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
					],
					[
						{
							name: 'H2',
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
						row: 3,
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
						reel: 5,
						row: 1,
					},
				],
			},
			{
				index: 88,
				type: 'updateGlobalMult',
				globalMult: 7,
			},
			{
				index: 89,
				type: 'winInfo',
				totalWin: 420,
				wins: [
					{
						symbol: 'L1',
						win: 420,
						positions: [
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
								reel: 4,
								row: 4,
							},
							{
								reel: 4,
								row: 5,
							},
						],
						meta: {
							globalMult: 7,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 90,
				type: 'updateTumbleWin',
				amount: 6230,
			},
			{
				index: 91,
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
							name: 'L1',
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
							name: 'L2',
						},
					],
					[],
				],
				explodingSymbols: [
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
						reel: 4,
						row: 4,
					},
					{
						reel: 4,
						row: 5,
					},
				],
			},
			{
				index: 92,
				type: 'updateGlobalMult',
				globalMult: 8,
			},
			{
				index: 93,
				type: 'winInfo',
				totalWin: 800,
				wins: [
					{
						symbol: 'H4',
						win: 800,
						positions: [
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
								reel: 3,
								row: 3,
							},
							{
								reel: 5,
								row: 2,
							},
						],
						meta: {
							globalMult: 8,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 94,
				type: 'updateTumbleWin',
				amount: 7030,
			},
			{
				index: 95,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H3',
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
							name: 'H1',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'M',
							multiplier: 4,
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
						reel: 3,
						row: 3,
					},
					{
						reel: 5,
						row: 2,
					},
				],
			},
			{
				index: 96,
				type: 'updateGlobalMult',
				globalMult: 9,
			},
			{
				index: 97,
				type: 'winInfo',
				totalWin: 2700,
				wins: [
					{
						symbol: 'H1',
						win: 2700,
						positions: [
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
								row: 1,
							},
							{
								reel: 2,
								row: 5,
							},
							{
								reel: 3,
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
						meta: {
							globalMult: 9,
							clusterMult: 1,
							winWithoutMult: 300,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 98,
				type: 'updateTumbleWin',
				amount: 9730,
			},
			{
				index: 99,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
					],
					[
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
					],
					[],
					[
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
						row: 1,
					},
					{
						reel: 2,
						row: 5,
					},
					{
						reel: 3,
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
			},
			{
				index: 100,
				type: 'updateGlobalMult',
				globalMult: 10,
			},
			{
				index: 101,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 3,
							row: 2,
							multiplier: 4,
						},
					],
				},
				winInfo: {
					tumbleWin: 9730,
					boardMult: 4,
					totalWin: 38920,
				},
			},
			{
				index: 102,
				type: 'updateTumbleWin',
				amount: 38920,
			},
			{
				index: 103,
				type: 'setWin',
				amount: 38920,
				winLevel: 9,
			},
			{
				index: 104,
				type: 'setTotalWin',
				amount: 53420,
			},
			{
				index: 105,
				type: 'updateFreeSpin',
				amount: 8,
				total: 10,
			},
			{
				index: 106,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 107,
				type: 'reveal',
				board: [
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
							name: 'H3',
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
						{
							name: 'L2',
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
							name: 'L2',
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
							name: 'L2',
						},
						{
							name: 'L2',
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
							name: 'H4',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
						},
						{
							name: 'H2',
						},
						{
							name: 'L1',
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
							name: 'H4',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
					],
				],
				paddingPositions: [110, 28, 198, 2, 200, 94],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 108,
				type: 'winInfo',
				totalWin: 220,
				wins: [
					{
						symbol: 'L2',
						win: 120,
						positions: [
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
								reel: 1,
								row: 5,
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
								row: 5,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 120,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
					{
						symbol: 'H4',
						win: 100,
						positions: [
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
								reel: 2,
								row: 1,
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
								reel: 4,
								row: 2,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 109,
				type: 'updateTumbleWin',
				amount: 220,
			},
			{
				index: 110,
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
							name: 'H3',
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
							name: 'H1',
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
							name: 'L3',
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
							name: 'H4',
						},
					],
					[],
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
						reel: 1,
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
						row: 2,
					},
					{
						reel: 2,
						row: 1,
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
						row: 2,
					},
					{
						reel: 3,
						row: 3,
					},
					{
						reel: 3,
						row: 1,
					},
					{
						reel: 4,
						row: 5,
					},
					{
						reel: 4,
						row: 2,
					},
				],
			},
			{
				index: 111,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 112,
				type: 'winInfo',
				totalWin: 1000,
				wins: [
					{
						symbol: 'H2',
						win: 1000,
						positions: [
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
						meta: {
							globalMult: 2,
							clusterMult: 1,
							winWithoutMult: 500,
							overlay: {
								reel: 4,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 113,
				type: 'updateTumbleWin',
				amount: 1220,
			},
			{
				index: 114,
				type: 'tumbleBoard',
				newSymbols: [
					[],
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
							name: 'H2',
						},
					],
					[
						{
							name: 'H3',
						},
					],
					[
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
							name: 'L2',
						},
						{
							name: 'L2',
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
			},
			{
				index: 115,
				type: 'updateGlobalMult',
				globalMult: 3,
			},
			{
				index: 116,
				type: 'winInfo',
				totalWin: 60,
				wins: [
					{
						symbol: 'L3',
						win: 60,
						positions: [
							{
								reel: 0,
								row: 1,
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
								reel: 3,
								row: 1,
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
								row: 3,
							},
							{
								reel: 5,
								row: 4,
							},
						],
						meta: {
							globalMult: 3,
							clusterMult: 1,
							winWithoutMult: 20,
							overlay: {
								reel: 3,
								row: 2,
							},
						},
					},
				],
			},
			{
				index: 117,
				type: 'updateTumbleWin',
				amount: 1280,
			},
			{
				index: 118,
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
							name: 'L1',
						},
					],
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
							name: 'L3',
						},
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H3',
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
						row: 5,
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
			},
			{
				index: 119,
				type: 'updateGlobalMult',
				globalMult: 4,
			},
			{
				index: 120,
				type: 'winInfo',
				totalWin: 1280,
				wins: [
					{
						symbol: 'H3',
						win: 1280,
						positions: [
							{
								reel: 0,
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
								row: 4,
							},
							{
								reel: 5,
								row: 1,
							},
						],
						meta: {
							globalMult: 4,
							clusterMult: 1,
							winWithoutMult: 320,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 121,
				type: 'updateTumbleWin',
				amount: 2560,
			},
			{
				index: 122,
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
							name: 'L3',
						},
					],
					[],
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
					],
					[
						{
							name: 'L2',
						},
					],
					[],
					[
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
						row: 4,
					},
					{
						reel: 5,
						row: 1,
					},
				],
			},
			{
				index: 123,
				type: 'updateGlobalMult',
				globalMult: 5,
			},
			{
				index: 124,
				type: 'winInfo',
				totalWin: 800,
				wins: [
					{
						symbol: 'H4',
						win: 500,
						positions: [
							{
								reel: 0,
								row: 1,
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
								row: 4,
							},
						],
						meta: {
							globalMult: 5,
							clusterMult: 1,
							winWithoutMult: 100,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
					{
						symbol: 'L1',
						win: 300,
						positions: [
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
								reel: 2,
								row: 4,
							},
							{
								reel: 2,
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
								row: 5,
							},
						],
						meta: {
							globalMult: 5,
							clusterMult: 1,
							winWithoutMult: 60,
							overlay: {
								reel: 2,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 125,
				type: 'updateTumbleWin',
				amount: 3360,
			},
			{
				index: 126,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
							name: 'L2',
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
					],
					[
						{
							name: 'L3',
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
							name: 'H3',
						},
						{
							name: 'H2',
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
							name: 'M',
							multiplier: 4,
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
						reel: 2,
						row: 4,
					},
					{
						reel: 2,
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
						reel: 4,
						row: 4,
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
			},
			{
				index: 127,
				type: 'updateGlobalMult',
				globalMult: 6,
			},
			{
				index: 128,
				type: 'winInfo',
				totalWin: 1500,
				wins: [
					{
						symbol: 'L3',
						win: 1500,
						positions: [
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
								row: 4,
							},
							{
								reel: 2,
								row: 5,
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
						],
						meta: {
							globalMult: 6,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 129,
				type: 'updateTumbleWin',
				amount: 4860,
			},
			{
				index: 130,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'H2',
						},
						{
							name: 'L1',
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
						{
							name: 'L2',
						},
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
							name: 'H3',
						},
					],
					[],
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
						row: 4,
					},
					{
						reel: 2,
						row: 5,
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
				],
			},
			{
				index: 131,
				type: 'updateGlobalMult',
				globalMult: 7,
			},
			{
				index: 132,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 5,
							row: 1,
							multiplier: 4,
						},
					],
				},
				winInfo: {
					tumbleWin: 4860,
					boardMult: 4,
					totalWin: 19440,
				},
			},
			{
				index: 133,
				type: 'updateTumbleWin',
				amount: 19440,
			},
			{
				index: 134,
				type: 'setWin',
				amount: 19440,
				winLevel: 9,
			},
			{
				index: 135,
				type: 'setTotalWin',
				amount: 72860,
			},
			{
				index: 136,
				type: 'updateFreeSpin',
				amount: 9,
				total: 10,
			},
			{
				index: 137,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 138,
				type: 'reveal',
				board: [
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
							name: 'H4',
						},
						{
							name: 'H4',
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
							name: 'H2',
						},
						{
							name: 'H1',
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
							name: 'L2',
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
							name: 'H2',
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H4',
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
							name: 'H4',
						},
						{
							name: 'H2',
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
					],
				],
				paddingPositions: [0, 204, 149, 233, 175, 163],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 139,
				type: 'winInfo',
				totalWin: 250,
				wins: [
					{
						symbol: 'H4',
						win: 250,
						positions: [
							{
								reel: 0,
								row: 3,
							},
							{
								reel: 0,
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
								reel: 4,
								row: 1,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 4,
							},
						},
					},
				],
			},
			{
				index: 140,
				type: 'updateTumbleWin',
				amount: 250,
			},
			{
				index: 141,
				type: 'tumbleBoard',
				newSymbols: [
					[
						{
							name: 'L3',
						},
						{
							name: 'L2',
						},
					],
					[],
					[],
					[
						{
							name: 'L1',
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
							name: 'L1',
						},
					],
					[
						{
							name: 'L2',
						},
						{
							name: 'H4',
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
						row: 1,
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
			},
			{
				index: 142,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 143,
				type: 'setWin',
				amount: 250,
				winLevel: 4,
			},
			{
				index: 144,
				type: 'setTotalWin',
				amount: 73110,
			},
			{
				index: 145,
				type: 'updateFreeSpin',
				amount: 10,
				total: 10,
			},
			{
				index: 146,
				type: 'updateGlobalMult',
				globalMult: 1,
			},
			{
				index: 147,
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
							name: 'L2',
						},
						{
							name: 'L2',
						},
						{
							name: 'H3',
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
							name: 'H1',
						},
						{
							name: 'H4',
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
							multiplier: 2,
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
							name: 'L1',
						},
						{
							name: 'L1',
						},
						{
							name: 'H2',
						},
						{
							name: 'M',
							multiplier: 4,
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
					],
					[
						{
							name: 'L3',
						},
						{
							name: 'H4',
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
					],
				],
				paddingPositions: [109, 154, 66, 39, 196, 94],
				gameType: 'freeSpins',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 148,
				type: 'winInfo',
				totalWin: 250,
				wins: [
					{
						symbol: 'H4',
						win: 250,
						positions: [
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 149,
				type: 'updateTumbleWin',
				amount: 250,
			},
			{
				index: 150,
				type: 'tumbleBoard',
				newSymbols: [
					[
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
						{
							name: 'H1',
						},
					],
					[],
					[
						{
							name: 'H4',
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
							name: 'L1',
						},
						{
							name: 'L3',
						},
					],
					[],
				],
				explodingSymbols: [
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
			},
			{
				index: 151,
				type: 'updateGlobalMult',
				globalMult: 2,
			},
			{
				index: 152,
				type: 'boardMultiplierInfo',
				multInfo: {
					positions: [
						{
							reel: 1,
							row: 5,
							multiplier: 2,
						},
						{
							reel: 2,
							row: 4,
							multiplier: 4,
						},
					],
				},
				winInfo: {
					tumbleWin: 250,
					boardMult: 6,
					totalWin: 1500,
				},
			},
			{
				index: 153,
				type: 'updateTumbleWin',
				amount: 1500,
			},
			{
				index: 154,
				type: 'setWin',
				amount: 1500,
				winLevel: 6,
			},
			{
				index: 155,
				type: 'setTotalWin',
				amount: 74610,
			},
			{
				index: 156,
				type: 'freeSpinEnd',
				amount: 74610,
				winLevel: 9,
			},
			{
				index: 157,
				type: 'finalWin',
				amount: 74610,
			},
		],
		criteria: 'freegame',
		baseGameWins: 0.0,
		freeGameWins: 746.1,
	},
	{
		id: 49,
		payoutMultiplier: 2.0,
		events: [
			{
				index: 0,
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
							name: 'H2',
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
						{
							name: 'S',
							scatter: true,
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
					],
					[
						{
							name: 'H3',
						},
						{
							name: 'H2',
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
							name: 'H4',
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
							name: 'L1',
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
							name: 'H4',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [105, 238, 28, 82, 192, 141],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 200,
				wins: [
					{
						symbol: 'H2',
						win: 200,
						positions: [
							{
								reel: 1,
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
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 200,
							overlay: {
								reel: 2,
								row: 3,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 200,
			},
			{
				index: 3,
				type: 'tumbleBoard',
				newSymbols: [
					[],
					[
						{
							name: 'H2',
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
							name: 'H4',
						},
						{
							name: 'L2',
						},
					],
					[
						{
							name: 'L1',
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
				explodingSymbols: [
					{
						reel: 1,
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
			},
			{
				index: 4,
				type: 'setWin',
				amount: 200,
				winLevel: 4,
			},
			{
				index: 5,
				type: 'setTotalWin',
				amount: 200,
			},
			{
				index: 6,
				type: 'finalWin',
				amount: 200,
			},
		],
		criteria: 'basegame',
		baseGameWins: 2.0,
		freeGameWins: 0.0,
	},
	{
		id: 50,
		payoutMultiplier: 2.5,
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
							name: 'H3',
						},
						{
							name: 'H3',
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
							name: 'L2',
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
							name: 'L1',
						},
						{
							name: 'L1',
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
					],
					[
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
							name: 'H4',
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
							name: 'L1',
						},
						{
							name: 'H3',
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
					],
					[
						{
							name: 'H2',
						},
						{
							name: 'H4',
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
							name: 'H3',
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
							name: 'H4',
						},
						{
							name: 'L2',
						},
						{
							name: 'H1',
						},
						{
							name: 'L2',
						},
						{
							name: 'H2',
						},
					],
				],
				paddingPositions: [68, 93, 163, 228, 62, 177],
				gameType: 'basegame',
				anticipation: [0, 0, 0, 0, 0, 0],
			},
			{
				index: 1,
				type: 'winInfo',
				totalWin: 250,
				wins: [
					{
						symbol: 'H4',
						win: 250,
						positions: [
							{
								reel: 0,
								row: 3,
							},
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
								reel: 5,
								row: 2,
							},
						],
						meta: {
							globalMult: 1,
							clusterMult: 1,
							winWithoutMult: 250,
							overlay: {
								reel: 3,
								row: 5,
							},
						},
					},
				],
			},
			{
				index: 2,
				type: 'updateTumbleWin',
				amount: 250,
			},
			{
				index: 3,
				type: 'tumbleBoard',
				newSymbols: [
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
							name: 'H3',
						},
					],
					[
						{
							name: 'L1',
						},
					],
					[
						{
							name: 'H2',
						},
					],
					[
						{
							name: 'L2',
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
						reel: 5,
						row: 2,
					},
				],
			},
			{
				index: 4,
				type: 'setWin',
				amount: 250,
				winLevel: 4,
			},
			{
				index: 5,
				type: 'setTotalWin',
				amount: 250,
			},
			{
				index: 6,
				type: 'finalWin',
				amount: 250,
			},
		],
		criteria: 'basegame',
		baseGameWins: 2.5,
		freeGameWins: 0.0,
	},
];
