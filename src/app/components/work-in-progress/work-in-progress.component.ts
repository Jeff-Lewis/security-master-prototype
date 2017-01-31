import { Component, OnInit } from '@angular/core';

import { WorkQueue } from '../../models/work-queue';
import { WorkQueueGroup } from '../../models/work-queue-group';

import { WorkQueueGroupService } from '../../services/work-queue-group.service';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})
export class WorkInProgressComponent implements OnInit {
  workQueueGroups: WorkQueueGroup[];
  workQueues: WorkQueue[];

  selectedWorkQueueGroup: WorkQueueGroup;

  constructor(private workQueueGroupService: WorkQueueGroupService) { }

  ngOnInit() {
    this.loadWorkQueueGroups();
  }

  private loadWorkQueueGroups() {
    this.workQueueGroupService.getWorkQueueGroups().then(workQueueGroups => {
      this.selectedWorkQueueGroup = workQueueGroups[0];
      this.workQueueGroups = workQueueGroups
    });
  }
}
