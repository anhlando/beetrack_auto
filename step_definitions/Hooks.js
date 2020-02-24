let ph = require('../utils/ProcessHelper');
let baseSettings = require('../utils/BaseSettings');

module.exports = {
    bootstrap: function() {
        // var testPlanKey = ph.getArgv('testPlanKey');
        var testPlanKey = process.env.testPlanKey;
        global.testPlanKey = (testPlanKey === undefined 
                            || testPlanKey === null
                            ? baseSettings.get('xray.testplan.key')
                            : testPlanKey);
        console.log("Testplan: " + global.testPlanKey);
        console.log("Bootstrap...");
    },
    teardown: function() {
        console.log("Teardown...");
    }
}