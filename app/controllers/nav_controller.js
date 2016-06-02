module.exports = function(app) {

app.controller('NavController', function() {
  const _this = this;
  var navToggle = false;

  _this.toggleNavDropdown = () => {
    navToggle = !navToggle;
    if (navToggle) {
      $('.navbar-toggle').addClass('active');
      $('.tabs, .body, .foot').addClass('nav-open');
    } else if (!navToggle) {
      $('.navbar-toggle').removeClass('active');
      $('.tabs, .body, .foot').removeClass('nav-open');
    }
  }
});

}
