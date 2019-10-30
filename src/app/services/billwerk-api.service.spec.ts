import { TestBed } from '@angular/core/testing';

import { BillwerkApiService } from './billwerk-api.service';

describe('BillwerkApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillwerkApiService = TestBed.get(BillwerkApiService);
    expect(service).toBeTruthy();
  });
});
