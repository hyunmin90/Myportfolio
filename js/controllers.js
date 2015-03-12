'use strict';

/* Controllers */

var movieControllers = angular.module('movieControllers', []);

var portfolioControllers = angular.module('portfolioControllers',[]);


portfolioControllers.controller('MeCtrl', ['$scope', '$http',
  function ($scope, $http) {
    
    $http.get('https://api.github.com/users/hyunmin90/repos?json').success(function(data) {
      alert(data);
      
    });
    
  }]);

movieControllers.controller('MovieListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/imdb250.json').success(function(data) {
      $scope.movies = data;
    });
      
      
      
  }]);

movieControllers.controller('MovieGalleryCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/imdb250.json').success(function(data) {
      $scope.movies = data;
    });
      
      
      
  }]);

movieControllers.controller('CoverFlowCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('data/imdb250.json').success(function(data) {
      $scope.movies = data;
    });
      
     $('.coverflow').coverflow(); 
      
  }]);



movieControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams','$http',
  function($scope, $routeParams,$http) {
    
    var values;
    $scope.movieId = $routeParams.movieId;
    $http.get('data/imdb250.json').success(function(data) {
      
      $scope.movies = data;
      values=data;
        
       // angular.forEach(values, function(value, key){
         //   if($scope.movieId===value.imdbID){
             //   $scope.test1=value;
               // $scope.nextid=value;
              //  alert($scope.nextid);
          //  }
          
          for(i=0; i<values.length; i++)
          {
            if($scope.movieId==values[i].imdbID){
              $scope.test1=values[i];
              $scope.nextid=i;
            }
          }
            
       // });
                                                                
    });
    $scope.next= function(){
      
      if($scope.nextid==249){
        $scope.test1=$scope.movies[0];
      }
      else
        $scope.test1=$scope.movies[++$scope.nextid];
      
    }
    
    
    $scope.previous= function(){
      
      if($scope.nextid==0){
        $scope.test1=$scope.movies[249];
      }
      else
        $scope.test1=$scope.movies[--$scope.nextid];
      
    }
    
   
      
   
      
  }]);



