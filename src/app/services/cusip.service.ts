import { Injectable } from '@angular/core';

import { LogHelper } from '../helpers/log.helper';
import { Cusip, CusipSetupTransition } from '../models/cusip-models';
import { SetupTransition, SetupTransitionWorkflow } from '../models/setup-transition-models';
import { HttpApiService } from '../services/http-api.service';
import { WorkflowService } from '../services/workflow.service';

@Injectable()
export class CusipService {
  private apiUrl = 'api/cusips';
  
  private workflows: SetupTransitionWorkflow[];

  constructor(
    private httpApi: HttpApiService,
    private workflowService: WorkflowService) { }

    
  create(cusipName: string): Promise<Cusip> {
    return new Promise<Cusip>((resolve) => {
      this.getWorkflows().then(workflows => {
        let initialTransition = CusipSetupTransition.create(1000, new Date(), this.workflows[0].current);
        let cusip = {
          name: cusipName,
          addedDate: new Date(),
          transitions: [initialTransition]
        };
        
        this.httpApi.post(this.apiUrl, cusip).then(response => resolve(response as Cusip));
      });
    });        
  }

  addTransition(cusip:Cusip, transition:SetupTransition): Promise<Cusip> {
    const url = `${this.apiUrl}/${cusip.id}`;
    let cusipTransition = CusipSetupTransition.create(1000, new Date(), transition);
    cusip.transitions.push(cusipTransition);

    return this.httpApi.put(url, cusip).then(response => response);
  }

  getCusips(): Promise<Cusip[]> {
    const url = `${this.apiUrl}`;
    return this.httpApi.get<Cusip>(url);
  }

  getCusipById(id:number): Promise<Cusip> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpApi.getSingle<Cusip>(url);
  }

  getCusipByName(name:string): Promise<Cusip> {
    const url = `${this.apiUrl}?name=${name}`;
    return this.httpApi.getSingle<Cusip>(url);
  }

  private getWorkflows(): Promise<SetupTransitionWorkflow[]> {
    return new Promise<SetupTransitionWorkflow[]> ((resolve) => {
        if (this.workflows){
          resolve(this.workflows);
          return;
        }

        this.workflowService.getWorkflows().then(workflows => {
          this.workflows = workflows;
          resolve(this.workflows);
      });
    });     
  }
}
