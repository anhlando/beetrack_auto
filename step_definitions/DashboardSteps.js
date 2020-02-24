const { I, DashboardPage} = inject();
let assert = require('assert');
let baseSettings = require('../utils/BaseSettings');


Then('I see user menu Dashboard', () => {
    I.waitForElement('//li[@class="dropdown user user-menu"]', 30);
});

Then('I expect to see the webapp version is {string}', async (version) => {
    let actualVersion = await I.grabTextFrom('.col-sm-6.col-md-8');
    console.log(actualVersion);
    console.log(actualVersion.includes(version));
    assert.equal(true,actualVersion.includes(version));
})

Then('I expect that the UI of Dashboard page is displayed correctly', () =>{
    DashboardPage.checkUI();
})