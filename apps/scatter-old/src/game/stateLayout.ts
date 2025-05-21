import { createLayout } from 'utils-layout';

export const { stateLayout, stateLayoutDerived } = createLayout({
	backgroundRatio: {
		normal: 2039 / 1000,
		portrait: 1242 / 2208,
	},
	mainSizesMap: {
		desktop: { width: 800, height: 800 },
		tablet: { width: 800, height: 800 },
		landscape: { width: 800, height: 800 },
		portrait: { width: 800, height: 800 },
	},
});
