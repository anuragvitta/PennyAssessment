import { TestBed } from '@angular/core/testing';

import { FetchAllUsersResolver } from './fetch-all-users.resolver';

describe('FetchAllUsersResolver', () => {
  let resolver: FetchAllUsersResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FetchAllUsersResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
