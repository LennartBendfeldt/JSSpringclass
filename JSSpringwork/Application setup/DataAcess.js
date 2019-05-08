const DataS = {


getData: function(){

var rp = require('request-promise');
var moment = require('moment');

rp('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (htmlString) {
        console.log(htmlString);
    })
    .catch(function (err) {
        // Crawling failed...
    });

}
}

module.exports = DataS;