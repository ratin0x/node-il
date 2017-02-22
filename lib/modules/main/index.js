exports.register = function(server, options, next) {
    server.route({
        path: '/main/{dest?}',
        method: 'GET',
        handler: require('./main')
    });    

    server.route({
        path: '/main/get',
        method: 'GET',
        handler: require('./get')
    });

    server.route({
        path: '/main/jenkins/{action?}',
        method: 'GET',
        handler: require('./jenkinslist')
    });


    next();

};

exports.register.attributes = {
    pkg: require('./package.json')
};
