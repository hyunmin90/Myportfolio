var movieApp = angular.module('movieApp', [
  'ngRoute',
  'movieControllers',
  'movieAnimations',
]);

movieApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: 'partials/list.html',
        controller: 'MovieListCtrl'
      }).
      when('/movies/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'MovieGalleryCtrl'
      }).
      when('/movies/:movieId', {
        templateUrl: 'partials/details.html',
        controller: 'MovieDetailCtrl'
      }).
      when('/coverflow', {
        templateUrl: 'partials/coverflow.html',
        controller: 'CoverFlowCtrl'
      }).
      otherwise({
        redirectTo: '/movies'
      });
  }]);