import { ModuloVentasModule } from './modulo-ventas.module';

describe('ModuloVentasModule', () => {
  let moduloVentasModule: ModuloVentasModule;

  beforeEach(() => {
    moduloVentasModule = new ModuloVentasModule();
  });

  it('should create an instance', () => {
    expect(moduloVentasModule).toBeTruthy();
  });
});
