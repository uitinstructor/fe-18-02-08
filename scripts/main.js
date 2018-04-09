

$(function() {
  var $hamburgerButtn = $('.hamburger');
  var $siteNav = $('.site-nav');

  $hamburgerButtn.click(toggleMenu)

  function toggleMenu() {
    $hamburgerButtn.toggleClass('is-active');
    $siteNav.toggleClass('site-nav--visible');
  }


  var offset = 600;
  var $backToTop = $('.back-to-top');
  var $siteBody = $('body');
  var documentHeight = $siteBody.height();
  var halfDocumentHeight = documentHeight / 2;

  var headerOffsetTop = $('.site-header').offset().top;

  $backToTop.on('click', function (event) {
    event.preventDefault()

    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  });

  $(window).on('scroll', function (event) {

    if (window.scrollY > halfDocumentHeight) {
      $backToTop.addClass('back-to-top--visible');
    } else {
      $backToTop.removeClass('back-to-top--visible');
    }

    if (window.scrollY > headerOffsetTop) {
      $siteBody.addClass('navigaion-fixed');
    } else {
      $siteBody.removeClass('navigaion-fixed');
    }
  });


  var $navLinks = $('.site-nav a');


  $navLinks.on('click', function(event) {
    event.preventDefault();
    var sectionId = event.target.hash;
    var $sectionElement = $(sectionId);
    toggleMenu();

    $sectionElement[0].scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
})