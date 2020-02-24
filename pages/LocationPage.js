const { I } = inject();

module.exports = {
  fields: {
    txtSearchKeyword:'//input[@id="search-text" and @placeholder="Gõ vài ký tự để tìm kiếm"]'
  },
  url: '/location',
  buttons: {
    btnAddLocation: '//button[@class="btn beetrack-info" and @id="create_location_btn"]',
    btnMore: '.el-button.beetrack-button.icon-only.btn.beetrack-info.el-button--primary.el-dropdown-selfdefine',
    btnEditLocation: '.bee-icon.bee-edit.bee-normal',
    btnDeleteLocation: '.bee-icon.bee-delete.bee-normal',
    btnSearchIcon: '//i[@class="bee-icon bee-search"]//parent::button'
  },
  tableResult: {
    table: '//table[@id="fancytree"]',
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
    //check the functional buttons
    I.seeElement(this.buttons.btnAddLocation);
    I.seeElement(this.buttons.btnMore);
    I.click(this.buttons.btnMore);
    I.seeElement(this.buttons.btnEditLocation);
    I.seeElement(this.buttons.btnDeleteLocation);
    //check the search result grid
    I.seeElement(this.tableResult.table);
  },
  clickAddLocation() {
    I.click(this.buttons.btnAddLocation);
  },
  clickEditLocation() {
    I.click(this.buttons.btnMore);
    I.click(this.buttons.btnEditLocation);
  },
  clickDeleteLocation() {
    I.click(this.buttons.btnMore);
    I.click(this.buttons.btnDeleteLocation);
  },
  searchLocation(keyword) {
    I.fillField(this.fields.txtSearchKeyword,keyword);
    I.click(this.buttons.btnSearchIcon);
  },
  countSearchResult: async function() {
    I.seeElement(this.tableResult.count);
    var countString = await I.grabTextFrom(this.tableResult.count);
    return countString;
  }
}
