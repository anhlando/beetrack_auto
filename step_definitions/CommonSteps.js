const { I, LoginPage, AssetsListPage, AssetDetailsPage, CreateAssetPage, ReportPage } = inject();
let assert = require('assert');
let baseSettings = require('../utils/BaseSettings');

Given('Testcase key is {string}', (testCaseKey) => {
  // global.testCaseKey = testCaseKey;
  I.setTestCaseKey(testCaseKey);
});

Given('I open {string} page', (pageName) => {
  switch (pageName) {
    case 'Assets':
    case 'Assets List':
    case 'Assets list':
    case 'AssetsList':
    case 'assets list':
    case 'assetsList':
      AssetsListPage.navigate();
      break;
    case 'Create Asset':
    case 'Create asset':
    case 'createAsset':
    case 'create asset':  
    case 'create Asset':
      CreateAssetPage.navigate();
      break;
    case 'Report':
    case 'report':
      ReportPage.navigate();
      break;
    default:
      console.log('Page name is invalid, open homepage instead...');
      I.amOnPage('/');
      break;
  }
})

Given('I go to page {string}', (url) => {
  I.amOnPage(url);
});

Given('I login to Beetrack as admin', () => {
  I.amOnPage('/');
  let username = baseSettings.get('beetrack.admin.username');
  let password = baseSettings.get('beetrack.admin.password');
  LoginPage.login(username,password);
});

Then('I expect to see page title is {string}', async (expectedTitle) => {
  let actualTitle = await I.grabTitle();
  assert.equal(actualTitle,expectedTitle);
});

When('I login with {string} and {string}', (username,password) => {
  LoginPage.login(username,password);
});

Then('I expect to see the error message to inform that login info is not correct', () => {
  I.see('Đăng nhập không thành công. Kiểm tra thông tin đăng nhập.','h4');
})

Then('I expect to see the warning message to inform that password {string} is too short', async (password) => {
  // I.see('Please lengthen this text to 6 characters or more (you are currently using ' + password.length + ' characters)');
  let source = await I.grabSource();
  // console.log(source);
  console.log(source.includes('Please lengthen this text'));
})

After(() => {
  console.log("After hook...");
  let comment;
  console.log("Test status: " + global.testStatus);
  if (global.testStatus === 'FAIL'){
    comment = global.testError;
  } else {
    global.testStatus = 'PASS';
    comment = `Test case ${global.testCaseKey} passed.`;
  }
  // I.updateTestResult(global.testPlanKey, global.testCaseKey, global.testStatus, comment);
});

Fail((test, err) => {
  // console.log(test);
  console.log('Failed with ', err);
  I.setTestError(err);
  I.setTestStatus("FAIL");
  // pause();
});