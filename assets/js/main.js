const nav_top = document.querySelector('.nav-top');

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
        nav_top.classList.add('scroll-nav');
        return;
    }
    nav_top.classList.remove('scroll-nav');
})