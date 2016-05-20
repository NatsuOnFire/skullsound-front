'use strict';

/**
 * @ngdoc service
 * @name skullsoundApp.Mp3
 * @description
 * # Mp3
 * Service in the skullsoundApp.
 */
angular.module('skullsoundApp')
  .service('Mp3', function ($http) {
    var apiEndpoint = 'http://localhost:1337';

    return {
      getAlbums: function(){
        return $http.get(apiEndpoint + '/albums');
      },

      getSongsByAlbum: function(album){
        return $http.get(apiEndpoint + '/mp3?album=' + album);
      },

      getSong: function(id){
        return $http.get(apiEndpoint + '/mp3/' + id);
      },

      removeSongDatabase: function(id){
        return $http.delete(apiEndpoint + '/mp3/' + id);
      },
      
      removeSongFile: function(id){
        return $http.delete(apiEndpoint + '/mp3/file/' + id);
      }
    };
  });
