'use strict';
/* Directives */
angular.module('hue.directives', []).
directive('hslColor', function(version) {
    return {
    	templateUrl: 'partials/colorView.html'
    };
});