import { gsap } from "gsap";

const icon = document.querySelector(".hamburger-icon");
const menu = document.querySelector(".menu");
const tText = document.querySelector(".transform");

icon.addEventListener("click", () => {
  menu.classList.toggle("active");
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
  });
  I;
});
const hiddenElements = document.querySelectorAll(".hidden, .gallry-dktp");
hiddenElements.forEach((el) => observer.observe(el));
// window.addEventListener("load", () => {
//   let ourTarget = document.querySelectorAll(".hidden");
//   createObserver(ourTarget);
// }, false);

// const createObserver = (ourTarget) => {
//   let observer;
//   let options = {
//     root: null,
//     threshold: .5,
//     rootMargin: "0px",
//   };
//   observer = new IntersectionObserver(handleIntersect, options);
//   ourTarget.forEach(el => observer.observe(el));
// };

// let handleIntersect = (entries, observer) => {
//   entries.forEach((entry) => {
//     if(entry.isIntersecting){
//       entry.target.classList.add("animate")
//       // gsap.from(".hidden", { duration: 1, xPercent:0 });
//     }
//   });
// };
