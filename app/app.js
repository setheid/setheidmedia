'use strict';

const angular = require('angular');
require('angular-route')

const app = angular.module('app', ['ngRoute']);

app.controller('AppController', function() {
  let _this = this;
});

app.controller('NavController', function() {
  const _this = this;
  let navToggle = false;

  _this.toggleNavDropdown = () => {
    navToggle = !navToggle;
    if (navToggle) {
      $('.navbar-toggle').addClass('active');
      $('.tabs').css({'left':'0', 'box-shadow':'5px 0 10px rgba(0, 0, 0, 0.5)'});
      $('body').css({'margin-left':'250px'});
    } else if (!navToggle) {
      $('.navbar-toggle').removeClass('active');
      $('.tabs').css({'left':'-250px', 'box-shadow':'none'});
      $('body').css({'margin-left':'0'});
    }
  }
});

app.controller('CodeFootController', function() {
  const _this = this;

  function highlightInit() {
    let activeTabPosition = `${($('.foot li.active').position().left / $(window).width())*100}%`;
    $('.foot ul').append('<li class="highlight"></li>');
    $('.highlight').css({'left':activeTabPosition});

    $('.foot li').on('click', function() {
      let activeTab = $(this);
      let newPosition = `${(activeTab.position().left / $(window).width())*100}%`;

      $('.foot li').removeClass('active');
      activeTab.addClass('active');
      $('.highlight').css({'left':newPosition});
    });
  }
  highlightInit();
});
