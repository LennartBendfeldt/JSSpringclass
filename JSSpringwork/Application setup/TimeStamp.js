const TimeS = {


getTime: function(){
var rp = require('request-promise');
var moment = require('moment');

var t=setInterval(runFunction,3000);

function runFunction(){
    var timestamp = moment().format('h:mm:ss a');
    
    console.log(timestamp);
    }
}
}

module.exports = TimeS;