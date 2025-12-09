//functions in ts

//void
//return
//takes parametres


//named function
function getIntro(){

    console.log("My intro");
}

getIntro();

//void

function addNum(a:number,b:number){ // void can be added or left as if

    console.log(a+b);

}

addNum(10,20);


//return number
function addNums(a:number,b:number):number{

    console.log(a+b);
    return a+b;

}

let result:number =addNums(10,20);
console.log(result);



//return boolean

function retBoolean():boolean{
return true;

}



//anonymous function -without name function --store ina variable
//call it using the variable name only

let info = function(){
    console.log("hello")
}

info();


let sumt =function(i:number,o:number){
    return i+o;
}
console.log(sumt(2,5));



//arrow function: => -- fat operator    
//anonymous fucntion withoug method name/function keyword



let infor = ()=>{
    console.log("hello")
}

infor();


let sumtr =(i:number,o:number)=>{
    return i+o;
}
console.log(sumtr(2,5));


