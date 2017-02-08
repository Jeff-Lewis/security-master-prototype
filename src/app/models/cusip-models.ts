import { SetupTransition, SetupTransitionWorkflow } from './setup-transition-models';
import { Activity } from './activity';
import { Email } from './email';
import { Timeline } from './timeline';

export class Cusip {
    // SERVER DATA **************************************
    id:number; 
    name: string;
    transitions: CusipSetupTransition[];
    addedDate: Date = new Date();

    setupPriorityType: string;  // trading, non-trading, unknown
    productType: string; // equity, muni, corp, uit  

    // CLIENT FUNCTIONALITY *****************************
    // couldn't get this to work
    // http://stackoverflow.com/a/37682352
     /*public constructor(init?:Partial<Cusip>) {
        Object.assign(this, init);
    }*/

    static create (
        id:number, 
        name: string,
        transitions: CusipSetupTransition[]
    ) : Cusip {
        let output = new Cusip();

        output.id = id;
        output.name = name;
        output.transitions = transitions;

        return output;
    }
};

export class CusipSetupTransition {
    id: number;
    addedDate: Date;
    transition: SetupTransition;

    static create (
        id:number,
        addedDate:Date,
        transition:SetupTransition
    ) : CusipSetupTransition {
        let output = new CusipSetupTransition();

        output.id = id;
        output.addedDate = addedDate;
        output.transition = transition;

        return output;
    }
};