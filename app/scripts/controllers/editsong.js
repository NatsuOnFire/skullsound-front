'use strict';

/**
 * @ngdoc function
 * @name skullsoundApp.controller:EditsongCtrl
 * @description
 * # EditsongCtrl
 * Controller of the skullsoundApp
 */
angular.module('skullsoundApp')
  .controller('EditsongCtrl', function ($scope, $routeParams, $location, Mp3) {

    var id = $routeParams.id;

    Mp3.getSong(id).success(function(data){
      $scope.data = data;
    }).error(function(err){
      console.log(err);
      $location.path('/');
    });

    $scope.send = function () {
      Mp3.updateSong($scope.data).success(function(){
        Mp3.updateSongMetadata($scope.data).success(function(){
          $location.path('/');
        });
      }).error(function(err){
        console.log(err);
      });
    };
  });
