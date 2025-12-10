//class- blueprint  for multiple objects
//--class is used to create object

class Player {//class nameOftheClass{}
    health?: number;
    speed?: string;
    constructor(health: number, speed: string) {//consturctor(){}
        this.health = health;
        this.speed = speed;

    }

    greet() {

        console.log("Greetings!!")
    }
    



}

const player1 = new Player(12,"Low");
const player2 = new Player(12,"Medium");


player1.health = 12;
player1.speed = "High";
console.log(player1.speed);




// const anotherPlayer = new Player();
// player.health = 12;
// player.speed = "lOW";
// console.log(player.speed);