(function () {

'use strict';


  angular.module('UIApp', ['ui.router'])

  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      //$urlRouterProvider.otherwise('/UIApp');
    
      $stateProvider

          // HOME STATES AND NESTED VIEWS ========================================
          .state('UIApp', {
              url: '/UIApp',
              templateUrl: 'partials/partial-home.html'
          })

          // nested list with custom controller
          .state('UIApp.list', {
              url: '/list',
              templateUrl: 'partials/partial-home-list.html',
              controller: function($scope) {
                  $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
              }
          })

          // nested list with just some random string data
          .state('UIApp.paragraph', {
              url: '/paragraph',
              template: 'I could sure use a drink right now.'
          })

          .state('UIApp.company', {
            url: "/company",
            templateUrl: 'partials/company.html'
          })

          .state('UIApp.users', {
              url: '/users',
              templateUrl: 'partials/users.html',
              controller: 'MainController'
          })

          // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
          .state('UIApp.about', {
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