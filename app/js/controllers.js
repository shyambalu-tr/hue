'use strict';

/* Controllers */

angular.module('hue.controllers', [])

.controller('hslGenController', ['$scope', function($scope) {
    $scope.hex;

    $scope.hsl = function () {
        var rgb = colorconv.parse($scope.hex);
        return colorconv.RGB2HSL(rgb);

    };
}])