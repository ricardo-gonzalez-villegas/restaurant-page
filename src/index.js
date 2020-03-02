// import your function
import myContact from "./js/contact.js";
import myMenu from "./js/menu.js";
import makeAboutTab from "./js/about.js";

function componentContact() {
  var element = document.createElement("div");

  element.innerHTML = myContact();
  return element;
}



function componentMenu() {
    var element = document.createElement("div");
  
    element.innerHTML = makeAboutTab();
    return element;
  }
  


document.body.appendChild(componentContact());
document.body.appendChild(makeAboutTab());
