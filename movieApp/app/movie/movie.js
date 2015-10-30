'use strict';

angular.module("movieDB.movie", ['ui.bootstrap'])
    .controller('movieCtrl', ["$scope", "$filter", "movieAPIService", "$routeParams",  function ($scope, $filter, movieAPIService, $routeParams) {
        $scope.movieId = $routeParams.id;

        movieAPIService.getMovies().success(function(data) {
            $scope.movie = $filter('filter')(data, {id: parseInt($scope.movieId)}, true)[0];
        })
    }]);