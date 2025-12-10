class Character {
    hunger: number;
    health: number;
}

class Hero extends Character {
    heroId: number;

    eat() {
        this.hunger += 3;
    }
}

class Enemy extends Character {
    enemyId: number;

    eat() {
        this.hunger += 1;
    }
}

class Toy extends Enemy, Hero {

}


//Multiple inheritence is possible via interface

abstract class Characterasd {
    hunger: number;
    health: number;

    abstract eat(): void;
}


interface Heroasd extends Characterasd {
    heroId: number;
}

interface Enemyasd extends Characterasd {
    enemyId: number;
}

//class extends , we do with extends keyaord
//interface --implements keyword

class Spy implements Heroasd, Enemyasd {
    hunger: number;
    health: number;

    heroId: number;
    enemyId: number;

    eat() {
        this.hunger -= 1;
    }
}


const hero:Hero = new Spy();
const enemy:Enemy = new Spy();