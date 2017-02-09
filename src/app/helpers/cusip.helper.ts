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
        let transitions = cusip.transitions;
        let transitionStatuses = transitions.map(transition => transition.transition.name);
        let lastActiveCusipState = 0;
        
        for (let i=0; i<workflows.length; i++) {
            let moment = new TimelineMoment();
            let workflow = workflows[i];
            let lastIndexOfWorkflow = transitionStatuses.lastIndexOf(workflow.current.name);

            // determine if the current workflow step is greater than
            // or equal to the last active cusip state.  If so, assume
            // it's "completed" that step for now.  later, the last "completed"
            // step is assumed to be the "current active step", unless the cusip
            // is "done"
            let momentState = 
                lastIndexOfWorkflow >= lastActiveCusipState ? 
                    TimelineMomentState.complete : 
                    TimelineMomentState.disabled;

            // see if you need to update the last active state of the cusip
            lastActiveCusipState = 
                momentState != TimelineMomentState.disabled ? 
                    lastIndexOfWorkflow : 
                    lastActiveCusipState;

            moment.label = workflows[i].current.name;
            moment.state = momentState;

            output.push(moment);
        }

        // set the active state
        let activeIndex = output.map(m => m.state).lastIndexOf(TimelineMomentState.complete);
        if (activeIndex < output.length - 1) // don't activate "done"
            output[activeIndex].state = TimelineMomentState.active;

        // always ensure any active "rework" step is in danger mode
        // this means it's never complete or active, just in danger
        // we're doing this as a ux hint to the user
        let activeRework = output.find(m => m.label.toUpperCase().indexOf('REWORK') >= 0 && m.state != TimelineMomentState.disabled);
        if (activeRework)
            activeRework.state = TimelineMomentState.danger;

        return output;
    }
}