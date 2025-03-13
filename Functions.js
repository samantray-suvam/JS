//no input, no output
// let a = 100;
// let b = 200;
// function add() {
//     let c;
//     c = a + b;
//     console.log(c);
// }
// add();


//no input, output
// let a = 100;
// let b = 200;
// function add() {
//     let c = a + b;
//     return c;
// }
// // let res = add();    //calls function
// console.log(add());   //prints


//input, no output
// function add(a, b) {
//     let c = a + b;
//     console.log(c);
// }
// add(400, 200);


//input, output
// function add(a, b) {
//     let c;
//     c = a + b;
//     return c;
// }
// console.log(add(800, 200));


//grade check using function
// function gradeCheck(studMarks, maxMarks)
// {
//     let studPercentage = (studMarks / maxMarks) * 100;
//     let studGrade;

//     if (studPercentage >= 90)
//     {
//         studGrade = 'A';
//     }
//     else if(studPercentage >= 80){
//         studGrade = 'B';
//     }
//     else if(studPercentage >= 60){
//         studGrade='C'
//     }
//     else {
//         studGrade='D'
//     }
//     console.log(studGrade);
// }

// gradeCheck(348, 400);


//Function Expression
// let fun = function(a, b)
// {
//     return a * b;
// }
// console.log(fun(26, 4));


//Arrow Function
// let fun = (a, b) =>
// {
//     return a * b;
// }
// console.log(fun(45, 7));


//IIFE - Immediately Invoked Function Expression
(function () {
    console.log('Hello World');
})();