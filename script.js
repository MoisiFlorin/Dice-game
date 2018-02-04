var scores, roundScore, activePlayer, gamePlaying;

init();

 document.querySelector('.roll-dice').addEventListener('click', function() {
     //Random number
     if(gamePlaying) {
     var dice = Math.floor(Math.random() * 6) + 1;
     
     //Display result
     var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
     diceDOM.src = 'img/dice-' + dice + '.png';
    
     //Update the round score 
     if (dice !== 1) {
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore;
     } else {
         nextPlayer();  
     }
   }
 });

document.querySelector('.hold').addEventListener('click', function() {
    if (gamePlaying) {
    //add current score to global score
    scores[activePlayer] += roundScore;
    
    //update the ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    //check if player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none'; 
        document.querySelector('.player-' + activePlayer + 'box-').classList.add('winner');
        document.querySelector('.player-' + activePlayer + 'box-').classList.remove('active');
        gamePlaying = false;
    } else {
        //next player
        nextPlayer();
    }
  }
});

function nextPlayer() {
    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1; //next player 
    roundScore = 0;
         
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
         
    document.querySelector('.box-player-1').classList.toggle('active');
    document.querySelector('.box-player-2').classList.toggle('active');
    
         
    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.new-game').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none'; 

    document.getElementById('score-1').textContent = '0';
    document.getElementById('score-2').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.getElementById('name-1').textContent = 'Player 1';
    document.getElementById('name-2').textContent = 'Player 2';
    document.querySelector('.box-player-1').classList.remove('winner');
    document.querySelector('.box-player-2').classList.remove('winner');
    document.querySelector('.box-player-1').classList.remove('active');
    document.querySelector('.box-player-2').classList.remove('active');
    document.querySelector('.box-player-1').classList.add('active');   
}

//dice = Math.floor(Math.random() * 6) + 1;
//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice; 
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
