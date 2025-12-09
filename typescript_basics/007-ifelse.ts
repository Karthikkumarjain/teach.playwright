let flagI: boolean = true

if (flagI) {
    console.log("I am from true block");
} else {

    console.log("I am from else block")
}

let a: number = 10, y = 20;

if (a > y) {
    console.log("a is greater");
}
else {
    console.log("y is greater");
}

//< > <= >=  === - equal !=   - not equal


//if-else if:
let e: number = 100;
let n: number = 200;
let t: number = 600;

if (e > n && e > t) {
    console.log("e is greater");
} else if (n > t) {

    console.log("n is greater");

} else {
    console.log("t is greater");

}


//ternary operatory: // condition?cases1:case2
let o: number = 100;
let p: number =200; 

o>p?console.log('o is greater'):console.log('p is greater');


let browser:string ="chrome";

(browser==="chrome")?console.log("launch chrome"):console.log("launch firefox");
