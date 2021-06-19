import { TestBed } from '@angular/core/testing';

import { ReciverService } from './reciver.service';

describe('ReciverService', () => {
  let service: ReciverService;
 
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReciverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
