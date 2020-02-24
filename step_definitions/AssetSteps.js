const { I, AssetsListPage, AssetDetailsPage, CreateAssetPage, LocationPage } = inject();
let assert = require('assert');
let helper = require('../utils/Helper');
let baseSettings = require('../utils/BaseSettings');

Given('I open asset with id = {int}', (id) => {
    AssetDetailsPage.navigate(id);
    I.seeElement()
});

When('I click {string} button', (buttonName) => {
    switch (buttonName) {
        case 'Add Asset':
        case 'add asset':
        case 'addAsset':
        case 'AddAsset':
        case 'add_asset':
            AssetsListPage.clickAddAsset();
            break;
        case 'Add location':
        case 'Add Location':
        case 'add location':
        case 'addLocation':
        case 'AddLocation':
        case 'add_location':
            LocationPage.clickAddLocation();
        default:
            break;
    }
});

When('I search for asset {string}', (keyword) => {
    AssetsListPage.searchAsset(keyword);
});

When('I add new asset with info below', (table) => { 
    let assetInfo = helper.generateAsset();
    for (let id in table.rows) {
      if (id < 1) {
        continue; // skip a header of a table
      }
  
      // go by row cells
      let cells = table.rows[id].cells;
  
      // take values
      let parentCategory = cells[0].value;
      let category = cells[1].value;
      let status = cells[2].value;
      let ownerId = cells[3].value;
      let locationId = cells[4].value;
      let price = cells[5].value;
      // generate AssetInfo object
      assetInfo.mainInfo.parentCategory = parentCategory;
      assetInfo.mainInfo.category = category;
      assetInfo.mainInfo.status = status;
      assetInfo.managementInfo.ownerId = ownerId;
      assetInfo.managementInfo.locationId = locationId;
      assetInfo.financialInfo.price = price;
    }
    CreateAssetPage.addNewAsset(assetInfo);
});

Then('I expect to see {string} header', (headerText) => {
    I.seeElement('//h1[contains(text(),"' + headerText.trim() + '")]');
});

Then('I expect that the UI of Assets page is displayed correctly', () => {
    AssetsListPage.checkUI();
});

Then('I expect to see the search result displayed', async() => {
    var result = await AssetsListPage.countSearchResult();
    console.log(result);
})