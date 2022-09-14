/* 
    Build a a word guessing game where players will click letters from an onscreen keyboard to try to guess a random phrase.
    
    - Create an array of at least 5 phrases
        set getRandomphrases to 'The early bird gets the worm', 'Actions speak louder than words', 
        'Slow and steady wins the race', 'Every cloud has a silver lining', 'Good things come to those who wait'

    - Choose a random phrase from that array and split the phrase into letters
        function getRandomPhraseAsArray
            pass in array
            set randomNumber to generate a random number based on the array's length
            return phrase in array corresponding to randomNumber and use split method to split the string into an array of letters
        end function 

    - Display those letters on the game board
        function addPhraseToDisplay
        pass in array
        end function

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
// const phraseUL = phrase.firstElementChild;
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
  const phraseLetters = array[randomNumber].split("");

  addPhraseToDisplay(phrase, phraseLetters);
};

//adds the letters of a string to the display
const addPhraseToDisplay = (phrase, phraseLetters) => {
  // for (let i = 0; i < phraseLetters.length; i++) {
  //   const li = document.createElement("li");
  //   li.textContent = phraseLetters[i];
  //   phrase.firstElementChild.appendChild(li);

  //   if (li.textContent !== " ") {
  //     li.className = "letter";
  //   } else {
  //     li.className = "space";
  //   }
  //Refactoring using forEach loop
  // phraseLetters.forEach((phraseLetter) => {
  //   const li = document.createElement("li");
  //   li.TextContent = phraseLetter;
  //   phraseUL.appendChild(li);

  //   if (li.textContent !== " ") {
  //     li.className = "letter";
  //   } else {
  //     li.className = "space";
  //   }
  // });
  const arrayOfHTMLElements = phraseLetters.map((phraseLetter) => {
    const li = document.createElement("li");
    li.textContent = phraseLetter;

    if (li.textContent !== " ") {
      li.className = "letter";
    } else {
      li.className = "space";
    }
    return li;
  });
  console.log(arrayOfHTMLElements);
  appendElementstoPhrase(phrase, arrayOfHTMLElements);
};

const appendElementstoPhrase = (phrase, arrayOfHTMLElements) => {
  arrayOfHTMLElements.forEach((item) => {
    phrase.firstElementChild.appendChild(item);
  });

  checkLetter(arrayOfHTMLElements);
};

getRandomPhraseAsArray(phrases);

//Check if a letter is in the phrase
const checkLetter = (arrayOfHTMLElements, button) => {
  arrayOfHTMLElements.forEach((li) => {
    let isMatch = "";
    if (button.textContent === li.textContent) {
      li.className = "show";
      isMatch = button.textContent;
      return isMatch;
    }
    console.log(isMatch);
  });
};

//listen for the onscreen keyboard to be clicked
// qwerty.addEventListener("click");
