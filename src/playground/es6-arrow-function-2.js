const add = function(a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 1001));

const user = {
  name: "Jake",
  cities: ["New York", "Tampa", "Philadelphia"],
  printPlacesLived() {
    return this.cities.map(city => this.name + " has been in " + city + "!");
  }
};
console.log(user.printPlacesLived());

const multiplier = {
  numbers: [3, 4, 7],
  multiplyBy: 7,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
