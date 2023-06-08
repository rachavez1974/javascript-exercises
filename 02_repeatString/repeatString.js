const repeatString = function(string, repeat) {
  let str = ""

  if (repeat >= 0) {
    for(let i = 0; i < repeat; i++){
      str += string
    }
  } else {
   return 'ERROR'
  }
  return str
};

// Do not edit below this line
module.exports = repeatString;
