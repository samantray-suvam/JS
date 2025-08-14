// Example - 1

// let a = {
//     // state/ properties
//     name: "Car",
//     model: "Nissan",
//     price: 82.77,

//     // behaviour
//     start : function () {
//         console.log("Car started");
//     },

//     stop : function () {
//         console.log("Car stopped");
//     },

//     accelerate: function () {
//         console.log("Car accelerated");
//     },

//     getInfo: function () {
//         return `Name: ${this.name}, Model: ${this.model}, Price: ${this.price}`;
//     }
// }

// console.log(a.getInfo());
// a.start();
// a.stop();
// a.accelerate();



// Example - 2

// let student = {
//     name: "Raghu",
//     age: 21,
//     grade: "A",

//     code: function () {
//         console.log(`${this.name} can code`);
//     },

//     play : function(){
//         console.log(`${this.name} can play guitar`);
//     },

//     create: function () {
//         console.log(`${this.name} can create 3D models`);
//     }
// }

// console.log(student.age);
// console.log(student.grade);

// student.code();
// student.play();
// student.create();



// pass by reference - objects in JS can refer to the same memory location

// let a = {
//     name: "Nissan",
//     price: "82.77 L",
//     model: "2020",
//     mileage: "22 km/L"
// };

// let b = a;
// console.log(b);

// b.name = "Toyota";
// console.log(b.name);
// console.log(a.name);

// let c = { ...a }    // creates a shallow copy of object a
// console.log(c);
// c.name = "Honda";
// console.log(a);
// console.log(c);