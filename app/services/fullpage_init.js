module.exports = function(app) {
  app.factory('FullPageInit', function() {
    var initialized = false;

    var fpInit = function() {
      this.isInit = initialized;
    }

    fpInit.prototype.setInit = function() {
      initialized = !initialized;
      this.isInit = initialized;
    }

    return function() {
      return new fpInit();
    };
  });
}
