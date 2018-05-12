//Player chooses a fighter.
//event listener to grab click;
//we var to hold your fighter object
//Chosen fighter will go to empty left hand img tag and hide itself from choice array. 
//fucntions for moving cards around
//Player then chooses an enemy. 
//chosen enemy will go to empty right hand img tag and hide itself from choice array. 
//player then clicks on fight button. 
//fighters will then jump at each other to "attack". 
//fight results will appear under fight button. 
//The chosen fighters attack will go up by the amount of the base attack. 
//Chosen fighter will lose HP based on enemy counter. 
//Chosen enemy will lose HP based on chosen fighter's attack. 
//Chosen fighter's HP gets to 0, game over. 
//chosen enemy's HP gets to 0, player chooses another enemy. 
//All enemies are gone, Player Wins!

//variables
var fighters = [
    {
        name: "aldrich",
        health: 200,
        attack: 10,
        counter: 25,
        img: 'assets/images/Aldrich.jpg'
    },
    {
        name: "oceiros",
        health: 175,
        attack: 6,
        counter: 20,
        img: 'assets/images/oceiros.png'
    },
    {
        name: "Dancer of Boreal Valley",
        health: 125,
        attack: 6,
        counter: 20,
        img: 'assets/images/dancerOfBorealValley.jpg'
    },
    {
        name: "Lorian Elder Prince",
        health: 130,
        attack: 7,
        counter: 22,
        img: 'assets/images/LorianElderPrince.jpg'
    },
    {
        name: "Nameless King",
        health: 275,
        attack: 12,
        counter: 32,
        img: 'assets/images/namelessKing.jpg'
    },
    {
        name: "Pontif Slyvahn",
        health: 120,
        attack: 5,
        counter: 22,
        img: 'assets/images/pontifSlyvahn.PNG'
    }
]

var hero;
var enemy;
var enemies = [];
var attackButton = $('#fight');
var attack = 0;
// var audience = [];


//functions
function reset() {
    fighters = [
        {
            name: "Aldrich",
            health: 200,
            attack: 10,
            counter: 25,
            img: 'assets/images/aldrich.jpg'
        },
        {
            name: "Oceiros",
            health: 175,
            attack: 6,
            counter: 20,
            img: 'assets/images/oceiros.png'
        },
        {
            name: "Dancer of Boreal Valley",
            health: 125,
            attack: 6,
            counter: 20,
            img: 'assets/images/dancerOfBorealValley.jpg'
        },
        {
            name: "Lorian Elder Prince",
            health: 130,
            attack: 7,
            counter: 22,
            img: 'assets/images/lorianElderPrince.jpg'
        },
        {
            name: "Nameless King",
            health: 275,
            attack: 12,
            counter: 32,
            img: 'assets/images/namelessKing.jpg'
        },
        {
            name: "Pontif Slyvahn",
            health: 120,
            attack: 5,
            counter: 22,
            img: 'assets/images/pontifSlyvahn.PNG'
        }
    ]
    hero = {};
    enemy = {};
    enemies = [];
    attackButton = $('#fight');
    attack = 0;
    $('#hero').empty()
    $('#enemy').empty()
    for (var i = 0; i < fighters.length; i++) {
        // fighters[i]
        // if(){

        // }

        var card = $('<div class="card bg-dark col-sm-3" id="card" data-name="' + fighters[i].name + '"><img class="card-img-top" id="' + fighters[i].name + '" src="' + fighters[i].img + '" alt="Nameless King"><div class="card-img-overlay"><p class="card-text">HP:<span value="' + fighters[i].health + '">' + fighters[i].health + '</span></p><p class="card-text">Atk:<span value "' + fighters[i].attack + '">' + fighters[i].attack + '</span></p><p class="card-text">' + fighters[i].counter + '</p></div></div>');
        $('#cards').append(card)
    }
}
for (var i = 0; i < fighters.length; i++) {
    // fighters[i]
    // if(){

    // }

    var card = $('<div class="card bg-dark col-sm-3" id="card" data-name="' + fighters[i].name + '"><img class="card-img-top" id="' + fighters[i].name + '" src="' + fighters[i].img + '" alt="Nameless King"><div class="card-img-overlay"><p class="card-text">HP:<span value="' + fighters[i].health + '">' + fighters[i].health + '</span></p><p class="card-text">Atk:<span value "' + fighters[i].attack + '">' + fighters[i].attack + '</span></p><p class="card-text">Counter: ' + fighters[i].counter + '</p></div></div>');
    $('#cards').append(card)
}

function generateFighter(whereToGo, fighter) {

    var card = $('<div class="card bg-dark col-sm-3" id="card" data-name="' + fighter.name + '"><img class="card-img-top" id="' + fighter.name + '" src="' + fighter.img + '" alt="Nameless King"><div class="card-img-overlay"><p class="card-text">HP:<span value="' + fighter.health + '">' + fighter.health + '</span></p><p class="card-text">Atk:<span value "' + fighter.attack + '">' + fighter.attack + '</span></p><p class="card-text">Counter: ' + fighter.counter + '</p></div></div>');
    $('#' + whereToGo).append(card);
}

function generateHero(whereToGo, fighter) {

    var card = $('<div class="card bg-dark col-sm-12" id="card" data-name="' + fighter.name + '"><img class="card-img-top" id="' + fighter.name + '" src="' + fighter.img + '" alt="Nameless King"><div class="card-img-overlay"><p class="card-text">HP:<span value="' + fighter.health + '">' + fighter.health + '</span></p><p class="card-text">Atk:<span value "' + fighter.attack + '">' + (attack == 0 ? fighter.attack : attack) + '</span></p><p class="card-text"> Counter: ' + fighter.counter + '</p></div></div>');
    $('#' + whereToGo).append(card);
}
function generateEnemy(whereToGo, fighter) {
    var card = $('<div class="card bg-dark col-sm-12" id="card" data-name="' + fighter.name + '"><img class="card-img-top" id="' + fighter.name + '" src="' + fighter.img + '" alt="Nameless King"><div class="card-img-overlay"><p class="card-text">HP:<span value="' + fighter.health + '">' + fighter.health + '</span></p><p class="card-text">Atk:<span value "' + fighter.attack + '">' + (attack == 0 ? fighter.attack : attack) + '</span></p><p class="card-text">Counter: ' + fighter.counter + '</p></div></div>');
    $('#' + whereToGo).append(card);
}


//Choose Hero

$("#cards").on("click", "#card", function (event) {
    event.preventDefault();
    console.log($(this).attr("data-name"));
    var heroName = $(this).attr("data-name");


    for (var i = 0; i < fighters.length; i++) {
        if (heroName == fighters[i].name) {
            hero = fighters[i];
            generateHero("hero", fighters[i]);
            fighters.splice(i, 1)
        }
    }
    for (var i = 0; i < fighters.length; i++) {
        enemies.push(fighters[i]);
    }
    $('#cards').empty();
    for (var i = 0; i < enemies.length; i++) {
        generateFighter("enemyCards", enemies[i]);
    }

});

//Choose enemy

$("#enemyCards").on("click", "#card", function (event) {
    event.preventDefault();
    console.log($(this).attr("data-name"));
    var enemyName = $(this).attr("data-name");

    $(this).slideUp()

    for (var i = 0; i < fighters.length; i++) {
        if (enemyName == fighters[i].name) {
            enemy = fighters[i];
            generateEnemy("enemy", fighters[i]);
            enemies.splice(i, 1);
        }

    }
});

//battle
console.log(hero)
$("#fight").click(function (event) {

    event.preventDefault()
    $('#fightStatus').empty()
    console.log(hero)
    console.log(enemy)
    attack = attack + hero.attack
    hero.health = hero.health - enemy.counter;
    enemy.health = enemy.health - attack;

    if (hero.health <= 0) {
        $('#hero').empty()
        $('#fightStatus').append("<h3>You Lost All Your Souls! Do you want to attempt battle again?</h3>");
        $(attackButton).prop('disabled', true);
        reset()
    } else if (enemy.health <= 0) {
        if (enemies.length == 1) {
            $('#fightStatus').append("<h3>You are now the Lord of Cinders! Will you battle again?</h3>");
            reset()
        } else {
            $('#enemy').empty()
            $('#fightStatus').append("<h3>Choose your next opponent!</h3>")
        }

    } else {

        console.log('attack=' + attack);

        console.log('hero health=' + hero.health);

        console.log('enemy health=' + enemy.health);
        $('#fightStatus').append("<h3>" + enemy.name + " countered for " + enemy.counter + '!</h3>');
        $('#fightStatus').append('<h3>' + hero.name + " attacked for " + attack + '!</h3>');
        $('#hero').empty()
        $('#enemy').empty()
        generateHero("hero", hero)
        generateEnemy("enemy", enemy)
    }

});


