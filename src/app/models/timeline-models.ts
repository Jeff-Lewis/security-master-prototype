import { LogHelper } from '../helpers/log.helper';

export class Timeline {
    elements: TimelineElement[];
    completePercent: number;

    static create(moments:TimelineMoment[]) : Timeline {
        let positionLeftIncrement = 100 / moments.length;
        let output = new Timeline();
        output.elements = [];

        let lastNonDisabledIndex = 0;
        for (let i=0; i<moments.length; i++) {
            let moment = moments[i];
            let element = new TimelineElement();

            element.moment = moment;
            element.position = { left: (i * positionLeftIncrement) };

            lastNonDisabledIndex = element.moment.state == TimelineMomentState.disabled ? lastNonDisabledIndex : i;
            output.elements.push(element);
        }       

        output.completePercent =  
            ((lastNonDisabledIndex + 1) * positionLeftIncrement) - 
            (positionLeftIncrement / 2)   ;
        
        return output;
    }
}

export enum TimelineMomentState {
    active,
    complete,
    danger,
    disabled    
}

export class TimelineMoment {
    label: string;
    text: string;
    state: TimelineMomentState;

    getStateName(): string {
        return TimelineMomentState[this.state];
    }
}

export class TimelineElement {
    moment: TimelineMoment;
    position: { left: number };
}