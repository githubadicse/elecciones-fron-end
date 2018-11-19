import { TestBed, inject } from '@angular/core/testing';

import { KardexServiceService } from './kardex-service.service';

describe('KardexServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KardexServiceService]
    });
  });

  it('should ...', inject([KardexServiceService], (service: KardexServiceService) => {
    expect(service).toBeTruthy();
  }));
});
