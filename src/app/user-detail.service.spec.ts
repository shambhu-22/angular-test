import { TestBed, waitForAsync } from '@angular/core/testing';

import { UserDetailService } from './user-detail.service';

describe('UserDetailService', () => {
  let service: UserDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new UserDetailService();//TestBed.inject(UserDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return observable of users(User[])', waitForAsync(() => {
    service.getUsers().subscribe((data) => {
      expect(data.length).toBeGreaterThan(0);
    });
  }));

  
});
