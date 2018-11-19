import { ModuloCuentaPorPagarModule } from './modulo-cuenta-por-pagar.module';

describe('ModuloCuentaPorPagarModule', () => {
  let moduloCuentaPorPagarModule: ModuloCuentaPorPagarModule;

  beforeEach(() => {
    moduloCuentaPorPagarModule = new ModuloCuentaPorPagarModule();
  });

  it('should create an instance', () => {
    expect(moduloCuentaPorPagarModule).toBeTruthy();
  });
});
