describe("Protractor Demo App", function() {
  it("should have a title", function() {
    browser.get("http://juliemr.github.io/protractor-demo/");

    expect(browser.getTitle()).toEqual("Superr Calculator");
  });

  it("should have a title 2", function() {
    browser.get("http://juliemr.github.io/protractor-demo/");

    expect(browser.getTitle()).toEqual("Super Calculator");
  });
});

describe("Protractor Demo App 2", function() {
  it("should have a title1", function() {
    browser.get("http://juliemr.github.io/protractor-demo/");

    expect(browser.getTitle()).toEqual("Superr Calculator");
  });

  it("should have a title 2", function() {
    browser.get("http://juliemr.github.io/protractor-demo/");

    expect(browser.getTitle()).toEqual("Super Calculator");
  });
});
