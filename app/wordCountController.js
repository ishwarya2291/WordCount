(function () {
    'use strict';
    angular
        .module('myApp.wordCount', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/wordCount', {
              templateUrl: 'wordCount.html',
              controller: 'WordCountController',
              controllerAs: 'wordCountController'
            });
        }])
        .controller('WordCountController', [ WordCountController ]);

    function WordCountController(){
      var vm = this;
      vm.totalWordCount = 0;
      vm.inputSentence = "";
      vm.calculateWordCount = calculateWordCount;

      function calculateWordCount(){
          vm.totalWordCount = 0;
          if(vm.inputSentence != null){
              var matches = vm.inputSentence.match(/[\w\d]+/gi);
              vm.totalWordCount = matches ? matches.length : 0;
          }
      }
    }
})();