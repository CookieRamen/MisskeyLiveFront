import { inject, TestBed } from '@angular/core/testing';

import { UserRedirectGuard } from './user-redirect.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserRedirectGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [UserRedirectGuard]
    });
  });

  it('should ...', inject([UserRedirectGuard], (guard: UserRedirectGuard) => {
    expect(guard).toBeTruthy();
  }));
});
