'use strict'

const navigation = document.querySelector('.navigation');
const navigationButton = document.querySelector('.navigation__button');

navigation.classList.remove('navigation--open');

navigationButton.addEventListener('click', ()=> {
  const isOpen = navigation.classList.contains('navigation--open') ? true : false;

  if (isOpen) {
    navigation.classList.remove('navigation--open');
  } else {
    navigation.classList.add('navigation--open');
  }
});
