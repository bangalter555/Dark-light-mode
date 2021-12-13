// IMPORTS
import { $documentHTML } from "./_elements.js";
import { $darkLightMode } from "./_Dark-Light-Button.js";

//EVENTS
$documentHTML.addEventListener("click", (e) => {
  let target = e.target;
  if (target.matches(".dark-light-mode") || target.matches(".dl-mode-color")) {
    $documentHTML.querySelector(".body").classList.toggle("dark");
    $documentHTML.querySelector(".header").classList.toggle("header-dark-mode");
    $documentHTML.querySelector(".dl-mode-color").classList.toggle("hidden");
    $documentHTML.querySelector(".dark-icon").classList.toggle("hidden");
  }
});
