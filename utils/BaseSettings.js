let PropertiesReader = require('properties-reader')
let settings =  PropertiesReader('./config/baseSettings.properties')

module.exports = {
    get: function(key) {
        return settings.get(key);
    }
}
