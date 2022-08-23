const headerNav = document.querySelector('.header__nav');
const links = headerNav.querySelectorAll('.header__link');
console.log(links);
headerNav.addEventListener('click', (e) => {
    if (e.target.closest('.header__link')) {
        e.preventDefault()
        const linkActive = e.target.closest('.header__link')
        links.forEach((link) => {
            if (link === linkActive) {
                link.classList.add('active__menu');
                const id = e.target.getAttribute('href');

                document.querySelector(id).scrollIntoView({
                    behavior: "smooth",
                    // block: 'center'
                });
            } else {
                link.classList.remove('active__menu');
            }


        })

    }
})