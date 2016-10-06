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









        while(!(lookingFor == "1" || lookingFor == "2" || lookingFor == "3" || lookingFor == "4")){
            lookingFor=prompt("Choose your character (1) Battle Nun, (2) Assassin Priest, or (3) Warrior Monk. (Please type a number between 1-3)");
            //filter? can we use a for loop here with a filter?
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
