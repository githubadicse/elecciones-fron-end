import { ModuloCuentaPorCobrarModule } from './modulo-cuenta-por-cobrar.module';

describe('ModuloCuentaPorCobrarModule', () => {
  let moduloCuentaPorCobrarModule: ModuloCuentaPorCobrarModule;

  beforeEach(() => {
    moduloCuentaPorCobrarModule = new ModuloCuentaPorCobrarModule();
  });

  it('should create an instance', () => {
    expect(moduloCuentaPorCobrarModule).toBeTruthy();
  });
});
