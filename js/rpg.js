"use strict";


function character(){};

character.prototype.health = 100;

character.prototype.getHealth = function(){
	return this.health;
}

//inheritance 
function questor(){
	this.health = 100;
}


battleNun.prototype = new character;