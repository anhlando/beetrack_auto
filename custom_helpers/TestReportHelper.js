const Helper = codecept_helper;
let xrayClient = require('../utils/XrayClient');

class TestReportHelper extends Helper {

  // before/after hooks
  _before() {
    // remove if not used
  }

  _after() {
    // remove if not used
  }

  setTestCaseKey(testCaseKey) {
    global.testCaseKey = testCaseKey;
  }

  setTestError(err) {
      global.testError = err;
  }

  setTestStatus(status) {
      global.testStatus = status;
      console.log("Within I.setTestStatus(): " + global.testStatus);
  }

  updateTestResult(testPlanKey, testCaseKey, status, comment) {
      xrayClient.updateTestResult(testPlanKey, testCaseKey, status, comment);
  }

}

module.exports = TestReportHelper;
