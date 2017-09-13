import { ElectivePage } from './app.po';

describe('elective App', function() {
  let page: ElectivePage;

  beforeEach(() => {
    page = new ElectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
