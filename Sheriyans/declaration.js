// Temporal dead zone

// 1. When a variable is entered into memory (during the creation phase), and
// 2. When the variable is actually initialized by its declaration.


var a = 10
{
    let a = 20
    console.log("inside: ", a);
}
console.log("outside: ", a);