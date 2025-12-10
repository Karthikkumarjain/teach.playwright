class CharacterNew {
    static characterCount = 0; //STATIC keyword ->this lives only at the class level and not at object level
    readonly randomVar?:number; //The value can be assigned only once
    private hungrrnum: number;
    private health: number;

    constructor(hungrrnum: number, health: number) {
        CharacterNew.characterCount +=1;
        //console.log(`I am the ${CharacterNew.characterCount} created`)
        this.hungrrnum = hungrrnum;
        this.health = health;
        

    }
   
    static randomStaticMetho(){


    }

    setHunger(hungrrnum: number) {
        this.hungrrnum = hungrrnum;
    }
    setHealth(health: number) {
        this.health = health;
    }

    getHunger() {

        return this.hungrrnum;
    }

    getHealth() {

        return this.health;
    }




}



const ch = new CharacterNew(12,100);


CharacterNew.characterCount =10;

console.log(CharacterNew.characterCount);
const ch5 = new CharacterNew(120,12);

const ch6 = new CharacterNew(15,56);

const ch7 = new CharacterNew(1,98);


const ch8 = new CharacterNew(1,98);

const ch9 = new CharacterNew(100,100);




class AnotherChars extends CharacterNew  {
    private uniqueId: number;
    constructor(uniqueId: number,hungr:number,helth:number) {
        super(hungr,helth);//calls the parent class constructor
        super.setHealth(45);//calls the method present in parent class
        this.uniqueId = uniqueId;//this keyword --value passed to the constructor
        //  is assigned to the variable via this keyword inside the constructor
        CharacterNew.characterCount +=1

    }

    setUniqueId(){

        this.uniqueId = this.uniqueId;

    }

    getUniqueId(){

return this.uniqueId;
    }
}


const cha = new CharacterNew(100, 120);

console.log(cha.getHealth());
console.log(cha.getHunger());


console.log("##############");

const chNew = new AnotherChars(1,100,120);
console.log(chNew.getHealth());
console.log(chNew.getHunger());
console.log(chNew.getUniqueId());