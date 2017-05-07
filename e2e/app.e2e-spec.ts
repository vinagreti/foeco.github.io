import { Foeco.Github.IoPage } from './app.po';

describe('foeco.github.io App', () => {
  let page: Foeco.Github.IoPage;

  beforeEach(() => {
    page = new Foeco.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
