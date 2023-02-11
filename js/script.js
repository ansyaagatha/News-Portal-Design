const navbarNav = document.querySelector(".collapse");

const navbarToggler = document.querySelector(".navbar-toggler");

document.addEventListener("click", function (e) {
  if (!navbarToggler.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("show");
  }
});
