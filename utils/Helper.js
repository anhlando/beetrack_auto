let faker = require('faker');
let moment = require('moment');
let assetInfo = require('../models/AssetInfo'); 

let generateAsset = function() {
    //mainInfo
    assetInfo.mainInfo.parentCategory = 'Thiết bị';
    assetInfo.mainInfo.category = 'Màn hình dell';
    assetInfo.mainInfo.serial = faker.random.alphaNumeric(16).toUpperCase();
    //managementInfo
    assetInfo.managementInfo.ownerId = 'ABC';
    assetInfo.managementInfo.locationId = 'Thiết bị 1';
    //financialInfo
    // assetInfo.financialInfo.outOfSystemDate = moment().format('dd/MM/yyyy')
    assetInfo.financialInfo.price = faker.finance.amount(100000,10000000,0);
    return assetInfo;
};

module.exports = {
    generateAsset: generateAsset
}