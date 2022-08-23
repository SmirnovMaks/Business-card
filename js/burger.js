const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.header__nav');
const body = document.querySelector('body');
console.log(burger);
console.log(nav);

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('lock');
})