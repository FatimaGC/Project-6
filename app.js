/* 
    Build a a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.
    
    - Create an array of at least 5 phrases
        set getRandomphrases to 'The early bird gets the worm', 'Actions speak louder than words', 
        'Slow and steady wins the race', 'Every cloud has a silver lining', 'Good things come to those who wait'

    - Choose a random phrase from that array 
    - Split the phrase into letters
    - Put those letters onto the game board

    - A player guesses a letter 
        get letter from user 
        set guessedLetter to user input

    - A player gets a total of 5 guesses 
        set incorrectGuesses to 0

    - Compare the chosen letter to the random phrase
        if letter is equal to letter in getRandomPhrasesArray
            update game board with the chosen letter
        else
            remove one of the player's 5 total guesses
        endif

    - A letter can only be guessed once - disable that letter

    - Display winning or losing screen depending on outcome
        if incorrectGuesses is less than 5 and phrase is completed
            display winning screen
        else
            incorrectGuesses are equal to 5
            display losing screen
        endif
        
*/

const qwerty = document.querySelector("#qwerty");
const phrase = document.querySelector("#phrase");
const startBtn = document.querySelector(".btn__reset");
const phrases = [
  "The early bird gets the worm",
  "Actions speak louder than words",
  "Slow and steady wins the race",
  "Every cloud has a silver lining",
  "Good things come to those who wait",
];
let incorrectGuesses = 0;

//Hides overlay when start button is clicked
startBtn.addEventListener("click", () => {
  const overlay = document.querySelector("#overlay");
  overlay.style.display = "none";
});

//return a random phrase from an array
const getRandomPhraseAsArray = (array) => {
  const randomNumber = Math.floor(Math.random() * array.length);
  //   console.log(randomNumber);
  return array[randomNumber];
};

getRandomPhraseAsArray(phrases);
