const { I } = inject();

module.exports = {
  fields: {
    txtSearchKeyword:'//input[@id="search-text" and @placeholder="Gõ vài ký tự để tìm kiếm"]'
  },
  url: '/asset',
  buttons: {
    // btnAddAsset: '.btn.beetrack-info.beetrack-button.tv-btn-add-new',
    btnAddAsset: '.btn.beetrack-info.tv-btn-add-new',
    btnUpdateStatus: '.btn.beetrack-info.beetrack-button.tv-btn-update-status',
    btnUpdateLocation: '.btn.beetrack-info.beetrack-button.tv-btn-update-location',
    btnPrint: '.btn.beetrack-info.beetrack-button.tv-btn-printPreview',
    btnDeleteAssets: '.btn.beetrack-danger.beetrack-button.doSubmitActionList.bulk-update',
    btnFilterToggle: '.btn.filter-toggle',
    btnSearchIcon: '//i[@class="bee-icon bee-search"]//parent::button',
    btnFilterColumns: '.multiselect.dropdown-toggle.btn.btn-default'
  },
  tableResult: {
    header: '.dataTables_scroll .dataTables_scrollHead table',
    body: '.dataTables_scroll .dataTables_scrollBody table',
    selectTableSize: '//select[@name="tbl_asset_length"]',
    pagingSection: {id: 'tbl_asset_paginate'},
    count: '//div[@id="tbl_asset_info"]'
  },

  navigate() {
    console.log(this.url);
    I.amOnPage(this.url);
  },
  checkUI() {
    //check the search field
    I.seeElement(this.fields.txtSearchKeyword);
    I.seeElement(this.buttons.btnSearchIcon);
    I.seeElement(this.buttons.btnFilterToggle);
    //check the functional buttons
    I.seeElement(this.buttons.btnAddAsset);
    I.seeElement(this.buttons.btnUpdateStatus);
    I.seeElement(this.buttons.btnUpdateLocation);
    I.seeElement(this.buttons.btnPrint);
    I.seeElement(this.buttons.btnDeleteAssets);
    I.seeElement(this.buttons.btnFilterColumns);
    //check the search result grid
    I.seeElement(this.tableResult.header);
    I.seeElement(this.tableResult.body);
    I.seeElement(this.tableResult.selectTableSize);
    I.seeElement(this.tableResult.pagingSection);
  },
  clickAddAsset() {
    I.click(this.buttons.btnAddAsset);
  },
  searchAsset(keyword) {
    I.fillField(this.fields.txtSearchKeyword,keyword);
    I.click(this.buttons.btnSearchIcon);
  },
  countSearchResult: async function() {
    I.seeElement(this.tableResult.count);
    var countString = await I.grabTextFrom(this.tableResult.count);
    return countString;
  }
}
