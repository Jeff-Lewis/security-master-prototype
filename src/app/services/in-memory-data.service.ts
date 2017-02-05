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
    let workInProgress = new WorkInProgress(cusips, transitionWorkflows);

    let apiEndpoints = {
      workInProgress,
      cusips
    }

    return apiEndpoints;
  }

  private getCusips(transitions: SetupTransition[]) : Cusip[] {
    let output = [];

    let cusipsToStartWith = ['123456TY9','98766BH12', '72856YT78'];

    for (let i=0; i<cusipsToStartWith.length;i++) {
      let tempId = i + 1;
      let readyForSetup = new CusipSetupTransition(tempId, new Date(), transitions[0]);
      output.push(new Cusip(tempId, cusipsToStartWith[i], [readyForSetup]));
    }   

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
        current: status,
        previous: i > 0 ? transitions[i-1] : null,
        next: i < (transitions.length-1) ? transitions[i+1] : null
      };
      output.push(queue);
    }

    let reworkTransition = transitions[1];
    //Needs Rework
    output[1].previousStatus = null;
    //Setup In Progress 
    output[2].previousStatus = null; 
    // Ready For QC
    output[3].previousStatus = null;
    // QC In Progress
    output[4].previousStatus = reworkTransition;
    // Ready For Audit
    output[5].previousStatus = null;
    // Audit In Progress
    output[6].previousStatus = reworkTransition;
    // Done
    output[7].previousStatus = null;

    return output;
  }
}