import { TestBed } from '@angular/core/testing';

import { GETAPIDATAService } from './getapidata.service';

describe('GETAPIDATAService', () => {
  let service: GETAPIDATAService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GETAPIDATAService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
