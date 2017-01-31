import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { WorkQueueGroup } from '../models/work-queue-group';

@Injectable()
export class WorkQueueGroupService {
  private apiUrl = 'api/workQueueGroups';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  getWorkQueueGroups(): Promise<WorkQueueGroup[]> {
    return this.http.get(this.apiUrl)
               .toPromise()
               .then(response => response.json().data as WorkQueueGroup[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // need to come up w/ a better error handler
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }  
}
