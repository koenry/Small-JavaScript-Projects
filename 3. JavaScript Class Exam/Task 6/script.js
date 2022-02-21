/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus visurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

const getUserAverageAge = () => {
  let a = 0
  let i = -1;
  do {
    i += 1;
    const test = Object.getOwnPropertyDescriptor(users[i], 'age');
    a += test.value;  
  } while (i < 8)
  console.log(Math.round(a / 9));
  }

const users = [
  { id: "1", name: "John Smith", age: 20 },
  { id: "2", name: "Ann Smith", age: 24 },
  { id: "3", name: "Tom Jones", age: 31 },
  { id: "4", name: "Rose Peterson", age: 17 },
  { id: "5", name: "Alex John", age: 25 },
  { id: "6", name: "Ronald Jones", age: 63 },
  { id: "7", name: "Elton Smith", age: 16 },
  { id: "8", name: "Simon Peterson", age: 30 },
  { id: "9", name: "Daniel Cane", age: 51 },
];

var namesArray = [];

const getUsersNames = () => {
let i = -1;
do {
  i += 1;
  let filter = Object.getOwnPropertyDescriptor(users[i], 'name');
  namesArray.push(filter.value);
  
} while (i < 8)
console.log(namesArray);
}


getUserAverageAge();
getUsersNames();


