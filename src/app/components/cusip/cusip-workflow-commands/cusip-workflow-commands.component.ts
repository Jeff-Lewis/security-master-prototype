import { Component, Input, OnInit } from '@angular/core';
import { LogHelper } from '../../../helpers/log.helper';
import { SetupTransition, SetupTransitionWorkflow } from '../../../models/setup-transition-models';

@Component({
  selector: 'app-cusip-workflow-commands',
  templateUrl: './cusip-workflow-commands.component.html',
  styleUrls: ['./cusip-workflow-commands.component.css']
})
export class CusipWorkflowCommandsComponent implements OnInit {
  @Input() workflow: SetupTransitionWorkflow;

  previous: SetupTransition;
  next: SetupTransition;

  constructor() { }

  ngOnInit() {
    this.previous = this.workflow.previous;
    this.next = this.workflow.next;
  }

  getCurrentStatusText() : string {
    let current = this.workflow.current;
    return (current) ? current.name : "";
  }
}
