import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { LogHelper } from '../helpers/log.helper';

@Injectable()
export class HttpApiService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  get<T>(url:string): Promise<T[]> {
    LogHelper.trace(`GET REQUEST: ${url}`)
    return this.http.get(url)
      .toPromise()
      .then(response => {
        var jsonData = response.json().data;
        LogHelper.trace(`GET RESPONSE: ${url} - ${JSON.stringify(jsonData)}`);
        return jsonData as T[];
      })
      .catch(this.handleError);
  }

  getSingle<T>(url:string): Promise<T> {
    LogHelper.trace(`GET REQUEST: ${url}`)
    return this.http.get(url)
      .toPromise()
      .then(response => {
        var jsonData = response.json().data;
        LogHelper.trace(`GET RESPONSE: ${url} - ${JSON.stringify(jsonData)}`);
        return jsonData[0] as T;
      })
      .catch(this.handleError);
  }

  post<T>(url:string, data: any): Promise<T> {
    var dataJson = JSON.stringify(data);
    LogHelper.trace(`POST REQUEST: ${url} - ${dataJson}`);    
    return this.http
      .post(url, dataJson, {headers: this.headers})
      .toPromise()
      .then(res => {
        var responseData = res.json().data;
        LogHelper.trace(`POST RESPONSE: ${url} - ${JSON.stringify(responseData)}`);
        return responseData as T;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // need to come up w/ a better error handler
    LogHelper.error('An error occurred during http-api call: ', error);
    return Promise.reject(error.message || error);
  }  
}
