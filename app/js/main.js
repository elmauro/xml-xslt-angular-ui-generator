(function () {

'use strict';


  angular.module('UIApp', ['ui.router'])

  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');
    
      $stateProvider

          // HOME STATES AND NESTED VIEWS ========================================
          .state('home', {
              url: '/home',
              templateUrl: 'partials/partial-home.html',
              controller: "MainController"
          })

          // nested list with custom controller
          .state('home.list', {
              url: '/list',
              templateUrl: 'partials/partial-home-list.html',
              controller: function($scope) {
                  $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
              }
          })

          // nested list with just some random string data
          .state('home.paragraph', {
              url: '/paragraph',
              template: 'I could sure use a drink right now.'
          })

          
          // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
          .state('home.about', {
              url: '/about',
              templateUrl: 'partials/partial-about.html'
          });
      }
  ]);

  //Load controller
  angular.module('UIApp')

  .controller('MainController', [
    '$scope',
    function($scope) {
      $scope.test = "Testing...";
    }
  ]);

}());