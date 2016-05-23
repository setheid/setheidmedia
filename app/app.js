'use strict';

const angular = require('angular');
require('angular-route');

const app = angular.module('app', ['ngRoute']);

app.controller('AppController', function() {
  const _this = this;
});

app.controller('CodeController', function() {
  const _this = this;

  _this.fullPageInit = function() {
    $(document).ready(function() {
      $('#fullpage').fullpage({
        anchors:['about', 'work', 'skills', 'contact'],
        menu: '#code-nav',
        touchSensitivity: 15,
        scrollOverflow: true,
        paddingBottom: '50px',
        afterLoad: function(anchorLink){
          codeFooterInit(anchorLink);
        },
        onLeave: function(index, nextIndex, direction){
          let $leavingSection, $nextSection, activeAnchor, $activeTab, activeTabPosition;

          $leavingSection = $(this);

          if (direction == 'down') {
            $nextSection = $leavingSection.next();
          } else if (direction == 'up') {
            $nextSection = $leavingSection.prev();
          }

          activeAnchor = $nextSection.data('anchor');
          $activeTab = $(`li[data-menuanchor='${activeAnchor}'`);
          activeTabPosition = `${($activeTab.position().left / $(window).width())*100}%`;

          $('.highlight').css({'left':activeTabPosition});
        }
      });
    });
  };
});

app.controller('NavController', function() {
  const _this = this;
  let navToggle = false;

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

function codeFooterInit(anchor) {
  let $activeTab, activeTabPosition;
  $activeTab = $(`li[data-menuanchor='${anchor}'`);
  activeTabPosition = `${($activeTab.position().left / $(window).width())*100}%`;

  $('.foot ul').append('<li class="highlight"></li>');
  $('.highlight').css({'left':activeTabPosition});

  $('.foot li').on('click', function() {
    $activeTab = $(this);
    let newPosition = `${($activeTab.position().left / $(window).width())*100}%`;

    $('.highlight').css({'left':newPosition});
  });
}

app.controller('CodeFootController', function() {
  const _this = this;

  _this.highlightInit = function() {
    $(document).ready(function() {
      let $activeTab, currUrl, activeAnchor, activeTabPosition;

      currUrl = (window.location.href).split('/');
      activeAnchor = currUrl[currUrl.length-1].slice(1);
      $activeTab = $(`li[data-menuanchor='${activeAnchor}'`);
      activeTabPosition = `${($activeTab.position().left / $(window).width())*100}%`;

      $('.foot ul').append('<li class="highlight"></li>');
      $('.highlight').css({'left':activeTabPosition});

      $('.foot li').on('click', function() {
        $activeTab = $(this);
        let newPosition = `${($activeTab.position().left / $(window).width())*100}%`;

        // $('.foot li').removeClass('active');
        // activeTab.addClass('active');
        $('.highlight').css({'left':newPosition});
      });

      $(window).scroll(function() {
        // let activeTab = $('.foot li.active');
        // let newPosition = `${(activeTab.position().left / $(window).width())*100}%`;
        //
        // $('.highlight').css({'left':newPosition});
        console.log('page scroll');
      });

    });
  }
});
