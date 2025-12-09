//tuple : fixed size, order matters
//tuple vs array
//array:dynamic in nature


let person:[string, number] =["naveen",78];

let user:[string, number,boolean] =["naveen",78,true];

console.log(person[0]);
console.log(person[1]);

console.log(user[0]);

console.log(user[1]);

console.log(user[2]);




let personOfArray:[string, number][] =[["naveen",78],["wer",78],["rwe",78],["ds",78]];

console.log(personOfArray[0])
console.log(personOfArray[0][0])



let anotherP:[string, number] =["naveen",78];
anotherP.push("ada",3);
console.log(anotherP);

