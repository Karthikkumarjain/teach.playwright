class Human {
    private health: number;
    private speed: number;

    setHealth(health: number) {
        this.health = health;
    }

    getHealth() {
        return this.health;
    }

    setSpeed(speed: number) {
        this.speed = speed;
    }

    getSpeed() {
        return this.speed;
    }
}

const mario = new Human();
mario.setHealth(10);
mario.setSpeed(1);

console.log(`Mario has ${mario.getHealth()} health.`);
console.log(`Mario has speed ${mario.getSpeed()}.`);
