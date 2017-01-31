/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WorkQueueGroupService } from './work-queue-group.service';

describe('WorkQueueGroupServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkQueueGroupService]
    });
  });

  it('should ...', inject([WorkQueueGroupService], (service: WorkQueueGroupService) => {
    expect(service).toBeTruthy();
  }));
});
