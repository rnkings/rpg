"use strict";


function Character(type) {
    this.health = 100;
    this.gold = 1;
    this.type = type;

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

function BattleNun() {
    //We call the Character constructor
    //the first argument is the current scope (this), the second and onward are all the arguments to the parent
    Character.call(this, 'battle nun');
}

//This "inherits" from our Character class, so BattleNun derives from it
BattleNun.prototype = Object.create(Character.prototype);
//We should set the constructor on here to our constructor
BattleNun.prototype.constructor = BattleNun;


function WarriorMonk() {
    //We call the Character constructor
    //the first argument is the current scope (this), the second and onward are all the arguments to the parent
    Character.call(this, 'warrior monk');
}

//This "inherits" from our Character class, so WarriorMonk derives from it
WarriorMonk.prototype = Object.create(Character.prototype);
//We should set the constructor on here to our constructor
WarriorMonk.prototype.constructor = WarriorMonk;



function chooseCharacter(type) {
    var player;

    if (type === 'battle nun') {
        player = new BattleNun();
    } else if (type === 'warrior monk') {
        player = new WarriorMonk();
    }

    console.log(player.getHealth());
    console.log(player.getGold());
    console.log(player.getType());

    var event = rand();
    console.log(event);
    player.eventOccurred(event);
    displayEvent(event);

    return player;
}



     //making random events based on how much gold or health they give or make
var badAndGoodEvents = 
    [   
        {situation: "clawed by bear", healthAmount: -5, goldAmount: 0}, 
        {situation: "Found deer hide you can trade in town", healthAmount: 0, goldAmount: 5}, 
        {situation: "Tripped on a pebble", healthAmount: -1, goldAmount:0}, 
        {situation: "You found some clean water", healthAmount: 2, goldAmount:0}, 
        {situation: "You are dehydrated", healthAmount: -1, goldAmount:0}, 
        {situation: "You found shelter before a storm", healthAmount: 1, goldAmount:0}, 
        {situation: "You have a hole in your pocket and lost some gold", healthAmount: 0, goldAmount:-2}, 
        {situation: "A good samaritan gave you some gold", healthAmount: 0, goldAmount:5}, 
        {situation: "Robbed by a gang of thieves", healthAmount:0, goldAmount:-5}, 
        {situation: "You encounter a traveling healer, who offers to examine you and heal any wounds or illnesses you may have", healthAmount: 5, goldAmount: 0},
        {situation: "A terrible storm passes through, and you get caught in it. You make it through, but you are wet and get a cold.", healthAmount: -5, goldAmount: 0}
    ];

function getRandomEvent()
{
    var randomEvent = [];
        for (var i=0;i<1;i++){
            rand();
        }
    console.log(randomEvent);   
}   

function rand(){
    var random = badAndGoodEvents[Math.floor(Math.random() * badAndGoodEvents.length)];

    if (randomEvent.indexOf(random) == -1) {
        randomEvent.push(random);
        return random;
    }
    else
        return rand();
}

function displayEvent(event) {
    var eventElement = document.querySelector('p.event');
    var text = "Situation: " + event.situation + "<br>";
    text+= "Gold effect: " + event.goldAmount + "<br>";
    text+= "Health effect: " + event.healthAmount + "<br>";
    eventElement.innerHTML = text;
}

function updateTotalStats(player, totalGold, totalHealth){

}

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
function addOneHealthPoint() {
    healthCount.push(1);
}

function addThreeHealthPoints() {
    healthCount.push(1,1,1);
}

function addFiveHealthPoints() {
    healthCount.push(1,1,1,1,1);
}

function subtractOneHealthPoint() {
    healthCount.pop();
}

function subtractThreeHealthPoints() {
    healthCount.pop();
    healthCount.pop();
    healthCount.pop();
}

function subtractFiveHealthPoints() {
    healthCount.pop();
    healthCount.pop();
    healthCount.pop();
    healthCount.pop();
    healthCount.pop();
}

//GOLD FUNCTIONS, CALL THESE FUNCTIONS IN EACH RANDOM EVENT, AND ALSO INSIDE CORRESPONDING ONCLICK EVENTS FOR EACH CHOICE.
function addOneGold() {
    goldCount.push(1);
}

function addThreeGold() {
    goldCount.push(1,1,1);
}

function addFiveGold() {
    goldCount.push(1,1,1,1,1);
}

function subtractOneGold() {
    goldCount.pop();
}

function subtractThreeGold() {
    goldCount.pop();
    goldCount.pop();
    goldCount.pop();
}

function subtractFiveGold() {
    goldCount.pop();
    goldCount.pop();
    goldCount.pop();
    goldCount.pop();
    goldCount.pop();
}

var goldCount = [];

var healthCount = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];


//ALERT THESE FUNCTIONS AT THE END OF THE GAME.
function announceGoldAmount() {
    alert(goldCount.length);
}

function announceHealthAmount() {
    alert(healthCount.length);
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
htmlOutput += '<button onclick="attackBishop()" type="button">Attack</button>';
htmlOutput += '<button onclick="payBishop()" type="button">Make "Offering"</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

function leaveThruBack() {
var htmlOutput = "<p>Leaving quietly out the back, you head into the alley hoping to leave the city without being seen. Unfortunately, a gang of thieves is hanging out in the alley, waiting for unsuspecting temple worshipers to take their gold. Will you give them everything you have and leave without trouble, or attack them and teach them a lesson?</p>";
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

function attackBishop() {
var htmlOutput = "<p>You attack the Bishop, </p>";
htmlOutput += '<button onclick="function()" type="button">TEXT</button>';
htmlOutput += '<button onclick="function()" type="button">TEXT</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

function payBishop() {
var htmlOutput = "<p>Running through the main temple entrance doors, you head straight into the city market, hoping to make a straight shot to the city gates. You accidentally bump shoulders with a city guard, who promptly begins questioning you. Will you bribe him, or decide not to put up with his questioning and attack? </p>";
htmlOutput += '<button onclick="attackGuard()" type="button">Attack</button>';
htmlOutput += '<button onclick="bribeGuard()" type="button">Bribe</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

function attackThieves(){
var htmlOutput = "<p>Running through the main temple entrance doors, you head straight into the city market, hoping to make a straight shot to the city gates. You accidentally bump shoulders with a city guard, who promptly begins questioning you. Will you bribe him, or decide not to put up with his questioning and attack? </p>";
htmlOutput += '<button onclick="attackGuard()" type="button">Attack</button>';
htmlOutput += '<button onclick="bribeGuard()" type="button">Bribe</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

function payThieves(){
var htmlOutput = "<p>Running through the main temple entrance doors, you head straight into the city market, hoping to make a straight shot to the city gates. You accidentally bump shoulders with a city guard, who promptly begins questioning you. Will you bribe him, or decide not to put up with his questioning and attack? </p>";
htmlOutput += '<button onclick="attackGuard()" type="button">Attack</button>';
htmlOutput += '<button onclick="bribeGuard()" type="button">Bribe</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

function attackGuard() {
var htmlOutput = "<p>Running through the main temple entrance doors, you head straight into the city market, hoping to make a straight shot to the city gates. You accidentally bump shoulders with a city guard, who promptly begins questioning you. Will you bribe him, or decide not to put up with his questioning and attack? </p>";
htmlOutput += '<button onclick="attackGuard()" type="button">Attack</button>';
htmlOutput += '<button onclick="bribeGuard()" type="button">Bribe</button>';
document.getElementById("gameArea").innerHTML= htmlOutput;
}

function bribeGuard() {
var htmlOutput = "<p>Running through the main temple entrance doors, you head straight into the city market, hoping to make a straight shot to the city gates. You accidentally bump shoulders with a city guard, who promptly begins questioning you. Will you bribe him, or decide not to put up with his questioning and attack? </p>";
htmlOutput += '<button onclick="attackGuard()" type="button">Attack</button>';
htmlOutput += '<button onclick="bribeGuard()" type="button">Bribe</button>';
document.getElementById("gameArea").innerHTML= htmlOutput; 
}