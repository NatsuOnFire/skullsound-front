'use strict';

/**
 * @ngdoc function
 * @name skullsoundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skullsoundApp
 */
angular.module('skullsoundApp')
  .controller('MainCtrl', function ($scope, $sce, $interval, Mp3) {

    $scope.songs = undefined;
    $scope.albumActif = undefined;
    $scope.audioSrc = undefined;
    $scope.audioPath = undefined;

    $interval(function() {
      $scope.getAlbums();
    },  5000);

    $interval(function() {
      if($scope.albumActif !== undefined){
        $scope.getSongs($scope.albumActif);
      }
    }, 5000);

    $scope.getAlbums = function(){
      Mp3.getAlbums().success(function (albums) {
        $scope.albums = albums;
      }).error(function (err) {
        console.log(err);
      });
    };

    $scope.getSongs = function (album) {
      Mp3.getSongsByAlbum(album).success(function (songs) {
        $scope.albumActif = album;
        $scope.songs = songs;
      }).error(function (err) {
        console.log(err);
      });
    };

    $scope.playSong = function(path){
      var url = $sce.trustAsResourceUrl('http://localhost:1337/' + path);
      $scope.audioSrc = url;
      $scope.audioPath = path;
    };

    $scope.removeSong = function (id) {
      Mp3.removeSongFile(id).success(function () {
        Mp3.removeSongDatabase(id).success(function () {
          $scope.getSongs($scope.albumActif);
        });
      });
    };
  });
