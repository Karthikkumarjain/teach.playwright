//you provide explicitly what datatype is 
// for any variable(,may be mainly for any), rather than allowing ts to do it in run time


//using <>
//using as keyword

let total : any =125
let finalTotal =<number>total +500;
console.log(total);

let car:any = "Hey I am a any datatype";
let len =  (car as string).length;
console.log(car);


let flag:any =true;
if(flag as boolean){
    console.log("hello Team");
}
