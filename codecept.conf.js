let BEETRACK_ENV = (process.env.BEETRACK_ENV || 'dev').trim();
console.log(BEETRACK_ENV);
let base_settings = require(`./environments/${BEETRACK_ENV}/base_settings.js`);
console.log(base_settings.url);

exports.config = {
  output: './output',
  helpers: {
    WebDriver: {
      url: base_settings.url,
      // url: 'http://clavisaurea-hungtruong.s3-website-ap-southeast-1.amazonaws.com',
      // host: 'localhost',
      host: '157.230.40.156',
      port: 4444,
      browser: 'chrome',
      smartWait: 5000,
      desiredCapabilities: {
        selenoidOptions: {
          browserName: 'chrome',
          version: '75.0',
          enableVNC: true,
          enableVideo: true
        }
      }
    },
    TestReportHelper: {
      require: './custom_helpers/TestReportHelper.js'
    },
    ObjectsRepoHelper: {
      require: './custom_helpers/ObjectsRepoHelper.js'
    }
  },
  include: {
    I: './steps_file.js',
    LoginPage: './pages/LoginPage.js',
    AssetsListPage: './pages/AssetsListPage.js',
    AssetDetailsPage: './pages/AssetDetailsPage.js',
    CreateAssetPage: './pages/CreateAssetPage.js',
    DashboardPage: './pages/DashboardPage.js',
    LocationPage: './pages/LocationPage.js',
    ReportPage: './pages/ReportPage.js'
  },
  mocha: {},
  bootstrap: null,
  teardown: null,
  hooks: [
    './step_definitions/Hooks.js'
  ],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/CommonSteps.js',
            './step_definitions/AssetSteps.js',
            './step_definitions/DashboardSteps.js',
            './step_definitions/LocationSteps.js',
            './step_definitions/ReportSteps.js'
          ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
   }
  },
  tests: './*_test.js',
  name: 'BeetrackAutomationTest'
}