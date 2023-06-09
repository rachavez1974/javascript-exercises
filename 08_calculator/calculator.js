const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numbers) {
	return numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0)
};

const multiply = function(...args) {
  let product = 1
  for(let i = 0; i < args.length; i++){
    product *= args[i]
  }
  return product
};

const power = function(number, power) {
	return number ** power
};

const factorial = function(number) {
	if (number === 0 || number === 1) {
    return 1
  } else if (number === 2){
    return 2
  } else {
    return number * factorial(number - 1)
  }
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
