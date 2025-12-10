class Calculator {
    add(a: number, b: number): number;
    add(a: string, b: string): string;

    add(a: any, b: any) {
        return a + b;
    }
}

const calc = new Calculator();

console.log(calc.add(2, 3));     // 5
console.log(calc.add("Hi ", "TS")) // Hi TS


//TypeScript supports method overloading, but only in type signatures.
//Actual implementation must be a single function.
//✔ Same method name
//✔ Different parameter types
//✔ Decided at compile-time (type checking)