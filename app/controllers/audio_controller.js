module.exports = function(app) {

app.controller('AudioController', ['FullPageInit',
function(FullPageInit) {
  const _this = this;

  // to handle the browser going back
  var fpInit = FullPageInit();
  if (fpInit.getInit() == true) {
    fpInit.setInit(false);
    $.fn.fullpage.destroy('all');
  }

}]);

}
