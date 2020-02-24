const { I } = inject();
let objectsRepository = require('../utils/ObjectsRepository');

module.exports = {
  fields: {
    username: objectsRepository.get("LoginPage.username"),
    password: objectsRepository.get("LoginPage.password")
  },
  btnLogin: objectsRepository.get("LoginPage.btnLogin"),
  // btnSelectLanguage: 

  login (username,password) {
    // console.log(I);
    I.fillField(this.fields.username,username);
    I.fillField(this.fields.password,password);
    I.click(this.btnLogin);
  }
}
