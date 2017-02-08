import { Cusip, CusipSetupTransition } from '../models/cusip-models';
import { SetupTransitionWorkflow } from '../models/setup-transition-models';

export class CusipHelper {
    static getCurrentStatus(cusip:Cusip): CusipSetupTransition {
        // todo: this should really sort by date and grab the most recent
        if (cusip.transitions == null || cusip.transitions == undefined) return null;

        var length = cusip.transitions.length;
        if (length <= 0) return null;
        return cusip.transitions[length-1];
    }

    static getCurrentWorkflow(cusip:Cusip, workflows: SetupTransitionWorkflow[]) : SetupTransitionWorkflow {
        var currentStatus = CusipHelper.getCurrentStatus(cusip);
        if (currentStatus == null || workflows == null) return null;

        let results = workflows.filter(workflow => workflow.current.id == currentStatus.transition.id);
        return results.length < 0 ? null : results[0];
    }
}