import { BmiUiPage } from './app.po';

describe('bmi-ui App', () => {
  let page: BmiUiPage;

  beforeEach(() => {
    page = new BmiUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
