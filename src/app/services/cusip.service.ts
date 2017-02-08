import { Injectable } from '@angular/core';

import { LogHelper } from '../helpers/log.helper';
import { Cusip, CusipSetupTransition } from '../models/cusip-models';
import { SetupTransition } from '../models/setup-transition-models';
import { HttpApiService } from '../services/http-api.service';

@Injectable()
export class CusipService {
  private apiUrl = 'api/cusips';
  
  constructor(
    private httpApi: HttpApiService) { }

  create(cusipName: string): Promise<Cusip> {
    return this.httpApi.post(this.apiUrl, {name: cusipName, statusId: 1, addedDate: new Date()});
  }

  addTransition(cusip:Cusip, transition:SetupTransition): Promise<Cusip> {
    const url = `${this.apiUrl}/${cusip.id}`;
    let cusipTransition = CusipSetupTransition.create(1000, new Date(), transition);
    cusip.transitions.push(cusipTransition);

    return this.httpApi.put(url, cusip).then(response => response);
  }

  getCusips(): Promise<Cusip[]> {
    const url = `${this.apiUrl}`;
    return this.httpApi.get<Cusip>(url);
  }

  getCusipById(id:number): Promise<Cusip> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpApi.getSingle<Cusip>(url);
  }

  getCusipByName(name:string): Promise<Cusip> {
    const url = `${this.apiUrl}?name=${name}`;
    return this.httpApi.getSingle<Cusip>(url);
  }
}
