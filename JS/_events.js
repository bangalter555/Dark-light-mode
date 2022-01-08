// IMPORTS
import { $d } from "./_elements.js";

c;

//EVENTS
$d.addEventListener("click", (e) => {
  let target = e.target;
  if (target.matches(".dark-light-mode") || target.matches(".dl-mode-color")) {
    $d.querySelector(".body").classList.toggle("dark");
    $d.querySelector(".header").classList.toggle("header-dark-mode");
    $d.querySelector(".dl-mode-color").classList.toggle("hidden");
    $d.querySelector(".dark-icon").classList.toggle("hidden");
  }
});
