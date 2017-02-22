var app = angular.module('rootApp', ['ngRoute', 'ngCookies', 'ngAnimate', 'ngSanitize', 'ui.bootstrap', 'bootstrapLightbox', 'textAngular', 'ui.scrollpoint', function() {}]);

app.run( function( $rootScope ) {
    $rootScope.sampleDetails = [
        'Details 1',
        'Details 2',
        'A longer line of details',
        '<small>A piece of small text</small>'
    ];

});