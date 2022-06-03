import { TestBed } from '@angular/core/testing';

import { LoggrService } from './loggr.service';

describe('LoggrService', () => {
  let service: LoggrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
