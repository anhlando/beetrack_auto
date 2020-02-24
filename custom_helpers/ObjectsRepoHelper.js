const Helper = codecept_helper;
let PropertiesReader = require('properties-reader')
let BEETRACK_ENV = (process.env.ENV || 'dev').trim();
let locators =  PropertiesReader(`./environments/${BEETRACK_ENV}/locators.properties`);

class ObjectsRepoHelper extends Helper {

  // before/after hooks
  _before() {
    // remove if not used
  }

  _after() {
    // remove if not used
  }
  getLocator(key) {
    console.log("from objectsRepoHelper...");
    return locators.get(key);
  }

}

module.exports = ObjectsRepoHelper;
