app.controller('rootController', ['$scope', '$rootScope', '$http', '$location', '$route', '$routeParams', '$httpParamSerializerJQLike', '$uibModal', rootController]);

function rootController( $scope, $rootScope, $http, $location, $route, $routeParams, $httpParamSerializerJQLike, $uibModal ) {
    $scope.testVar = 'this is a test var';

    console.log( 'This is a test var' );

};