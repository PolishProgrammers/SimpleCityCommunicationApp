import {CityCommunicationAppPage} from './app.po';

describe('city-communication-app App', () => {
  let page: CityCommunicationAppPage;

  beforeEach(() => {
    page = new CityCommunicationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
