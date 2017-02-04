/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CusipService } from './cusip.service';

describe('CusipService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CusipService]
    });
  });

  it('should ...', inject([CusipService], (service: CusipService) => {
    expect(service).toBeTruthy();
  }));
});
