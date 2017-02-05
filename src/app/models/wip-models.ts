import { Cusip } from './cusip-models';
import { SetupTransitionWorkflow } from './setup-transition-models';

export class WorkInProgress {
    public constructor(
        public cusips: Cusip[],
        public transitionWorkflows: SetupTransitionWorkflow[]
    ) {}
}