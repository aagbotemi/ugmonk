window.addEventListener('scroll', function() {
    const stickyNav = document.querySelector('.navbar');
    stickyNav.classList.toggle('sticky', window.scrollY > 0);
});