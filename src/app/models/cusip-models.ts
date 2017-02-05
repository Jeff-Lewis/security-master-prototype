import { SetupTransition } from './setup-transition-models';
import { Activity } from './activity';
import { Email } from './email';

export class Cusip {
    // SERVER DATA **************************************
    id: number;
    name: string;
    addedDate: Date = new Date();

    setupPriorityType: string;  // trading, non-trading, unknown
    productType: string; // equity, muni, corp, uit

    transitions: CusipSetupTransition[];

    // CLIENT FUNCTIONALITY *****************************
    // couldn't get this to work
    // http://stackoverflow.com/a/37682352
     /*public constructor(init?:Partial<Cusip>) {
        Object.assign(this, init);
    }*/
    public constructor(id:number, name: string) {
        this.id = id;
        this.name = name;
    }
};

export class CusipSetupTransition {
    // SERVER DATA **************************************
    id: number;
    addedDate: Date;
    transition: SetupTransition;
};