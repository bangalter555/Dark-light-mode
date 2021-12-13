//Dark-Light Mode Button

const $darkLightMode = document.createElement("button");
$darkLightMode.classList.add("dark-light-mode", "light-icon");

const $lightModeIcon = document.createElement("div");
$lightModeIcon.innerHTML = `&#x263d;`;
$lightModeIcon.style.cssText = `position: fixed; z-index: 2`;
$lightModeIcon.classList.add("dl-mode-color");
$darkLightMode.appendChild($lightModeIcon);

const $darkModeIcon = document.createElement("div");
$darkModeIcon.innerHTML = `&#x263c;`;
$darkModeIcon.classList.add("dl-mode-color", "hidden", "dark-icon");
$darkLightMode.appendChild($darkModeIcon);

//EXPORTS
export { $darkLightMode };
