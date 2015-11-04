'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('Integration tests: movieDB', function() {
  describe('catalog', function () {

    var prot;

    beforeEach(function () {
      prot = protractor.getInstance();
      browser.get('/movieApp');
    });

    it('should render the catalog page when user navigates to /', function () {
      expect(prot.getCurrentUrl()).toMatch('\/#');
    });

    it('should take you to the genre catalog when you click a link on the genre list', function () {
      var link = element(by.css('.list-group-item:nth-child(2)'));
      link.click();
      expect(prot.getCurrentUrl()).toMatch('\/genre\/');
    });
  });

  describe('movie', function () {

    var prot;

    beforeEach(function () {
      prot = protractor.getInstance();
      browser.get('/app/#/movie/222935');
    });

    it('should render the movie details page', function () {
      var ele = by.css('.moviedetails');
      expect(prot.isElementPresent(ele)).toBe(true);
    });

    it('should take you back to the movie gallery when you click Return to Catalog', function () {
      var link = element(by.css('.return-btn'));
      link.click();
      expect(prot.getCurrentUrl()).toMatch('\/#');
    })
  });
});









//Example Test Provided w/Seed
//describe('my app', function() {
//
//
//  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
//    browser.get('index.html');
//    expect(browser.getLocationAbsUrl()).toMatch("/view1");
//  });
//
//
//  describe('view1', function() {
//
//    beforeEach(function() {
//      browser.get('index.html#/view1');
//    });
//
//
//    it('should render view1 when user navigates to /view1', function() {
//      expect(element.all(by.css('[ng-view] p')).first().getText()).
//        toMatch(/partial for view 1/);
//    });
//
//  });
//
//
//  describe('view2', function() {
//
//    beforeEach(function() {
//      browser.get('index.html#/view2');
//    });
//
//
//    it('should render view2 when user navigates to /view2', function() {
//      expect(element.all(by.css('[ng-view] p')).first().getText()).
//        toMatch(/partial for view 2/);
//    });
//
//  });
//});
