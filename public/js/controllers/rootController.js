app.controller('rootController', ['$scope', '$rootScope', '$http', '$location', '$route', '$routeParams', '$httpParamSerializerJQLike', '$uibModal', rootController]);

function rootController( $scope, $rootScope, $http, $location, $route, $routeParams, $httpParamSerializerJQLike, $uibModal ) {
    // $scope.testVar = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed pulvinar ipsum. Suspendisse pulvinar lacus purus, eu vulputate risus blandit vitae. Aenean interdum justo non feugiat convallis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut quis sem eu libero tristique auctor sed in urna. Cras at tincidunt mi. Nullam congue enim a euismod malesuada. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent a orci imperdiet, egestas lacus quis, consectetur nunc.
    //
    //                   Aenean ut velit varius, malesuada nibh sit amet, condimentum nisi. Phasellus eros ipsum, rutrum sed fermentum nec, aliquet laoreet sem. Nunc ante est, vehicula ac nulla posuere, lobortis volutpat risus. Curabitur tristique venenatis nibh, et fringilla est bibendum ut. Ut imperdiet, mauris eu consectetur varius, sapien leo condimentum elit, vel lacinia velit quam et odio. Morbi vel iaculis enim. Etiam vitae nibh at neque congue condimentum. Proin urna est, feugiat sit amet nibh eget, mattis vehicula magna.
    //
    //                   Ut malesuada ipsum nec leo tempus, quis rutrum augue elementum. Integer varius nisl quis mauris malesuada pellentesque. Vestibulum tortor odio, tincidunt in quam ac, tempor condimentum dui. Cras dignissim maximus vulputate. Donec volutpat justo nec placerat ullamcorper. Nunc posuere purus efficitur sapien pellentesque, a gravida est consectetur. Phasellus sapien lacus, fringilla et vulputate non, malesuada vel elit. Sed id nunc fermentum, porttitor arcu vitae, scelerisque erat. Etiam at lacus imperdiet, ultricies orci at, feugiat orci. Sed viverra gravida nunc, sed viverra mauris elementum id. Nam in vestibulum sem, eget tristique metus.
    //
    //                   Proin finibus elementum urna, ac auctor nulla consequat eget. Nulla facilisi. Ut sit amet vestibulum velit. Nullam ut nibh congue, malesuada orci et, suscipit lacus. Fusce mi quam, mollis non aliquam a, bibendum eu leo. In tincidunt orci non felis volutpat, efficitur gravida quam scelerisque. Aliquam dignissim, turpis ac sagittis vehicula, leo risus interdum sem, sit amet placerat neque quam sollicitudin arcu. Sed quis ipsum nisi. Cras tempor arcu ac ullamcorper cursus. Nunc vitae massa ligula. Quisque nec risus tempus, gravida urna eget, convallis sapien. Mauris a ante congue, accumsan lacus vel, sagittis justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc lacinia laoreet mauris, sit amet porttitor tortor volutpat id.
    //
    //                   Sed id varius lectus, quis sagittis dolor. Mauris luctus varius sapien non auctor. Pellentesque dignissim condimentum turpis quis ultrices. Etiam ullamcorper ipsum id neque imperdiet, eu aliquam nisi finibus. Donec nunc sem, aliquam non nisi consequat, molestie vestibulum ipsum. Sed sit amet egestas dui. Ut congue tincidunt justo vitae imperdiet. In lacinia nulla et lectus consequat, sed interdum sem eleifend. Maecenas viverra odio eget sodales dictum. Mauris finibus, magna et fringilla feugiat, turpis nisl ullamcorper leo, et rhoncus lorem est nec nibh. Vestibulum blandit placerat odio in varius. Proin nec mauris facilisis, scelerisque odio at, commodo sapien. Suspendisse faucibus urna vel pulvinar consectetur. Cras tincidunt tellus vel dui varius, vitae consequat purus porta. Vivamus id dignissim sem, vel sodales felis.
    //
    //                   Donec quis sapien et ipsum vulputate varius. In vestibulum eu enim ac faucibus. Morbi nec pharetra leo. Cras et nisl nec tortor pulvinar commodo. Pellentesque et tortor magna. Quisque venenatis, odio non fermentum aliquet, risus nisl elementum nibh, in venenatis turpis odio ac augue. Vestibulum eget congue elit.
    //
    //                   Phasellus aliquet aliquet orci, eu laoreet ipsum eleifend a. Vivamus a turpis nec urna pretium suscipit. Phasellus malesuada, urna euismod tempor lacinia, felis nibh volutpat elit, nec facilisis nunc sem et purus. Etiam aliquam consectetur felis a sollicitudin. Ut quis orci egestas, convallis urna ut, hendrerit nunc. Nam condimentum dui quis nisi dignissim, vel hendrerit libero volutpat. Donec in mauris dolor. Aenean consectetur purus at sem egestas, eget interdum libero fringilla. Cras leo dolor, egestas in diam eget, volutpat consequat lacus. Nunc sit amet erat id odio rutrum cursus non id arcu. Donec malesuada pulvinar odio, ac malesuada ipsum ultrices a. Curabitur vitae ex sodales, sagittis augue quis, maximus quam. Suspendisse interdum turpis non porta placerat. Suspendisse purus nisi, lacinia pharetra porttitor in, fermentum vitae arcu.
    //
    //                   Donec vel sapien in leo suscipit tristique bibendum et quam. Sed ultricies nec enim quis porttitor. Fusce libero tellus, fringilla at euismod ac, posuere non nisi. Integer dictum, enim sed gravida posuere, diam leo convallis arcu, vitae eleifend tellus nunc rutrum elit. Sed finibus in erat eu posuere. Maecenas iaculis rhoncus felis vel finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam vulputate a nulla sit amet pharetra.
    //
    //                   Aenean venenatis tempus nibh tincidunt consequat. Sed viverra dignissim efficitur. Proin sollicitudin velit eu aliquet commodo. Donec accumsan neque rutrum, sagittis ipsum quis, feugiat velit. Quisque lacinia interdum neque in malesuada. Maecenas nec nunc non augue porta vulputate ut in lectus. Proin sodales blandit dolor in molestie. Cras imperdiet auctor purus, facilisis varius libero facilisis at. Cras nec enim nec sem tristique commodo. Curabitur varius vel metus in scelerisque.
    //
    //                   Phasellus ac lacinia dui. Etiam ac dui quam. Etiam faucibus feugiat purus, ut pharetra ex tincidunt in. Nunc justo nunc, porttitor vel pharetra quis, porta vitae libero. Aenean dignissim nisi ligula, id tristique nunc aliquam non. Nulla faucibus laoreet lobortis. Praesent placerat sodales metus blandit bibendum. Etiam in enim mi. Morbi id imperdiet massa, cursus blandit massa. Aenean feugiat tincidunt purus, vel ultricies risus malesuada nec. Cras ut sapien scelerisque ipsum imperdiet elementum. Suspendisse congue neque non faucibus feugiat.`;
    //
    // $scope.testVar = $scope.testVar + '\n' + $scope.testVar;

    $scope.appData = {};

    var appData = $scope.appData;

    appData.user = '';
    appData.dataset = [];

    var demoData = {
        "url" : 'http://i.onionstatic.com/avclub/5495/73/16x9/960.jpg',
        "weights": {
            "blue" : 1,
            "green" : 0,
            "red" :2
        }
    };

    appData.dataset.push( demoData );

    demoData = {
        "url" : 'http://static.srcdn.com/wp-content/uploads/Robin-Lord-Taylor-as-the-Penguin-in-Gotham.jpg',
        "weights": {
            "blue" : 2,
            "green" : 1,
            "red" : 0
        }
    };

    appData.dataset.push( demoData );

    appData.choices = [ 'blue', 'red', 'green' ];

    appData.results = {};

    appData.currentIndex = 0;
    appData.current = appData.dataset[ appData.currentIndex ];

    appData.resultData = [];

    angular.forEach( appData.choices, function ( choice, index ) {
        appData.results[choice] = 0;
    });

    $scope.addMore = function ( choice, rowData ) {
        appData.results[choice] += rowData.weights[choice];
        $scope.chooseNext();
    }

    $scope.chooseNext = function () {
        var next;
        var top = 0;
        angular.forEach( appData.choices, function ( choice, index ) {
            next = appData.dataset[top];
            if ( appData.results[choice] > top ) {
                top = appData.results[choice];
                angular.forEach( appData.dataset, function ( row, index ) {
                   if ( row.weights[choice] >= top ) {
                       appData.current = row;
                   }
                });
            }
        });

    }

    $scope.getResults = function () {
        angular.forEach( appData.choices, function ( choice, index ) {
            var resultToPush = {};
            resultToPush.name = choice;
            resultToPush.value = appData.results[choice];
            appData.resultData.push( resultToPush );
        });


    }

}