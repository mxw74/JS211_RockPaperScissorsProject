'use strict';

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

    hand1 = document.getElementById('user1Input').value
    hand2 = document.getElementById('user2Input').value

    hand1 = hand1.toLowerCase().trim()
    hand2 = hand2.toLowerCase().trim()
  
    // Write code here
    // Use the unit test to see what is expected
  
    if ( (hand1=='rock' && hand2=='rock') || (hand1=='paper' && hand2=='paper') || (hand1=='scissors' && hand2=='scissors') ) { //both hands are ROCK - its a tie
  
      console.log("It's a tie!");
      document.getElementById('display').innerHTML = "It's a tie!";
    
    } else if ( (hand1=='rock' && hand2=='scissors') || (hand1 =='scissors' && hand2=='paper') || (hand1 =='paper' && hand2 =='rock') ) {
  
      console.log('Player 1 Wins!');
      document.getElementById('display').innerHTML = 'Player 1 Wins!';
  
    } else if ( (hand1=='scissors' && hand2=='rock') || (hand1 =='paper' && hand2=='scissors') || (hand1 =='rock' && hand2 =='paper') ) {
  
      console.log('Player 2 Wins!');
      document.getElementById('display').innerHTML = 'Player 2 Wins!';
  
  } else {
    // getPrompt()
    document.getElementById('display').innerHTML = 'Invalid. Please select: rock, paper, or scissors for each input'
    
    // .alert("This is invalid. Please select rock, paper, or scissors")
  }
  
  } // end of function 
  
  // the first function called in the program to get an input from the user
  // to run the function use the command: node main.js
  // to close it ctrl + C
  function getPrompt() {
    rl.question('hand1: ', (answer1) => {
      rl.question('hand2: ', (answer2) => {
        console.log( rockPaperScissors(answer1, answer2) );
        getPrompt();
      });
    });
  }