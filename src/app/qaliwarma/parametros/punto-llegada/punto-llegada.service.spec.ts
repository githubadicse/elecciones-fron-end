import { TestBed, inject } from '@angular/core/testing';

import { PuntoLlegadaService } from './punto-llegada.service';

describe('PuntoLlegadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PuntoLlegadaService]
    });
  });

  it('should be created', inject([PuntoLlegadaService], (service: PuntoLlegadaService) => {
    expect(service).toBeTruthy();
  }));
});
