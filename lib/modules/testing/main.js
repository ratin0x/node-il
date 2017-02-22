module.exports = function (request, reply) {

    var context = {
    	pageTitle: 'Testing'
    };

    reply.view('testing/testing', context);
};
