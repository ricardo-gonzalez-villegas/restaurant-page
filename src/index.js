// import your function
import { makeContactTab, populateContact } from "./js/contact.js";
import { makeAboutTab, populateAbout } from "./js/about.js";
import { makeMenuTab, populateMenu } from "./js/menu.js";
import { makeHomeTab, populateHome } from "./js/home";

const content = document.querySelector("#content");
const container = document.createElement("div");
container.classList.add("container");

const navbar = document.createElement("div");
navbar.classList.add("navbar");
content.appendChild(navbar);
const navbarLeft = document.createElement("div");
navbarLeft.classList.add("navbar-mini");
navbar.appendChild(navbarLeft);
const navbarRight = document.createElement("div");
navbarRight.classList.add("navbar-mini");
navbarRight.classList.add("tabs");
navbar.appendChild(navbarRight);

const logoContainer = document.createElement("div");
logoContainer.classList.add("logo-container");
navbarLeft.appendChild(logoContainer);
const logo = document.createElement("h1");
logo.innerHTML = "LOS PRIMOS";
logo.classList.add("logo");
logoContainer.appendChild(logo);

navbarRight.appendChild(makeHomeTab());
navbarRight.appendChild(makeMenuTab());
navbarRight.appendChild(makeAboutTab());
navbarRight.appendChild(makeContactTab());

content.appendChild(populateHome());
content.appendChild(container);

const removeBackground = () => {
  document.getElementById("content").style.backgroundImage = "none";
  if (document.getElementById("homepage"))
    document.getElementById("homepage").remove();
};

const elements = document.querySelectorAll("input");
elements.forEach(element => {
  element.addEventListener("change", event => {
    switch (event.target.id) {
      case "about-tab":
        container.innerHTML = "";
        container.appendChild(populateAbout());
        document.getElementById(
          "about"
        ).style.backgroundImage = `url("/src/img/restaurant.jpg")`;
        removeBackground();
        break;

      case "menu-tab":
        container.innerHTML = "";
        removeBackground();
        container.appendChild(populateMenu());
        break;

      case "contact-tab":
        container.innerHTML = "";
        container.appendChild(populateContact());
        removeBackground();
        break;

      case "home-tab":
        container.innerHTML = "";
        document.getElementById(
          "content"
        ).style.backgroundImage = `url("/src/img/tacos.jpg")`;
        container.appendChild(populateHome());
        break;
    }
  });
});
