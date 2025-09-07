// Concepts of Arrays

// let arr = [1, 4, 5, 7]
// console.log(arr, typeof(arr));
// console.log(arr.length);

// arr[3] = 9;  // changes the value at 3rd position
// console.log(arr.toString());  converts to string
// console.log(arr.join(" and "));  joins each value with this
// console.log(arr.pop());  delete value from last
// console.log(arr.push(7));  add value from last
// console.log(arr.shift());  delete value from first
// console.log(arr.unshift(0));  add value from first
// console.log(delete arr[3]);  deletes value from address, but the memory is still allocated
// console.log(arr);


// let arr1 = [12, 65, 6]
// let arr2 = [45, 64, 56]
// console.log(arr.concat(arr1, arr2));




// using for loop

// let arr = [2, 4, 6, 8, 12];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element)
// }




// foreach loop

// let arr = [2, 4, 6, 8, 12];
// arr.forEach((value, index, arr) => {
//    console.log(value, index, arr)
// });




// forin loop

// let arr = [2, 4, 6, 8, 12];
// let object = {
//     // a:Nan,
//     b: "asdf",
//     c: undefined,
//     d: "NaN",
//     e: "undefined"
// }
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
//         console.log(key, element);
//     }
// }




// forof loop -> may use -> value == iterator == element

// let arr = [2, 4, 6, 8, 12];
// for (const value of arr) {
//     console.log(value);
// }





// using Map method 

// let arr = [2, 4, 6, 8, 12];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element ** 2);
// }


// instead use MAP method -> transform/ format/ calculate values/ elements

// let arr = [2, 4, 6, 8, 12];
// let newArr = arr.map(e => e ** 2)   //e == element
// console.log(newArr);




// filter method -> extract elements frfom array that match a rule

// let arr = [2, 4, 6, 8, 12];
// const greaterThan5 = (e) => {
//     if (e > 5) {
//         return true;
//     } return false;
// }
// console.log(arr.filter(greaterThan5))

// // similar method

// let arr = [2, 4, 6, 8, 12];
// console.log(arr.filter((e) => {
//     if (e > 5) {
//         return true
//     } return false
// }))




// reduce method -> use it when we want to run a function on a given set of values -> preferably arrays -> sonce it reduces an array to a single value

// let arr = [2, 4, 6, 5];
// const red = (a, b) => {
//     return a + b;
// }

// console.log(arr.reduce(red));



// converts anything into an array -> even an HTML page 
console.log(Array.from("suvam+123"))