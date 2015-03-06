'use strict';

/* Controllers */

var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('MovieListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/imdb250.json').success(function(data) {
      $scope.movies = data;
    });
  }]);

movieControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.movieId = $routeParams.movieId;
  }]);