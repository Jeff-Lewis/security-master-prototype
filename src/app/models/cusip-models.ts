import { SetupTransition } from './setup-transition-models';
import { Activity } from './activity';
import { Email } from './email';
import { Timeline } from './timeline';

export class Cusip {
    // SERVER DATA **************************************
    addedDate: Date = new Date();

    setupPriorityType: string;  // trading, non-trading, unknown
    productType: string; // equity, muni, corp, uit
  

    // CLIENT FUNCTIONALITY *****************************
    // couldn't get this to work
    // http://stackoverflow.com/a/37682352
     /*public constructor(init?:Partial<Cusip>) {
        Object.assign(this, init);
    }*/

    public constructor(
        public id:number, 
        public name: string,
        public transitions: CusipSetupTransition[]
    ) {}

    public getCurrentStatus(): CusipSetupTransition {
        var length = this.transitions.length;
        if (length <= 0) return null;
        return this.transitions[length-1];
    }
};

export class CusipSetupTransition {
    public constructor (
        public id: number,
        public addedDate: Date,
        public transition: SetupTransition
    ){}
};