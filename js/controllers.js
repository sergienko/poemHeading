"use strict";
var poemHeadApp = angular.module('poemHeadApp', ['firebase']);
poemHeadApp.controller('poemHeadCtrl', ['$scope', '$firebase',
    function($scope, $firebase) {
        var ref = new Firebase("https://fiery-heat-2625.firebaseio.com");
        $scope.poems = $firebase(ref).$asArray();
        $scope.orderProp = 'head';
        $scope.AddHead = function (e) {
            $scope.poems.$add({head: $scope.heading, snippet: ""});
            $scope.heading = '';
        };
    }
    ]);
