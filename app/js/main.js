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
    '$scope', '$http',
    function($scope, $http) {
      $('.btn-toggle').click(function() {
          $(this).find('.btn').toggleClass('active');  

          if ($(this).find('.btn-primary').length>0) {
            
            $(this).find('.btn').toggleClass('btn-primary');
            
            $http({
              method: 'POST',
              url: 'http://10.3.8.194:8080/microservices/turnOnOffLed'
            }).then(function successCallback(response) {
                
            }, function errorCallback(response) {
                
            });

            setTimeout(function() {
                $('.btn-toggle .btn').toggleClass('btn-primary');
            }, 5000);
          }
          if ($(this).find('.btn-danger').length>0) {
            $(this).find('.btn').toggleClass('btn-danger');
          }
          if ($(this).find('.btn-success').length>0) {
            $(this).find('.btn').toggleClass('btn-success');
          }
          if ($(this).find('.btn-info').length>0) {
            $(this).find('.btn').toggleClass('btn-info');
          }

          $(this).find('.btn').toggleClass('btn-default');
             
      });

      $scope.test = "Testing...";
    }
  ]);

}());