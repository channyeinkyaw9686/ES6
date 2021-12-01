function addNumbers(a, b, c, d, e) {
  const numbers = [a, b, c, d, e];

  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5);

// ###
// ... rest operator
// numbers of argument put to a single array
function addNumbersRest(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbersRest(1, 2, 3, 4, 5);

// ###
// ... spread operator (especially replacement of concat)
// add to flat array (e.g two array join to single one array)
const defaultColors = ["red", "green"];
const userFavouriteColors = ["orange", "yellow"];

// defaultColors.concat(userFavouriteColors);
[...defaultColors, ...userFavouriteColors];

// best usecases
["blue", ...defaultColors, ...userFavouriteColors];

// usecases of rest and spread
function validateShoppingList(...itmes) {
  if (itmes.indexOf("milk") < 0) {
    return ["milk", ...itmes];
  }

  return tiems;
}

validateShoppingList("oranges", "bread", "eggs");
