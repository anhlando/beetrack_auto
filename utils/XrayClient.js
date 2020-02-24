let request = require('request');
let baseSettings = require('./BaseSettings');

let username = baseSettings.get('jira.username');
let password = baseSettings.get('jira.password');
let auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
let baseUrl = baseSettings.get('jira.host');

let baseOptions = {
    method: 'GET',
    url: '',
    headers: {
       'Content-Type': 'application/json',
       "Authorization" : auth
    }
 };

let options;

// get the key of test execution
let getTestExecKey = function(testPlanKey, callback){
    options = Object.assign(baseOptions, {
        url: baseUrl + `/rest/raven/1.0/api/testplan/${testPlanKey}/testexecution`
    });
    request(options, function(err,resp,body){
        let testExecKey;
        console.log("From getTestExeckey(): ");
        console.log(body);
        var json = JSON.parse(body);
        testExecKey = json[json.length-1].key;
        callback(testExecKey);
    })
}

let getTestRunID = function(testExecKey, testCaseKey, callback){
    options = Object.assign(baseOptions, {
        url: baseUrl + '/rest/raven/1.0/api/testrun',
        qs: {
            testExecIssueKey: testExecKey,
            testIssueKey: testCaseKey
        }
    });
    request(options, function(err,resp,body){
        console.log("From getTestRunID():");
        console.log(body);
        var id;
        var json = JSON.parse(body);
        id = json.id;
        callback(id);
    });
}

let updateTestResult = function(testPlanKey, testCaseKey, status, comment){
    let bodyData = `{
        "status": "${status}",
        "comment": "${comment}",
        "defects": {},
        "evidences": {},
        "examples": []
    }`;
    console.log(bodyData);
    getTestExecKey(testPlanKey, function(testExecKey){
        getTestRunID(testExecKey, testCaseKey, function (id) {
            options = Object.assign(baseOptions, {
                method: 'PUT',
                url: baseUrl + '/rest/raven/1.0/api/testrun/' + id,
                body: bodyData
            });
            request(options, function(err,resp,body){
                console.log("From updateTestResult():");
                // console.log(body);
                if (err) throw new Error(err);
                console.log('Response: ' + resp.statusCode + ' ' + resp.statusMessage);
            });
        }); 
    });
}

module.exports = {
    updateTestResult: updateTestResult,
    getTestExecID: getTestExecKey
}