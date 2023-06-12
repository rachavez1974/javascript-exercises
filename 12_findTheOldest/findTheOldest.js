const findTheOldest = function(people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const oldestAge = age(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath)
    const currentAge = age(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
    return oldestAge < currentAge ? currentPerson : oldestPerson

  });
};


const age = (birth, death) => {
  if(death === undefined){
    death = new Date().getFullYear();
  }
  return death - birth
}
// Do not edit below this line
module.exports = findTheOldest;
