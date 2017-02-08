import { LogHelper } from '../helpers/log.helper';

export class Timeline {
    elements: TimelineElement[];

    static create(moments:TimelineMoment[]) : Timeline {
        let positionLeftIncrement = 100 / moments.length;
        LogHelper.trace(`positionLeftIncrement=${positionLeftIncrement}`);
        let output = new Timeline();
        output.elements = [];

        for (let i=0; i<moments.length; i++) {
            let moment = moments[i];
            let element = new TimelineElement();

            element.moment = moment;
            element.position = { left: `${(i * positionLeftIncrement)}%` };

            output.elements.push(element);
        }

        return output;
    }
}

export class TimelineMoment {
    label: string;
    text: string;
}

export class TimelineElement {
    moment: TimelineMoment;
    position: { left: string };
}