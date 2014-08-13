'use strict';

var angular = require('angular');

// Declare app level module which depends on filters, and services
angular.module('hue', [
  'hue.filters',
  'hue.services',
  'hue.directives',
  'hue.controllers'
]);