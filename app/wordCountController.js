(function () {
  'use strict';
  angular
      .module('myApp.wordCount', ['ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/wordCount', {
          templateUrl: 'wordCount.html',
          controller: 'WordCountCtrl',
          controllerAs: 'wordCountCtrl'
        });
      }])
      .controller('WordCountCtrl', [ WordCountCtrl ]);

  function WordCountCtrl(){
      var vm = this;
      vm.totalWordCount = 0;
      vm.inputSentence = "This is a sentence.";

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