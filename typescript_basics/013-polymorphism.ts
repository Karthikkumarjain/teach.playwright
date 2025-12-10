class Hero {
    hunger: number;
    health: number;

    attack() {
        console.log("I'm attacking");
    }

    move() {
        console.log("I'm moving");
    }

    eat() {
        console.log("I'm eating");
    }
}

class Archer extends Hero {
    // Archer-specific code…

     attack() {//method overriding - parent class and child class have same method name and different implementation
        super.attack();//parent class method
        console.log("Archer attacking");
    }

    move() {
        super.attack();
        console.log("Archer moving");
    }

    eat() {
        super.attack();
        console.log("Archer eating");
    }
}

// const archerToday =new Archer(); 
// archerToday.attack();

class Mage extends Hero {
     attack() {
        super.attack();
        console.log("Mage attacking");
    }

    move() {
        super.attack();
        console.log("Mage moving");
    }

    eat() {
        super.attack();
        console.log("Mage eating");
    }
}

class Knight extends Hero {
     attack() {
        super.attack();
        console.log("Knight attacking");
    }

    move() {
        super.attack();
        console.log("kniwght moving");
    }

    eat() {
        super.attack();
        console.log("knight eating");
    }
}

const archer = new Archer();
const mage = new Mage();
const knight = new Knight();

archer.attack();
mage.attack();
knight.attack();


console.log('################################################');




class Tribe  {

    private heros:Hero[];
    
    setHeros(heros:Hero[]){
        this.heros=heros;
    }

    attack(){
       for(let hero of this.heros){

        hero.attack();
       } 
    }
}

const anotherArcher:Hero = new Archer();
const anotherMage:Hero = new Mage();
const anotherKnight:Hero = new Knight();

const heros:Hero[] = [anotherArcher,anotherKnight,anotherMage];
const tribe =new Tribe();
tribe.setHeros(heros);  
tribe.attack();



console.log('####################');

class Police extends Hero{

    attack(){
        super.attack();
        console.log("Police attacks");
    }
}

const pol = new Police();
const heros2: Hero[] = [pol,anotherArcher,anotherMage,anotherKnight];
const tribe2= new Tribe();
    tribe2.setHeros(heros2);
    tribe2.attack();