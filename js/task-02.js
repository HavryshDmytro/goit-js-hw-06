const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createList = document.querySelector('#ingredients');
const elements = [];

for (let i = 0; i < ingredients.length; i += 1) { 
  const ingredient = ingredients[i];

  const listEL = document.createElement('li');
  listEL.classList.add("item");
  listEL.textContent = ingredient;
  elements.push(listEL);
}
createList.append(...elements);
