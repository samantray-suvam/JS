//LOOPS - 20TH FEB 2025

//FOR LOOP
// let i;
// for (i=1; i<=5; i++){
//     console.log("*");
// }


//WHILE LOOP
// let i=1; //initialization
// while (i<=5)    //condition
// {
//     console.log("*");   //body
//     i++; //increment
// }


//DO WHILE LOOP
// let i=1;
// do
// {
//     console.log("hello world");
//     i++
// } while (i<=5);



// SQUARE PATTERN PRINTING
// let row;
// let i;
// let j;
// let n=5;

// for (i=1; i<=n; i++)
// {
//         row="";
//     for(j=1; j<=n; j++)
//     {
//         row=row+"* ";
//     }
//     console.log(row);
// }



//HOLLOW SQUARE PATTERN PRINTING
// let i;
// let j;
// let row;
// let n = 8;

// for (i = 1; i <= n; i++)
// {
//     row = "";
//     for (j = 1; j <= n; j++)
//     {
//         if (i == 1 || i == n || j == 1 || j == n)
//         {
//             row = row + i + " ";
//         }
//         else
//         {
//             row=row+"  ";
//         }
//     }
//     console.log(row);
// }



//RANDOM PRINT
let i;
let j;
let row;
let n = 19;

for (i = 0; i < n; i++)
{
    row = "";
    for (j = 0; j < n; j++)
    {
        if (i == 0 || i == n-1 || j == 0 || j == n-1
            || j == Math.floor(n / 2) || i == Math.floor(n / 2)
            || i == j || i + j == n-1 || i + j == Math.floor(n / 2)
            || i - j == Math.floor(n / 2) || j - i == Math.floor(n / 2)
            || i+j==(n-1) + Math.floor(n/2))
        {
            row = row + "* ";
        }
        else
        {
            row=row+"  ";    
        }
    }
    console.log(row);
}