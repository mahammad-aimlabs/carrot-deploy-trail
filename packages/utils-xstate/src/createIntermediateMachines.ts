import { createIntermediateMachineBet } from './createIntermediateMachineBet';
import { createIntermediateMachineAutoBet } from './createIntermediateMachineAutoBet';
import { createIntermediateMachineResumeBet } from './createIntermediateMachineResumeBet';
import { createIntermediateMachineForceResult } from './createIntermediateMachineForceResult';

import type { PrimaryMachines } from './types';

const createIntermediateMachines = ({
	forceGame,
	resumeGame,
	newGame,
	playGame,
	endGame,
}: PrimaryMachines) => {
	const bet = createIntermediateMachineBet({ newGame, playGame, endGame });
	const autoBet = createIntermediateMachineAutoBet({ bet });
	const resumeBet = createIntermediateMachineResumeBet({ resumeGame, playGame, endGame });
	const forceResult = createIntermediateMachineForceResult({ forceGame, playGame, endGame });

	return {
		bet,
		autoBet,
		resumeBet,
		forceResult,
	};
};

export { createIntermediateMachines };
