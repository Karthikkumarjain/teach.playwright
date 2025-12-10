abstract class HeroReal {
    hunger: number;
    health: number;

    abstract useMe():void;//TO FORCE YOUR CHILD CLASS TO USE AN ABSTRACT METHOD -- ABSTRACT METHOD..
    //ABSTRACT METHOD IN THE PARENT CLASS DOESNT HAVE IMPLEMENTATION.ONLY THE CHILD CLASSES WILL HAVE THE IMPLEMNTATION.

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


//concreate classes
class ArcherReal extends HeroReal {
    // Archer-specific code…

    useMe(){

        
    }
     attack() {
        super.attack();
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

class MageReal extends HeroReal {
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

class KnightReal extends HeroReal {
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

const archer = new ArcherReal();
const mage = new MageReal();
const knight = new KnightReal();

archer.attack();
mage.attack();
knight.attack();

const demoHero:Hero =new HeroReal();

