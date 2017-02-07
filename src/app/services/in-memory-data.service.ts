import {Component} from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { LogHelper } from '../helpers/log.helper';

import { Cusip, CusipSetupTransition } from '../models/cusip-models';
import { SetupTransition, SetupTransitionWorkflow } from '../models/setup-transition-models';
import { WorkInProgress } from '../models/wip-models';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let transitions = this.getSetupTransitions();
    let transitionWorkflows = this.getSetupTransitionWorkflows(transitions);
    
    let cusips = this.getCusips(transitions);
    let workInProgress = WorkInProgress.create(cusips, transitionWorkflows);

    let apiEndpoints = {
      workInProgress,
      cusips,
      workflows: transitionWorkflows
    }

    return apiEndpoints;
  }

  private getCusips(transitions: SetupTransition[]) : Cusip[] {
    let output = [];

    let cusipsToStartWith = ['123456TY9','98766BH12', '72856YT78'];

    for (let i=0; i<cusipsToStartWith.length;i++) {
      let tempId = i + 1;
      let readyForSetup = CusipSetupTransition.create(tempId, new Date(), transitions[0]);
      output.push(Cusip.create(tempId, cusipsToStartWith[i], [readyForSetup]));
    }  

    output[0].transitions.push(CusipSetupTransition.create(900, new Date(), transitions[1])) ;

    LogHelper.trace(`in-mem getCusips: ${JSON.stringify(output)}`);
    return output;
  }

  private getSetupTransitions(): SetupTransition[] {
    let output = [];
    let names = [
      'Ready For Setup', 
      'Needs Rework',
      'Setup In Progress',
      'Ready For QC',
      'QC In Progress',
      'Ready For Audit',
      'Audit In Progress',
      'Done'
    ];

    for (let i=0; i<names.length; i++) {
      output.push({ id: i+1, name: names[i]});
    }

    return output;
  }

  private getSetupTransitionWorkflows(transitions:SetupTransition[]): SetupTransitionWorkflow[] {
    let output = [];   
    
    for (let i=0; i<transitions.length;i++){
      let transition = transitions[i];
      let queue = {
        id: transition.id, 
        current: transitions[i],
        previous: i > 0 ? transitions[i-1] : null,
        next: i < (transitions.length-1) ? transitions[i+1] : null
      };
      output.push(queue);
    }

    let reworkTransition = transitions[1];
    //Needs Rework
    output[1].previous = null;
    //Setup In Progress 
    output[2].previous = null; 
    // Ready For QC
    output[3].previous = null;
    // QC In Progress
    output[4].previous = reworkTransition;
    // Ready For Audit
    output[5].previous = null;
    // Audit In Progress
    output[6].previous = reworkTransition;
    // Done
    output[7].previous = null;

    return output;
  }
}