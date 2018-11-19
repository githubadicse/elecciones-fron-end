import { TestBed, inject } from '@angular/core/testing';

import { PeriodoalmacenService } from './periodoalmacen.service';

describe('PeriodoalmacenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeriodoalmacenService]
    });
  });

  it('should ...', inject([PeriodoalmacenService], (service: PeriodoalmacenService) => {
    expect(service).toBeTruthy();
  }));
});
