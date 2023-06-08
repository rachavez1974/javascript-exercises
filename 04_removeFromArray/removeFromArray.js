const removeFromArray = function(numbers, ...elements) {
  return numbers.filter(number => !elements.includes(number))
};

// Do not edit below this line
module.exports = removeFromArray;
