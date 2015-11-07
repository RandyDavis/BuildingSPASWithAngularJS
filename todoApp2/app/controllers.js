'use strict';

angular.module("todoApp2.controller", [])
    .controller('todoController', ["$scope", "$filter", function ($scope, $filter) {
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

        $scope.pendingCount = 3;

        $scope.$watch('taskList', function () {
            $scope.pendingCount = $filter('filter')($scope.taskList, {done: false}).length;
        }, true);

        $scope.clearCompleted = function () {
            $scope.taskList = $filter('filter')($scope.taskList, {done: false});
        }
    }]);