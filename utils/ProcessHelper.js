const _ = require('lodash')

let opts = process.argv.slice(2);

let getArgv = function(key){
    let argv = _.find(opts, opt => _.startsWith(opt, key + '='));
    if (argv) {
        return argv.split('=')[1]
    } else {
        return null;
    }
}

module.exports = {
    getArgv: getArgv
}