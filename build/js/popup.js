'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var burger = header.querySelector('.main-nav__burger');
  var menu = header.querySelector('.main-nav__bottom');

  burger.addEventListener('click', function () {
    header.classList.toggle('page-header--js-open');
    menu.classList.toggle('main-nav__bottom--js-open');
  })
})();
