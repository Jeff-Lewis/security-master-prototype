import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SetupRequest } from '../models/setup-request';

@Injectable()
export class SetupRequestsService {
  private apiUrl = 'api/setupRequests';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  getCurrentWorkInProgress(): Promise<SetupRequest[]> {
      return this.http.get(this.apiUrl)
               .toPromise()
               .then(response => response.json().data as SetupRequest[])
               .catch(this.handleError);
  }

  getWorkInProgress() {
    
  }

  private handleError(error: any): Promise<any> {
    // need to come up w/ a better error handler
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }  
}