/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//this code will be used in the initial function (), using the DRY principle

// variable declaration: 
/*var scores = [0, 0];
var roundScore = 0;     
var activePlayer = 0;

//Make the dice disappear by default
document.querySelector('.dice').style.display = 'none';

//set all the values to default (0)
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0'; */

//Event to make the function to run: ROLL DICE BUTTON
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';//dice referes to the var dice in num 1 

    // 3. update the round score If the number is NOT 1
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;/*if the 
        active player is 0 then the current 0 element will get the text content and vice versa*/
    } else {
        //next player 
        nextPlayer();
    }
});

// Event listener for the second button: HOLD BUTTON
document.querySelector('.btn-hold').addEventListener('click', function(){
    // add the current score to the global score
    scores[activePlayer] += roundScore;
    
    // update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!!!';

        // hide the dice
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('Winner!!!');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // next player
        nextPlayer();
    }

}); 

// DONT REPEAT YOURSEL PRINCIPLE: the code in the this function should be written all the places we
// have next player, so to avoid repeating the same code, we created this: function nextPlayer().
// All we have to do is to call the function nextPlayer (); 

function nextPlayer() {
    //next player (using the turnary operator)
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
    roundScore = 0;
    /*if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }*/

    //set the values to default when it comes to the players turn
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //change the active class depending on the current player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
    //hide the dice 
    document.querySelector('.dice').style.display = 'none';
}

// Event listener for the button: NEW GAME BUTTON
    document.querySelector('.btn-new').addEventListener('click', function(){
    
    initial();    
        
    });


// creating the initial function() so the game will restart
function initial() {

    // reset the game
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    //Make the dice disappear by default
    document.querySelector('.dice').style.display = 'none';

  //set all the values to default (0)
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //set players NAMES to 1 and 2
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    //remove the WINNER from the players
    document.querySelector('.player-0-panel').classList.remove('Winner!!!');
    document.querySelector('.player-1-panel').classList.remove('Winner!!!');

    //remove the ACTIVE PLAYER from the players
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //then we add the ACTIVE CLASS back to the first one: player 1
    document.querySelector('.player-0-panel').classList.add('active');
}










// Getting the random number for the dice (from 1 to 6)
//dice = Math.floor(Math.random() * 6) + 1; this variable is transfered in to the function

//Getting element (dice numbers) from the game page
//document.querySelector('#current-' + activePlayer).textContent = dice;