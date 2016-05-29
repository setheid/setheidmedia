module.exports = function(app) {

app.controller('CodeController', function() {
  const _this = this;

  _this.fullPageInit = function() {
    $(document).ready(function() {
      $('#fullpage').fullpage({
        anchors:['about', 'work', 'skills', 'contact'],
        menu: '#code-nav',
        animateAnchor: false,
        responsiveWidth: 750,
        fitToSection: false,
        touchSensitivity: 15,
        scrollOverflow: false,
        scrollingSpeed: 800,
        // paddingBottom: '50px',
        onLeave: function(index, nextIndex, direction) {
          var $leavingSection, $nextSection, activeAnchor, $activeTab, activeTabPosition;

          activeAnchor = $('.code .section').eq(nextIndex-1).data('anchor');
          $activeTab = $(`li[data-menuanchor='${activeAnchor}']`);
          activeTabPosition = `${($activeTab.position().left / $(window).width())*100}%`;

          $('.highlight').css({'left':activeTabPosition});
        }
      });

      var urlArray, anchor, $activeTab, activeTabPosition;

      if (window.location.pathname == '/') {
        $activeTab = $('li[data-menuanchor="about"]');
      } else {
        urlArray = window.location.href.split('/');
        anchor = urlArray[urlArray.length-1].slice(1);
        $activeTab = $(`li[data-menuanchor='${anchor}']`);
      }

      activeTabPosition = `${($activeTab.position().left / $(window).width())*100}%`;

      $('.foot ul').append('<li class="highlight"></li>');
      $('.highlight').css({'left':activeTabPosition});

      $('.foot li').on('click', function() {
        $activeTab = $(this);
        var newPosition = `${($activeTab.position().left / $(window).width())*100}%`;

        $('.highlight').css({'left':newPosition});
      });
    });
  };
});

}
