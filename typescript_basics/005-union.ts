let userId : (string|number);
userId = "Karthik";
userId = 54;
//userId = true;

function getInfo(customerID:(string|number)){

    if(typeof(customerID)==='number'){
        return customerID +100;
    }
    else if(typeof(customerID==='string')){

        return customerID +"Karthik ";
    }
}

let ans =getInfo(20);
console.log(Number(ans)+10);
let oiu =getInfo("QA");
console.log(String(oiu) + "NewString")

console.log(ans);
console.log(oiu);