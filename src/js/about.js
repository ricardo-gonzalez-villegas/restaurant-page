const makeAboutTab = () => {
  const tabs = document.createElement("div");
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "tabs";
  input.id = "about-tab";
  tabs.appendChild(input);
  const label = document.createElement("label");
  label.htmlFor = "about-tab";
  tabs.appendChild(label);
  const div = document.createElement("div");
  tabs.appendChild(div);
  const h1 = document.createElement("h1");
  h1.innerHTML = "About";
  div.appendChild(h1);
  return tabs;
};

const populateAbout = () => {
  const p = document.createElement("p");
  p.innerHTML = "This is the about tab";
  return p;
};

export { makeAboutTab, populateAbout };
