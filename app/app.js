'use strict';

// Declare app level module which depends on views, and components
angular.module('rx-angular-example', [
  'ngRoute',
  'rx',
  'rx-angular-example.wikipedia',
  'infra.wikipedia'
]).
config(['$routeProvider', $routeProvider =>
  $routeProvider.otherwise({redirectTo: '/wikipedia'})
]);
