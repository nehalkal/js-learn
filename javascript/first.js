// variables and the console tag in html
console.log("Hello Nehal This is Our First JavaScript Program");
age = 22;
console.log(age);
x = null;
console.log(x);
y = undefined;
console.log(y);

// Data Types First is Boolean
isfollow = false;
notfollow = true;
console.log(isfollow);

Console = "Hello JS";
console.log(Console);
// instead of use this 
// console = "Hello JS";
// console.log(console);

// let,const and var keywords are used to write a variables
// ES6 is launched in 2015 Full form = ECMA script 6
// ES6 provides classes, modules, arrow functions, templates literals, destructing assignment and many more features.
let fullname = "Nehal Kale";
console.log(fullname);
let age1 = 24;
console.log(age1);
 
// Nowadays we use a let or const keywords to declare variables. beacuse while we using a var is reusable 
// but we cannot redefined a let and const keywords 
var age2 = 24;
var age2 = 24;
var age2 = 24;
console.log(age2);

// let age3 = 24;
// let age3 = 24;
// let age3 = 24;
// console.log(age3);

// Case Sensitive
let NUMBER = '1';
let Number = '2';
let number = '3';

console.log(NUMBER);
console.log(Number);
console.log(number);

// Naming Identifiers
// Variables, Functions

// The variables must start with a letter, _ , or $
let namee = "Nehal";
let _age = '22';
let $location = "Nagpur";

console.log(namee);
console.log(_age);
console.log($location);

// Invalid Identifiers
// let 1234 = "delhi";
// let %age = '22';
// let 1name = "Nehal";

// console.log(1234);
// console.log(%age);
// console.log(1name);

// letter, number, $, and _ 
let name1 = "NK";
let last_name = "Patil";
let $firstname = "New";

console.log(name1);
console.log(last_name);
console.log($firstname);

// convention
// Camel Case - firstName, lastName 
let firstName = "Nehal";
let lastName = "Kale";

console.log(firstName);
console.log(lastName);

// Semicolons - Not Mandatory
let country = "INDIA";
let city = "AMRAVATI"

console.log(country);
console.log(city)

const accountId = 123445;
let accountEmail = "nehal8875@google.com";
var accountPassword = "2542";
accountCity = "Nagpur";

console.table([accountId, accountEmail, accountPassword, accountCity]);