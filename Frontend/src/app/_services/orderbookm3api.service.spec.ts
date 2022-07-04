import { TestBed } from '@angular/core/testing';

import { Orderbookm3apiService } from './orderbookm3api.service';

describe('Orderbookm3apiService', () => {
  let service: Orderbookm3apiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Orderbookm3apiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
