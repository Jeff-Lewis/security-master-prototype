/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CusipWorkflowCommandsComponent } from './cusip-workflow-commands.component';

describe('CusipWorkflowCommandsComponent', () => {
  let component: CusipWorkflowCommandsComponent;
  let fixture: ComponentFixture<CusipWorkflowCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusipWorkflowCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusipWorkflowCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
