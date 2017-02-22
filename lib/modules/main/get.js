module.exports = function (request, reply) {
    var context = {
        pageTitle: 'Get'
    };

    var replyData = {};

    replyData.message = 'GET endpoint test';
    replyData.data = [];
    replyData.data.push( { name: 'Test1', value: 10} );
    replyData.data.push( { name: 'Test2', value: 20} );

    reply(replyData);

//    var hash = request.params.hash;
//
//    if ( typeof hash === 'undefined' || hash === null ) {
//        reply.view('get', {error: 'Problem with hash'});
//    } else {
//        reply.view('get', {hash: hash});
//    }

};
