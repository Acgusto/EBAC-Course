const header = document.querySelector('.header');

document.addEventListener('DOMContentLoaded', function() {
 const buttons = document.querySelectorAll('[data-tab-button]');
 const questions = document.querySelectorAll('[data-faq-question]');
 const heroSection = document.querySelector('.hero');
 const heroHeight = heroSection.clientHeight;
 window.addEventListener('scroll', function() {
  const currentPosition = window.scrollY;
  if (currentPosition < heroHeight) {
   hideHeaderElements();
  }
  else {
   showHeaderElements();
  }
 })
 for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(button) {
   const abaAlvo = button.target.dataset.tabButton;
   const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
   hideAllTabs();
   aba.classList.add('shows__list--active');
   removeActiveButton();
   button.target.classList.add('shows__tabs__button--active');
  })
 }
 for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', openOrCloseAnswer);
 }
})

function showHeaderElements() {
 header.classList.remove('header--hidden');
}

function hideHeaderElements() {
 header.classList.add('header--hidden');
}

function openOrCloseAnswer(element) {
 const classe = 'faq__questions__item--open';
 const parentElement = element.target.parentNode;
 parentElement.classList.toggle(classe);
}

function removeActiveButton() {
 const buttons = document.querySelectorAll('[data-tab-button]');
 for (let i = 0; i < buttons.length; i++) {
  buttons[i].classList.remove('shows__tabs__button--active');
 }
}

function hideAllTabs() {
 const tabsContainer = document.querySelectorAll('[data-tab-id]')
 for (let i =0; i < tabsContainer.length; i++) {
  tabsContainer[i].classList.remove('shows__list--active');
 }
}