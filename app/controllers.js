'use strict'

angular.module('todoApp', [])
    .controller('todoController', ["$scope", function ($scope) {
        $scope.newTask = "vacuum floor";
    }])