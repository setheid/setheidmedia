'use strict';

const angular = require('angular');
require('angular-route');

const app = angular.module('app', ['ngRoute']);

// Services
require('./services/fullpage_init')(app);

// Controllers
require('./controllers/nav_controller')(app);
require('./controllers/code_controller')(app);
require('./controllers/audio_controller')(app);
require('./controllers/images_controller')(app);
require('./controllers/about_controller')(app);

/******** APPLICATION *********/
app.controller('AppController', function() {
  const _this = this;

});

app.directive('removeFullpage', ['FullPageInit', function(FullPageInit) {
  return function(scope, element, attrs) {
    // remove fullPage from DOM
    var fpInit = FullPageInit();
    if (fpInit.getInit()) {
      fpInit.setInit(false);
      $.fn.fullpage.destroy('all');
    }
  }
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
    templateUrl: 'views/under_construction.html',
    controller: 'AudioController'
  })
  .when('/images', {
    templateUrl: 'views/under_construction.html',
    controller: 'ImagesController'
  })
  .when('/about', {
    templateUrl: 'views/under_construction.html',
    controller: 'AboutController'
  })
}]);
