const menuBar = `
<nav class="nav">
<a class="navLogo" href=""></a>
<button id="darkModeToggle">
  <i class="fa fa-sun"></i>
</button>
<div class="navButton">
  <i class="navButtonIcon fa-solid fa-bars"></i>
</div>
</nav>

<div class="menu">
<div class="menuHeader">
  <h1 class="menuHeading"></h1>
  <button class="menuButton">
    <i class="menuButtonIcon fa-solid fa-xmark"></i>
  </button>
</div>

<div class="menuBox">
  <a class="menuLinks" href="https://kitomcvn.github.io/miniweb">
    <p class="menuLink">
      <i class="menuLinkIcon fa-solid fa-house"></i>Trang Chủ
    </p></a
  >
</div>

<div class="menuBox">
  <h5 class="menuBoxHeading">Mini Game</h5>
  <a
    class="menuLinks"
    href="https://kitomcvn.github.io/miniweb/miniGame/Caro.html"
  >
    <p class="menuLink">
      <i class="menuLinkIcon fa-brands fa-microsoft"></i>Caro
    </p>
  </a>

  <a class="menuLinks" href="">
    <p class="menuLink">
      <i class="menuLinkIcon fa-solid fa-calendar-days"></i>Update Soon
    </p>
  </a>
</div>

<div class="menuBox">
  <h5 class="menuBoxHeading">Công cụ</h5>
  <a class="menuLinks" href="">
    <p class="menuLink">
      <i class="menuLinkIcon fa-solid fa-calendar-days"></i>Update Soon
    </p>
  </a>

  <a class="menuLinks" href="">
    <p class="menuLink">
      <i class="menuLinkIcon fa-solid fa-calendar-days"></i>Update Soon
    </p>
  </a>
</div>

<div class="menuBox">
  <h5 class="menuBoxHeading">Khác</h5>
  <a class="menuLinks" href="">
    <p class="menuLink">
      <i class="menuLinkIcon fa-solid fa-calendar-days"></i>Update Soon
    </p>
  </a>

  <a class="menuLinks" href="">
    <p class="menuLink">
      <i class="menuLinkIcon fa-solid fa-calendar-days"></i>Update Soon
    </p>
  </a>
</div>
</div>
`;

const menuContainer = document.querySelector("#header");

menuContainer.innerHTML = menuBar;

const menuOpen = document.querySelector(".navButton");
const menuClose = document.querySelector(".menuButton");
const header = document.querySelector(".header");

menuOpen.addEventListener("click", function () {
  header.classList.add("active");
});

menuClose.addEventListener("click", function () {
  header.classList.remove("active");
});
