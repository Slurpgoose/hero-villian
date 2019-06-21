// - When the page loads, prompt the user for the name of the Hero and the name of the Villain
// - Create a new Hero and a new Villain, render them to the screen
// - Create two new Weapons, and have the Hero and Villain each equip one
// - Provide two buttons on the screen: one that will let the Hero attack the Villain and another button that will let the Villain attack the Hero
// - When the Hero's health goes below 1, show "Game over"
// - When the Villain's health goes below 1, show "Victory!"
var hero = '';
var villian = '';

$(document).ready(function() {
    renderHeroVillian();
    $('.create').click(function(){createGame()})
});

function createGame() {
    hero = new Hero($('#hero').val());
    villian = new Villain($('#villian').val());
    createCharacters();
};

function renderHeroVillian() {
    $('.main-content').append('<div class="title"></div><div><div class="row"><div class="col-lg-6 hero">Hero Name: <input type="text" id="hero"><br></div><div class="col-lg-6 villian">Villain name: <input type="text" id="villian"><br></div><br><button class="btn btn-primary create">Create</button></div>')
};

function createCharacters (){
    $('.hero').html(hero.render());
    $('.villian').html(villian.render());
    $('.btn').remove();
    $('.villian').append('<button class="btn btn-danger attack" id="villian-move">ATTACK!</button>');
    $('.hero').append('<button class="btn btn-primary attack" id="hero-move">ATTACK!</button>');
    createWeapon()
};

function createWeapon(){
    hero.weapon = new Weapon("Mace");
    villian.weapon = new Weapon("dagger");
    $('#hero-move').click(function(){
        hero.attack(villian);
        $('.title').text('Hero Attacks Villian');
        $("#vil-health").text(villian.health);
        checkWinner(villian)

    });

    $('#villian-move').click(function(){
        villian.attack(hero);
        $('.title').text('Villian Stikes Hero');
        $("#her-health").text(hero.health);
        checkWinner(hero);

    });
}

function checkWinner(character) {
    if (character.health < 1) {
        alert(`${character.name} is DEAD`)
    }
}

