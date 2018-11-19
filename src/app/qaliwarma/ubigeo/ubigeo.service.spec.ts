import { TestBed, inject } from '@angular/core/testing';

import { UbigeoService } from './ubigeo.service';

describe('UbigeoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UbigeoService]
    });
  });

  it('should be created', inject([UbigeoService], (service: UbigeoService) => {
    expect(service).toBeTruthy();
  }));
});
