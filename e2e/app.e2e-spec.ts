import { EmailSendAppFrontendPage } from './app.po';

describe('email-send-app-frontend App', function() {
  let page: EmailSendAppFrontendPage;

  beforeEach(() => {
    page = new EmailSendAppFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
