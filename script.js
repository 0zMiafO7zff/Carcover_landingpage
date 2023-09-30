window.onscroll = function() {scrollFunction()};
// 
let Navbar = document.getElementById('myNav');
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-nav-toggle');
let navBarToggleExit = document.getElementById('js-nav-toggle-exit');
let navBarToggle_icon = document.getElementById('js-nav-toggle-icon');
let navBarToggleExit_icon = document.getElementById('js-nav-toggle-exit-icon');


navBarToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    Navbar.classList.toggle('active');
    navBarToggle_icon.classList.toggle('active-none');
    navBarToggleExit.classList.toggle('active');
});

navBarToggleExit.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    Navbar.classList.toggle('active');
    navBarToggle_icon.classList.toggle('active-none');
    navBarToggleExit.classList.toggle('active');
});

function scrollFunction() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        document.getElementById("sctop").style.opacity = "1";
        document.getElementById("sctop").style.transition = "1.5s";
      } else {
        document.getElementById("sctop").style.opacity = "0";
      }
}

function scrollTopp() {
    window.scrollTo(0, 0);
}

