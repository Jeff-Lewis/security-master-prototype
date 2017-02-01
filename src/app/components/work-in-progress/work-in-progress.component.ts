import { Component, OnInit } from '@angular/core';

import { WorkQueue } from '../../models/work-queue';
import { WorkQueueGroup } from '../../models/work-queue-group';
import { SetupRequest } from '../../models/setup-request';

import { SetupRequestsService } from '../../services/setup-requests.service';
import { WorkQueueGroupService } from '../../services/work-queue-group.service';
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
    private workQueueGroupService: WorkQueueGroupService,
    private setupRequestsService: SetupRequestsService,
    private workInProgressService: WorkInProgressService
  ) { }

  ngOnInit() {
    this.loadWorkQueueGroups();
    this.loadSetupRequests();
  }

  addRequest(cusip: string) {
    this.setupRequestsService.create(cusip).then((request) => {
      this.setupRequests.push(request);
    });
  }

  loadSetupRequests() {
    this.setupRequestsService.getCurrentWorkInProgress().then(setupRequests => this.setupRequests = setupRequests);
  }

  loadWorkQueueGroups() {
    this.workQueueGroupService.getWorkQueueGroups().then(workQueueGroups => {
      this.workQueueGroups = workQueueGroups
      this.setSelectedWorkQueueGroup(workQueueGroups[0]);      
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
}
