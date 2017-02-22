//http://172.16.100.100:8080/

var http = require('http');

module.exports = function (request, reply) {
    var context = {
        pageTitle: 'Jenkins'
    };

    var action = request.query.action;
    var details = request.query;

//    console.log( details );
//    console.log( action );

    if ( action === 'list' ) {
        console.log('list');
        var options = {};
        options.host = '172.16.100.100';
        options.path = '/api/json';
        options.port = 8080;

        var req = http.get( options, function(res) {
            // Buffer the body entirely for processing as a whole.
            var bodyChunks = [];
            res.on('data', function(chunk) {
                // You can process streamed parts here...
                bodyChunks.push(chunk);
            }).on('end', function() {
                var body = Buffer.concat(bodyChunks);
                // ...and/or process the entire body here.
                reply( body );
            })
        });
    }

};