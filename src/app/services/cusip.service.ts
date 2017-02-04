import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { LogHelper } from '../helpers/log.helper';
import { Cusip } from '../models/cusip-models';

@Injectable()
export class CusipService {
  private apiUrl = 'api/cusips';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  create(cusipName: string): Promise<Cusip> {
    return this.http
      .post(this.apiUrl, JSON.stringify({name: cusipName, statusId: 1, addedDate: new Date()}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  getCusips(): Promise<Cusip[]> {
    const url = `${this.apiUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        var jsonData = response.json().data;
        LogHelper.trace(`getCusips API: ${JSON.stringify(jsonData)}`);
        return jsonData as Cusip[];
      })
      .catch(this.handleError);
  }

  getCusip(id:number): Promise<Cusip> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        var jsonData = response.json().data;
        LogHelper.trace(`getCusip API: ${JSON.stringify(jsonData)}`);
        return jsonData as Cusip;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // need to come up w/ a better error handler
    LogHelper.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }  
}
