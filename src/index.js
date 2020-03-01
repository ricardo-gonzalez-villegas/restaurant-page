import myContact from "./js/contact.js";
import myMenu from "./js/menu.js";
import myAbout from "./js/about.js";


function componentContact() {
  var element = document.createElement("div");

  element.innerHTML = myContact();
  return element;
}

function componentMenu() {
  var element = document.createElement("div");

  element.innerHTML = myMenu();
  return element;
}

function componentAbout() {
  var element = document.createElement("div");

  element.innerHTML = myAbout();
  return element;
}

document.body.appendChild(componentContact());
document.body.appendChild(componentMenu());
document.body.appendChild(componentAbout());
