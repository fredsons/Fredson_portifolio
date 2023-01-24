const toggleButton = document.querySelector("[data-collapse-toggle]");
const menu = document.getElementById("navbar-solid-bg");

toggleButton.addEventListener("click", function () {
  menu.classList.toggle("hidden");
});
