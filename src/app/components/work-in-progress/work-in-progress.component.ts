import { Component, OnInit } from '@angular/core';

import { SetupRequest } from '../../models/setup-request';
import { WorkQueue } from '../../models/work-queue';

import { Cusip } from '../../models/cusip-models';

import { CusipService } from '../../services/cusip.service';
import { SetupRequestsService } from '../../services/setup-requests.service';
import { WorkInProgressService } from '../../services/work-in-progress.service';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})

export class WorkInProgressComponent implements OnInit { 
  queues: WorkQueue[]; 
  setupRequests: SetupRequest[];
  selectedSetupRequest: SetupRequest;

  cusips: Cusip[];
  selectedCusip: Cusip;

  constructor(    
    private cusipService: CusipService,
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

  closeSelectedCusipDetail() {
    this.selectedCusip = null;
  }

  loadWorkInProgress() {
    this.cusipService.getCusips().then(cusips => {
      this.cusips = cusips;
    });

    this.workInProgressService.getWorkInProgress().then(wip => {
      this.setupRequests = wip.setupRequests;     
    });
  }

  showCusipDetail(cusip:Cusip) {
    this.selectedCusip = cusip;
  }

  showSetupRequestDetail(setupRequest:SetupRequest) {
    this.selectedSetupRequest = setupRequest;
  }
}
