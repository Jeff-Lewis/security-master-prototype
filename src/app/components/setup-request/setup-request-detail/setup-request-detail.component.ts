import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SetupRequest } from '../../../models/setup-request';
import { SetupRequestsService } from '../../../services/setup-requests.service';

@Component({
  selector: 'app-setup-request-detail',
  templateUrl: './setup-request-detail.component.html',
  styleUrls: ['./setup-request-detail.component.css']
})
export class SetupRequestDetailComponent implements OnInit {
  @Input() setupRequestId: number;
  @Output() onClose = new EventEmitter();

  setupRequest: SetupRequest;

  constructor(private setupRequestService: SetupRequestsService) { }

  ngOnInit() {
    this.loadSetupRequest();
  }

  ngOnChanges() {
    this.loadSetupRequest();
  }

  close() {
    this.onClose.emit();
  }

  loadSetupRequest() {
    this.setupRequestService.getSetupRequest(this.setupRequestId).then((request) => this.setupRequest = request);
  }

}
