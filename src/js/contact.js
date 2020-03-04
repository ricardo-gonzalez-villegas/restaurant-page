const makeContactTab = () => {
  const tabs = document.createElement("div");
  tabs.classList.add('tab');
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "tabs";
  input.id = "contact-tab";
  tabs.appendChild(input);
  const label = document.createElement("label");
  label.innerHTML = "Contact";
  label.htmlFor = "contact-tab";
  tabs.appendChild(label);
  const div = document.createElement("div");
  tabs.appendChild(div);
  return tabs;
};

const populateContact = () => {
  const div = document.createElement("div");
  div.classList.add('contact');
  const contactTop = document.createElement('div');
  div.appendChild(contactTop);
  contactTop.classList.add('contact-top');
  const contactBottom = document.createElement('div');
  div.appendChild(contactBottom);
  contactBottom.classList.add('contact-bottom');
  const right = document.createElement('div');
  right.classList.add('sides');
  contactBottom.appendChild(right);
  const hoursTitle = document.createElement('div');
  hoursTitle.classList.add('contact-title');
  right.appendChild(hoursTitle);
  hoursTitle.innerHTML = "Opening Hours"
  const hoursText = document.createElement('div');
  right.appendChild(hoursText);
  hoursText.classList.add('contact-text');
  hoursText.innerHTML = "Monday - Friday: 08:00 - 22:00</br>Saturday: 10:00 - 23:00</br>Sunday: 10:00 - 16:00";
  const left  = document.createElement('div');
  left.classList.add('sides');
  contactBottom.appendChild(left);
  const contactTitle = document.createElement('div');
  contactTitle.classList.add('contact-title');
  left.appendChild(contactTitle);
  contactTitle.innerHTML = "Contact"
  const contactText = document.createElement('div');
  left.appendChild(contactText);
  contactText.classList.add('contact-text');
  contactText.innerHTML = "123 Market Street</br>Indianapolis, IN 46214</br>123 457 6890"
  return div;
};

export { makeContactTab, populateContact };
