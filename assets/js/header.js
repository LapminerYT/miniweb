var menuOpen = document.querySelector(".navButton");
var menuClose = document.querySelector(".menuButton");
var header = document.querySelector(".header");

menuOpen.addEventListener("click", function () {
  header.classList.add("active");
});

menuClose.addEventListener("click", function () {
  header.classList.remove("active");
});
