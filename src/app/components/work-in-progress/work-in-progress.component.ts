import { Component, OnInit } from '@angular/core';

import { SetupRequest } from '../../models/setup-request';

import { SetupRequestsService } from '../../services/setup-requests.service';
import { WorkInProgressService } from '../../services/work-in-progress.service';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})

export class WorkInProgressComponent implements OnInit {  
  setupRequests: SetupRequest[];
  selectedSetupRequest: SetupRequest;

  constructor(    
    private setupRequestsService: SetupRequestsService,
    private workInProgressService: WorkInProgressService
  ) { }

  ngOnInit() {
    this.loadWorkInProgress();
  }

  addRequest(cusip: string) {
    this.setupRequestsService.create(cusip).then((request) => {
      this.setupRequests.push(request);
    });
  }

  closeSelectedSetupRequestDetail() {
    this.selectedSetupRequest = null;
  }

  loadWorkInProgress() {
    this.workInProgressService.getWorkInProgress().then(wip => {
      this.setupRequests = wip.setupRequests;     
    });
  }

  showSetupRequestDetail(setupRequest:SetupRequest) {
    this.selectedSetupRequest = setupRequest;
  }

  updateSetupRequestStatus(setupRequest:SetupRequest) {
    alert('Updating ' + setupRequest.cusip);
  }
}
