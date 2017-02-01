/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkInProgressService } from './work-in-progress.service';

describe('WorkInProgressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkInProgressService]
    });
  });

  it('should ...', inject([WorkInProgressService], (service: WorkInProgressService) => {
    expect(service).toBeTruthy();
  }));
});
