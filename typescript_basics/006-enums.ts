//enum --enumeration -data types:hold different set of constant values

//numeric
enum Browser{
    Chrome,
    Firefox,
    Safari
}
console.log(Browser.Chrome);
console.log(Browser);

//numeric
enum RandomB{
    Chrome=6,
    Firefox,
    Safari
}

console.log(RandomB.Chrome);
console.log(RandomB.Safari);

//NUMERIC 
enum RandomA{
    Chrome=6,
    Firefox=10,
    Safari
}

console.log(RandomA.Chrome);
console.log(RandomA.Safari);


//String
enum environment{
    DEV="dev",
    QA="qa",
    PROD="prod"
}

console.log(environment)

console.log(environment.DEV)


//heterogrnous enum

enum DBStatus{

    ACTIVE ="active",
    DEACTIVTE = "deactivte",
    PENDING = 0,
    START
}

console.log(DBStatus);
console.log(DBStatus.ACTIVE);

console.log(DBStatus.PENDING);

console.log(DBStatus.START);



