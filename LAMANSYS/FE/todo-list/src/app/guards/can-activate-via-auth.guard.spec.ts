import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { canActivateViaAuthGuard } from './can-activate-via-auth.guard';

describe('canActivateViaAuthGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canActivateViaAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
