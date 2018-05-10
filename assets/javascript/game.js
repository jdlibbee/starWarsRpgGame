//Player chooses a fighter. 
//Chosen fighter will go to empty left hand img tag and hide itself from choice array. 
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
$(document).ready(function () {
    //variables
    var aldrich = {
        name: "aldrich",
        health: 200,
        attack: 10,
        counter: 60,
    };
    var oceiros = {
        name: "oceiros",
        health: 175,
        attack: 6,
        counter: 50,
    };
    var borealDancer = {
        name: "Dancer of Boreal Valley",
        health: 125,
        attack: 6,
        counter: 50,
    }
    var lorian = {
        name: "Lorian Elder Prince",
        health: 130,
        attack: 7,
        counter: 45,
    };
    var namelesKing = {
        name: "Nameless King",
        health: 250,
        attack: 12,
        counter: 65,
    };
    var pontifSlyvahn = {
        name: "Pontif Slyvahn",
        health: 120,
        attack: 5,
        counter: 45,
    };


    //functions
    $(".card").click(function (event) {
        $(this).slideup();
        $(this).clone().append("#hero");
    })
    $("#fight").click(function (event) {
        $("#hero").fadeIn();
        $("#enemy").fadeIn();
    })
})

