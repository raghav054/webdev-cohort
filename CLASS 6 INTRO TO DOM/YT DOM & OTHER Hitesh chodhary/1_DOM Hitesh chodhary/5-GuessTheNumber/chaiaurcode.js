
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');          // we have to select the value of this
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHiMessage = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        //console.log(guess);
        
        validateGuess(guess);
    })
}

function validateGuess (guess) {
    if(isNaN(guess)){
        alert('Please Enter a valid number');
    }else if(guess < 1){
        alert('Please Enter a number more than 1');
    }else if(guess > 100){
        alert('Please Enter a number less than 100');
    }else{
        prevGuess.push(guess);
        if(numGuess == 10){
            cleanAndDisplayGuess(guess);
            displayMessage(`Game Over Randum number was ${randomNumber}`);
            endGame();
        }else{
            cleanAndDisplayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(` CONGRATULATION!🥳🥳 you guessed it right number ${randomNumber}`);
        endGame();
    }else if(guess > randomNumber){
        displayMessage('Number is TOO High');
        
    }else if(guess < randomNumber){
        displayMessage('Number is TOO low');
        
    }
}

function cleanAndDisplayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `
    // guessSlot.innerHTML = `${prevGuess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    lowOrHiMessage.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id= 'newGame'>Start New Game</h2>`
    //console.log(p);
    
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        guessSlot.innerHTML = '';
        prevGuess = [];
        numGuess = 1;
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        displayMessage('');

        playGame = true;
    })
}







/*## approach =>
    ## for collection of things and do prepration =>
(1)create randum number  (line 2)
(2)select the values in document(submit button, user ka input, from result => previous Guesses, remaing chance, your guess no. is low and high(it is a paragraph), game is over and start)   (line 4-9)
(3)create paragraph for inserting values (line 11)
(4) what kind of variable we need (line 13-16)
(I) array -> when user will submit the value so we store in array    and show whole array to the user
(II) howmany attampt he has taken
(III) for allowing play game

    ## write logic of code =>
(1) CHECK Are you available for playing game (line 18-26)
    -> if true then write a code that after clicking submit guess we can store guess value
    so pass 'guess' to the validateGuess function

(2) validateGuess function -> give guess(num) and it will validate
    -> it is used for that, user guess valid num or not (abcd, negative value etc) and give popUp (line 29-34)
    -> if guess is valid so
    (I) push in array(prevGuess) (line 36)
    (II) check if your guess chance is over so
        -> pass guess to the cleanUpGuess function
        -> give message through displayMessage function that game is over
        -> end the game (line 37-40)
        if your guess chance is remainung so
        -> pass guess to the cleanUpGuess function
        -> pass guess to the checkGuess function for check the guess (line 41-44)

(3) checkGuess function -> through displayMessage fun display the msg while checking guess to the random num. (line 48-59)

(4) cleanUpGuess function ->
    (I) clean the value of guess, which is in form of input by users
    (II) update the guessSlot (Previous Guesses:)
    (III) insrease the variable numGuess(untill 10 guess)
    (III) reduce guess reaming (line 62-65)

(5) displayMessage function -> it will interact with dom
    it will display the msg, which has passes by function
    -> lowOrHiMessage(paragraph) me h1 teg message ke sath pass ker do  (line 69)

(6) endGame function -> when calll this so
    (I) Do empty value of user input (line 74)
    (II) set disable attribute in userInput (line 75)
    (III) add class and name of class in p paragraph (line 76)
    (IV) add HTML in p and in HTML give h2 tage (line 77)
    (V) append p in startOver (which is reference of class of last div) (line 80)
    (VI) false to the playGame (line 81)
    (VII) call to the newGame (line 82)

(7) newGame function ->
    Reset the all variable and true to the playGame

*/