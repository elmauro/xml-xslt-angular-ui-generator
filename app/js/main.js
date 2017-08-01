(function () {

'use strict';

  angular.module('UIApp', ['ui.router','btford.socket-io'])

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

  angular.module('UIApp')

  .service('SocketService', function (socketFactory) {
      var socket = socketFactory({

          ioSocket: io.connect('http://10.3.8.194:8080')

      });
      return socket;
  });

  //Load controller
  angular.module('UIApp')

  .controller('MainController',
    function($scope, $http, SocketService) {
      var turnOnOff;

      SocketService.on('turnOff', function (msg) {
        turnOnOff = $('.active').text();
        if(turnOnOff === "OFF"){
          $('.btn-toggle .btn').toggleClass('active');
          $('.btn-toggle .btn').toggleClass('btn-primary');
          $('.btn-toggle .btn').toggleClass('btn-default');
        }
      });

      $('.btn-toggle').click(function() {
          $(this).find('.btn').toggleClass('active');  

          if ($(this).find('.btn-primary').length>0) {
            
            $(this).find('.btn').toggleClass('btn-primary');

            turnOnOff = $(this).find('.btn-primary').text() === 'ON'?'On':'Off';
            
            $http({
              method: 'POST',
              url: 'http://10.3.8.194:8080/microservices/turn' + turnOnOff + 'Led'
            }).then(function successCallback(response) {
            
            }, function errorCallback(response) {
                
            });
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
  );

}());