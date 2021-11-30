const colors = ['red', 'blue', 'green'];

// Using classic for loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Using forEach
colors.forEach(function (color) {
  console.log(color);
});

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
let sum = 0;

// Seperate iterator function
function adder(number) {
  sum += number;
}

// Loop over the array
numbers.forEach(adder);

// Print
console.log(sum);
