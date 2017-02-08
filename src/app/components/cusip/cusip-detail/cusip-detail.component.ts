import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Cusip, CusipSetupTransition } from '../../../models/cusip-models';
import { SetupTransition, SetupTransitionWorkflow } from '../../../models/setup-transition-models';
import { TimelineMoment } from '../../../models/timeline-models';

import { LogHelper } from '../../../helpers/log.helper';
import { CusipHelper } from '../../../helpers/cusip.helper';

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

  currentWorkflow: SetupTransitionWorkflow;
  cusip: Cusip;
  timelineMoments: TimelineMoment[];
  workflows: SetupTransitionWorkflow[];

  constructor(
    private cusipService: CusipService,
    private workflowService: WorkflowService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {    
    this.loadWorkflows();
    
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
    this.loadWorkflows();
    this.cusipService.getCusipById(this.cusipId).then((cusip) => this.setCusip(cusip));
  }

  close() {
    this.onClose.emit();
  }

  onSetupTransitionChange(transition:SetupTransition) {
    this.cusipService.addTransition(this.cusip, transition).then(cusip => {
      this.setCusip(cusip);
    });
  }

  private loadWorkflows() {
    this.workflowService.getWorkflows().then(workflows => {      
      this.workflows = workflows
    });
  }

  private setCusip(cusip: Cusip) {
    this.cusip = cusip;
    this.currentWorkflow = CusipHelper.getCurrentWorkflow(this.cusip, this.workflows);
    this.timelineMoments = CusipHelper.getTimelineMoments(this.cusip, this.workflows);
  }
}
