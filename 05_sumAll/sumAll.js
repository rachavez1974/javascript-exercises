const sumAll = function(start, finish) {
  if (typeof(start) != "number" || typeof(finish) != "number") {
    return 'ERROR'
  } else if((start < 0 || finish < 0)){
    return 'ERROR'
  } else if (start > finish) {
    let holdFinish = finish
    finish = start
    start = holdFinish
  }

  let sum = 0
  for(let i = start; i <= finish; i++){
    sum = sum + i
  }
  return sum
};

// Do not edit below this line
module.exports = sumAll;
