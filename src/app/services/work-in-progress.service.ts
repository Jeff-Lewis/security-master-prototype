import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SetupRequest } from '../models/setup-request';
import { WorkInProgress } from '../models/work-in-progress';

@Injectable()
export class WorkInProgressService {

  private apiUrl = 'api/workInProgress';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  getWorkInProgress(): Promise<WorkInProgress> {
      return this.http.get(this.apiUrl)
               .toPromise()
               .then(response => response.json().data as WorkInProgress)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // need to come up w/ a better error handler
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }  
}