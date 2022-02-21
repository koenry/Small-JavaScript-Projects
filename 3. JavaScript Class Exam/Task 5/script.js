/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: "1", name: "John Smith", age: 20, hasDog: true },
  { id: "2", name: "Ann Smith", age: 24, hasDog: false },
  { id: "3", name: "Tom Jones", age: 31, hasDog: true },
  { id: "4", name: "Rose Peterson", age: 17, hasDog: false },
  { id: "5", name: "Alex John", age: 25, hasDog: true },
  { id: "6", name: "Ronald Jones", age: 63, hasDog: true },
  { id: "7", name: "Elton Smith", age: 16, hasDog: true },
  { id: "8", name: "Simon Peterson", age: 30, hasDog: false },
  { id: "9", name: "Daniel Cane", age: 51, hasDog: true },
];
var suSunim = [];
var pilnameciai = [];

const filterDogOwers = () => {
   let i = -1;
  do {
    i += 1;
    let hasDog = Object.getOwnPropertyDescriptor(users[i], 'hasDog');
    let name = Object.getOwnPropertyDescriptor(users[i], 'name');
    if (hasDog.value === true) {
      suSunim.push(name);
    }
  } while (i < 8)
  console.log(suSunim)
  }
  
  const filterAdults = () => {
    let i = -1;
    do {
      i += 1;
      let age = Object.getOwnPropertyDescriptor(users[i], 'age');
      let filter = Object.getOwnPropertyDescriptor(users[i], 'name');
      if (age.value > 17) {
        pilnameciai.push(filter)
      }
    } while (i < 8)
    console.log(pilnameciai)
  }


filterDogOwers();
filterAdults();