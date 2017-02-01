import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  showDetail() {    
    this.onShowDetail.emit(this.setupRequest);
  }
}
