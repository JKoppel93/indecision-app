var nameVar = "Jake";
var nameVar = "Jacob";
console.log("nameVar", nameVar);

let nameLet = "Jake";
nameLet = "Jacob";
console.log("nameLet", nameLet);

const nameConst = "Jake";
console.log("nameConst", nameConst);

const fullName = "Jacob Koppel";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
