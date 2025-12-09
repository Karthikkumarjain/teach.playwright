function getInfosr(firstName:string,age:number){

    return firstName+ " "+age;

}

let abcsad = getInfosr("Tom",12);
let as = getInfosr("Mercy",12);
console.log(abcsad);
console.log(as);

//demo with ?



//default parameters

function setValues(name:string,msg:string="welcome"):string{
    return msg + ' ' +name;


}


console.log(setValues("naveen","Hi"));