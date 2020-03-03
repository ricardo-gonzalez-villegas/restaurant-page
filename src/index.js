// import your function
import { makeContactTab, populateContact } from "./js/contact.js";
import { makeAboutTab, populateAbout } from "./js/about.js";
import { makeMenuTab, populateMenu } from "./js/menu.js";
import { makeHomeTab, populateHome } from "./js/home";

const content = document.querySelector("#content");
const container = document.createElement("div");
content.appendChild(makeHomeTab());
container.appendChild(populateHome());

content.appendChild(makeMenuTab());
content.appendChild(makeAboutTab());
content.appendChild(makeContactTab());
content.appendChild(container);

const elements = document.querySelectorAll("input");
elements.forEach(element => {
  element.addEventListener("change", event => {
    switch (event.target.id) {
      case "about-tab":
        container.innerHTML = "";
        container.appendChild(populateAbout());
        break;

      case "menu-tab":
        container.innerHTML = "";
        container.appendChild(populateMenu());

        break;

      case "contact-tab":
        container.innerHTML = "";
        container.appendChild(populateContact());
        break;

      case "home-tab":
        container.innerHTML = "";
        container.appendChild(populateHome());
        break;
    }
  });
});
