import { FormulariosDiligenciablesPage } from './app.po';

describe('formularios-diligenciables App', function() {
  let page: FormulariosDiligenciablesPage;

  beforeEach(() => {
    page = new FormulariosDiligenciablesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
