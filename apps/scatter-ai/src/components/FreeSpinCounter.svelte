<script lang="ts" module>
	export type EmitterEventFreeSpinCounter =
		| { type: 'freeSpinCounterShow' }
		| { type: 'freeSpinCounterHide' }
		| { type: 'freeSpinCounterUpdate'; current?: number; total?: number };
</script>

<!-- svelte-ignore state_referenced_locally -->
<script lang="ts">
	import { MainContainer } from 'components-layout';
	import { FadeContainer } from 'components-pixi';

	import { getContext } from '../game/context';
	import { SYMBOL_SIZE } from '../game/constants';
	import { anchorToPivot, BitmapText, Container, Sprite, type Sizes } from 'pixi-svelte';

	const context = getContext();
	const PANEL_KEY_DESKTOP = 'frame_FSCounter';
	const PANEL_KEY_PORTRAIT = 'Frame_Tumble.png';
	const PANEL_RATIO_DESKTOP = 824 / 622;
	const PANEL_RATIO_PORTRAIT = 1442 / 374;
	const panelKey = context.stateLayoutDerived.isStacked() ? PANEL_KEY_PORTRAIT : PANEL_KEY_DESKTOP;
	const panelWidth = $derived(SYMBOL_SIZE * (context.stateLayoutDerived.isStacked() ? 5.3 : 2));
	const panelSizes = $derived({
		width: panelWidth,
		height:
			panelWidth /
			(context.stateLayoutDerived.isStacked() ? PANEL_RATIO_PORTRAIT : PANEL_RATIO_DESKTOP),
	});
	console.log(panelSizes)
	const scale = $derived(context.stateLayoutDerived.layoutType() === 'tablet' ? 0.7 : 1);
	const desktopPosition = $derived({
		x:
			context.stateGameDerived.boardLayout().x -
			context.stateGameDerived.boardLayout().width * 0.5 -
			panelSizes.width -
			SYMBOL_SIZE * 0.2,
		y:
			context.stateGameDerived.boardLayout().y -
			context.stateGameDerived.boardLayout().height * 0.5,
	});
	const almostSquarePosition = $derived({
		x: context.stateGameDerived.boardLayout().x - panelSizes.width * 0.5 * scale,
		y:
			context.stateGameDerived.boardLayout().y +
			context.stateGameDerived.boardLayout().height * 0.5 +
			panelSizes.height * 0.75,
	});
	const portraitPosition = $derived({
		x: context.stateGameDerived.boardLayout().x - panelSizes.width * 0.5,
		y:
			context.stateGameDerived.boardLayout().y +
			context.stateGameDerived.boardLayout().height * 0.5 +
			panelSizes.height * 1.5,
	});
	const position = $derived(
		context.stateLayoutDerived.isStacked()
			? context.stateLayoutDerived.layoutType() === 'tablet'
				? almostSquarePosition
				: portraitPosition
			: desktopPosition,
	);
	const fontSize = SYMBOL_SIZE * (context.stateLayoutDerived.isStacked() ? 0.4 : 0.275);
	const textGap = 0.25 * SYMBOL_SIZE;

	let show = $state(false);
	let current = $state(0);
	let total = $state(0);
	let titleSizes: Sizes = $state({ width: 0, height: 0 });
	let counterSizes: Sizes = $state({ width: 0, height: 0 });

	const textContainerSizes = $derived(
		context.stateLayoutDerived.isStacked()
			? { width: titleSizes.width + counterSizes.width + textGap, height: titleSizes.height }
			: { width: titleSizes.width, height: titleSizes.height + counterSizes.height },
	);
	const counterPosition = $derived(
		context.stateLayoutDerived.isStacked()
			? { x: titleSizes.width + textGap + counterSizes.width / 2, y: 0 }
			: { x: titleSizes.width / 2, y: titleSizes.height },
	);

	context.eventEmitter.subscribeOnMount({
		freeSpinCounterShow: () => (show = true),
		freeSpinCounterHide: () => (show = false),
		freeSpinCounterUpdate: (emitterEvent) => {
			if (emitterEvent.current !== undefined) current = emitterEvent.current;
			if (emitterEvent.total !== undefined) total = emitterEvent.total;
		},
	});
</script>

<MainContainer>
	<FadeContainer {show} {...position} {scale}>
		<Sprite key={panelKey} {...panelSizes} />
		<Container
			x={panelSizes.width * 0.5}
			y={panelSizes.height * (context.stateLayoutDerived.isStacked() ? 0.46 : 0.48)}
			pivot={anchorToPivot({
				sizes: textContainerSizes,
				anchor: { x: 0.5, y: 0.5 },
			})}
		>
			<BitmapText
				text={'FREE SPIN'}
				style={{
					fontFamily: 'gold',
					fontSize,
					wordWrap: false,
				}}
				onresize={(sizes) => (titleSizes = sizes)}
			/>
			<BitmapText
				text={`${current} OF ${total}`}
				{...counterPosition}
				anchor={{ x: 0.5, y: 0 }}
				style={{
					fontFamily: 'gold',
					fontSize,
				}}
				onresize={(sizes) => (counterSizes = sizes)}
			/>
		</Container>
	</FadeContainer>
</MainContainer>
