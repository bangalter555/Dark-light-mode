//IMPORTS
import { $darkLightMode } from "./_Dark-Light-Button.js";

//Window
const $window = window;
//Documento HTML
const $documentHTML = document.documentElement;
//head HTML
const $documentHead = document.head;

//Links
const $linkToStyles = document.createElement("link");
$linkToStyles.rel = "stylesheet";
$linkToStyles.href = "/DIST/main.css";
$documentHead.insertAdjacentElement("afterbegin", $linkToStyles);

//Scripts
const $mainScript = document.querySelector("script");

//BODY
const $documentBody = document.body;
$documentBody.classList.add("body");

//BODY ELEMENTS

//HEADER
const $header = document.createElement("header");
$documentBody.insertAdjacentElement("afterbegin", $header);
//Adding classes to header
$header.classList.add("header");

//PAGE TITLE (H1)
const $pageTitle = document.createElement("h1");
$header.appendChild($pageTitle);
$pageTitle.textContent = "Dark-Light Mode";
//Adding classes to page title
$pageTitle.classList.add("page-title");

//DARK-LIGHT-MODE BUTTON
$header.insertAdjacentElement("afterend", $darkLightMode);

//EXPORTS
export { $documentHTML };
