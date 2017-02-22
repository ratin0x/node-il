app.controller('testController', ['$scope', '$rootScope', '$http', '$location', '$route', '$routeParams', '$httpParamSerializerJQLike', '$uibModal', testController]);

function testController( $scope, $rootScope, $http, $location, $route, $routeParams, $httpParamSerializerJQLike, $uibModal ) {
    $scope.testVar = 'This is a test var';

    $scope.testData = function() {
        var promise = $http.get( '/main/get' );

        promise.then( function( success ) {
            console.log( success );
            $scope.test = success.data.data;
        }, function( error ) {
            console.log( error );
        });
    };

};