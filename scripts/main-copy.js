var helloWorld = function() {
  console.log('Hello World');
};

helloWorld();





  var hamburgerBtn = document.querySelector('.hamburger');
  var headerNav = document.querySelector('.header-nav');


  hamburgerBtn.addEventListener('click', function() {
      hamburgerBtn.classList.toggle('is-active');
      headerNav.classList.toggle('header-nav--is-visible');
  })





var backToTop = document.querySelector('.back-to-top');
var offset = document.querySelector('.services').offsetTop;
var offsetNav = document.querySelector('.site-header').offsetTop;

window.addEventListener('scroll', function() {
  console.log('window.scrollY', window.scrollY);
  console.log('offsetNav', offsetNav);
  if (window.scrollY > offset) {
    backToTop.classList.add('back-to-top--is-visible');
  } else {
    backToTop.classList.remove('back-to-top--is-visible');
  }


  if (window.scrollY > offsetNav) {
    document.body.classList.add('navigation-is-fixed');
  } else {
    document.body.classList.remove('navigation-is-fixed');
  }
})


backToTop.addEventListener('click', function(event) {
  event.preventDefault();
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
})



var links = document.querySelectorAll('.header-nav a');
var servicesSection = document.querySelector('.services');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event){
    event.preventDefault();
    console.log(event.target.hash);
    var sectionID = event.target.hash;

    var section = document.querySelector(sectionID); // #name section


    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  })
}

// link.addEventListener('click', function(event) {
//   event.preventDefault();
//   servicesSection.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start'
//   })
// })

