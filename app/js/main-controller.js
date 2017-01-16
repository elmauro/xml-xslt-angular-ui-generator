(function () {

  'use strict';

  window.angular.module('UIApp')
  .controller('MainController', ['$scope', '$translate',
  function ($scope, $translate) {

    $scope.test = "Testing...";
      $scope.changeLanguage = function (key) {
        $translate.use(key);
      };
      $scope.isNew = false;
      $scope.showList = true;

  }]);
  
}());
