const { I } = inject();

module.exports = {
  charts: {
    assetQuantityByMonth: '//h3[contains(text(),"Biến Động SL Tài Sản Theo Tháng")]/parent::div/parent::div/parent::div',
    assetValueByMonth: '//h3[contains(text(),"Biến Động Trị Giá Tài Sản Theo Tháng")]/parent::div/parent::div/parent::div',
    assetPurchasedThisMonth: '//h3[contains(text(),"Thống kê giá trị tài sản mua trong tháng theo chi nhánh")]/parent::div/parent::div/parent::div'
  },
  infoBoxes: {
    assetQty: '//div[@id="asset-qty"]',
    assetValue: '//div[@id="asset-value"]',
    assetLostQty: '//div[@id="asset-lost-qty"]',
    auditCount: '//div[@id="session-qty"]',
    storageUsed: '//div[@class="info-box bg-purple-active"]//span[contains(text(),"Dung Lượng")]' //this div should have id
  },
  url: '/',

  navigate() {
    console.log(this.url);
    I.amOnPage(this.url);
  },

  checkUI() {
    //infoBoxes
    I.seeElement(this.infoBoxes.assetQty);
    I.seeElement(this.infoBoxes.assetValue);
    I.seeElement(this.infoBoxes.assetLostQty);
    I.seeElement(this.infoBoxes.auditCount);
    I.seeElement(this.infoBoxes.storageUsed);
    //charts
    I.seeElement(this.charts.assetValueByMonth);
    I.seeElement(this.charts.assetQuantityByMonth);
    I.seeElement(this.charts.assetPurchasedThisMonth);

  }

}
