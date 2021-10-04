

const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  play: function() {
  prevGuesses = [] //create a variable where the new data (user's guesses will be stored)
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  },
    do {
      //need to push guesses(getGuess) into empty array
      prevGuesses.push      (getGuess) 
      //render after guess has been made
      render
      //condition regarding the guesses 
    } while (condition);



  //defing functions getGuess and render
  getGuess = function() {
    //variable for guess
    let guess = x
    // 1) prompt a user to enter a guess between smallest and biggest
    // 2) value of guesses need to be checked to see if typeof = integer
    // 3) if typeof = integer - push guess into prevGuesses array
    // Great place for a do or do while loop 
    //Guess can be NaN, >= smallest, or <= biggest 
    while (isNaN(guess) || guess >= smallestNum || guess <= biggestNum) {
      //parseInt?
      //prompt user to enter a number 
    }
  },
  return guess



  render = function() {
//IF secret number is guessed: display congratulations message and how many guesses it took the user to complete the game
//or ELSE it will display a message saying whether the number is too high or low
      //use template literal




  },
}

//PLAY

game.play()