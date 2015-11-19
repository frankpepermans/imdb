'use strict'

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

;
describe('my app', function () {

  it('should automatically redirect to /wikipedia when location hash/fragment is empty', function () {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/wikipedia");
  });

  describe('wikipedia', function () {

    beforeEach(function () {
      browser.get('index.html#/wikipedia');
    });

    it('should render wikipedia when user navigates to /wikipedia', function () {
      expect(element.all(by.css('[ng-view] p')).first().getText()).toMatch(/Reactive Angular - Wikipedia/);
    });
  });
});

//# sourceMappingURL=scenarios-compiled.js.map