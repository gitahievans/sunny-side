const icon = document.querySelector(".hamburger-icon");
const menu = document.querySelector(".menu");
const tri = document.querySelector(".tri");
const tText = document.querySelector(".transform");

[icon, tri].forEach((ele) => {
  ele.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});


// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.toggle("show");
//     }
//   });
// });

// tText.forEach((el) => {
//   observer.observe(el);
// });
