var helloWorld = function() {
  console.log('Hello World');
};

helloWorld();


var hamburgerButtn = document.querySelector('.hamburger');
var siteNav = document.querySelector('.site-nav');



function toggleMenu() {
  hamburgerButtn.classList.toggle('is-active');
  siteNav.classList.toggle('site-nav--visible');
}

hamburgerButtn.addEventListener('click', function() {

  var isActive = hamburgerButtn.classList.contains('is-active');
/*
  if (isActive) {
    hamburgerButtn.classList.remove('is-active');
    siteNav.classList.remove('site-nav--visible');
  } else {
    hamburgerButtn.classList.add('is-active');
    siteNav.classList.add('site-nav--visible');
  } */

  toggleMenu();

});


var backToTop = document.querySelector('.back-to-top');

backToTop.addEventListener('click', function(event) {
  event.preventDefault()

  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
});


var offset = 600;

var siteBody = document.body
var documentHeight = siteBody.offsetHeight
var halfDocumentHeight = documentHeight / 2;

var headerOffsetTop = document.querySelector('.site-header').offsetTop;


window.addEventListener('scroll', function(event) {

  if (window.scrollY > halfDocumentHeight) {
    backToTop.classList.add('back-to-top--visible');
  } else {
    backToTop.classList.remove('back-to-top--visible');
  }

  if (window.scrollY > headerOffsetTop) {
    siteBody.classList.add('navigaion-fixed');
  } else {
    siteBody.classList.remove('navigaion-fixed');
  }



});





// var menuLink1 = document.querySelector('.site-nav li:nth-child(1) a');

// menuLink1.addEventListener('click', function (event) {
//   event.preventDefault()

//   var servicesSection = document.querySelector('.services');


//   servicesSection.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start'
//   });


// });


var navLinks = document.querySelectorAll('.site-nav a');

for (var index = 0; index < navLinks.length; index++) {

  navLinks[index].addEventListener('click', function(event) {
    event.preventDefault();
    var sectionId = event.target.hash;
    var sectionElement = document.querySelector(sectionId);
    toggleMenu();
    sectionElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })

}