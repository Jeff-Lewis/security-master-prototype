import { Component, OnInit } from '@angular/core';

import { Cusip } from '../../models/cusip-models';

import { CusipService } from '../../services/cusip.service';
import { WorkInProgressService } from '../../services/work-in-progress.service';

@Component({
  selector: 'app-work-in-progress',
  templateUrl: './work-in-progress.component.html',
  styleUrls: ['./work-in-progress.component.css']
})

export class WorkInProgressComponent implements OnInit { 
  cusips: Cusip[];
  selectedCusip: Cusip;

  constructor(    
    private cusipService: CusipService,
        private workInProgressService: WorkInProgressService
  ) { }

  ngOnInit() {
    this.loadWorkInProgress();
  }

  addCusip(cusipName: string) {
    this.cusipService.create(cusipName).then((cusip) => {
      this.cusips.push(cusip);
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
        
    });
  }

  showCusipDetail(cusip:Cusip) {
    this.selectedCusip = cusip;
  }
}
