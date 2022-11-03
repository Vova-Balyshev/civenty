/* eslint-disable no-unused-vars */
/* eslint-env browser */

import html from '../dist/index.html';
import './styles/style.scss';

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.header__nav-menu');

function mobileMenu() {
  hamburger.classList.toggle('active');
  document.body.classList.toggle('body__lock-scroll');
  navMenu.classList.toggle('active');
}

hamburger.addEventListener('click', mobileMenu);

const navLink = document.querySelectorAll('.header__nav-link');

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function lockScroll() {
  document.body.classList.toggle('lock-scroll');
}
