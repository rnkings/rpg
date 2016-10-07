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

    
var randomEvent = [];
for (var i=0;i<1;i++){
    rand();
}

console.log(randomEvent);

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

function attackGuards(){

}

function avoidGuards(){

}

document.querySelector('button.button-class').addEventListener('click', function (e) {
    e.preventDefault();
    var element = document.querySelector('p.event');
    switch (element.innerHTML) {
        case 'Attack Guards': attackGuards();
            //handle this onClick
        break;
        case 'Avoid Guards': avoidGuards();
            //handle this onClick
        break;
    }
});