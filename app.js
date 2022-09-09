/* 
    Build a a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.
    
    - Create an array of at least 5 phrases
        set getRandomPhrasesArray to 'theearlybirdgetstheworm', 'actionsspeaklouderthanwords', 
        'slowandsteadywinstherace', 'everycloudhasasilverlining', 'goodthingscometothosewhowait'

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
const btnReset = document.querySelector(".btn__reset");
const getRandomPhrasesArray = [
  "theearlybirdgetstheworm",
  "actionsspeaklouderthanwords",
  "slowandsteadywinstherace",
  "everycloudhasasilverlining",
  "goodthingscometothosewhowait",
];
let incorrectGuesses = 0;
