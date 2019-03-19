import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display \'User list made with native Web Components and Angular\' title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('User list made with native Web Components and Angular');
  });
});
