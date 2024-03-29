//- A property "name" which is a string passed in through the constructor
// - A property "health" which is hardcoded to 100 initially
// - A property "weapon" which is null initially
// - A method equipWeapon(weapon), which will take a weapon object and attach it to the "weapon" property
// - A method attack(person), which will deduct health from the target based on what weapon this person has equipped


class Person {

    constructor(name){
        this.health = 100;
        this.weapon = null;
        this.name = name;
    }

    equipWeapon(weapon) {
        this.weapon = weapon;
    }

    attack(person) {
        person.health -= this.weapon.damage
    }
}
