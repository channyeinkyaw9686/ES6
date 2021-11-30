const numbers = [1, 2, 3];
let doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);
console.log(doubleNumbers);

const cars = [
  { model: 'Buick', price: 'cheap' },
  { model: 'Camero', price: 'expensive' },
];

const prices = cars.map(function (car) {
  return car.price;
});

console.log(prices);
