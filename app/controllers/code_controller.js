module.exports = function(app) {

app.controller('CodeController', ['$location', '$anchorScroll',
function($location, $anchorScroll) {
  const _this = this;
  _this.loaded = false;


  _this.highlightInit = function() {
    var anchor, $activeTab, activeTabPosition;

    $activeTab = $('li.active');

    activeTabPosition = `${($activeTab.position().left / $('.foot').width())*100}%`;

    $('.foot ul').append('<li class="highlight"></li>');
    $('.highlight').css({'left':activeTabPosition});

    $('.foot li').on('click', function() {
      $activeTab = $(this);
      var newPosition = `${($activeTab.position().left / $('.foot').width())*100}%`;

      $('.highlight').css({'left':newPosition});
    });
  }

  _this.projects = require('./../data/projects').projects;

  _this.project = {};
  _this.modal = function(id) {
    _this.project = _this.projects[id-1];
  }

  _this.pageScroll = function(section) {
    $.fn.fullpage.moveTo(section);
  };

}]);

app.directive('loadSlides', ['FullPageInit', function(FullPageInit) {
  var fpInit = FullPageInit();

  return function(scope, element, attrs) {
    if (scope.$last) {
      if (fpInit.getInit() == false) {
        fpInit.setInit(true);
        fpInitialize();
      }
    }
  }
  
}]);

}

function fpInitialize() {
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
}
