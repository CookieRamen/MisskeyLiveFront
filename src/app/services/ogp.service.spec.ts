import { TestBed } from '@angular/core/testing';

import { OgpService } from './ogp.service';

describe('OgpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OgpService = TestBed.get(OgpService);
    expect(service).toBeTruthy();
  });
});
