"use strict";


function character(){};

character.prototype.health = 200;

character.prototype.getHealth = function(){
	return this.health;
}

//inheritance 

battleNun.prototype = new character;