import { Injectable } from '@angular/core';

import { LogHelper } from '../helpers/log.helper';
import { WorkInProgress } from '../models/wip-models';
import { HttpApiService } from '../services/http-api.service';

@Injectable()
export class WorkInProgressService {

  private apiUrl = 'api/workInProgress';

  constructor(private httpApi:HttpApiService) { }

  getWorkInProgress(): Promise<WorkInProgress> {
      return this.httpApi.getSingle<WorkInProgress>(this.apiUrl, WorkInProgress);
  }
}