import { Component, OnInit, Input } from '@angular/core';

import { SetupRequest } from '../../../models/setup-request';

@Component({
  selector: 'app-setup-request-card',
  templateUrl: './setup-request-card.component.html',
  styleUrls: ['./setup-request-card.component.css']
})
export class SetupRequestCardComponent implements OnInit {
  @Input() setupRequest: SetupRequest;
  @Input() parentComponent: Component;

  constructor() { }

  ngOnInit() {
  }

  showDetail() {
    alert('Detail for ' + this.setupRequest.cusip);
  }
}