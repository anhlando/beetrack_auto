const { I } = inject();

module.exports = {
  fields: {
    txtSearchKeyword:'//input[@id="search-text" and @placeholder="Gõ vài ký tự để tìm kiếm"]'
  },
  url: '/audit',
  buttons: {
    btnAddAudit: '.btn.beetrack-info.tv-btn-add-new',
    btnSearchIcon: '//i[@class="bee-icon bee-search"]//parent::button'
  },
  tableResult: {
    header: '.dataTables_scroll .dataTables_scrollHead table',
    body: '.dataTables_scroll .dataTables_scrollBody table',
    selectTableSize: '//select[@name="tbl_asset_length"]',
    pagingSection: {id: 'tbl_asset_paginate'},
    count: '//div[@id="tbl_asset_info"]'
  },
  dialogs: {
    createAuditDialog: {
      txtName: '//input[@id="name"]',
      txtDescription: '//textarea[@id="description"]',
      txtSessionStartDate: '//input[@id="session_start_date"]',
      txtSessionEndDate: '//input[@id="session_end_date"]',
      selectAudittype: '//select[@id="type"]'
    }
  },

  navigate() {
    console.log(this.url);
    I.amOnPage(this.url);
  },
  checkUI() {
    // I.seeElement(this.fields.)
    
  },
  searchAudit(keyword) {
    I.fillField(this.fields.txtSearchKeyword,keyword);
    I.click(this.buttons.btnSearchIcon);
  },
  countSearchResult: async function() {
    I.seeElement(this.tableResult.count);
    var countString = await I.grabTextFrom(this.tableResult.count);
    return countString;
  },
  addAudit(auditInfo){
    
  }
}
