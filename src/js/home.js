const makeHomeTab = () => {
    const tabs = document.createElement("div");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "tabs";
    input.id = "home-tab";
    input.checked = "checked";
    tabs.appendChild(input);
    const label = document.createElement("label");
    label.htmlFor = "home-tab";
    tabs.appendChild(label);
    const div = document.createElement("div");
    tabs.appendChild(div);
    const h1 = document.createElement("h1");
    h1.innerHTML = "Home";
    div.appendChild(h1);
    return tabs;
  };
  
  const populateHome = () => {
    const p = document.createElement("p");
    p.innerHTML = "This is the home tab";
    return p;
  };
  
  export { makeHomeTab, populateHome };
  