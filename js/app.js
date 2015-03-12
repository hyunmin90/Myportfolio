var movieApp = angular.module('movieApp', [
  'ngRoute',
  'movieControllers',
  'movieAnimations',
]);

var portfolioApp = angular.module('portfolioApp', [
  'ngRoute',
  'portfolioControllers',
  'movieControllers',
]);


portfolioApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        reloadOnSearch: false,
        templateUrl: './partials/repos.html',
        controller: 'MeCtrl'
      }).
      otherwise({
        reloadOnSearch: false,
        templateUrl: './index.html',
        controller: 'MeCtrl',
        
        
      });
  }]);



movieApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/movies', {
        templateUrl: './partials/list.html',
        controller: 'MovieListCtrl'
      }).
      when('/movies/gallery', {
        templateUrl: './partials/gallery.html',
        controller: 'MovieGalleryCtrl'
      }).
      when('/movies/:movieId', {
        templateUrl: './partials/details.html',
        controller: 'MovieDetailCtrl'
      }).
      when('/coverflow', {
        templateUrl: './partials/coverflow.html',
        controller: 'CoverFlowCtrl'
      }).
      when('/', {
        templateUrl: './partials/list.html',
        controller: 'MovieListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);