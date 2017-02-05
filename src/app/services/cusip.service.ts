import { Injectable } from '@angular/core';

import { LogHelper } from '../helpers/log.helper';
import { Cusip } from '../models/cusip-models';
import { HttpApiService } from '../services/http-api.service';

@Injectable()
export class CusipService {
  private apiUrl = 'api/cusips';
  
  constructor(
    private httpApi: HttpApiService) { }

  create(cusipName: string): Promise<Cusip> {
    return this.httpApi.post(this.apiUrl, {name: cusipName, statusId: 1, addedDate: new Date()});
  }

  getCusips(): Promise<Cusip[]> {
    const url = `${this.apiUrl}`;
    return this.httpApi.get<Cusip>(url, Cusip);
  }

  getCusipById(id:number): Promise<Cusip> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpApi.getSingle<Cusip>(url, Cusip);
  }

  getCusipByName(name:string): Promise<Cusip> {
    const url = `${this.apiUrl}?name=${name}`;
    return this.httpApi.getSingle<Cusip>(url, Cusip);
  }
}
