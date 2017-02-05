import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Cusip, CusipSetupTransition } from '../../../models/cusip-models';
import { LogHelper } from '../../../helpers/log.helper';
import { CusipService } from '../../../services/cusip.service';

@Component({
  selector: 'app-cusip-detail',
  templateUrl: './cusip-detail.component.html',
  styleUrls: ['./cusip-detail.component.css']
})
export class CusipDetailComponent implements OnInit {

  @Input() cusipId: number;
  @Output() onClose = new EventEmitter();

  cusip: Cusip;
  status: CusipSetupTransition;

  constructor(
    private cusipService: CusipService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) =>  {
        let cusipName = params['cusip'];
        if (cusipName == undefined || cusipName == null) return new Promise<Cusip>(null);
        return this.cusipService.getCusipByName(cusipName);
      })
      .subscribe(cusip => {
        if (cusip == null) return;
        this.cusip = cusip;    

        let test = new Cusip(this.cusip.id, this.cusip.name, this.cusip.transitions) ;
        this.status = test.getCurrentStatus();  
        LogHelper.trace(`${JSON.stringify(status)}`);
      });
  }

  ngOnChanges() {
    this.loadCusip();
  }

  close() {
    this.onClose.emit();
  }

  loadCusip() {    
    this.cusipService.getCusipById(this.cusipId).then((cusip) => this.cusip = cusip);
  }
}
