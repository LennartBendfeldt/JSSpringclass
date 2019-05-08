console.log('hello');

var rp = require('request-promise');
var moment = require('moment');

var time = require('./TimeStamp');

var dta = require('./DataAcess');

time.getTime();
dta.getData();
