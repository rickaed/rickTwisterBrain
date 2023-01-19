import { TestBed } from '@angular/core/testing';

import { TrivialServiceService } from './trivial-service.service';

describe('TrivialServiceService', () => {
  let service: TrivialServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrivialServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
