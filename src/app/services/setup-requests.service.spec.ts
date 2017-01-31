/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SetupRequestsService } from './setup-requests.service';

describe('SetupRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetupRequestsService]
    });
  });

  it('should ...', inject([SetupRequestsService], (service: SetupRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
