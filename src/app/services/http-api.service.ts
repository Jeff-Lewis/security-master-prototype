import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ConvertHelper } from '../helpers/convert.helper';
import { LogHelper } from '../helpers/log.helper';

import { Cusip } from '../models/cusip-models';

@Injectable()
export class HttpApiService {
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http:Http) { }

  get<T>(url:string, TClassType:any): Promise<T[]> {
    LogHelper.trace(`GET REQUEST: ${url}`)
    return this.http.get(url)
      .toPromise()
      .then(response => {
        let jsonData = response.json().data;
        LogHelper.trace(`GET RESPONSE: ${url} - ${JSON.stringify(jsonData)}`);

        let output = [];
        for (let instance in jsonData) {
          output.push(this.getTypedInstance(instance, TClassType));
        }

        return <T[]>output;
      })
      .catch(this.handleError);
  }

  getSingle<T>(url:string, TClassType:any): Promise<T> {
    LogHelper.trace(`GET REQUEST: ${url}`)
    return this.http.get(url)
      .toPromise()
      .then(response => {
        let jsonData = response.json().data;
        LogHelper.trace(`GET RESPONSE: ${url} - ${JSON.stringify(jsonData)}`);
        
        let apiOutput = <T>(jsonData instanceof Array ? jsonData[0] : jsonData);
        let output = this.getTypedInstance(apiOutput, TClassType);
        return output;
      })
      .catch(this.handleError);
  }

  post<T>(url:string, data: any): Promise<T> {
    let dataJson = JSON.stringify(data);
    LogHelper.trace(`POST REQUEST: ${url} - ${dataJson}`);    
    return this.http
      .post(url, dataJson, {headers: this.headers})
      .toPromise()
      .then(res => {
        let responseData = res.json().data;
        LogHelper.trace(`POST RESPONSE: ${url} - ${JSON.stringify(responseData)}`);
        return <T>responseData;
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // need to come up w/ a better error handler
    LogHelper.error('An error occurred during http-api call: ', error);
    return Promise.reject(error.message || error);
  }  

  private getTypedInstance<T>(json:any, TClassType:any) : T {
    return ConvertHelper.convert(json, TClassType);
  }
}
