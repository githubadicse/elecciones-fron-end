import { TestBed, inject } from '@angular/core/testing';

import { AlmacenSalidaService } from './almacen-salida.service';

describe('AlmacenSalidaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlmacenSalidaService]
    });
  });

  it('should ...', inject([AlmacenSalidaService], (service: AlmacenSalidaService) => {
    expect(service).toBeTruthy();
  }));
});
