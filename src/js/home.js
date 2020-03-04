const makeHomeTab = () => {
  const tabs = document.createElement("div");
  tabs.classList.add('tab');
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "tabs";
  input.id = "home-tab";
  input.checked = "checked";
  tabs.appendChild(input);
  const label = document.createElement("label");
  label.innerHTML = "Home";
  label.htmlFor = "home-tab";
  tabs.appendChild(label);
  const div = document.createElement("div");
  tabs.appendChild(div);
  return tabs;
};

const populateHome = () => {
  const homepage = document.createElement("div");
  homepage.id = "homepage";
  homepage.innerHTML = "LOS PRIMOS"
  homepage.classList.add('homepage');
  return homepage;
};

export { makeHomeTab, populateHome };
