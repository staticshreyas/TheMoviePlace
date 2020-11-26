import { TestBed } from '@angular/core/testing';

import { ProcessHTTPMsgServiceService } from './process-httpmsg-service.service';

describe('ProcessHTTPMsgServiceService', () => {
  let service: ProcessHTTPMsgServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessHTTPMsgServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
