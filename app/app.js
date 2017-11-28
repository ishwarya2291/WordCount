(function () {
    'use strict';

    angular.module('myApp', [
        'ngRoute',
        'myApp.wordCount'
    ]).
    config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/wordCount'});
    }]);
})();