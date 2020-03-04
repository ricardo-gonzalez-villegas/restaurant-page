const makeAboutTab = () => {
  const tabs = document.createElement("div");
  tabs.classList.add("tab");
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "tabs";
  input.id = "about-tab";
  tabs.appendChild(input);
  const label = document.createElement("label");
  label.innerHTML = "About";
  label.htmlFor = "about-tab";
  tabs.appendChild(label);
  const div = document.createElement("div");
  tabs.appendChild(div);
  return tabs;
};

const populateAbout = () => {
  const div = document.createElement("div");
  div.classList.add("about");
  div.id = "about";
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");
  const aboutTitle = document.createElement("div");
  aboutTitle.classList.add("about-title");
  aboutContainer.appendChild(aboutTitle);
  aboutTitle.innerHTML = "About Us";
  const aboutText = document.createElement("div");
  aboutText.classList.add("about-text");
  aboutContainer.appendChild(aboutText);
  aboutText.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at urna sed nulla suscipit commodo vel sed est. Vestibulum pharetra tortor a arcu blandit, eget fringilla arcu tempus. Aliquam porttitor luctus mi, vel rutrum ex semper at.";
  div.appendChild(aboutContainer);
  return div;
};

export { makeAboutTab, populateAbout };
