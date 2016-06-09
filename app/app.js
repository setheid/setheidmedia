'use strict';

const angular = require('angular');
require('angular-route');

const app = angular.module('app', ['ngRoute']);
  // Services
require('./services/fullpage_init')(app);
  // Controllers
require('./controllers/nav_controller')(app);
require('./controllers/code_controller')(app);

/******** APPLICATION *********/
app.controller('AppController', ['FullPageInit', function(FullPageInit) {
  const _this = this;
  var fpInit = FullPageInit();
  _this.removeFullPage = function() {
    fpInit.setInit();
    $.fn.fullpage.destroy('all');
  };
}]);

app.directive('projects', function() {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/project.html'
  }
});

app.config(['$routeProvider', function(router) {
  router
  .when('/', {
    templateUrl: 'views/code.html'
  })
  .when('/audio', {
    templateUrl: 'views/under_construction.html'
  })
  .when('/images', {
    templateUrl: 'views/under_construction.html'
  })
  .when('/about', {
    templateUrl: 'views/under_construction.html'
  })
}]);
