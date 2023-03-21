// Tutup Navbar
const navbarNav = document.querySelector(".collapse");
const navbarToggler = document.querySelector(".navbar-toggler");
document.addEventListener("click", function (e) {
  if (!navbarToggler.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("show");
  }
});

// DarkMode
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Ikon like
function liked() {
  var element = document.querySelector(".like");
  element.classList.toggle("liked");
}

function liked2() {
  var element = document.querySelector(".like2");
  element.classList.toggle("liked");
}
function liked3() {
  var element = document.querySelector(".like3");
  element.classList.toggle("liked");
}
function liked4() {
  var element = document.querySelector(".like4");
  element.classList.toggle("liked");
}
function liked5() {
  var element = document.querySelector(".like5");
  element.classList.toggle("liked");
}
function liked6() {
  var element = document.querySelector(".like6");
  element.classList.toggle("liked");
}

// ikon share
const shareBtn = document.querySelector(".share-btn");
const shareOptions = document.querySelector(".share-options");
shareBtn.addEventListener("click", () => {
  shareOptions.classList.toggle("active");
});

const shareBtn2 = document.querySelector(".share-btn-2");
const shareOptions2 = document.querySelector(".share-options-2");
shareBtn2.addEventListener("click", () => {
  shareOptions2.classList.toggle("active");
});
const shareBtn3 = document.querySelector(".share-btn-3");
const shareOptions3 = document.querySelector(".share-options-3");
shareBtn3.addEventListener("click", () => {
  shareOptions3.classList.toggle("active");
});
const shareBtn4 = document.querySelector(".share-btn-4");
const shareOptions4 = document.querySelector(".share-options-4");
shareBtn4.addEventListener("click", () => {
  shareOptions4.classList.toggle("active");
});
const shareBtn5 = document.querySelector(".share-btn-5");
const shareOptions5 = document.querySelector(".share-options-5");
shareBtn5.addEventListener("click", () => {
  shareOptions5.classList.toggle("active");
});
const shareBtn6 = document.querySelector(".share-btn-6");
const shareOptions6 = document.querySelector(".share-options-6");
shareBtn6.addEventListener("click", () => {
  shareOptions6.classList.toggle("active");
});

// ----------------------------
