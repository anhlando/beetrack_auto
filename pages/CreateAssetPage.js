const { I } = inject();

module.exports = {
  fields: {
    txtCategoryId: '//input[@id="category_id"]'
  },
  url: '/asset/create',
  pageHeader: '//h1',
  links: {
    linkSearchCategory: '//label[contains(text(),"Danh mục")]//a[@id="search-category"]',
    linkSearchModel: '//label[contains(text(),"Thiết bị")]//a[@id="search-category"]',
    linkSearchManufacturer: '//label[contains(text(),"Nhà sản xuất")]//a[@id="search-category"]',
    linkSearchOwner: '//label[contains(text(),"Công ty thành viên")]//a[@id="search-category"]',
    linkSearchLocation: '//label[contains(text(),"Vị trí")]//a[@id="search-category"]'
  },
  dialogs: {
    selectCategory: {
      labelCategoryGroup: '//div[contains(text(),"Nhóm danh mục")]',
      selectCategoryGroup: '//li[@role="treeitem"]//span[text()="(%s)"]',
      btnSelectCategory: '//div[@class="cell" and text()="(%s)"]//parent::td//following-sibling::td//button',
      txtSearchCategory: '//div[contains(text(),"Danh mục")]//parent::div//following-sibling::div//input[@id="search-text"]',
      btnSearchCategory: '//div[contains(text(),"Danh mục")]//parent::div//following-sibling::div//button[@class="btn beetrack-info"]'      
    },
    selectOwner: {
      labelSelectOwner: '//div[contains(text(),"Công ty thành viên")]',
      txtSearchOwner: '//div[contains(text(),"Công ty thành viên")]//parent::div//following-sibling::div//input[@id="search-text"]',
      btnSearchOwner: '//div[contains(text(),"Công ty thành viên")]//parent::div//following-sibling::div//button[@class="btn beetrack-info"]',
      btnSelectOwner: '//div[@class="cell" and text()="(%s)"]//parent::td//following-sibling::td//button'
    },
    selectLocation: {
      labelSelectLocation: '//div[contains(text(),"Công ty thành viên")]',
      txtSearchLocation: '//div[contains(text(),"Công ty thành viên")]//parent::div//following-sibling::div//input[@id="search-text"]',
      btnSearchOwner: '//div[contains(text(),"Công ty thành viên")]//parent::div//following-sibling::div//button[@class="btn beetrack-info"]',
      btnSelectOwner: '//div[@class="cell" and text()="(%s)"]//parent::td//following-sibling::td//button'
    }
  },

  navigate() {
    console.log(this.url);
    I.amOnPage(this.url);
  },

  addNewAsset(assetObject) {
    this.selectCategory(assetObject.mainInfo.parentCategory,assetObject.mainInfo.category);
    this.setOwner(assetObject.managementInfo.ownerId);
    this.setLocation(assetObject.managementInfo.locationId);
    this.setPrice(assetObject.financialInfo.price);
  },

  selectCategory(parentCategory,category){
    I.scrollTo(this.links.linkSearchCategory);
    I.click(this.links.linkSearchCategory);
    I.wait(2);
    I.seeElement(this.dialogs.selectCategory.labelCategoryGroup);
    I.click(this.dialogs.selectCategory.selectCategoryGroup.replace("(%s)",parentCategory.trim()));
    I.wait(2);
    I.fillField(this.dialogs.selectCategory.txtSearchCategory,category);
    I.click(this.dialogs.selectCategory.btnSearchCategory);
    I.wait(2);
    I.seeElement(this.dialogs.selectCategory.btnSelectCategory.replace("(%s)",category.trim()));
    I.click(this.dialogs.selectCategory.btnSelectCategory.replace("(%s)",category.trim()));
    I.wait(2);
    // I.seeElement(this.pageHeader);
    // I.see(category,this.fields.txtCategoryId);
  },

  setOwner(ownerId){
    I.scrollTo(this.links.linkSearchOwner);
    I.click(this.links.linkSearchOwner);
    I.wait(2);
    I.seeElement(this.dialogs.selectOwner.labelSelectOwner);
    I.fillField(this.dialogs.selectOwner.txtSearchOwner,ownerId);
    I.click(this.dialogs.selectOwner.btnSearchOwner);
    I.wait(2);
    I.seeElement(this.dialogs.selectOwner.btnSelectOwner.replace("(%s)",ownerId.trim()));
    I.click(this.dialogs.selectOwner.btnSelectOwner.replace("(%s)",ownerId.trim()));
    I.wait(2);
  },

  setLocation(locationId){
    I.scrollTo(this.links.linkSearchLocation);
    I.click(this.links.linkSearchLocation);
    I.wait(2);
    I.seeElement(this.dialogs.selectLocation.labelSelectLocation);
    I.fillField(this.dialogs.selectOwner.txtSearchOwner,ownerId);
    I.click(this.dialogs.selectOwner.btnSearchOwner);
    I.wait(2);
    I.seeElement(this.dialogs.selectOwner.btnSelectOwner.replace("(%s)",ownerId.trim()));
    I.click(this.dialogs.selectOwner.btnSelectOwner.replace("(%s)",ownerId.trim()));
    I.wait(2);
  }
}
