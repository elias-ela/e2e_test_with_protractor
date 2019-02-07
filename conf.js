let SpecReporter = require("jasmine-spec-reporter").SpecReporter;
let Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");

let reporter = new Jasmine2HtmlReporter({
  savePath: "Reports",
  takeScreenshotsOnlyOnFailures: true,
  fixedScreenshotName: true,
  fileName: "Reports",
  fileNameDateSuffix: true,
  fileNameSeparator: "_",
  consolidate: false,
  consolidateAll: false,
  cleanDestination: false
});

exports.config = {
  framework: "jasmine",
  seleniumAddress: "http://localhost:4444/wd/hub",
  specs: ["./Specs/*.js"],

  jasmineNodeOpts: {
    // defaultTimeoutInterval: 360000,
    print: function() {}
  },

  capabilities: {
    browserName: "chrome"
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(reporter);
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          //   displayStacktrace: true,
          displayFailuresSummary: true
        }
      })
    );
  }
};
