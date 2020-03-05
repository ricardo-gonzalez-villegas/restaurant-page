const makeMenuTab = () => {
  const tabs = document.createElement("div");
  tabs.classList.add("tab");
  const input = document.createElement("input");
  input.type = "radio";
  input.name = "tabs";
  input.id = "menu-tab";
  tabs.appendChild(input);
  const label = document.createElement("label");
  label.innerHTML = "Menu";
  label.htmlFor = "menu-tab";
  tabs.appendChild(label);
  const div = document.createElement("div");
  tabs.appendChild(div);
  return tabs;
};

const starters = [
  {
    name: "Nachos",
    description: "Aliquam porttitor luctus mi.",
    price: "$6"
  },
  {
    name: "Chips & Salsa",
    description: "Aliquam porttitor luctus mi.",
    price: "$5"
  },
  {
    name: "Chips & Guacamole",
    description: "Aliquam porttitor luctus mi.",
    price: "$7"
  },
  {
    name: "Salad",
    description: "Aliquam porttitor luctus mi.",
    price: "$4"
  }
];

const dishes = [
  {
    name: "Tacos",
    description: "Aliquam porttitor luctus mi.",
    price: "$8"
  },
  {
    name: "Burrito",
    description: "Aliquam porttitor luctus mi.",
    price: "$10"
  },
  {
    name: "Quesadilla",
    description: "Aliquam porttitor luctus mi.",
    price: "$7"
  },
  {
    name: "Enchiladas",
    description: "Aliquam porttitor luctus mi.",
    price: "$8"
  },
  {
    name: "Posole",
    description: "Aliquam porttitor luctus mi.",
    price: "$10"
  },
  {
    name: "Tostadas",
    description: "Aliquam porttitor luctus mi.",
    price: "$7"
  },
  {
    name: "Chilaquiles",
    description: "Aliquam porttitor luctus mi.",
    price: "$6"
  },
  {
    name: "Mole",
    description: "Aliquam porttitor luctus mi.",
    price: "$6"
  },
  {
    name: "Birria",
    description: "Aliquam porttitor luctus mi.",
    price: "$10"
  },
  {
    name: "Chile Relleno",
    description: "Aliquam porttitor luctus mi.",
    price: "$7"
  },
  {
    name: "Huevos Rancheros",
    description: "Aliquam porttitor luctus mi.",
    price: "$6"
  },
  {
    name: "Torta",
    description: "Aliquam porttitor luctus mi.",
    price: "$7"
  }
];

const desserts = [
  {
    name: "Flan",
    description: "Aliquam porttitor luctus mi.",
    price: "$5"
  },
  {
    name: "Rice Pudding",
    description: "Aliquam porttitor luctus mi.",
    price: "$5"
  },
  {
    name: "Pastel de tres leches",
    description: "Aliquam porttitor luctus mi.",
    price: "$4"
  },
  {
    name: "Churro",
    description: "Aliquam porttitor luctus mi.",
    price: "$3"
  }
];

const drinks = [
  {
    name: "Corona",
    description: "Aliquam porttitor luctus mi.",
    price: "$3"
  },
  {
    name: "Tecate",
    description: "Aliquam porttitor luctus mi.",
    price: "$3"
  },
  {
    name: "Modelo",
    description: "Aliquam porttitor luctus mi.",
    price: "$3"
  },
  {
    name: "Margarita",
    description: "Aliquam porttitor luctus mi",
    price: "$6"
  },
  {
    name: "Horchata",
    description: "Aliquam porttitor luctus mi.",
    price: "$3"
  },
  {
    name: "Tamarind Water",
    description: "Aliquam porttitor luctus mi.",
    price: "$2"
  },
  {
    name: "Hibiscus Water",
    description: "Aliquam porttitor luctus mi.",
    price: "$2"
  },
  {
    name: "Lemonade",
    description: "Aliquam porttitor luctus mi",
    price: "$3"
  }
];

const populateMenu = () => {
  const menu = document.createElement("div");
  const startersDiv = document.createElement("div");
  startersDiv.classList.add("section");
  menu.appendChild(startersDiv);
  const starterTitle = document.createElement("div");
  starterTitle.classList.add("menu-title");
  starterTitle.innerHTML = "Starters";
  startersDiv.appendChild(starterTitle);
  const starterText = document.createElement("div");
  starterText.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  starterText.classList.add("menu-text");
  startersDiv.appendChild(starterText);
  const startersContainter = document.createElement("div");
  startersContainter.classList.add("menu-items");
  startersDiv.appendChild(startersContainter);
  starters.forEach(starter => {
    const starterContainter = document.createElement("div");
    starterContainter.classList.add("menu-item");
    const name = document.createElement("div");
    name.innerHTML = `${starter.name}`;
    name.classList.add("name");
    starterContainter.appendChild(name);
    const description = document.createElement("div");
    description.innerHTML = `${starter.description}`;
    description.classList.add("description");
    starterContainter.appendChild(description);
    const price = document.createElement("div");
    price.innerHTML = `${starter.price}`;
    price.classList.add("price");
    starterContainter.appendChild(price);
    startersContainter.appendChild(starterContainter);
  });
  const dishesDiv = document.createElement("div");
  dishesDiv.classList.add("section");
  menu.appendChild(dishesDiv);
  const dishTitle = document.createElement("div");
  dishTitle.classList.add("menu-title");
  dishTitle.innerHTML = "Dishes";
  dishesDiv.appendChild(dishTitle);
  const dishText = document.createElement("div");
  dishText.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  dishText.classList.add("menu-text");
  dishesDiv.appendChild(dishText);
  const dishesContainter = document.createElement("div");
  dishesContainter.classList.add("menu-items");
  dishesDiv.appendChild(dishesContainter);
  dishes.forEach(dish => {
    const dishContainter = document.createElement("div");
    dishContainter.classList.add("menu-item");
    const name = document.createElement("div");
    name.innerHTML = `${dish.name}`;
    name.classList.add("name");
    dishContainter.appendChild(name);
    const description = document.createElement("div");
    description.innerHTML = `${dish.description}`;
    description.classList.add("description");
    dishContainter.appendChild(description);
    const price = document.createElement("div");
    price.innerHTML = `${dish.price}`;
    price.classList.add("price");
    dishContainter.appendChild(price);
    dishesContainter.appendChild(dishContainter);
  });
  const dessertsDiv = document.createElement("div");
  dessertsDiv.classList.add("section");
  menu.appendChild(dessertsDiv);
  const dessertTitle = document.createElement("div");
  dessertTitle.classList.add("menu-title");
  dessertTitle.innerHTML = "Desserts";
  dessertsDiv.appendChild(dessertTitle);
  const dessertText = document.createElement("div");
  dessertText.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  dessertText.classList.add("menu-text");
  dessertsDiv.appendChild(dessertText);
  const dessertsContainter = document.createElement("div");
  dessertsContainter.classList.add("menu-items");
  dessertsDiv.appendChild(dessertsContainter);
  desserts.forEach(dessert => {
    const dessertContainter = document.createElement("div");
    dessertContainter.classList.add("menu-item");
    const name = document.createElement("div");
    name.innerHTML = `${dessert.name}`;
    name.classList.add("name");
    dessertContainter.appendChild(name);
    const description = document.createElement("div");
    description.innerHTML = `${dessert.description}`;
    description.classList.add("description");
    dessertContainter.appendChild(description);
    const price = document.createElement("div");
    price.innerHTML = `${dessert.price}`;
    price.classList.add("price");
    dessertContainter.appendChild(price);
    dessertsContainter.appendChild(dessertContainter);
  });
  const drinksDiv = document.createElement("div");
  drinksDiv.classList.add("section");
  drinksDiv.classList.add("drinks");
  menu.appendChild(drinksDiv);
  const drinkTitle = document.createElement("div");
  drinkTitle.classList.add("menu-title");
  drinkTitle.innerHTML = "Drinks";
  drinksDiv.appendChild(drinkTitle);
  const drinkText = document.createElement("div");
  drinkText.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  drinkText.classList.add("menu-text");
  drinksDiv.appendChild(drinkText);
  const drinksContainter = document.createElement("div");
  drinksContainter.classList.add("menu-items");
  drinksDiv.appendChild(drinksContainter);
  drinks.forEach(drink => {
    const drinkContainter = document.createElement("div");
    drinkContainter.classList.add("menu-item");
    const name = document.createElement("div");
    name.innerHTML = `${drink.name}`;
    name.classList.add("name");
    drinkContainter.appendChild(name);
    const description = document.createElement("div");
    description.innerHTML = `${drink.description}`;
    description.classList.add("description");
    drinkContainter.appendChild(description);
    const price = document.createElement("div");
    price.innerHTML = `${drink.price}`;
    price.classList.add("price");
    drinkContainter.appendChild(price);
    drinksContainter.appendChild(drinkContainter);
  });
  return menu;
};

export { makeMenuTab, populateMenu };
