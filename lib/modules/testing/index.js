exports.register = function(server, options, next) {
    server.route({
        path: '/testing/',
        method: 'GET',
        handler: require('./main')
    });

    next();

};

exports.register.attributes = {
    pkg: require('./package.json')
};
