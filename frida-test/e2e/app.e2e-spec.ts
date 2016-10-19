import { FridaTestPage } from './app.po';

describe('frida-test App', function() {
  let page: FridaTestPage;

  beforeEach(() => {
    page = new FridaTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
