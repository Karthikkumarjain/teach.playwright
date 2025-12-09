//var--global and functional declaration



var number = 2;
console.log(number);

number = "Karthik";

console.log(number);

function printTheString() { //function {methodnmae}

    var str = "Kk";
    console.log(str);
}

printTheString();
console.log(number);

//Re-declaration is allowed

var browser = "chrome";
var browser = "firefox";

console.log(browser);
//Re-initialization is allowed
browser = 9;
browser = true;
console.log(browser);

//issue with var:

var str = "Hey I am here";
var num = 6;
if (num > 3) { //if(condition){}

    var str = "I am inside if condition";
}

console.log(str)


//let -- scope: block scope - {}

let m = "I am out";
let tm = 3;
if (tm > 3) {
    let msg = "I am inside";
    console.log(msg);
}
//console.log(msg);

//re-declare?--not allowed , re-nitilaize and update allowed
// let  len =6;
// let len=5;

let len = 6;
len = 5;
console.log("this one"+len);







//const -- only for constant values
//use const where the value is going to be consntant or fixed

//re-assign not possible
const ok ="i am ok";
//ok ="i am not ok";
console.log(ok);


