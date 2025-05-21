import _ from 'lodash';

import type { RawSymbol, SymbolState } from './types';

export const SYMBOL_SIZE = 90;

export const REEL_PADDING = 0.53;

// initial board (padded top and bottom)
export const INITIAL_BOARD: RawSymbol[][] = [
	[
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
			name: 'H2',
		},
		{
			name: 'H4',
		},
		{
			name: 'L5',
		},
		{
			name: 'H3',
		},
	],
	[
		{
			name: 'L5',
		},
		{
			name: 'L4',
		},
		{
			name: 'L5',
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
			name: 'H1',
		},
		{
			name: 'L4',
		},
		{
			name: 'H3',
		},
		{
			name: 'L5',
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
			name: 'L2',
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
			name: 'H2',
		},
		{
			name: 'L4',
		},
		{
			name: 'L3',
		},
		{
			name: 'L5',
		},
		{
			name: 'L5',
		},
		{
			name: 'H1',
		},
		{
			name: 'H1',
		},
	],
];

export const BOARD_DIMENSIONS = { x: INITIAL_BOARD.length, y: INITIAL_BOARD[0].length - 2 };

export const BOARD_SIZES = {
	width: SYMBOL_SIZE * BOARD_DIMENSIONS.x,
	height: SYMBOL_SIZE * BOARD_DIMENSIONS.y,
};

export const BACKGROUND_RATIO = 2039 / 1000;
export const PORTRAIT_BACKGROUND_RATIO = 1242 / 2208;
const PORTRAIT_RATIO = 800 / 1422;
const LANDSCAPE_RATIO = 1600 / 900;
const DESKTOP_RATIO = 1422 / 800;

const DESKTOP_HEIGHT = 800;
const LANDSCAPE_HEIGHT = 900;
const PORTRAIT_HEIGHT = 1422;
export const DESKTOP_MAIN_SIZES = { width: DESKTOP_HEIGHT * DESKTOP_RATIO, height: DESKTOP_HEIGHT };
export const LANDSCAPE_MAIN_SIZES = {
	width: LANDSCAPE_HEIGHT * LANDSCAPE_RATIO,
	height: LANDSCAPE_HEIGHT,
};
export const PORTRAIT_MAIN_SIZES = {
	width: PORTRAIT_HEIGHT * PORTRAIT_RATIO,
	height: PORTRAIT_HEIGHT,
};

export const HIGH_SYMBOLS = ['H1', 'H2', 'H3', 'H4', 'H5'];

export const INITIAL_SYMBOL_STATE: SymbolState = 'static';

const HIGH_SYMBOL_SIZE = 0.9;
const LOW_SYMBOL_SIZE = 0.9;
const SPECIAL_SYMBOL_SIZE = 1;

const SPIN_OPTIONS_SHARED = {
	reelBounceBackSpeed: 0.15,
	reelSpinSpeedBeforeBounce: 4,
	reelPaddingMultiplierNormal: 1.2,
	reelPaddingMultiplierAnticipated: 10,
	reelSpinDelay: 145,
};

export const SPIN_OPTIONS_DEFAULT = {
	...SPIN_OPTIONS_SHARED,
	reelPreSpinSpeed: 2,
	reelSpinSpeed: 3,
	reelBounceSizeMulti: 0.3,
};

export const SPIN_OPTIONS_FAST = {
	...SPIN_OPTIONS_SHARED,
	reelPreSpinSpeed: 5,
	reelSpinSpeed: 5,
	reelBounceSizeMulti: 0.05,
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

const h1Static = { type: 'sprite', assetKey: 'h1.webp', sizeRatios: { width: 1, height: 1 } };
const h2Static = { type: 'sprite', assetKey: 'h2.webp', sizeRatios: { width: 1, height: 1 } };
const h3Static = { type: 'sprite', assetKey: 'h3.webp', sizeRatios: { width: 1, height: 1 } };
const h4Static = { type: 'sprite', assetKey: 'h4.webp', sizeRatios: { width: 1, height: 1 } };
const h5Static = { type: 'sprite', assetKey: 'h5.webp', sizeRatios: { width: 1, height: 1 } };

const l1Static = { type: 'sprite', assetKey: 'l1.webp', sizeRatios: { width: 1, height: 1 } };
const l2Static = { type: 'sprite', assetKey: 'l2.webp', sizeRatios: { width: 1, height: 1 } };
const l3Static = { type: 'sprite', assetKey: 'l3.webp', sizeRatios: { width: 1, height: 1 } };
const l4Static = { type: 'sprite', assetKey: 'l4.webp', sizeRatios: { width: 1, height: 1 } };
const l5Static = {
	type: 'spine',
	assetKey: 'L5',
	animationName: 'low_multiplier_static',
	sizeRatios: { width: 0.3, height: 0.3 },
};

const sStatic = { type: 'sprite', assetKey: 's.png', sizeRatios: { width: 1.243, height: 1.243 } };
const sSizeRatios = { width: 2.5, height: SPECIAL_SYMBOL_SIZE * 2.3 };

const xStatic = {
	type: 'sprite',
	assetKey: 'l2.png',
	sizeRatios: { width: 1, height: 1 },
};

const pStatic = {
	type: 'sprite',
	assetKey: 'scatter.png',
	sizeRatios: { width: 1, height: 1 },
};

export const SYMBOL_INFO_MAP = {
	H1: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'H1',
			animationName: 'h1',
			sizeRatios: { width: 0.5 * 1.15, height: HIGH_SYMBOL_SIZE * 0.57 },
		},
		postWinStatic: h1Static,
		static: h1Static,
		spin: h1Static,
		land: h1Static,
	},
	H2: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'H2',
			animationName: 'h2',
			sizeRatios: { width: 0.5, height: HIGH_SYMBOL_SIZE * 0.57 },
		},
		postWinStatic: h2Static,
		static: h2Static,
		spin: h2Static,
		land: h2Static,
	},
	H3: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'H3',
			animationName: 'h3',
			sizeRatios: { width: 0.5 * 0.9, height: HIGH_SYMBOL_SIZE * 0.53 },
		},
		postWinStatic: h3Static,
		static: h3Static,
		spin: h3Static,
		land: h3Static,
	},
	H4: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'H4',
			animationName: 'h4',
			sizeRatios: { width: 0.5 * 0.9, height: HIGH_SYMBOL_SIZE * 0.53 },
		},
		postWinStatic: h4Static,
		static: h4Static,
		spin: h4Static,
		land: h4Static,
	},
	H5: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'H5',
			animationName: 'h5',
			sizeRatios: { width: 0.5 * 0.9, height: HIGH_SYMBOL_SIZE * 0.53 },
		},
		postWinStatic: h5Static,
		static: h5Static,
		spin: h5Static,
		land: h5Static,
	},
	L1: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'L1',
			animationName: 'l1',
			sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.65 },
		},
		postWinStatic: l1Static,
		static: l1Static,
		spin: l1Static,
		land: l1Static,
	},
	L2: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'L2',
			animationName: 'l2',
			sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.65 },
		},
		postWinStatic: l2Static,
		static: l2Static,
		spin: l2Static,
		land: l2Static,
	},
	L3: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'L3',
			animationName: 'l3',
			sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.63 },
		},
		postWinStatic: l3Static,
		static: l3Static,
		spin: l3Static,
		land: l3Static,
	},
	L4: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'L4',
			animationName: 'l4',
			sizeRatios: { width: 0.5 * 0.75, height: LOW_SYMBOL_SIZE * 0.63 },
		},
		postWinStatic: l4Static,
		static: l4Static,
		spin: l4Static,
		land: l4Static,
	},
	L5: {
		explosion,
		win: {
			type: 'spine',
			assetKey: 'L5',
			animationName: 'low_multiplier_pay',
			sizeRatios: { width: 0.3, height: 0.3 },
		},
		postWinStatic: l5Static,
		static: l5Static,
		spin: l5Static,
		land: l5Static,
	},
	S: {
		explosion,
		postWinStatic: sStatic,
		static: sStatic,
		spin: {
			type: 'spine',
			assetKey: 'S',
			animationName: 'scatter_spin',
			sizeRatios: sSizeRatios,
		},
		win: { type: 'spine', assetKey: 'S', animationName: 'scatter_win', sizeRatios: sSizeRatios },
		land: {
			type: 'spine',
			assetKey: 'S',
			animationName: 'scatter_land',
			sizeRatios: sSizeRatios,
		},
	},
	W: {
		explosion,
		static: {
			type: 'spine',
			assetKey: 'symbols',
			animationName: 'wild_comp_static',
			sizeRatios: { width: 1, height: 1 },
		},
		spin: {
			type: 'spine',
			assetKey: 'symbols',
			animationName: 'wild_comp_static',
			sizeRatios: { width: 1, height: 1 },
		},
		land: {
			type: 'spine',
			assetKey: 'symbols',
			animationName: 'wild_comp_hit',
			sizeRatios: { width: 1, height: 1 },
		},
		win: {
			type: 'spine',
			assetKey: 'symbols',
			animationName: 'wild_comp_win',
			sizeRatios: { width: 1, height: 1 },
		},
		postWinStatic: {
			type: 'spine',
			assetKey: 'symbols',
			animationName: 'wild_comp_static',
			sizeRatios: { width: 1, height: 1 },
		},
	},
	X: {
		explosion: xStatic,
		win: xStatic,
		postWinStatic: xStatic,
		static: xStatic,
		spin: xStatic,
		land: xStatic,
	},
	P: {
		explosion: pStatic,
		static: pStatic,
		spin: pStatic,
		land: pStatic,
		win: pStatic,
		postWinStatic: pStatic,
	},
} as const;

export const SCATTER_LAND_SOUND_MAP = {
	1: 'sfx_scatter_stop_1',
	2: 'sfx_scatter_stop_2',
	3: 'sfx_scatter_stop_3',
	4: 'sfx_scatter_stop_4',
	5: 'sfx_scatter_stop_5',
} as const;
