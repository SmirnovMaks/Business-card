const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const body = document.querySelector('body');
const language = document.querySelector('.home_language')
console.log(burger);
console.log(nav);

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    language.classList.toggle('active');
    body.classList.toggle('lock');
})