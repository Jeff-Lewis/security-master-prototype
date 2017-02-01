import { Component, OnInit } from '@angular/core';

import { WorkQueue } from '../../models/work-queue';
import { WorkQueueGroup } from '../../models/work-queue-group';
import { SetupRequest } from '../../models/setup-request';

import { SetupRequestsService } from '../../services/setup-requests.service';
import { WorkInProgressService } from '../../services/work-in-progress.service';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})
export class WorkInProgressComponent implements OnInit {
  workQueueGroups: WorkQueueGroup[];
  workQueues: WorkQueue[];
  setupRequests: SetupRequest[];

  selectedWorkQueueGroup: WorkQueueGroup;

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

  loadWorkInProgress() {
    this.workInProgressService.getWorkInProgress().then(wip => {
      this.setupRequests = wip.setupRequests;     
    });
  }

  setSelectedWorkQueueGroup(workQueueGroup): void {
    this.selectedWorkQueueGroup = workQueueGroup;
  }

  showSetupRequestDetail(setupRequest:SetupRequest) {
    alert('Showing ' + setupRequest.cusip);
  }

  updateSetupRequestStatus(setupRequest:SetupRequest) {
    alert('Updating ' + setupRequest.cusip);
  }
}
