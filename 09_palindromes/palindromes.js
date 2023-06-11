const standarizeString = (string) => {
  return string.match(/[A-Z|a-z|0-9]/g).join().toLowerCase()
}

const reversedString = (string) => {
  newString = standarizeString(string)
  let reverse = ''
  for(let i = newString.length - 1; i >= 0; i--){
    reverse += newString[i]
  }
  return reverse
}

const palindromes = function (string) {
  if (standarizeString(string) === reversedString(string)){
    return true
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = palindromes;
