const makeContactTab = () => {
    const tabs = document.createElement("div");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "tabs";
    input.id = "contact-tab";
    tabs.appendChild(input);
    const label = document.createElement("label");
    label.htmlFor = "contact-tab";
    tabs.appendChild(label);
    const div = document.createElement("div");
    tabs.appendChild(div);
    const h1 = document.createElement("h1");
    h1.innerHTML = "Contact";
    div.appendChild(h1);
    return tabs;
  };
  
  const populateContact = () => {
    const p = document.createElement("p");
    p.innerHTML = "This is the contact tab";
    return p;
  };
  
  export { makeContactTab, populateContact };
  