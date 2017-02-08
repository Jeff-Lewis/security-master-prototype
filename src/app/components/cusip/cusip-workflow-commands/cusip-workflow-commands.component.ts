import { Component, Input, OnInit } from '@angular/core';
import { LogHelper } from '../../../helpers/log.helper';
import { SetupTransitionWorkflow } from '../../../models/setup-transition-models';

@Component({
  selector: 'app-cusip-workflow-commands',
  templateUrl: './cusip-workflow-commands.component.html',
  styleUrls: ['./cusip-workflow-commands.component.css']
})
export class CusipWorkflowCommandsComponent implements OnInit {
  @Input() workflow: SetupTransitionWorkflow;

  constructor() { }

  ngOnInit() {
  }

  getCurrentStatusText() : string {
    let current = this.workflow.current;
    return (current) ? current.name : "";
  }
}
