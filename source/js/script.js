// menu

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// modal

const orderButton = document.querySelector('.card__button');
const modalButton = document.querySelector('.modal__button');
const orderPopup = document.querySelector('.modal__order');
const modalItem = document.querySelector('.modal__item--current');


orderButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove('modal__order--close');
  orderPopup.classList.add('modal__order--open');
  modalItem.focus();
});

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.remove("modal__order--open");
  orderPopup.classList.add("modal__order--close");
});
