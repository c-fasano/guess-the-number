

const game = {
  title: 'Guess the Number!',
  biggestNum: 10,
  smallestNum: 1,
  secretNum: null,
  prevGuesses = [], //create a variable where the new data (user's guesses will be stored)
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  
    do {
      //need to push guesses(getGuess) into empty array
      this.prevGuesses.push(this.getGuess())
      //render after guess has been made
      this.render()
      //condition regarding the guesses 
    } while ( this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)
  },



  //defing functions getGuess and render
  getGuess() {
    //variable for guess
    // 1) prompt a user to enter a guess between smallest and biggest
    let guess = parseInt((prompt `Enter a guess between ${smallestNum} and ${biggestNum}, Incorrect guesses: ${this.prevGuesses}`))
    // 2) Guess can be NaN, >= smallest, or <= biggest 
    while (isNaN(guess) || guess >= smallestNum || guess <= biggestNum) {
      // 3) parseInt wit a different prompt related to the variable guess being outside of the established range
      guess = parseInt((prompt `I think you skimmed the rules instead of reading them. Your guess must be between ${this.smallestNum} and ${this.biggestNum}.Now, have another go.`))
    return guess
    }
  },  



  render() {
    //IF secret number is guessed: display congratulations message and how many guesses it took the user to complete the game
//or ELSE it will display a message saying whether the number is too high or low
      //use template literal
    if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      alert (`Your guess is too high, please try again. Previous guesses: ${this.prevGuesses.join(", ")}`)
    } else if (this.prevGuesses[this.prevGuesses.length - 1] < this.secretNum) {
      alert (`Your guess is too low, please try again Previous guesses: ${this.prevGuesses.join(", ")}`)
    } else if (this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum) {
      alert(`You made like a hammer and nailed it! Your guess was the secret number ${this.secretNum}. Your guesses this time were ${this.prevGuesses.length}`)
    }
  }
}

//PLAY

game.play()