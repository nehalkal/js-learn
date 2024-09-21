// var :- Not uses in Nowadyas.
// It is a globally-scoped.
// it can be globally used so that's why it is not used 
// var age = 25;

// if(true) {
//     console.log(age);
// }

// It is a function-scoped.
// it will be executed beacuse it call inside the curli braces 
// function solve() {
//     var age = 25;
//     console.log(age);
// }
// solve();

// it use and work but the problem is that when we call it outside the curli braces then it will not be executed
// function solve() {
//     var age = 25;
//     console.log(age);
// }
// console.log(age);
// solve();

// It also gives the debugging issues.
// var x = 10;
// var x = 20; 


/* Let :- it is used in Nowadays. beacuse it is reassigned multiple times.and it is block-scoped. 
below code is block-scoped means inside the bracket so it is executed. */
// {
//     let age = 22;
//     console.log(age);
// }

// // The below code is not working beacuse it is outside the block-scoped.
// {
//     let age = 22;
// }
// console.log(age);

// In this let, we cannot redeclared a variable
// let a = 10;
// let a = 40;

// How js is dynamically typed language. one variable declared then use it as a multiple times.
// let a = 10;
// a = 10;
// a = "Nehal";
// a = true;
// a = null;


// const is the Constant :- It cannot be changed or reassigned after it's been assigned a value.
// Below code is execute successfully and it will be constant.
// const a = 10;
// console.log(a);

// below code is not execute it will gives a error
// const a = 10;
// console.log(a);

// below code is not execute it will gives a error
// a = 10;
// console.log(a);

