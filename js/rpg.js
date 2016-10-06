"use strict";


function Character(type) {
    this.health = 100;
    this.gold = 1;
    this.type = type;

    //making random events based on how much gold or health they give or make you lose
	var badEvents = [{situation: "clawed by bear", healthAmount: 2, goldAmount: 5}];

	this.badEventsConsequences = function(consequences){
		if(consequences.hasOwnProperty("situation") && consequences.hasOwnProperty("healthAmount" && consequences.hasOwnProperty("goldAmount")))
			badEvents.push(consequences);
	}

}
this.badEventsTotal = function(){
	var total = 0;
	badEvents.forEach(function(badEvent)
		if(badEvent.situation === "clawed by bear"){
			total += badEvent.healthAmount && total += badEvent.goldAmount;
		}
		else{
			total -= badEvent.healthAmount && total += badEvent.goldAmount;
		}
	});
	return total;
};
//getFull?
Character.prototype.getFull = function(){
	return this.health + " " + this.gold + " " this.type;
};
Character.prototype.getProfile = function(){
	return this.getFull() + ", bad events total: " + this.badEventsTotal();
};

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
