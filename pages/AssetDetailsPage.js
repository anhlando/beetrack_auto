const { I } = inject();

module.exports = {
  fields: {

  },
  url: '/asset/',
  btnAddAsset: '.btn.beetrack-info.beetrack-button.tv-btn-add-new',

  navigate(assetId) {
    console.log(this.url + assetId);
    I.amOnPage(this.url + assetId);
  }
}
