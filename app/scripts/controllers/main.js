'use strict';

/**
 * @ngdoc function
 * @name skullsoundApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the skullsoundApp
 */
angular.module('skullsoundApp')
  .controller('MainCtrl', function ($scope, Mp3) {

    $scope.songs = undefined;
    $scope.albumActif = undefined;

    Mp3.getAlbums().success(function (albums) {
      $scope.albums = albums;
    }).error(function (err) {
      console.log(err);
    });

    $scope.getSongs = function (album) {
      Mp3.getSongsByAlbum(album).success(function (songs) {
        $scope.albumActif = album;
        $scope.songs = songs;
      }).error(function (err) {
        console.log(err);
      });
    };

    $scope.removeSong = function (id, index) {
      Mp3.removeSongFile(id).success(function () {
        Mp3.removeSongDatabase(id).success(function () {
          $scope.songs.splice(index, 1);
        });
      });
    };
  });
