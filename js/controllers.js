"use strict";
var poemHead = angular.module('poemHeadApp', []);

poemHead.controller('poemHeadCtrl', function ($scope, $http) {
    $http.get('data/poem.json').success(function (arr) {
        $scope.poems = arr;
    });
$scope.orderProp = 'head';    
});