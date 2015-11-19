'use strict';

angular.module('rx-angular-example.wikipedia', ['rx', 'ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/wikipedia', {
            templateUrl: 'wikipedia/index.html',
            controller: 'WikipediaCtrl'
        });
    }])

    .controller('WikipediaCtrl', function($scope, $http, rx, wikipedia) {
        var results = [];

        $scope.search = '';
        $scope.results = [];

        $scope.$createObservableFunction('submit')
            .flatMapLatest(wikipedia.search)
            // debounce so that scope.apply can execute at a later interval
            .debounce(100)
            .subscribe(results => $scope.$apply(_ => $scope.results = results));
    });