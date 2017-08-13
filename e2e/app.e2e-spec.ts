import { NgGithubPagesPage } from './app.po';

describe('ng-github-pages App', () => {
  let page: NgGithubPagesPage;

  beforeEach(() => {
    page = new NgGithubPagesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
