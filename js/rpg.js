"use strict";


function character(health, gold, name){};

character.prototype.health = 100;

character.prototype.gold = 0;

character.prototype.name = name;

character.prototype.getHealth = function(){
	return this.health;
}

character.prototype.getGold = function(){
	return this.gold;
}

character.prototype.getName = function(){
	return this.name;
}

//inheritance 
function questor(){
	this.health = 100;
}


var battleNun = new character(100, 0, "Battle Nun");

var assassinPriest = new character(100, 0, "Assassin Priest");

var warriorMonk = new character(100, 0, "Warrior Monk");

