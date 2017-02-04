import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { LogHelper } from '../../../helpers/log.helper';

import { Cusip } from '../../../models/cusip-models';

@Component({
  selector: 'app-cusip-card',
  templateUrl: './cusip-card.component.html',
  styleUrls: ['./cusip-card.component.css']
})
export class CusipCardComponent implements OnInit {
  @Input() cusip: Cusip;
  @Output() onShowDetail = new EventEmitter<Cusip>();

  constructor() { }

  ngOnInit() {
  }

  getAddedDateString(): string {
    // see: https://momentjs.com/
    LogHelper.trace(`getAddedDateString for ${JSON.stringify(this.cusip)}`);
    return moment(this.cusip.addedDate).format('h:mm:ss a');
  }

  showDetail() {    
    this.onShowDetail.emit(this.cusip);
  }

}
