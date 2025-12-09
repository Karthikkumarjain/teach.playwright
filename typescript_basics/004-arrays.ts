

let names:string[] = ["Karthik","Vicky","Raj"];
console.log(names[1]);


//using generics

let empNames:Array<string> =["Karthik","Vicky","Raj"];
let ids :Array<number> = [2,3,4];
let random:Array<any> = ["asd",12,true];


//multi type array

let multiValue:(string|number)[] = ["Tom",23,"Karthik"];


//array declration and init:

let users: Array<string>;
users = ["Peter","Karthik"];



//Loop: for loop
//index based
let empNamesNew:Array<string> =["Karthik","Vicky","Raj"];
empNames.push("Ras");

for(let i =0;i<=empNamesNew.length;i++){//for(start;condition;increment/decrement){})
    //i=0-->karthik
    //i=1-->vicky
    //i=2->Raj
    //i =3--> 3<3 -->no..loop break
    //3=3-->raj
    //4-->4<=3--break the loop

    console.log(empNames[i])
}

//for in

for(let e in empNames){
console.log(e + ":"     +empNames[e]);

}