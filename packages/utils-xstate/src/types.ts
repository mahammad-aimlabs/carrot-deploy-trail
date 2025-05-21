import type { BetType } from 'rgs-requests';

import type { createPrimaryMachines } from './createPrimaryMachines';
import type { createIntermediateMachineBet } from './createIntermediateMachineBet';
import type { createIntermediateMachineAutoBet } from './createIntermediateMachineAutoBet';
import type { createIntermediateMachineResumeBet } from './createIntermediateMachineResumeBet';
import type { createIntermediateMachineForceResult } from './createIntermediateMachineForceResult';

export type IntermediateMachineBet = ReturnType<typeof createIntermediateMachineBet>;
export type IntermediateMachineAutoBet = ReturnType<typeof createIntermediateMachineAutoBet>;
export type IntermediateMachineResumeBet = ReturnType<typeof createIntermediateMachineResumeBet>;
export type IntermediateMachineForceResult = ReturnType<
	typeof createIntermediateMachineForceResult
>;

export type IntermediateMachines = {
	bet: IntermediateMachineBet;
	autoBet: IntermediateMachineAutoBet;
	resumeBet: IntermediateMachineResumeBet;
	forceResult: IntermediateMachineForceResult;
};

export type PrimaryMachines = ReturnType<typeof createPrimaryMachines>;

export type BaseBet = BetType<any>;
