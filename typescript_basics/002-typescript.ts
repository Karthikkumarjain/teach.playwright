//Typescript is JavaScript with syntax for types.
//JS is run time language--everytime decided in run time
//ts is compile time 
//file extsntion -->.ts
//to run a ts file-->the conversion happens to js and then only run/executes ts/js code





console.log("Karthik");

//show diff of js and ts

const userJK ={

    firstName:"tom",
    age: 30
}
console.log(userJK.age);

//declare like this

let age: number =30;
let str: string ="Raj";
let isActive: boolean =true;

// submitButton:Locator;

//typescript is a statically typed language.
//type inference
//type annotations--> : : : :

let firstName = "Rahul";
//firstName = 90;

//type inference
let rollnumber = 34; //during COMPILE TIME THE DATA TYPE IS ASSIGNED AS number
let middleName = "Jain" // as string

//null and undefined
let s:null =null;
let x:undefined = undefined ;

//any

let abs:any =80;
abs ="asd";
abs =true;


//void : function does not return any values

function hello(){//return type is void by dfault
let number1:number = 10;
let number2:number = 10;


    console.log(number1+number2);
}

function retrunNumber():string{ //return type is number

//return 10;
return "asda";
}

const variable = retrunNumber();
console.log(variable +"lkj")


console.log(retrunNumber());


function returnAreaCode():any{ //return type is any

//return 10;
return "asda";
}

console.log(returnAreaCode());


function add(a:number,b:number){ // passing parameters 


    console.log(a+b)
}


//with return type 
function sum(a:number,b:number):number{ // passing parameters 


    return a+b;
}





