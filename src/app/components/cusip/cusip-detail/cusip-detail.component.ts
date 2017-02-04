import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Cusip } from '../../../models/cusip-models';

import { CusipService } from '../../../services/cusip.service';

@Component({
  selector: 'app-cusip-detail',
  templateUrl: './cusip-detail.component.html',
  styleUrls: ['./cusip-detail.component.css']
})
export class CusipDetailComponent implements OnInit {

  @Input() cusipId: number;
  @Output() onClose = new EventEmitter();

  cusip: Cusip;

  constructor(private cusipService: CusipService) { }

  ngOnInit() {
    this.loadCusip();
  }

  ngOnChanges() {
    this.loadCusip();
  }

  close() {
    this.onClose.emit();
  }

  loadCusip() {
    this.cusipService.getCusip(this.cusipId).then((cusip) => this.cusip = cusip);
  }
}
