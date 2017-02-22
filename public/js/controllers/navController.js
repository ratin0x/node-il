app.controller('navController', ['$scope', '$rootScope', '$http', '$location', '$route', '$routeParams', '$httpParamSerializerJQLike', '$uibModal', navController]);

function navController( $scope, $rootScope, $http, $location, $route, $routeParams, $httpParamSerializerJQLike, $uibModal ) {

    $scope.isNavCollapsed = true;

    $scope.listJobs = function() {
        var promise = $http.get('/main/jenkins', { params: { action: 'list'} });

        promise.then( function( success ) {
            console.log( success );
            $rootScope.jenkins = success.data;
            $rootScope.jenkinsJobs = success.data.jobs;
//            $scope.test = success.data.data;
        }, function( error ) {
            console.log( error );
        });

    };

    $scope.listViews = function() {
        var promise = $http.get('/main/jenkins', { params: { action: 'list'} });

        promise.then( function( success ) {
//            console.log( success );
            $rootScope.jenkins = success.data;
            $rootScope.jenkinsJobs = success.data.views;
//            $scope.test = success.data.data;
        }, function( error ) {
            console.log( error );
        });

    };
};