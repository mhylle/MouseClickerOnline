import { MouseclickeronlinePage } from './app.po';

describe('mouseclickeronline App', function() {
  let page: MouseclickeronlinePage;

  beforeEach(() => {
    page = new MouseclickeronlinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
