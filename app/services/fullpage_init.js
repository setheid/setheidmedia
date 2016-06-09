module.exports = function(app) {
  app.factory('FullPageInit', function() {
    var initialized = false;

    var fpInit = function() {};

    fpInit.prototype.setInit = function(bool) {
      initialized = bool;
    }

    fpInit.prototype.getInit = function() {
      return initialized;
    }

    return function() {
      return new fpInit();
    };
  });
}
