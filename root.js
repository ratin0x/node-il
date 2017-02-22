module.exports = function (request, reply) {
    var context = {
        pageTitle: 'Main'
    };

    reply.file('templates/root.html');

};