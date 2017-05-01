//angular.module('ngapp').config([ '$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {
//    $routeProvider.when('/:dest?', {
//       templateUrl : '/public/partials/get.html',
//       controller : 'testController'
//    });
//
//    $locationProvider.html5Mode(true);
//}]);

angular.module('rootApp').config([ '$routeProvider', '$httpProvider', '$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {
    $routeProvider.when('/setup', {
       templateUrl : '/public/partials/setupContent.html',
       controller : 'rootController'
    }).otherwise({
       templateUrl : '/public/partials/rootContent.html',
       controller : 'rootController'
    });

    $locationProvider.html5Mode(true);
}]);