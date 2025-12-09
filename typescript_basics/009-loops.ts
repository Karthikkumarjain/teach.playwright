//for loop:

for(let i=0;i<100;i++){

    console.log(i);
   // break;
}

//for..of loop

let numbers =[10,200,300,500];
for(let n of numbers){
    console.log(n);
    if(n===200){
        console.log("hi");
        break;
    }
}

//for..in loop
let numberss =[10,200,300,500];
for(let n in numberss){
    console.log(n);
        console.log(numberss[n]);

}


let shw:string = "Hello World";
for(let mercy of shw){

    console.log(mercy);
}


//while loop -- whn number of iterations are not fixed

let v=1;
while(v<=10){

    console.log(v);

    v++;
}

//we used in date picker example

//do-while
let h=1;
do{
console.log(h);
h++;

}while(h<=10)

