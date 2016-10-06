"use strict";


function Character(type) {
    this.health = 100;
    this.gold = 1;
    this.type = type;

 } 

function events(){
	 //making random events based on how much gold or health they give or make
	var badEvents = [{situation: "clawed by bear", healthAmount: -5,
	goldAmount: 0}{situation: "Tripped on a pebble", healthAmount: -1, goldAmount:
	0}{situation: "You are dehydrated", healthAmount: -1, goldAmount:
	0}{situation: "You have a hole in your pocket and lost some gold", healthAmount: 0, goldAmount:
	-2}{situation: "Robbed by a gang of thieves", healthAmount:0 goldAmount:-5}{situation: "A terrible storm passes through, and you get caught in it. You make it through, but you are wet and get a cold.", healthAmount: -5, goldAmount: 0}];

	var goodEvents = [{situation: "Found dear hide you can trade in town", healthAmount: 0,
	goldAmount: 5}{situation: "You found some clean water", healthAmount: 2, goldAmount:
	0}{situation: "You found shelter before a storm", healthAmount: 1, goldAmount:
	0}{situation: "A good samaritan gave you some gold", healthAmount: 0, goldAmount:
	5}{situation: "You encounter a traveling healer, who offers to examine you and heal any wounds or illnesses you may have", healthAmount: 5, goldAmount: 0}];

//math.random

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
    return player;
}
        
        switch(lookingFor){
            
            case "1":
            break;
            
            case "2": 
            break;
            
            case "3":
 			break;
        }

    }else{
        alert("Choose a valid character.");
        return;
    }
