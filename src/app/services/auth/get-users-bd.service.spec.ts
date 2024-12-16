import { TestBed } from '@angular/core/testing';

import { GetUsersBdService } from './get-users-bd.service';

describe('GetUsersBdService', () => {
  let service: GetUsersBdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUsersBdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
