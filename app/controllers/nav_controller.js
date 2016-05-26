module.exports = function(app) {

app.controller('NavController', function() {
  const _this = this;
  var navToggle = false;

  _this.toggleNavDropdown = () => {
    navToggle = !navToggle;
    if (navToggle) {
      $('.navbar-toggle').addClass('active');
      $('.tabs').css({'left':'0', 'box-shadow':'5px 0 10px rgba(0, 0, 0, 0.5)'});
      $('.body').css({'margin-left':'250px'});
    } else if (!navToggle) {
      $('.navbar-toggle').removeClass('active');
      $('.tabs').css({'left':'-250px', 'box-shadow':'none'});
      $('.body').css({'margin-left':'0'});
    }
  }
});

}
