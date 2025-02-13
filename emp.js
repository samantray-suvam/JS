// // conditional statement

// let age = 20;
// if (age <= 12) 
// {
//     console.log("child");
// } 
// else if (age > 12 && age <= 19) 
// {
//     console.log("teen");
// } 
// else if (age > 19 && age <= 49) 
// {
//     console.log("adult");
// } 
// else (age > 50) 
// {
//     console.log("senior");
// }


let userRole="viewer"
switch (userRole)
{
    case "admin":
        console.log("full access");
        break;
    case "editor":
        console.log("edit access");
        break;
    case "user":
        console.log("view access");
        break;
    default:
        console.log("trial access");
}