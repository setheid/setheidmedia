module.exports = function(app) {

app.controller('CodeController', ['$timeout', '$location', '$anchorScroll',
function($timeout, $location, $anchorScroll) {
  const _this = this;

  _this.fullPageInit = function() {
    $timeout(function() {
      $('#fullpage').fullpage({
        anchors:['about', 'work', 'skills', 'contact'],
        menu: '#code-nav',
        animateAnchor: false,
        lockAnchors: true,
        responsiveWidth: 750,
        fitToSection: false,
        touchSensitivity: 15,
        scrollOverflow: false,
        scrollingSpeed: 800,
        recordHistory: false,
        onLeave: function(index, nextIndex, direction) {
          var $leavingSection, $nextSection, activeAnchor, $activeTab, activeTabPosition;

          activeAnchor = $('.code .section').eq(nextIndex-1).data('anchor');
          $activeTab = $(`li[data-menuanchor='${activeAnchor}']`);
          activeTabPosition = `${($activeTab.position().left / $('.foot').width())*100}%`;

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

      activeTabPosition = `${($activeTab.position().left / $('.foot').width())*100}%`;

      $('.foot ul').append('<li class="highlight"></li>');
      $('.highlight').css({'left':activeTabPosition});

      $('.foot li').on('click', function() {
        $activeTab = $(this);
        var newPosition = `${($activeTab.position().left / $('.foot').width())*100}%`;

        $('.highlight').css({'left':newPosition});
      });
    }, 500);
  }

  _this.projects = require('./../data/projects').projects;

  _this.project = {};
  _this.modal = function(id) {
    _this.project = _this.projects[id-1];
  }

  _this.pageScroll = function(section) {
    console.log(section);
    $.fn.fullpage.moveTo(section);
  };

}]);

}
