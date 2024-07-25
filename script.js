let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('nav__link');

burger.addEventListener('click',

  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')
  })
})

let search = document.querySelector('.header__search--active');
let form = document.querySelector('.header__form-content');
let cancel = document.querySelector('.header__cancel');

search.addEventListener('click',

  function () {

    form.classList.add('header__form-content--active');

  })

cancel.addEventListener('click',

  function () {
    search.classList.remove('header__search-pasive');

    form.classList.remove('header__form-content--active');

  })


let tabsBtn = document.querySelectorAll('.about-work__btn');
let tabsContent = document.querySelectorAll('.about-work__content');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('about-work__btn--active') });
    e.currentTarget.classList.add('about-work__btn--active');

    tabsContent.forEach(function (element) { element.classList.remove('about-work__content--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('about-work__content--active');
  });
});

new Accordion('.accordion');

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 75,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});
