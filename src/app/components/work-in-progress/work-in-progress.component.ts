import { Component, OnInit } from '@angular/core';

import { WorkQueue } from '../../models/work-queue';
import { WorkQueueGroup } from '../../models/work-queue-group';
import { SetupRequest } from '../../models/setup-request';

import { SetupRequestsService } from '../../services/setup-requests.service';
import { WorkQueueGroupService } from '../../services/work-queue-group.service';

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
    private setupRequestsService: SetupRequestsService
  ) { }

  ngOnInit() {
    this.loadWorkQueueGroups();
    this.loadSetupRequests();
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

  setSelectedWorkQueueGroup(workQueueGroup): void {
    this.selectedWorkQueueGroup = workQueueGroup;
  }
}
