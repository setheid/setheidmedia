'use strict';

const angular = require('angular');
require('angular-route');

const app = angular.module('app', ['ngRoute']);
/******** Controllers *********/
require('./controllers/nav_controller')(app);
require('./controllers/code_controller')(app);

app.controller('AppController', function() {
  const _this = this;
});
