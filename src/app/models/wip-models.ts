import { Cusip } from './cusip-models';
import { SetupTransitionWorkflow } from './setup-transition-models';

export class WorkInProgress {
    cusips: Cusip[];    
    transitionWorkflows: SetupTransitionWorkflow[];

    static create (
        cusips: Cusip[],
        transitionWorkflows: SetupTransitionWorkflow[]
    ) : WorkInProgress {
        let output = new WorkInProgress();

        output.cusips = cusips;
        output.transitionWorkflows = transitionWorkflows;

        return output;
    }
}