import { TestBed } from '@angular/core/testing';

import { BillcalcService } from './billcalc.service';

describe('BillcalcService', () => {
  let service: BillcalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillcalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
