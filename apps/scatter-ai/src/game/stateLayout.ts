import { createLayout } from 'utils-layout';

export const { stateLayout, stateLayoutDerived } = createLayout({
	// backgroundRatio: {
	// 	normal: 2039 / 1000,
	// 	portrait: 1242 / 2208,
	// },
	backgroundRatio: {
		normal: 1,
		portrait: 1,
	},
	mainSizesMap: {
		desktop: { width: 1500, height: 1500 },
		tablet: { width: 1500, height: 1500 },
		landscape: { width: 1500, height: 1500 },
		portrait: { width: 1500, height: 1500 },
	},
});
