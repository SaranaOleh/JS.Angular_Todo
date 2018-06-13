import { TestBed, inject } from '@angular/core/testing';

import { ZzzService } from './zzz.service';

describe('ZzzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZzzService]
    });
  });

  it('should be created', inject([ZzzService], (service: ZzzService) => {
    expect(service).toBeTruthy();
  }));
});
