// const

const fibonacci = function(number) {
  let fibonacciNumbers = []

  if(number < 0){
    return 'OOPS'
  }else {
    number = parseInt(number)
  }

  for(let i = 0; i < number; i++){
    if(i === 0 || i === 1){
      fibonacciNumbers.push(1)
    }else{
      fibonacciNumbers.push(fibonacciNumbers[i-1] + fibonacciNumbers[i-2])
    }
  }
  return fibonacciNumbers[number - 1]
};

// Do not edit below this line
module.exports = fibonacci;
