import $ from 'jquery';

const header: HTMLElement | null = document.querySelector('.header');

document.addEventListener('DOMContentLoaded', function() {
 const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-tab-button]');
 const questions: NodeListOf<HTMLElement> = document.querySelectorAll('[data-faq-question]');
 const heroSection: HTMLElement | null = document.querySelector('.hero');
 const heroHeight: number = heroSection ? heroSection.clientHeight : 0;
 window.addEventListener('scroll', function() {
  const currentPosition = window.scrollY;
  if (currentPosition < heroHeight) {
   if (header) {
    hideHeaderElements(header);
   }
  }
  else {
   if (header) {
    showHeaderElements(header);
   }
  }
 })
 for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event: MouseEvent) {
   const abaAlvo: string = (event.target as HTMLElement).dataset.tabButton || '';
   const aba: HTMLElement | null = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
   hideAllTabs();
   if (aba) {
    aba.classList.add('shows__list--active');
   }
   removeActiveButton();
   (event.target as HTMLElement).classList.add('shows__tabs__button--active');
  });
 }
 for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', openOrCloseAnswer);
 }
})

function showHeaderElements(header: HTMLElement) {
 header.classList.remove('header--hidden');
}

function hideHeaderElements(header: HTMLElement) {
 header.classList.add('header--hidden');
}

function openOrCloseAnswer(element: MouseEvent) {
 const classe = 'faq__questions__item--open';
 const parentElement = element.target as HTMLElement;
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