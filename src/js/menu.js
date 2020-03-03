const makeMenuTab = () => {
  const tabs = document.createElement("div");
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "tabs";
  input.id = "menu-tab";
  tabs.appendChild(input);
  const label = document.createElement("label");
  label.htmlFor = "menu-tab";
  tabs.appendChild(label);
  const div = document.createElement("div");
  tabs.appendChild(div);
  const h1 = document.createElement("h1");
  h1.innerHTML = "Menu";
  div.appendChild(h1);
  return tabs;
};

const populateMenu = () => {
  const p = document.createElement("p");
  p.innerHTML = "This is the menu tab";
  return p;
};

export { makeMenuTab, populateMenu };
