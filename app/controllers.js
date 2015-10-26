'use strict'

angular.module('todoApp', [])
    .controller('todoController', ["$scope", function ($scope) {
        $scope.newTask = "";

        $scope.taskList = [
            {description: "Buy airplane tickets", done: false},
            {description: "Make hotel reservations", done: false},
            {description: "Chill Like A Boss", done: false}
        ];

        $scope.addTodo = function () {
            $scope.taskList.push({description: $scope.newTask, done:false});
            $scope.newTask = "";
        };

        $scope.deleteTodo = function (index) {
            $scope.taskList.splice(index, 1);
        };
    }]);