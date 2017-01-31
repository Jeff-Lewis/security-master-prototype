/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SetupRequestCardComponent } from './setup-request-card.component';

describe('SetupRequestCardComponent', () => {
  let component: SetupRequestCardComponent;
  let fixture: ComponentFixture<SetupRequestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupRequestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
