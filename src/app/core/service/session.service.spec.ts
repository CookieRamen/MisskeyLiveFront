import { async, TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SessionService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CookieService]
    }).compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionService = TestBed.get(SessionService);
    expect(service).toBeTruthy();
  });
});
