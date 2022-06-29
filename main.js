// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//trying to set an alert up

// const checkValidInput = (answr1, answr2) => {

//   if (answr1 == "rock" && answr2 =="rock") || (hand1 == "paper" && hand2 == "paper") || (hand1 == "scissors" && hand2 == "scissors"){
//   }

// }

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

  hand1 = hand1.toLowerCase().trim()
  hand2 = hand2.toLowerCase().trim()

  // Write code here
  // Use the unit test to see what is expected

  if ( (hand1=='rock' && hand2=='rock') || (hand1=='paper' && hand2=='paper') || (hand1=='scissors' && hand2=='scissors') ) { //both hands are ROCK - its a tie

    console.log("It's a tie!")

    return "It's a tie!"

  } else if ( (hand1=='rock' && hand2=='scissors') || (hand1 =='scissors' && hand2=='paper') || (hand1 =='paper' && hand2 =='rock') ) {

    console.log('Player 1 Wins!')

    return 'Player 1 Wins!'

  } else if ( (hand1=='scissors' && hand2=='rock') || (hand1 =='paper' && hand2=='scissors') || (hand1 =='rock' && hand2 =='paper') ) {

    console.log('Player 2 Wins!')
    
    return 'Player 2 Wins!'

} else {
  getPrompt()
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

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Player 2 Wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Player 2 Wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Player 1 Wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Player 2 Wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Player 2 Wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Player 1 Wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
