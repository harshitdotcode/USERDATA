import { TestBed } from '@angular/core/testing';

import { UserDataReceiveService } from './user-data-receive.service';

describe('UserDataReceiveService', () => {
  let service: UserDataReceiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataReceiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
