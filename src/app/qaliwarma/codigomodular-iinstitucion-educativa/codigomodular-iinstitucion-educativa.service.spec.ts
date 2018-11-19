import { TestBed, inject } from '@angular/core/testing';

import { CodigomodularIinstitucionEducativaService } from './codigomodular-iinstitucion-educativa.service';

describe('CodigomodularIinstitucionEducativaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodigomodularIinstitucionEducativaService]
    });
  });

  it('should be created', inject([CodigomodularIinstitucionEducativaService], (service: CodigomodularIinstitucionEducativaService) => {
    expect(service).toBeTruthy();
  }));
});
