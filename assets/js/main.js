const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

const darkModeEnabled = localStorage.getItem("darkModeEnabled");

if (darkModeEnabled === "true") {
  body.classList.add("darkMode");
  darkModeToggle.innerHTML = '<i class="fa fa-sun"></i>';
} else {
  body.classList.remove("darkMode");
  darkModeToggle.innerHTML = '<i class="fa fa-moon"></i>';
}

darkModeToggle.addEventListener("click", function () {
  const isDark = body.classList.contains("darkMode");

  if (isDark) {
    body.classList.remove("darkMode");
    darkModeToggle.innerHTML = '<i class="fa fa-moon"></i>';
    localStorage.setItem("darkModeEnabled", "false");
    console.log("darkMode false");
  } else {
    body.classList.add("darkMode");
    darkModeToggle.innerHTML = '<i class="fa fa-sun"></i>';
    localStorage.setItem("darkModeEnabled", "true");
    console.log("darkMode on");
  }
});
