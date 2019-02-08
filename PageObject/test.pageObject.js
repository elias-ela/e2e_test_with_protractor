const Test_PageObjects = () => {
  this.firstNumber = element(by.model("first"));
  this.secondNumber = element(by.model("second"));
  this.goButton = element(by.id("gobutton"));
  this.latestResult = element(by.binding("latest"));
  this.history = element.all(by.repeater("result in memory"));

  this.add = (num1, num2) => {
    this.firstNumber.sendKeys(num1);
    this.secondNumber.sendKeys(num2);
    this.goButton.click();
  };
};

exports = Test_PageObjects();
