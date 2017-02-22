
module.exports = function (request, reply) {
    var context = {
        pageTitle: 'Validate'
    };

    var param = request.params.param;

    reply( "Validate" );
};
