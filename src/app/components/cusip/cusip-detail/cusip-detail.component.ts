import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Cusip, CusipSetupTransition } from '../../../models/cusip-models';
import { SetupTransitionWorkflow } from '../../../models/setup-transition-models';

import { LogHelper } from '../../../helpers/log.helper';
import { CusipService } from '../../../services/cusip.service';
import { WorkflowService } from '../../../services/workflow.service';

@Component({
  selector: 'app-cusip-detail',
  templateUrl: './cusip-detail.component.html',
  styleUrls: ['./cusip-detail.component.css']
})
export class CusipDetailComponent implements OnInit {

  @Input() cusipId: number;
  @Output() onClose = new EventEmitter();

  cusip: Cusip;
  workflows: SetupTransitionWorkflow[];

  constructor(
    private cusipService: CusipService,
    private workflowService: WorkflowService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {    
    this.workflowService.getWorkflows().then(workflows => {
      LogHelper.trace(`cusip-detail-component=${JSON.stringify(workflows)}`);
      this.workflows = workflows
    });
    
    this.route.params
      .switchMap((params: Params) =>  {
        let cusipName = params['cusip'];
        if (cusipName == undefined || cusipName == null) return new Promise<Cusip>(null);
        return this.cusipService.getCusipByName(cusipName);
      })
      .subscribe(cusip => {
        if (cusip == null) return;
        this.setCusip(cusip);
      });
  }

  ngOnChanges() {
    this.cusipService.getCusipById(this.cusipId).then((cusip) => this.setCusip(cusip));
  }

  close() {
    this.onClose.emit();
  }

  getCurrentStatusText(): string {
    // todo: law of detemer refactor
    if (this.cusip == null) return "";

    let status = this.cusip.getCurrentStatus();
    if (status == null || status.transition == null) return "";

    return status.transition.name;
  }

  getCurrentWorkflow(): SetupTransitionWorkflow {
    return this.cusip.getCurrentWorkflow(this.workflows);
  }

  private setCusip(cusip: Cusip) {
    this.cusip = cusip;
  }
}
