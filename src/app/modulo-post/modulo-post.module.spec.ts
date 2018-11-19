import { ModuloPostModule } from './modulo-post.module';

describe('ModuloPostModule', () => {
  let moduloPostModule: ModuloPostModule;

  beforeEach(() => {
    moduloPostModule = new ModuloPostModule();
  });

  it('should create an instance', () => {
    expect(moduloPostModule).toBeTruthy();
  });
});
