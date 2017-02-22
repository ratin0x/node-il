module.exports = function (request, reply) {
    var context = {
        pageTitle: 'Main'
    };

    var dest = request.params.dest;

    if ( typeof dest === 'undefined' || dest === null ) {
        reply.file('templates/main.html', {error: 'Problem with dest'});
    } else {
        reply.file('templates/main.html');
    }

};
