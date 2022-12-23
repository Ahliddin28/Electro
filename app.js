document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  loop:true,
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  loop:true,
  pagination: {
    el: ".swiper-pagination",
  },
});


