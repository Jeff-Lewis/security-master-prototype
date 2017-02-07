import { Injectable } from '@angular/core';
import { LogHelper } from '../helpers/log.helper';
import { SetupTransitionWorkflow } from '../models/setup-transition-models';
import { HttpApiService } from '../services/http-api.service';

@Injectable()
export class WorkflowService {
  private apiUrl = 'api/workflows';
  private workflows = null;

  constructor(private httpApi: HttpApiService) { }

  getWorkflows(): Promise<SetupTransitionWorkflow[]> {
    const url = `${this.apiUrl}`;
    return this.httpApi.get<SetupTransitionWorkflow>(url, SetupTransitionWorkflow);
    /*if (this.workflows == null) {
      return new Promise<SetupTransitionWorkflow[]>((resolve) => {
        this.httpApi.get<SetupTransitionWorkflow>(url, SetupTransitionWorkflow).then(workflows => {
          LogHelper.trace(`svc=${JSON.stringify(workflows)}`);
          this.workflows = workflows;
          resolve(this.workflows);
        });
      });
    }

    return new Promise<SetupTransitionWorkflow[]>((resolve) => {
        resolve(this.workflows);
    });*/
  }
}
