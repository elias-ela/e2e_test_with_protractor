const test_pageObject = require("../PageObject/test.pageObject");

describe("Protractor Demo App one", () => {
  beforeEach(() => {
    browser.get("http://juliemr.github.io/protractor-demo/");
  });

  it("should have a title", () => {
    expect(browser.getTitle()).toEqual("Super Calculator");
  });

  it("should add one and two", () => {
    test_pageObject.firstNumber.sendKeys(1);
    test_pageObject.secondNumber.sendKeys(2);
    test_pageObject.goButton.click();

    expect(test_pageObject.latestResult.getText()).toEqual("3");
  });

  it("should read the value from an input", () => {
    test_pageObject.firstNumber.sendKeys(1);

    expect(test_pageObject.firstNumber.getAttribute("value")).toEqual("1");
  });
});

describe("Protractor Demo App Two", () => {
  beforeEach(() => {
    browser.get("http://juliemr.github.io/protractor-demo/");
  });

  it("should have a history", () => {
    test_pageObject.add(1, 2);
    test_pageObject.add(3, 4);

    expect(test_pageObject.history.count()).toEqual(2);

    test_pageObject.add(5, 6);

    expect(test_pageObject.history.count()).toEqual(0); // This is wrong!
  });
});
