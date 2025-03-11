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
//     let c;
//     c = a + b;
//     return c;
// }
// let res = add();    //calls function
// console.log(res);   //prints

//input, no output

// function add(a, b) {
//     let c;
//     c = a + b;
//     console.log(c);
// }
// let x = 500;
// let y  = 200;
// add(x,y);

//input, output

// function add(a, b) {
//     let c;
//     c = a + b;
//     return c;
// }
// let x = 800;
// let y  = 200;
// let res = add(x, y);
// console.log(res);


//grade check using function

function gradeCheck(studMarks, maxMarks)
{
    let studPercentage = (studMarks / maxMarks) * 100;
    let studGrade;

    if (studPercentage >= 90)
    {
        studGrade = 'A';
    }
    else if(studPercentage >= 80){
        studGrade = 'B';
    }
    else if(studPercentage >= 60){
        studGrade='C'
    }
    else {
        studGrade='D'
    }
    console.log(studGrade);
}

gradeCheck(348, 400);
