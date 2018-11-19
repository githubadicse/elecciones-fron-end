import { TestBed, inject } from '@angular/core/testing';

import { ModalidadEntregaAlimentosService } from './modalidad-entrega-alimentos.service';

describe('ModalidadEntregaAlimentosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalidadEntregaAlimentosService]
    });
  });

  it('should be created', inject([ModalidadEntregaAlimentosService], (service: ModalidadEntregaAlimentosService) => {
    expect(service).toBeTruthy();
  }));
});
