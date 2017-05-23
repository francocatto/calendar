'use strict';

/**
 * @ngdoc function
 * @name calendarApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the calendarApp
 */
angular.module('calendarApp')
  .controller('MainCtrl', function ($scope) {
    $scope.day = moment();

    $scope.formatarData = function(day) {
      var retorno = day;
      return retorno.format('DD/MM/YYYY');
    };
  });
