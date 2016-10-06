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
            lookingFor=prompt("Choose your character (1) Battle Nun, (2) Assassin Priest, or (3) Warrior Monk. (Please type a number between 1-4)");
            //filter? can we use a for loop here with a filter?
        }
        switch(lookingFor){
            case "1":
                
            break;
            case "2": 
                var descendantResults = getDescendants(parent.id);
                if (descendantResults.length === 0) {
                    alert("There are no descendants");
                    return;
                }
            break;
            case "3":
                if (personOfInterest === undefined) {
                    alert("User not found.");
                    return;
                }
                if (parentsNameResults.length === 0) {
                    alert("There are no parents");
                } else {    
                    var parentsOutput = "";
                    var callback = function(parent){
                        parentsOutput += " Parents ID " + parent.id + " Parents First Name " + parent.firstName + " Parents Last Name " + parent.lastName + "\r\n";
                    }
                    
                    parentsNameResults.forEach(callback);
                    alert(parentsOutput); 
                }

                if (personOfInterest.currentSpouse != null){
                    var spouse = getSpouse(personOfInterest.currentSpouse);
                    console.log(spouse);
                    alert(spouse.firstName + " " + spouse.lastName);

                } else {
                    alert("There is no spouse");
                }

                 if (personOfInterest.parents.length > 0){
                    var siblings = getSiblings(personOfInterest.parents);
                    console.log(siblings);
                    alert(siblings[0].firstName);
                } else {
                    alert("There are no siblings");
                    return;
                }
            break;
            case "4":
            break;
        }

    }else{
        alert("Choose a valid character.");
        return;
    }
