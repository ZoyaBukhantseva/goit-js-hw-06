const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients')

const newElements = ingredient => {
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.textContent = ingredient;
  return newItem
};
const newItemsIngredients= ingredients.map(newElements)
ingredientsRef.append(...newItemsIngredients) 

