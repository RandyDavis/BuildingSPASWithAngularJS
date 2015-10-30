'use strict';

angular.module("movieDB.genre", ['ui.bootstrap'])
    .controller("genreCtrl", ["$scope", "movieAPIService", "$routeParams", "$filter", function ($scope, $filter, $routeParams, movieAPIService) {

        $scope.currentPage = 1;
        $scope.pageSize = 12;
        $scope.genreName = $routeParams.genreName;

        movieAPIService.getMovies().success(function (data) {
            $scope.movieList = $filter('filter')(data, function(movie) {
                return $filter('filter')(movie.genres, {name: $scope.genreName}).length;
            });
        });

        movieAPIService.getGenres().success(function (data) {
            $scope.genreList = data;
        })
    }]);
