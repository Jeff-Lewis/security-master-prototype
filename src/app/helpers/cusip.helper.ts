import { Cusip, CusipSetupTransition } from '../models/cusip-models';
import { SetupTransitionWorkflow } from '../models/setup-transition-models';
import { TimelineMoment, TimelineMomentState } from '../models/timeline-models';

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

    static getTimelineMoments(cusip:Cusip, workflows: SetupTransitionWorkflow[]) : TimelineMoment[] {
        let output = [];

        for (let i=0; i<workflows.length; i++) {
            let moment = new TimelineMoment();
            moment.label = workflows[i].current.name;
            moment.state = TimelineMomentState.disabled;
            output.push(moment);
        }

        return output;
    }
}