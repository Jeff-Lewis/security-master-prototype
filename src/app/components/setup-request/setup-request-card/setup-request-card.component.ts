import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

import { LogHelper } from '../../../helpers/log.helper';

import { SetupRequest } from '../../../models/setup-request';

@Component({
  selector: 'app-setup-request-card',
  templateUrl: './setup-request-card.component.html',
  styleUrls: ['./setup-request-card.component.css']
})
export class SetupRequestCardComponent implements OnInit {
  @Input() setupRequest: SetupRequest;
  @Output() onShowDetail = new EventEmitter<SetupRequest>();

  constructor() { }

  ngOnInit() {    
  }

  getAddedDateString(): string {
    // see: https://momentjs.com/
    LogHelper.trace(`getAddedDateString for ${JSON.stringify(this.setupRequest)}`);
    return moment(this.setupRequest.addedDate).format('h:mm:ss a');
  }

  showDetail() {    
    this.onShowDetail.emit(this.setupRequest);
  }
}
