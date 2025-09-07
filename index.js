// Q1. const fun1 = (a, b) => {
//     const result = a * b;
//     console.log(`Hello from fun1: ${result}`);
// }

// fun1(5,4);
// fun1(2,3);
// fun1(7,6);




// Q2. exercise - 1 - faulty calculator

/* create a faulty calculator using JS, this calc does:
1. this inputs 2 nums from user
2. performs wrong operation:
    + --> -
    * --> +
    - --> /
    / --> **

it does this 10% of times
*/

// let random = Math.random();
// // gen a random num [num < 0.1]

// let a = prompt("1st num = ");
// let b = prompt("2nd num = ");
// let c = prompt("operation : ");

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**"
// };

// if (random < 0.1) {
//     c = obj[c];
//     alert(`Result = ${eval(`${a} ${c} ${b}`)}`);
// } else {
//     alert(`Result = ${eval(`${a} ${c} ${b}`)}`);
// }



// Q3. function sum(a, b) {
//     return a + b
// }

// result = sum(3, 5)
// result1 = sum(76, 45)
// result2 = sum(300, -34)

// console.log(`sum be : ${result}`);
// console.log(`sum be : ${result1}`);
// console.log(`sum be : ${result2}`);


// Q4. arrow function

// const fun1 = (a,s) => {
//     console.log(`res be : ${a*s}`)
// }
// fun1(12, 2);
// fun1(12, 3);
// fun1(12, 4);



/* Q5. exercise - 2 -> business name generator

adjectives: crazy, amazing, fire
shop_name: engine, foods, garments
word: bros, limited, hub

create business name = adjective + shop_name + word
*/

// let first, second, third;
// let random = Math.random()

// // since we've 3 sections to counter, we devide 100 by 3 parts -> 0.33, 0.66, 100

// // let's generate first word
// if (random < 0.33) {
//     first = "crazy"
// } else if (random >= 0.33 && random < 0.66) {
//     first="amazing"
// } else {
//     first="fire"
// }

// // let's generate second word
// random = Math.random()
// // declaring random in each block ensures each word is unique

// if (random < 0.33) {
//     second = "engine"
// } else if (random >= 0.33 && random < 0.66) {
//     second="foods"
// } else {
//     second="garments"
// }

// // let's generate third word
// random = Math.random()
// if (random < 0.33) {
//     third = "bros"
// } else if (random >= 0.33 && random < 0.66) {
//     third="limited"
// } else {
//     third="hub"
// }

// console.log(`${first} ${second} ${third}`)


// alternate method using arrays + for loop
let sections = [
  ["crazy", "amazing", "fire"],     // first word choices
  ["engine", "foods", "garments"], // second word choices
  ["bros", "limited", "hub"]       // third word choices
]

let result = [];

for (let i = 0; i < sections.length; i++) {
  let random = Math.random();
  if (random < 0.33) {
    result.push(sections[i][0]);
  } else if (random < 0.66) {
    result.push(sections[i][1]);
  } else {
    result.push(sections[i][2]);
  }
}

console.log(result.join(" "));
