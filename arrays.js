// Arrays - variables that holds multiple values

// const number = new Array(1,2,3,4,5); // constructor

const fruits = ["Apple", "Banana", "Pears", "Guava"];

const vegies = ["Potato", "Onion", "EggPlant", "Cucumber"]

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

fruits[4] = "Grapes";

fruits.push("mangoes"); // added value to last place

fruits.unshift("Berry"); // added value to first place

// fruits.pop(); // remove the last value

console.log(fruits);
console.log(vegies);

// console.log(fruits.length);

// console.log(Array.isArray(fruits));
// console.log(Array.isArray("hello"));

// console.log(fruits.indexOf("Pears"));

// console.log(Object.keys(fruits));

// let index = 5;

// console.log(fruits.at(index));

console.log(fruits.concat(vegies));