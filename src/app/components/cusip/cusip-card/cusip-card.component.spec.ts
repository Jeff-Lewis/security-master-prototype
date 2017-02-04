/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CusipCardComponent } from './cusip-card.component';

describe('CusipCardComponent', () => {
  let component: CusipCardComponent;
  let fixture: ComponentFixture<CusipCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusipCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
