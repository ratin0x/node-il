var Hapi = require('hapi');
var Glue = require('glue');
var Path = require('path');
var Hoek = require('hoek');

//This manifest describes our user modules
var manifest = require('./config/manifest.json');

//We use this object to provide the path to user modules
var options = {
    relativeTo: __dirname + '/lib/modules'
};

Glue.compose( manifest, options, function( err, server ) {

    //Wiring for static content
    server.register( require('inert'), function(err) {
        //Public directory
        server.route({
            path: '/public/{param*}',
            method: 'GET',
            handler: {
                directory: {
                    path: 'public'
                }
            }
        });

        //Templates directory
        server.route({
            path: '/templates/{param*}',
            method: 'GET',
            handler: {
                directory: {
                    path: 'templates'
                }
            }
        });
    });

    server.route({
        path: '/setup',
        method: 'GET',
        handler: require('./setup')
    });

    server.route({
        path: '/',
        method: 'GET',
        handler: require('./root')
    });


    //Start the server!
    server.start( function(err) {
        //API on port 8042 - see /config/manifest.json
    });
});
