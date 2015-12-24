(function($){
  "use strict";

  /**
   * Toggle class .active on element
   */
  var toggleActive = function(self, e) {
    e.preventDefault();
    if (self.hasClass("active") === true) {
      self.removeClass("active");
    }
    else {
      self.addClass("active");
    }
  };

  /**
   * Animated scroll to the target element,
   * get target ID from a.href
   */
  var scrolltoElement = function(e) {
    e.preventDefault();
    var self = $(this),
        correction = e.data ? e.data.correction ? e.data.correction : 0 : 0;
    $('html, body').animate({'scrollTop': $(self.attr('href')).offset().top - correction }, 400);
  };

  /**
   * SlideToggle site bio
   */
  var openBio = function(e) {
    var self = $(this);
    toggleActive(self, e);
    $('body').toggleClass('bio-open');
  };

  var closeBio = function(e) {
    toggleActive($('.site-bio-switch'), e);
    $('body').removeClass('bio-open');
  };

  /**
   * SlideToggle site menu
   */
  var toggleMenu = function(e) {
    var self = $(this);
    toggleActive(self, e);
    $('.site-menu').toggleClass('show');
  };

  /**
   *  Toggle table of contents
   */
  var toggleTOC = function (e) {
    var self = $(this);
    $('.article-toc').toggleClass('show');
    toggleActive(self, e);
  };

  /**
   * Events registration
   */
  $('.site-bio-switch').on('click', openBio);
  $('.site-wrapper .overlay').on('click', closeBio);
  $('.site-nav-switch').on('click', toggleMenu);
  $('.toc-switch').on('click', toggleTOC);
  $('.window-nav, .go-comment').on('click', scrolltoElement);
  $('.article-toc a').on('click', {correction: 45}, scrolltoElement);

  /**
   * Onload jobs
   */
  setTimeout(function() {
    $('#loading-bar-wrapper').fadeOut(500);
  }, 300);
  $(window).scroll(function() {
    var article_header = $(".article-navigation-header"),
        article_header_navigation = $(".article-navigation-header .navigation");
    if (article_header.length > 0) {
      if (window.scrollY > article_header.offset().top) {
        article_header_navigation.addClass('sticky');
      }
      else {
        article_header_navigation.removeClass('sticky');
      }
    }

  });

})(jQuery);
