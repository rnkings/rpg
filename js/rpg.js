"use strict";

var player;

function Character() {
    this.health = 100;
    this.gold = 25;

        this.modifyHealth = function(difference){
            this.health = this.health + difference;
        }
}

Character.prototype.eventOccurred = function (event) {
    this.affectGold(event.goldAmount);
    this.affectHealth(event.healthAmount);
}

Character.prototype.affectGold = function (goldChange) {
    this.gold+= goldChange;
    if (this.gold < 0) {
        this.gold = 0;
    }
}

Character.prototype.affectHealth = function (healthChange) {
    this.health+= healthChange;
    if (this.health <= 0) {
        //Character is dead
        //TODO handle death
        this.health = 0;
    }
}

//This is attaching methods to our class
Character.prototype.getHealth = function () {
    return this.health;
}

Character.prototype.getGold = function () {
    return this.gold;
}

Character.prototype.getType = function () {
    return this.type;
}

function BattleNun(type) {
    this.type = type;
    //We call the Character constructor
    //the first argument is the current scope (this), the second and onward are all the arguments to the parent
    // Character.call(this, 'battle nun');
}

//This "inherits" from our Character class, so BattleNun derives from it
BattleNun.prototype = new Character();

//We should set the constructor on here to our constructor
// BattleNun.prototype.constructor = BattleNun;


function WarriorMonk(type) {
    this.type = type;

    //We call the Character constructor
    //the first argument is the current scope (this), the second and onward are all the arguments to the parent
    // Character.call(this, 'warrior monk');
}

//This "inherits" from our Character class, so WarriorMonk derives from it
WarriorMonk.prototype = new Character();
//We should set the constructor on here to our constructor
// WarriorMonk.prototype.constructor = WarriorMonk;

function AssassinPriest(type) {
    this.type = type;
    //We call the Character constructor
    //the first argument is the current scope (this), the second and onward are all the arguments to the parent
    // Character.call(this, 'assassin priest');
}

// //This "inherits" from our Character class, so WarriorMonk derives from it
AssassinPriest.prototype = new Character();
// //We should set the constructor on here to our constructor
// AssassinPriest.prototype.constructor = AssassinPriest;

function chooseCharacter(type) {

    if (type === 'battle nun') {
        player = new BattleNun();
    } else if (type === 'warrior monk') {
        player = new WarriorMonk();
    } else if (type === 'assassin priest') {
        player = new AssassinPriest()
    }
        else {
            return;
        }

    console.log(player.getHealth());
    console.log(player.getGold());
    console.log(player.getType());

    // var event = rand();
    // console.log(event);
    // player.eventOccurred(event);
    // displayEvent(event);

    return player;
}



     //RANDOM EVENTS STUFF
// var badAndGoodEvents = 
//     [   
//         {situation: "clawed by bear", healthAmount: -5, goldAmount: 0}, 
//         {situation: "Found deer hide you can trade in town", healthAmount: 0, goldAmount: 5}, 
//         {situation: "Tripped on a pebble", healthAmount: -1, goldAmount:0}, 
//         {situation: "You found some clean water", healthAmount: 2, goldAmount:0}, 
//         {situation: "You are dehydrated", healthAmount: -1, goldAmount:0}, 
//         {situation: "You found shelter before a storm", healthAmount: 1, goldAmount:0}, 
//         {situation: "You have a hole in your pocket and lost some gold", healthAmount: 0, goldAmount:-2}, 
//         {situation: "A good samaritan gave you some gold", healthAmount: 0, goldAmount:5}, 
//         {situation: "Robbed by a gang of thieves", healthAmount:0, goldAmount:-5}, 
//         {situation: "You encounter a traveling healer, who offers to examine you and heal any wounds or illnesses you may have", healthAmount: 5, goldAmount: 0},
//         {situation: "A terrible storm passes through, and you get caught in it. You make it through, but you are wet and get a cold.", healthAmount: -5, goldAmount: 0}
//     ];

// function getRandomEvent()
// {
//     var randomEvent = [];
//         for (var i=0;i<1;i++){
//             rand();
//         }
//     console.log(randomEvent);   
// }   

// function rand(){
//     var random = badAndGoodEvents[Math.floor(Math.random() * badAndGoodEvents.length)];

//     if (randomEvent.indexOf(random) == -1) {
//         randomEvent.push(random);
//         return random;
//     }
//     else
//         return rand();
// }

// function displayEvent(event) {
//     var eventElement = document.querySelector('p.event');
//     var text = "Situation: " + event.situation + "<br>";
//     text+= "Gold effect: " + event.goldAmount + "<br>";
//     text+= "Health effect: " + event.healthAmount + "<br>";
//     eventElement.innerHTML = text;
// }

//END RANDOM EVENTS STUFF

// function updateTotalStats(player, totalGold, totalHealth){

// }

//how to print just text and not a decision, is it a function since they need to
//click a button to get to next function option


// var text;
// document.querySelector('button.button-class').addEventListener('click', function (e) {
//     e.preventDefault();
//     var element = document.querySelector('p.event');
//     switch (element.innerHTML) {
//         case 'Attack Guards': attackGuards();
//              'Avoid Guards': avoidGuards();
//              text = "You meet Guards at the gate that taunt you.  Will you attack or give them your lunch money";
//             //handle this onClick
//         break;
//         case 
//             //handle this onClick
//         break;
//     }
// });

// function newPage(){
//     document.getElementById("gameArea").innerHTML = "<div>You are being attacked by gang of thieves! To Fight back select 1.  To pay them off press 2</div";

// }

//HEALTH FUNCTIONS, CALL THESE FUNCTIONS IN EACH RANDOM EVENT, AND ALSO INSIDE CORRESPONDING ONCLICK EVENTS FOR EACH CHOICE.

function modifyHealth(difference) {
    this.health = this.health + difference;
}

//ALERT THESE FUNCTIONS AT THE END OF THE GAME.
// function announceGoldAmount() {
//     alert(goldCount.length);
// }

// function announceHealthAmount() {
//     alert(healthCount.length);
// }


//BACK STORY FUNCTIONS, CALL THESE IN THE HTML
function monkBackStory() {
    var htmlOutput = "<p>The monks of Tanai worship the earth and how it keeps it's people grounded and humble. If you want to play this character click the button below. If you want to see more refresh the page.</p>";
    htmlOutput += '<button onclick="chooseCharacter(\'warrior monk\');monkTempleChoice()" type="button">Start Warrior Monk</button>';
    // subtractFiveGold();
    document.getElementById("gameArea").innerHTML= htmlOutput;

//SAME TEMPLATE AS FUNCTIONS BELOW, JUST MAKE THE BUTTON CORRESPOND WITH THE APPROPRIATE TEMPLE CHOICE FUNCTION, OR TELL THEM TO JUST REFRESH PAGE IN THE TEXT
}

function nunBackStory() {
    var htmlOutput = "<p>The nuns of Tanai worship the sun and how its brilliance encourages peoples good deads to shine.  If you want to play this character click the button below if you want to see the other back stories refresh the page.</p>";
    htmlOutput += '<button onclick="chooseCharacter(\'battle nun\');nunTempleChoice()" type="button">Start Battle Nun</button>';
    document.getElementById("gameArea").innerHTML= htmlOutput;

}

function priestBackStory() {
    var htmlOutput = "<p>The priests of Tanai worship the moon and how it guides people into the light when the world is at its darkest moment. If you want to play this character click the button below if you want to see other back stories refresh the page.</p>";
    htmlOutput += '<button onclick="chooseCharacter(\'assassin priest\');priestTempleChoice()" type="button">Start Assassin Priest</button>';
    document.getElementById("gameArea").innerHTML= htmlOutput;
}

//Warrior Monk Beginning Choice.
function monkTempleChoice() {
var htmlOutput = "<p>You, the Battle Nun, and the Assassin Priest meet in the Ancient Temple of Tanai to plead your respective cases. Upon entering the main shrine, you all experience a brilliant flash of light, and receive a divine intervention. You are all told that, in order to have your idealogy be the ruling one, to go on a holy endeavor across the land to retrieve a lost relic: the Sceptre of the Heavens. You each look at each other, and immediately depart the temple. There are three exits; the back door to the alley, the side door to the main city street, or the main doors to the city market. Which do you choose?</p>";
htmlOutput += '<button onclick="leaveThruBack()" type="button">Leave quietly out the back.</button>';
htmlOutput += '<button onclick="leaveThruSide()" type="button">Leave quickly out the side entrance.</button>';
htmlOutput += '<button onclick="leaveThruMain()" type="button">Leave out the main entrance to the city market.</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

//Battle Nun Beginning Choice.
function nunTempleChoice() {
var htmlOutput = "<p>You, the Warrior Monk, and the Assassin Priest meet in the Ancient Temple of Tanai to plead your respective idealogies. Upon entering the main shrine, you all experience a brilliant flash of light, and receive a divine intervention. You are all told that, in order to have your idealogy be the ruling one, to go on a holy endeavor across the land to retrieve a lost relic: the Sceptre of the Heavens. You each look at each other, and immediately depart the temple. There are three exits; the back door to the alley, the side door to the main city street, or the main doors to the city market. Which do you choose?</p>";
htmlOutput += '<button onclick="leaveThruBack()" type="button">Leave quietly out the back.</button>';
htmlOutput += '<button onclick="leaveThruSide()" type="button">Leave quickly out the side entrance.</button>';
htmlOutput += '<button onclick="leaveThruMain()" type="button">Leave out the main entrance to the city market.</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

//Assassin Priest Beginning Choice.
function priestTempleChoice() {
var htmlOutput = "<p>You, the Battle Nun, and the Warrior Monk meet in the Ancient Temple of Tanai to plead your respective cases. Upon entering the main shrine, you all experience a brilliant flash of light, and receive a divine intervention. You are all told that, in order to have your idealogy be the ruling one, to go on a holy endeavor across the land to retrieve a lost relic: the Sceptre of the Heavens. You each look at each other, and immediately depart the temple. There are three exits: the back door to the alley, the side door to the main city street, or the main doors to the city market. Which do you choose?</p>";
htmlOutput += '<button onclick="leaveThruBack()" type="button">Leave quietly out the back.</button>';
htmlOutput += '<button onclick="leaveThruSide()" type="button">Leave quickly out the side entrance.</button>';
htmlOutput += '<button onclick="leaveThruMain()" type="button">Leave out the main entrance to the city market.</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

function leaveThruSide() {
var htmlOutput = "<p>Leaving quickly through the side entrance, you head out into the main street. In your haste, you almost bump into a corrupt bishop on his way into the temple. He glares at you menacingly, and demands you make a monetary offering, or else risk being damned by the gods. Do you pay him off and leave in peace, or attack and stand up for yourself?</p>";
htmlOutput += '<button onclick="attackBishop(); player.modifyHealth(-5)" type="button">Attack</button>';
htmlOutput += '<button onclick="payBishop()" type="button">Make "Offering"</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
alert(player.health);
}

function leaveThruBack() {
var htmlOutput = "<p>Leaving quietly out the back, you head into the alley hoping to leave the city without being seen. Unfortunately, a gang of thieves is hanging out in the alley, waiting to take unsuspecting temple worshipers' gold. Will you give them everything you have and leave without trouble, or attack them and teach them a lesson?</p>";
htmlOutput += '<button onclick="attackThieves()" type="button">Attack</button>';
htmlOutput += '<button onclick="payTheives()" type="button">Pay Off</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

function leaveThruMain() {
var htmlOutput = "<p>Running through the main temple entrance doors, you head straight into the city market, hoping to make a straight shot to the city gates. You accidentally bump shoulders with a city guard, who promptly begins questioning you. Will you bribe him, or decide not to put up with his questioning and attack? </p>";
htmlOutput += '<button onclick="attackGuard()" type="button">Attack</button>';
htmlOutput += '<button onclick="bribeGuard()" type="button">Bribe</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

//IF SIDE DOOR, THEN THESE TWO FUNCTIONS
function attackBishop() {
var htmlOutput = "<p>You attack the Bishop, leaving him a bloody mess. Unfortunately he had a dagger on him, and although was able to get a few minor cuts in, ultimately you emerge victorious! You take his gold, and continue on toward the city gates.</p>";
htmlOutput += '<button onclick="encounterGateGuardsOne()" type="button">Continue on!</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

function payBishop() {
var htmlOutput = "<p>You give the Bishop 5 gold pieces, who greedily snatches them out of your hand. 'Glad you know your place' he snarls, as he continues on into the temple. Seething, you continue on toward the city gates hoping that this was worth it.</p>";
htmlOutput += '<button onclick="encounterGateGuardsTwo()" type="button">Continue on.</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

//IF BACK DOOR, THEN THESE TWO FUNCTIONS
function attackThieves() {
var htmlOutput = "<p>You decide not to give in to the thieves, and brandish your weapon. They surround you, and one by one begin to attack. Your superior training and fighting abilities kick in, and you systematically defeat every last one of them. You are not unscathed, however. You take their gold, and leave them groaning and heaped up on the ground. You continue heading on toward the city gates.</p>";
htmlOutput += '<button onclick="encounterGateGuardsOne()" type="button">Continue on!</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

function payThieves() {
var htmlOutput = "<p>You decide to pay off the thieves, not being fully certain that they will leave you alone. However, after a few tense moments, then gang leader smiles menacingly and lets you pass by. 'You may not be so lucky next time' he says, as you continue on toward the city gates.</p>";
htmlOutput += '<button onclick="encounterGateGuardsTwo()" type="button">Continue on.</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

//IF MAIN TEMPLE DOORS, THEN THESE TWO FUNCTIONS
function attackGuard() {
var htmlOutput = "<p>You rush the guard and attack. He is heavily armored, but because you rushed forward you gain an advantage. You get a few good blows in before he draws his sword, but the battle intensifies once he does. After a long period of exchanging blows, you emerge victorious! You take the guard's gold, and limp on toward the city gate.</p>";
htmlOutput += '<button onclick="encounterGateGuardsOne()" type="button">Continue on!</button>'
document.getElementById("gameArea").innerHTML= htmlOutput;
}

function bribeGuard() {
var htmlOutput = "<p>Running through the main temple entrance doors, you head straight into the city market, hoping to make a straight shot to the city gates. You accidentally bump shoulders with a city guard, who promptly begins questioning you. Will you bribe him, or decide not to put up with his questioning and attack? </p>";
htmlOutput += '<button onclick="encounterGateGuardsTwo()" type="button">Continue on.</button>';
document.getElementById("gameArea").innerHTML= htmlOutput; 
}

//IF ANY CHARACTER CHOSE TO FIGHT, THEN THIS FUNCTION
function encounterGateGuardsOne() {
var htmlOutput = "<p>You come upon the city gates. However, city peasants saw your previous battle and alerted the guards. The gate guards see you, and begin to approach. Do you rush forward and attack, or pay them off to look the other way?</p>";
htmlOutput += '<button onclick="attackGateGuards()" type="button">Attack</button>';
htmlOutput += '<button onclick="bribeGateGuards()" type="button">Bribe</button>';
document.getElementById("gameArea").innerHTML= htmlOutput; 
}

//IF ANY CHARACTER CHOSE TO BRIBE/PAY OFF, THEN THIS FUNCTION
function encounterGateGuardsTwo() {
var htmlOutput = "<p>You come upon the city gates. As you begin to pass through the gates, the guards glance at you, and then wave you on. Good thing you didn't make a huge seen! You pass through peacefully, and successfully leave the city.</p>";
htmlOutput += '<button onclick="decideMountainsOrForest()" type="button">Exit City</button>';
document.getElementById("gameArea").innerHTML= htmlOutput; 
}

function attackGateGuards() {
var htmlOutput = "<p></p>";
htmlOutput += '<button onclick="decideMountainsOrForest()" type="button">Exit City</button>';
document.getElementById("gameArea").innerHTML= htmlOutput; 
}

function bribeGateGuards() {
var htmlOutput = "<p></p>";
htmlOutput += '<button onclick="decideMountainsOrForest()" type="button">Exit City</button>';
document.getElementById("gameArea").innerHTML= htmlOutput; 
}

function decideMountainsOrForest() {
var htmlOutput = "<p></p>";
htmlOutput += '<button onclick="FUNCTION" type="button">Attack</button>';
htmlOutput += '<button onclick="FUNCTION" type="button">Bribe</button>';
document.getElementById("gameArea").innerHTML= htmlOutput; 
}