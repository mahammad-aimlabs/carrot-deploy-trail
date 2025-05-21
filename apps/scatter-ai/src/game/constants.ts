import _ from 'lodash';

import type { RawSymbol, SymbolState } from './types';

export const SYMBOL_SIZE = 200;

export const REEL_PADDING = 0.5;

// initial board (padded top and bottom)
export const INITIAL_BOARD: RawSymbol[][] = [
	[
		{ name: 'M', subtype: '10' },
		{ name: 'H1' },
		{ name: 'M', subtype: '2' },
		{ name: 'L1' },
		{ name: 'H1' },
		{ name: 'H4' },
		{ name: 'H1' },
	],
	[
		{ name: 'L3' },
		{ name: 'H2' },
		{ name: 'M', subtype: '4' },
		{ name: 'L2' },
		{ name: 'S' },
		{ name: 'S' },
		{ name: 'L2' },
	],
	[
		{ name: 'L2' },
		{ name: 'H3' },
		{ name: 'M', subtype: '5' },
		{ name: 'L3' },
		{ name: 'W' },
		{ name: 'L2' },
		{ name: 'L2' },
	],
	[
		{ name: 'L3' },
		{ name: 'H4' },
		{ name: 'M', subtype: '7' },
		{ name: 'L4' },
		{ name: 'W' },
		{ name: 'H1' },
		{ name: 'H1' },
	],
	[
		{ name: 'H3' },
		{ name: 'H5' },
		{ name: 'M', subtype: '10' },
		{ name: 'H2' },
		{ name: 'S' },
		{ name: 'L2' },
		{ name: 'M', subtype: '7' },
	],
	[
		{ name: 'H2' },
		{ name: 'H2' },
		{ name: 'S' },
		{ name: 'L3' },
		{ name: 'H1' },
		{ name: 'S' },
		{ name: 'L2' },
	],
];
// export const INITIAL_BOARD: RawSymbol[][] = [
// 	[
// 		{ name: 'H1'},
// 		{ name: 'H1'},
// 		{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},
// 	],
// 	[
// 		{ name: 'H1'},
// 		{ name: 'H1'},
// 		{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},
// 	],
// 	[
// 		{ name: 'H1'},
// 		{ name: 'H1'},
// 		{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},
// 	],[
// 		{ name: 'H1'},
// 		{ name: 'H1'},
// 		{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},
// 	],[
// 		{ name: 'H1'},
// 		{ name: 'H1'},
// 		{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},
// 	],[
// 		{ name: 'H1'},
// 		{ name: 'H1'},
// 		{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},{ name: 'H1'},
// 	]
// ];

export const BOARD_DIMENSIONS = { x: INITIAL_BOARD.length, y: INITIAL_BOARD[0].length - 2 };

export const BOARD_SIZES = {
	width: SYMBOL_SIZE * BOARD_DIMENSIONS.x,
	height: SYMBOL_SIZE * BOARD_DIMENSIONS.y,
};

// export const BACKGROUND_RATIO = 2039 / 1000;
// export const PORTRAIT_BACKGROUND_RATIO = 1242 / 2208;
// const PORTRAIT_RATIO = 800 / 1422;
// const LANDSCAPE_RATIO = 1600 / 900;
// const DESKTOP_RATIO = 1422 / 800;

// const DESKTOP_HEIGHT = 800;
// const LANDSCAPE_HEIGHT = 900;
// const PORTRAIT_HEIGHT = 1422;
// export const DESKTOP_MAIN_SIZES = { width: DESKTOP_HEIGHT * DESKTOP_RATIO, height: DESKTOP_HEIGHT };
// export const LANDSCAPE_MAIN_SIZES = {
// 	width: LANDSCAPE_HEIGHT * LANDSCAPE_RATIO,
// 	height: LANDSCAPE_HEIGHT,
// };
// export const PORTRAIT_MAIN_SIZES = {
// 	width: PORTRAIT_HEIGHT * PORTRAIT_RATIO,
// 	height: PORTRAIT_HEIGHT,
// };

export const HIGH_SYMBOLS = ['H1', 'H2', 'H3', 'H4', 'H5'];

export const INITIAL_SYMBOL_STATE: SymbolState = 'static';

const M_SIZE = 0.3;
const HIGH_SYMBOL_SIZE = 0.9;
const LOW_SYMBOL_SIZE = 0.9;
const SPECIAL_SYMBOL_SIZE = 1;

const SPIN_OPTIONS_SHARED = {
	reelFallInDelay: 80,
	reelPaddingMultiplierNormal: 1.25,
	reelPaddingMultiplierAnticipated: 18,
	reelFallOutDelay: 145,
};

export const SPIN_OPTIONS_DEFAULT = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 3.5,
	symbolFallInInterval: 30,
	symbolFallInBounceSpeed: 0.15,
	symbolFallInBounceSizeMulti: 0.5,
	symbolFallOutSpeed: 3.5,
	symbolFallOutInterval: 20,
};

export const SPIN_OPTIONS_FAST = {
	...SPIN_OPTIONS_SHARED,
	symbolFallInSpeed: 7,
	symbolFallInInterval: 0,
	symbolFallInBounceSpeed: 0.3,
	symbolFallInBounceSizeMulti: 0.25,
	symbolFallOutSpeed: 7,
	symbolFallOutInterval: 0,
};

export const MOTION_BLUR_VELOCITY = 31;

export const zIndexes = {
	background: {
		backdrop: -3,
		normal: -2,
		feature: -1,
	},
};

const explosion = {
	type: 'spine',
	assetKey: 'explosion',
	animationName: 'explosion',
	sizeRatios: { width: 1, height: 1 },
};

const h1Static = { type: 'sprite', assetKey: 'sym_1', sizeRatios: { width: 1, height: 1 } };
const h2Static = { type: 'sprite', assetKey: 'sym_2', sizeRatios: { width: 1, height: 1 } };
const h3Static = { type: 'sprite', assetKey: 'sym_3', sizeRatios: { width: 1, height: 1 } };
const h4Static = { type: 'sprite', assetKey: 'sym_4', sizeRatios: { width: 1, height: 1 } };
const h5Static = { type: 'sprite', assetKey: 'sym_5', sizeRatios: { width: 1, height: 1 } };

const l1Static = { type: 'sprite', assetKey: 'sym_6', sizeRatios: { width: 1, height: 1 } };
const l2Static = { type: 'sprite', assetKey: 'sym_7', sizeRatios: { width: 1, height: 1 } };
const l3Static = { type: 'sprite', assetKey: 'sym_8', sizeRatios: { width: 1, height: 1 } };
const l4Static = { type: 'sprite', assetKey: 'sym_9', sizeRatios: { width: 1, height: 1 } };

const sStatic = { type: 'sprite', assetKey: 'scatter', sizeRatios: { width: 1, height: 1 } };
const wStatic = { type: 'sprite', assetKey: 'wild', sizeRatios: { width: 1, height: 1 } };

const m2Static = {
	type: 'sprite',
	assetKey: 'm1_2x.png',
	sizeRatios: { width: 1, height: 1 },
};
const m4Static = {
	type: 'sprite',
	assetKey: 'm1_4x.png',
	sizeRatios: { width: 1, height: 1 },
};
const m5Static = { type: 'sprite', assetKey: 'm2_5x.png', sizeRatios: { width: 1, height: 1 } };
const m7Static = { type: 'sprite', assetKey: 'm2_7x.png', sizeRatios: { width: 1, height: 1 } };
const m10Static = { type: 'sprite', assetKey: 'm3_10x.png', sizeRatios: { width: 1, height: 1 } };

const wSizeRatios = { width: 1.5 * 0.9, height: SPECIAL_SYMBOL_SIZE * 1.15 };
const sSizeRatios = { width: 2.5, height: SPECIAL_SYMBOL_SIZE * 2.3 };

const backgroundLowStatic = {
	type: 'spine',
	assetKey: 'M',
	animationName: 'low_multiplier_static',
	sizeRatios: { width: M_SIZE, height: M_SIZE },
};
const backgroundMidStatic = {
	type: 'spine',
	assetKey: 'M',
	animationName: 'mid_multiplier_static',
	sizeRatios: { width: M_SIZE, height: M_SIZE },
};
const backgroundHighStatic = {
	type: 'spine',
	assetKey: 'M',
	animationName: 'high_multiplier_static',
	sizeRatios: { width: M_SIZE, height: M_SIZE },
};

const backgroundLow = {
	explosion,
	win: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'low_multiplier_pay',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	postWinStatic: backgroundLowStatic,
	static: backgroundLowStatic,
	spin: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'low_multiplier_static',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	land: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'low_multiplier_land',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
};

const backgroundMid = {
	explosion,
	win: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'mid_multiplier_pay',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	postWinStatic: backgroundMidStatic,
	static: backgroundMidStatic,
	spin: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'mid_multiplier_static',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	land: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'mid_multiplier_land',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
};

const backgroundHigh = {
	explosion,
	win: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'high_multiplier_pay',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	postWinStatic: backgroundHighStatic,
	static: backgroundHighStatic,
	spin: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'high_multiplier_static',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
	land: {
		type: 'spine',
		assetKey: 'M',
		animationName: 'high_multiplier_land',
		sizeRatios: { width: M_SIZE, height: M_SIZE },
	},
};

export const SYMBOL_INFO_MAP = {
	H1: {
		explosion,
		// win: {
		// 	type: 'spine',
		// 	assetKey: 'H1',
		// 	animationName: 'h1',
		// 	sizeRatios: { width: 0.5 * 1.15, height: HIGH_SYMBOL_SIZE * 0.57 },
		// },
		win:{type: 'winAnime',assetKey: 'sym_1', sizeRatios: { width: 1, height: 1 } },
		postWinStatic: h1Static,
		static: h1Static,
		spin: h1Static,
		land: h1Static,
	},
	H2: {
		explosion,
		// win: {
		// 	type: 'spine',
		// 	assetKey: 'H2',
		// 	animationName: 'h2',
		// 	sizeRatios: { width: 0.5, height: HIGH_SYMBOL_SIZE * 0.57 },
		// },
		win:{type: 'winAnime',assetKey: 'sym_2', sizeRatios: { width: 1, height: 1 } },
		postWinStatic: h2Static,
		static: h2Static,
		spin: h2Static,
		land: h2Static,
	},
	H3: {
		explosion,
		// win: {
		// 	type: 'spine',
		// 	assetKey: 'H3',
		// 	animationName: 'h3',
		// 	sizeRatios: { width: 0.5 * 0.9, height: HIGH_SYMBOL_SIZE * 0.53 },
		// },
		win:{type: 'winAnime',assetKey: 'sym_3', sizeRatios: { width: 1, height: 1 } },
		postWinStatic: h3Static,
		static: h3Static,
		spin: h3Static,
		land: h3Static,
	},
	H4: {
		explosion,
		// win: {
		// 	type: 'spine',
		// 	assetKey: 'H4',
		// 	animationName: 'h4',
		// 	sizeRatios: { width: 0.5 * 0.9, height: HIGH_SYMBOL_SIZE * 0.53 },
		// },
		win:{type: 'winAnime',assetKey: 'sym_4', sizeRatios: { width: 1, height: 1 } },
		postWinStatic: h4Static,
		static: h4Static,
		spin: h4Static,
		land: h4Static,
	},
	H5: {
		explosion,
		// win: {
		// 	type: 'spine',
		// 	assetKey: 'H5',
		// 	animationName: 'h5',
		// 	sizeRatios: { width: 0.5 * 0.9, height: HIGH_SYMBOL_SIZE * 0.53 },
		// },
		win:{type: 'winAnime',assetKey: 'sym_5', sizeRatios: { width: 1, height: 1 } },
		postWinStatic: h5Static,
		static: h5Static,
		spin: h5Static,
		land: h5Static,
	},
	L1: {
		explosion,
		// win: {
		// 	type: 'spine',
		// 	assetKey: 'L1',
		// 	animationName: 'l1',
		// 	sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.65 },
		// },
		win:{type: 'winAnime',assetKey: 'sym_6', sizeRatios: { width: 1, height: 1 } },
		postWinStatic: l1Static,
		static: l1Static,
		spin: l1Static,
		land: l1Static,
	},
	L2: {
		explosion,
		// win: {
		// 	type: 'spine',
		// 	assetKey: 'L2',
		// 	animationName: 'l2',
		// 	sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.65 },
		// },
		win:{type: 'winAnime',assetKey: 'sym_7', sizeRatios: { width: 1, height: 1 } },
		postWinStatic: l2Static,
		static: l2Static,
		spin: l2Static,
		land: l2Static,
	},
	L3: {
		explosion,
		// win: {
		// 	type: 'spine',
		// 	assetKey: 'L3',
		// 	animationName: 'l3',
		// 	sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.63 },
		// },
		win:{type: 'winAnime',assetKey: 'sym_8', sizeRatios: { width: 1, height: 1 } },
		postWinStatic: l3Static,
		static: l3Static,
		spin: l3Static,
		land: l3Static,
	},
	L4: {
		explosion,
		// win: {
		// 	type: 'spine',
		// 	assetKey: 'L4',
		// 	animationName: 'l4',
		// 	sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.63 },
		// },
		win:{type: 'winAnime',assetKey: 'sym_9', sizeRatios: { width: 1, height: 1 } },
		postWinStatic: l4Static,
		static: l4Static,
		spin: l4Static,
		land: l4Static,
	},
	W: {
		explosion,
		postWinStatic: wStatic,
		static: wStatic,
		spin: wStatic,
		// win: { type: 'spine', assetKey: 'W', animationName: 'wild_dynamite', sizeRatios: wSizeRatios },
		win:{type: 'winAnime',assetKey: 'wild', sizeRatios: { width: 1, height: 1 } },
		land:wStatic
		// land: {
		// 	type: 'spine',
		// 	assetKey: 'W',
		// 	animationName: 'wild_dynamite_land',
		// 	sizeRatios: wSizeRatios,
		// },
	},
	S: {
		explosion,
		postWinStatic: sStatic,
		static: sStatic,
		// spin: {
		// 	type: 'spine',
		// 	assetKey: 'S',
		// 	animationName: 'scatter_spin',
		// 	sizeRatios: sSizeRatios,
		// },
		spin: sStatic,
		// win: { type: 'spine', assetKey: 'S', animationName: 'scatter_win', sizeRatios: sSizeRatios },
		win:{type: 'winAnime',assetKey: 'scatter', sizeRatios: { width: 1, height: 1 } },
		land: sStatic
		// land: {
		// 	type: 'spine',
		// 	assetKey: 'S',
		// 	animationName: 'scatter_land',
		// 	sizeRatios: sSizeRatios,
		// },
	},
	M_2: {
		explosion,
		postWinStatic: m2Static,
		static: m2Static,
		spin: m2Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '2x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '2x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_4: {
		explosion,
		postWinStatic: m4Static,
		static: m4Static,
		spin: m4Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '4x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '4x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_5: {
		explosion,
		postWinStatic: m5Static,
		static: m5Static,
		spin: m5Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '5x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '5x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_7: {
		explosion,
		postWinStatic: m7Static,
		static: m7Static,
		spin: m7Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '7x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '7x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_10: {
		explosion,
		postWinStatic: m10Static,
		static: m10Static,
		spin: m10Static,
		win: {
			type: 'spine',
			assetKey: 'M',
			animationName: '10x',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
		land: {
			type: 'spine',
			assetKey: 'M',
			animationName: '10x_land',
			sizeRatios: { width: M_SIZE, height: M_SIZE },
		},
	},
	M_TAKEN_2: backgroundLow,
	M_TAKEN_4: backgroundLow,
	M_TAKEN_5: backgroundMid,
	M_TAKEN_7: backgroundMid,
	M_TAKEN_10: backgroundHigh,
} as const;

export const MULTIPLIER_BACKGROUND_INFO_MAP = {
	M_2: backgroundLow,
	M_4: backgroundLow,
	M_5: backgroundMid,
	M_7: backgroundMid,
	M_10: backgroundHigh,
};

export const SCATTER_LAND_SOUND_MAP = {
	1: 'sfx_scatter_stop_1',
	2: 'sfx_scatter_stop_2',
	3: 'sfx_scatter_stop_3',
	4: 'sfx_scatter_stop_4',
	5: 'sfx_scatter_stop_5',
} as const;
