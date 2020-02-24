const { I } = inject();

module.exports = {
  fields: {
    txtSelectReportType:'//label[contains(text(),"Loại báo cáo")]//following-sibling::div//input',  
    txtSelectAuditType: '//label[contains(text(),"Loại Kiểm kê")]//following-sibling::div//input',
    txtSelectLocation: '//label[contains(text(),"Vị Trí")]//following-sibling::div//input[contains(@class,"el-input")]',
    txtSelectDate_From: '(//label[contains(text(),"Thời gian")]//following-sibling::div//input)[1]',
    txtSeletDate_To: '(//label[contains(text(),"Thời gian")]//following-sibling::div//input)[2]',
    txtSelectAudit: '//label[contains(text(),"Kì kiểm kê")]//following-sibling::div//input'
    // btnArrowDownSelectReportType: '//i[contains(@class,"el-select")]'
  },
  url: '/report',
  buttons: {
    btnSearchReports: '//span[contains(text(),"Áp dụng")]//parent::button',
    btnDownloadReport: '//i[contains(@class,"bee-download")]'
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
    I.seeElement(this.fields.txtSelectReportType);
    //check the functional buttons
    I.seeElement(this.buttons.btnSearchReports);
  },
  downloadReport() {
    I.seeElement(this.buttons.btnDownloadReport);
    I.click(this.buttons.btnDownloadReport);
  }
}
