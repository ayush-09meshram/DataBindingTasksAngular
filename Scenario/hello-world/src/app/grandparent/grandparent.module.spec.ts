import { GrandparentModule } from './grandparent.module';

describe('GrandparentModule', () => {
  let grandparentModule: GrandparentModule;

  beforeEach(() => {
    grandparentModule = new GrandparentModule();
  });

  it('should create an instance', () => {
    expect(grandparentModule).toBeTruthy();
  });
});
