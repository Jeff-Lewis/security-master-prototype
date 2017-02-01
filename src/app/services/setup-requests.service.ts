import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { SetupRequest } from '../models/setup-request';
import { WorkInProgress } from '../models/work-in-progress';

@Injectable()
export class SetupRequestsService {
  private apiUrl = 'api/setupRequests';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  create(cusip: string): Promise<SetupRequest> {
    return this.http
      .post(this.apiUrl, JSON.stringify({cusip: cusip, workQueueId: 1}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  getSetupRequest(id:number): Promise<SetupRequest> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as SetupRequest)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // need to come up w/ a better error handler
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }  
}
