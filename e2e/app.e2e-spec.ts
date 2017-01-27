import { SecurityMasterPrototypePage } from './app.po';

describe('security-master-prototype App', function() {
  let page: SecurityMasterPrototypePage;

  beforeEach(() => {
    page = new SecurityMasterPrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
