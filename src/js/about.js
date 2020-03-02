const makeAboutTab = () => {
    const tabs = document.createElement('div');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'tabs';
    input.id = 'tabone';
    input.checked = 'checked';
    tabs.appendChild(input);
    const label = document.createElement('label');
    label.htmlFor = 'tabone';
    tabs.appendChild(label);
    const div = document.createElement('div');
    tabs.appendChild(div);
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Tab One';
    div.appendChild(h1);
    const p = document.createElement('p');
    p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    div.appendChild(p);
    return tabs;
};

export default makeAboutTab