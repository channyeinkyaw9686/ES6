var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

numbers.reduce(function (sum, number) {
  return sum + number;
}, 0);

// ###
var primaryColors = [{ color: 'red' }, { color: 'yellow' }, { color: 'blue' }];

primaryColors.reduce(function (previous, primaryColor) {
  previous.push(primaryColor.color);

  return previous;
}, []);

// ###
function balancedString(string) {
  return !string.split('').reduce(function (previous, char) {
    // check correct order
    if (previous < 0) {
      return previous;
    }
    if (char === '(') {
      return ++previous;
    }
    if (char === ')') {
      return --previous;
    }
    return previous;
  }, 0);
}

balancedString('((((');
