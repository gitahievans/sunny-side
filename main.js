const icon = document.querySelector(".hamburger-icon");
const menu = document.querySelector(".menu");
const tText = document.querySelector(".transform");

icon.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
