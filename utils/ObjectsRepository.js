let PropertiesReader = require('properties-reader')
let BEETRACK_ENV = (process.env.BEETRACK_ENV || 'dev').trim();
let locators =  PropertiesReader(`./environments/${BEETRACK_ENV}/locators.properties`);
console.log(locators);
module.exports = {
    get: function(key) {
        return locators.get(key);
    }
}