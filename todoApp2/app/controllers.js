'use strict';

angular.module("todoApp2.controller", [])
    .controller('todoController', ["$scope", function ($scope) {
        $scope.newTask = "";

        $scope.taskList = [
            { description: "Make second angular todo app", done: false },
            { description: "Make another movieDB app", done: false },
            { description: "Do another MEAN Stack app", done: false }
        ];

        $scope.addTodo = function() {
            $scope.taskList.push({description: $scope.newTask, done: false});
            $scope.newTask = "";
        };

        $scope.deleteTodo = function (index) {
            $scope.taskList.splice(index, 1);
        };
    }]);