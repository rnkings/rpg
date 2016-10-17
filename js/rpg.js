"use strict";

"use strict";

var player;

function Character(type) {
    this.health = 100;
    this.type = type;
    this.gold = 25;
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
    console.log(healthChange);
    console.log(this.getHealth());
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

Character.prototype.isDead = function () {
    return this.getHealth() < 1;
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

function AssassinPriest() {
    //We call the Character constructor
    //the first argument is the current scope (this), the second and onward are all the arguments to the parent
    Character.call(this, 'assassin priest');
}

// //This "inherits" from our Character class, so WarriorMonk derives from it
AssassinPriest.prototype = Object.create(Character.prototype);
// //We should set the constructor on here to our constructor
AssassinPriest.prototype.constructor = AssassinPriest;

function Game(character) {
    this.character = character;
}

Game.prototype.constructor = Game;

Game.prototype.getCharacter = function () {
    return this.character;
}

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

    // console.log(player.getHealth());
    // console.log(player.getGold());
    // console.log(player.getType());

    game = new Game(player);

    return player;
}

function getTextArea() {
    return document.querySelector('#gameArea .event');
}

function getButtons() {
    return document.querySelectorAll('#gameArea .choice');
}

function getFirstButton() {
    return getButtons()[0];
}

function getSecondButton() {
    return getButtons()[1];
}

function getThirdButton() {
    return getButtons()[2];
}

function setButton(button, text, onclick) {
    button.style.display = '';
    button.innerHTML = text;
    button.onclick = function (e) {
        e.preventDefault();
        hideButtons();
        onclick();
        displayHealthAndGold();
    };
}

function hideButtons() {
    getButtons().forEach(function (button) {
        hideButton(button);
    });
}

function hideButton(button) {
    button.style.display = 'none';
}

function setDescription(text) {
    getTextArea().innerHTML = text;
}

function displayHealthAndGold() {
    var healthElement = document.querySelector('.health');
    var goldElement = document.querySelector('.gold');
    if (typeof game !== 'undefined') {
        var character = game.getCharacter();
        if (character.isDead()) {
            alert('Character died :(');
            start();
            healthElement.innerHTML = '';
            goldElement.innerHTML = '';
            //TODO handle death of character - stop game, maybe allow restart?
        } else {
            healthElement.innerHTML = character.getHealth();
            goldElement.innerHTML = character.getGold();
        }
    }
}

// Global game var
// This stores our current game
var game;


function start() {
    setDescription("Welcome to Relic Quest! Choose a character to begin your adventure. Before you begin, click a button below to read the full back-story to each character...");
    setButton(getFirstButton(), "Monk's Story", monkBackStory);
    setButton(getSecondButton(), "Nun's Story", nunBackStory);
    setButton(getThirdButton(), "Priest's Story", priestBackStory);
}

//BACK STORY FUNCTIONS, CALL THESE IN THE HTML
function monkBackStory() {
    setDescription("The monks of Tanai worship the earth and how it keeps it's people grounded and humble.");
    setButton(getFirstButton(), "Start Warrior Monk", function () {
        chooseCharacter("warrior monk");
        monkTempleChoice();
    });

    setButton(getThirdButton(), "Go Back", start);

//SAME TEMPLATE AS FUNCTIONS BELOW, JUST MAKE THE BUTTON CORRESPOND WITH THE APPROPRIATE TEMPLE CHOICE FUNCTION, OR TELL THEM TO JUST REFRESH PAGE IN THE TEXT
}

function nunBackStory() {
    setDescription("The nuns of Tanai worship the sun and how its brilliance encourages peoples good deads to shine.");
    setButton(getFirstButton(), "Start Nun", function () {
        chooseCharacter("battle nun");
        nunTempleChoice();
    });

    setButton(getThirdButton(), "Go Back", start);
}

function priestBackStory() {
    setDescription("The priests of Tanai worship the moon and how it guides people into the light when the world is at its darkest moment.");
    setButton(getFirstButton(), "Start Priest", function () {
        chooseCharacter("assassin priest");
        priestTempleChoice();
    });

    setButton(getThirdButton(), "Go Back", start);
}

//Warrior Monk Beginning Choice.
function monkTempleChoice() {
    setDescription("You, the Battle Nun, and the Assassin Priest meet in the Ancient Temple of Tanai to plead your respective cases. Upon entering the main shrine, you all experience a brilliant flash of light, and receive a divine intervention. You are all told that, in order to have your idealogy be the ruling one, to go on a holy endeavor and retrieve a lost relic.");
    setButton(getFirstButton(), "Back door", leaveThruBack);
    setButton(getSecondButton(), "Side exit", leaveThruSide);
    setButton(getThirdButton(), "Main exit", leaveThruMain);
}

//Battle Nun Beginning Choice.
function nunTempleChoice() {
    setDescription("You, the Warrior Monk, and the Assassin Priest meet in the Ancient Temple of Tanai to plead your respective idealogies. Upon entering the main shrine, you all experience a brilliant flash of light, and receive a divine intervention. You are all told that, in order to have your idealogy be the ruling one, to go on a holy endeavor and retrieve a lost relic.");
    setButton(getFirstButton(), "Back door", leaveThruBack);
    setButton(getSecondButton(), "Side exit", leaveThruSide);
    setButton(getThirdButton(), "Main exit", leaveThruMain);
}

//Assassin Priest Beginning Choice.
function priestTempleChoice() {
    setDescription("You, the Battle Nun, and the Warrior Monk meet in the Ancient Temple of Tanai to plead your respective idealogies. Upon entering the main shrine, you all experience a brilliant flash of light, and receive a divine intervention. You are all told that, in order to have your idealogy be the ruling one, to go on a holy endeavor and retrieve a lost relic.");
    setButton(getFirstButton(), "Back door", leaveThruBack);
    setButton(getSecondButton(), "Side exit", leaveThruSide);
    setButton(getThirdButton(), "Main exit", leaveThruMain);
}

function leaveThruSide() {
    setDescription("You leave quickly through the side entrance, you head out into the main street.  In your haste, you almost bump into a corrupt bishop on his way into the temple.  He glares at you menacingly, and demands you make a monetary offering, or else risk being damned by the gods.  Do you pay him off and live in peave or attack and stand up for yourself?");
    setButton(getFirstButton(), "Fight!", fightBishop);
    setButton(getThirdButton(), "Pay off", payBishop);
}

function fightBishop(){
    var character = game.getCharacter();
    character.affectGold(5);
    character.affectHealth(-5);

    setDescription("You decided to fight that meanie of a bishop. He might not have looked like a fighter but you got slapped around before you managed to knock him out.  You quickly take his purse of gold and scamper off.");
    setButton(getFirstButton(), "Continue!", continueTowardsGates);
}

function payBishop(){
    var character = game.getCharacter();
    character.affectGold(-5);
    character.affectHealth(0);

    setDescription("Argh, you don't want to enable this crooked bishop but at the same time you really need to get a head start on your quest and you just don't have time for this.  You pay him and leave.");
    setButton(getFirstButton(), "Continue!", continueTowardsGates);
}


function leaveThruBack() {
    setDescription("You leave quickly through the back door, only to find a gang of thieves waiting for you.  This really isn't your day.  Your first steps on your quest and you already have to decide, will you fight them or pay them off?");
    setButton(getFirstButton(), "Fight!", fightThieves);
    setButton(getThirdButton(), "Pay off", payThieves);
}

function fightThieves(){
    var character = game.getCharacter();
    character.affectGold(6);
    character.affectHealth(-6);

    setDescription("You decided to fight the thieves. You might as well toughen up now. The only thing you didn't think about before attacking was that there are three of them and only one of you. You manage to knock them all out by shear luck and take their gold.");
    setButton(getFirstButton(), "Continue!", continueTowardsGates);
}

function payThieves(){
    var character = game.getCharacter();
    character.affectGold(-5);
    character.affectHealth(0);

    setDescription("You decide peace is the best policy and pay them.  Besides what does a reglious head need with gold anyways.  If someone was that desperate for money then you don't mind giving it to them.  Let let you pass and you continue on your way.");
    setButton(getFirstButton(), "Continue", continueTowardsGates);
}


function leaveThruMain() {
    setDescription("Running through the main temple entrance doors, you head straight into the city market, hoping to make a straight shot to the city gates. You accidentally bump shoulders with a city guard, who promptly begins questioning you. Will you bribe him, or decide not to put up with his questioning and attack??");
    setButton(getFirstButton(), "Fight!", fightGuards);
    setButton(getThirdButton(), "Pay off", payGuards);
}

function fightGuards(){
    var character = game.getCharacter();
    character.affectGold(7);
    character.affectHealth(-7);

    setDescription("You decided to fight the guards. They always made fun of the people from the temple whenever they went into town and it was time someone stood up to them. The only thing you didn't think about before attacking was that there are three of them and only one of you. You manage to knock them all out by shear luck and take their gold.");
    setButton(getFirstButton(), "Continue!", continueTowardsGates);
}

function payGuards(){
    var character = game.getCharacter();
    character.affectGold(-7);
    character.affectHealth(0);

    setDescription("You decide to pay them. This does not sit well with you since you feel you are adding to their greed, but at the same time you need to make haste to find the holy relic so that your religion can be spread across the land so that tyrants like these guards would learn to have a heart.");
    setButton(getFirstButton(), "Continue!", continueTowardsGates);
}


function continueTowardsGates() {
    setDescription("The guards look at you and decide to let you go on into the market");
    setButton(getFirstButton(), "Go to the market!", goToMarket);
}

function goToMarket() {
    setDescription("Arriving at the market, you encounter many sights and smells. Ahead of you, you see a drummer, a food stall, and a gambler with a sleight of hand game.")
    setButton(getFirstButton(), "Play a knife game", playKnifeGame);
    setButton(getSecondButton(), "Get some food", eatAtFoodStall);
    setButton(getThirdButton(), "Continue on!", chooseForestMountains);
}

function playKnifeGame() {
    var character = game.getCharacter();
    character.affectGold(0);
    character.affectHealth(-5);

    setDescription("Ouch, you stink at this game! You stabbed yourself!");
    setButton(getFirstButton(), "Play again!", playKnifeGame);
    setButton(getThirdButton(), "Go back to the market entrance", goToMarket);

}

function eatAtFoodStall() {
    var character = game.getCharacter();
    character.affectGold(-2);
    character.affectHealth(5);

    setDescription("Yum! That food was really good.");
    setButton(getFirstButton(), "Eat more!", eatAtFoodStall);
    setButton(getThirdButton(), "Go back to the market entrance", goToMarket);
}

function chooseForestMountains() {
    var character = game.getCharacter();
    setDescription("You've left the market, having felt you have spent too much time enjoying the sights and smells while the other religious heads were probably ahead of you.  Soon you come to a fork in the road.  The sign in front of you reads, The Dewy Mountains left or right to the Punkwuppy Forest. Which will you choose?");
    setButton(getFirstButton(), "Left", leftDewyMountains);
    setButton(getThirdButton(), "Right", RightPuckwuppyForest);

}

function leftDewyMountains() {
    setDescription("You chose the mountains knowing how spiritual the mountains are seeing as they touch the heavens. Unfortunately you were too busy looking at the sky to notice a mountain troll in you way. You can either fight the troll or throw some shiny gold coins in the hopes of distracting it long enough to run!");
    setButton(getFirstButton(), "Fight Troll!", fightTroll);
    setButton(getThirdButton(), "Throw Coins", throwCoins);

}

function RightPuckwuppyForest() {
    setDescription("You choose Puckwuppy Forest for no other reason than the fact it sounds safe. And safe it is! As you stop by a river to take a drink of water you also relize this forest is rich in specks of gold!  You can either take the time to gather enough specks to make a coin or take a drink of water and be on your way!");
    setButton(getFirstButton(), "Gather gold specks!", gatherGoldSpecks);
    setButton(getThirdButton(), "Drink water", drinkWater);
}

function fightTroll(){
     var character = game.getCharacter();
    character.affectGold(5);
    character.affectHealth(-5);

    setDescription("You decided to fight the troll, which was in a way very stupid of you since the troll is a lot larger than you and squashed you quite a bit.  Luckily you were able to knock him out. You found a purse on him full of gold from previous travelers he had stolen from. You limp away wishing you had just thrown away some of your own gold.");
    setButton(getFirstButton(), "Limp Away!", limpAway);

}

function throwCoins(){
    var character = game.getCharacter();
    character.affectGold(-5);
    character.affectHealth(0);

    setDescription("You decided to throw some of your gold coins, now that you were in the wildreness you wouldn't be needing them anyways.  The greedy troll took your bait and ran after the coins, buying you enough time to escape.");
    setButton(getFirstButton(), "Run Away!", runAway);
}

function gatherGoldSpecks(){
    var character = game.getCharacter();
    character.affectGold(1);
    character.affectHealth(0);

    setDescription("You decided to stay and gather some gold specks.  It took a long time and you regret wasting so much time on such a pointless task.  You comfort yourself that maybe they will come in use if you have to distract something in the future.");
    setButton(getFirstButton(), "Wander Off!", wanderOff);

}

function drinkWater(){
    var character = game.getCharacter();
    character.affectGold(0);
    character.affectHealth(-5);

    setDescription("This forest is not a safe as you once thought, the water is dirty and you end up getting sick and having to stop to make camp for the day. You lose a whole day in travel and cannot eat for the rest of the day.");
    setButton(getFirstButton(), "Start your journey in the morning!", journeyInMorning);

}

function limpAway(){
    setDescription("You've limped away and find yourself stumbling across a cave.  Do you search it?  The relic could be in there.  Then again caves are known to all sorts of beasts and it may not be worth risking further injury.");
    setButton(getFirstButton(), "Search Cave!", searchCave);
    setButton(getThirdButton(), "Keep going", keepGoing);

}

function runAway(){
    setDescription("You've run away from a troll onto a cliff.  Do you scale the cliff down to the valley below or try to find higher ground to keep climbing?");
    setButton(getFirstButton(), "Scale Cliff!", scaleCliff);
    setButton(getThirdButton(), "Find a Way Up", findWayUp);

}

function wanderOff(){
    setDescription("You've wandered off but you haven't been paying attention to where you've been going.  Now you are lost.  Do you choose to go left or right?");
    setButton(getFirstButton(), "left!", leftWander);
    setButton(getThirdButton(), "Right!", rightWander);

}

function journeyInMorning(){
    setDescription("You wake up in the morning feeling much better but groggy.  You look up to see the sun rising.  Do you follow the sun or turn you back to it and go the other way?");
    setButton(getFirstButton(), "Follow the sun!", followSun);
    setButton(getThirdButton(), "Go the other way!", turnOnSun);

}

function searchCave(){
    var character = game.getCharacter();
    character.affectGold(5);
    character.affectHealth(-5);

    setDescription("You've decided to search the cave! My, my you are an adventurous soul. Lucky you! You find treasure, and lots of bones. While trying to inspect the bones you disturb a nest of bats who come screaching at you. Scared you inhail some guano in your terror making you sick.  Green you continue on your way.");
    setButton(getFirstButton(), "Continue!", disgruntledCave);

}

function keepGoing(){
    var character = game.getCharacter();
    character.affectGold(0);
    character.affectHealth(0);

    setDescription("You decide you are not feeling any spiritual energy and decide to keep going, besides you are fairly sertain your god would give you a sign if it were anything of importance.");
    setButton(getFirstButton(), "Continue!", bear);


}

function scaleCliff(){
    var character = game.getCharacter();
    character.affectGold(0);
    character.affectHealth(-5);

    setDescription("You are an adventurous soul!  But also a clumsy one.  You decide to scale the cliff but slip and fall.  Luckily you were almost at the bottom of the cliff so you only have minor boo boos.  Thank goodness!");
    setButton(getFirstButton(), "Continue!", pugglySwampus);

}

function findWayUp(){
    var character = game.getCharacter();
    character.affectGold(0);
    character.affectHealth(0);

    setDescription("You decide to go up. The closer you are to your gods maybe the easier it will be to hear them and get some directions to the holy relic.  That would be nice, you think");
    setButton(getFirstButton(), "Continue!", bear);

}

function leftWander(){
    var character = game.getCharacter();
    character.affectGold(0);
    character.affectHealth(0);

    setDescription("You wander left but still find yourself lost.  Have you seen that tree before? How about that rock. Oh holy relic, you think to yourself.  Where are you?  I just want to go home and have some tea.");
    setButton(getFirstButton(), "Continue!", pugglySwampus);

}

function rightWander(){
    var character = game.getCharacter();
    character.affectGold(0);
    character.affectHealth(0);

    setDescription("You wander right and realize you might never know where you are.  You've never been here before.  You try to decide what to do next.");
    setButton(getFirstButton(), "Continue!", pugglySwampus);

}

function followSun(){
    var character = game.getCharacter();
    character.affectGold(0);
    character.affectHealth(0);

    setDescription("Decide to follow the sun.  It's bright and may help to guide your journey.  After a while of staring at it you blink a few times remembering if you stared at it for too long you could go blind and then not be able to find the holy relic.");
    setButton(getFirstButton(), "Continue!", bear);

}

function turnOnSun(){
    setDescription("The sun is in your eyes making it hard to see, you turn your back at it and decide to continue on your journey away from its bright light.  You wouldn't want to loose your site and not be able to look for the holy relic now would you?");
    setButton(getFirstButton(), "Continue!", bear);

}

function bear(){
    setDescription("You've stumbled across a bear.  It has just awaken from hybernation and is hungry and grumpy.  Do you throw gold to distract the grumpy bear in hopes of being able to run away or do you fight it?");
    setButton(getFirstButton(), "Distract!", distract);
    setButton(getThirdButton(), "Fight", fight);

}

function pugglySwampus(){
    setDescription("You've stumbled across a pugglyswampus!  You didn't think any had existed anymore.  The pugglyswampus offers you the chance to guess it's favorite color for gold.  Ever kind as the pugglewampus was it decided to give you two choices, green or blue?");
    setButton(getFirstButton(), "green!", green);
    setButton(getThirdButton(), "blue", blue);

}

function disgruntledCave(){
    setDescription("Disgruntled from the guano you find yourself wondering if you should further explore the cave or keep going?");
    setButton(getFirstButton(), "Keep Exploring!", keepExploringCave);
    setButton(getThirdButton(), "Leave the cave", leaveCave);

}

function keepExploringCave(){
    setDescription("You don't find anything more than more bat guano.  Feeling as though you have been led a stray you wander out of the cave, calling to the holy relic to come out of hiding.");
    setButton(getFirstButton(), "Continue", pugglySwampus);


}

function leaveCave(){
    setDescription("You leave the cave not wanting to ask for any more bad luck.  A small fortune was not worth what just happened in there.  As your eyes adjust to the light you decide to continue north on your journey");
    setButton(getFirstButton(), "Leave Cave", town);


}

function green(){
    var character = game.getCharacter();
    character.affectGold(5);
    character.affectHealth(0);

    setDescription("You guess green and you are correct!! The pugglyswampus shrieks with glee, of course green is its favor color for it is the color of nataure and it's home.");
    setButton(getFirstButton(), "Continue!", town);


}

function blue(){
    var character = game.getCharacter();
    character.affectGold(0);
    character.affectHealth(-5);

    setDescription("You guess blue and you are wrong!! The pugglyswampus shrieks with anger, and pelts you with red hot stones.  How could you have guessed wrong?");
    setButton(getFirstButton(), "Continue!", town);

}

function distract(){
    var character = game.getCharacter();
    character.affectGold(-5);
    character.affectHealth(0);

    setDescription("You decide to distract by throwing gold! Angry that you have to give gold to a being that won't even use it, you dash away knowing your quest is worth it.");
    setButton(getFirstButton(), "Continue!", town);

}

function fight(){
    var character = game.getCharacter();
    character.affectGold(0);
    character.affectHealth(-5);

    setDescription("You decide to fight and take our your weapons!  Only the length of your journey has made you weap and you get pummeled pretty badly.  Luckily you make it out with your life but no gold was to be had.");
    setButton(getFirstButton(), "Continue!", town);

}

function town(){
    setDescription("You keep wandering and eventually stumble across another town and decide to go and rest up, it has been a hard journey so far.");
    setButton(getFirstButton(), "Go to town", arrivingAtTown);

}

function arrivingAtTown() {
    setDescription("Arriving at the town, you encounter many sights and smells. Ahead of you, you see a dancer, a food stall, and a gambler with a cup game.")
    setButton(getFirstButton(), "Play a cup game", playCupGame);
    setButton(getSecondButton(), "Get some food", eatAtFoodStall);
    setButton(getThirdButton(), "Continue on!", walkOutTown);
}

function playCupGame() {
    var character = game.getCharacter();
    character.affectGold(0);
    character.affectHealth(-5);

    setDescription("You guessed wrong.  You're not very good at games are you?  Then again you don't usually play many at the temple.");
    setButton(getThirdButton(), "Continue", walkOutTown);

}

function eatFood() {
    var character = game.getCharacter();
    character.affectGold(-2);
    character.affectHealth(5);

    setDescription("Yum! That food was really good.");
    setButton(getThirdButton(), "Continue", walkOutTown);

}

function walkOutTown(){
    setDescription("You decide that you've gotten distracted again by too many games and smells, it seems you are making up for lost time at the temple.");
    setButton(getThirdButton(), "Continue", chooseSwampBog);
}

function chooseSwampBog(){
    setDescription("You come across the swamp on loneliness or the bog of sadness.  Neither sound great but you are pretty sure that you will have to go through some bad before you can reach the good.  Which way will you choose?");
    setButton(getFirstButton(), "Bog of Loneliness!", bog);
    setButton(getThirdButton(), "Swamp of Sadness", swamp);
}

function swamp(){
    setDescription("The swamp! Nothing sounds better than getting stuck in stench mud! But nothing else would dare walk through the swamp right?  You should not have to encounter anyone else.");
    setButton(getFirstButton(), "Continue!", swampMonster);
}

function bog(){
    setDescription("The bog!  Excellent choice!  It's full of the dead from past battles!  They can't hurt you now that they are dead right? Right?");
    setButton(getFirstButton(), "Continue!", bogMonster);

}

function bogMonster(){
    setDescription("Wrong! You were so wrong.  Out of the bog a monster appears, green and slimy and looking to eat something...alive.  That would be you...do you fight? Or throw gold hoping such a gastily beast is interested in shiny things.");
    setButton(getFirstButton(), "Fight!", fightMonster);
    setButton(getThirdButton(), "Throw Gold", throwGoldMonster);
}

function swampMonster(){
    setDescription("Wrong! You were so wrong.  Out of the swamp a monster appears, green and slimy and looking to eat something...alive.  That would be you...do you fight? Or throw gold hoping such a gastily beast is interested in shiny things.");
    setButton(getFirstButton(), "Fight!", fightMonster);
    setButton(getThirdButton(), "Throw Gold", throwGoldMonster);
}

function fightMonster(){
    var character = game.getCharacter();
    character.affectGold(10);
    character.affectHealth(-10);

    setDescription("Wow that monster really kicked your butt!  You barely made it out alive. You got 10 gold though, that monster must have liked shiny things, now you wish you would have thrown some gold.");
    setButton(getFirstButton(), "Continue!", oldTemple);
}

function throwGoldMonster(){
    var character = game.getCharacter();
    character.affectGold(10);
    character.affectHealth(-10);

    setDescription("Wow that monster really kicked your butt!  You barely made it out alive. You got 10 gold though, that monster must have liked shiny things, now you wish you would have thrown some gold.");
    setButton(getFirstButton(), "Continue!", oldTemple);
}

function oldTemple(){
    setDescription("You come across an old temple, no one is around and many of the pillars are cracked and falling down.  You decide to go  in and see what things you can find.");
    setButton(getFirstButton(), "Continue!", foundTheRelic);

}

function foundTheRelic(){
    setDescription("You enter the old temple and search each room.  All you see is a bunch of dust.  You say a prayer for the old temple and as you are about to leave something shiny catches your eye.");
    setButton(getFirstButton(), "Continue!", somethingShiny);
}

function somethingShiny(){
    setDescription("You walk over and dust off the object.  It looks like a septor.  Your heart beats fast.  Is this the septor?  It looks old and has red stones all over it.  This has to be it you think!");
    setButton(getFirstButton(), "Continue!", backToStartingTemple);
}

function backToStartingTemple(){
    setDescription("You make haste and book it back to the main temple and wait for the other religious heads to get word.  Slowly they trickle in to see if you have truely found the holy relic.");
    setButton(getFirstButton(), "Continue!", itIsTheRelic);
}

function itIsTheRelic(){
    setDescription("After inspection they all agree, you have found the long lost holy relic! Your religion will be celebrated throughout the land.  Tears have been brought to your eyes");
    setButton(getFirstButton(), "Continue!", youWon);
}

function youWon(){
    setDescription("You won! The end!");
    setButton(getFirstButton(), "Play again!", start);
}


//IF BACK DOOR, THEN THESE TWO FUNCTIONS
function attackThieves() {
    setDescription("You decide not to give in to the thieves, and brandish your weapon. They surround you, and one by one begin to attack. Your superior training and fighting abilities kick in, and you systematically defeat every last one of them. You are not unscathed, however. You take their gold, and leave them groaning and heaped up on the ground. You continue heading on toward the city gates.");
    setButton(getFirstButton(), "Continue on!", continueTowardsGates);

    var character = game.getCharacter();

    character.affectGold(5);
    character.affectHealth(-5);
    continueTowardsGates();
}



start();
