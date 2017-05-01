module.exports = function (request, reply) {
    var context = {
        pageTitle: 'Setup'
    };

    reply.file('templates/setup.html');

};