let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const gusseslot = document.querySelector('.guesses');
const remaing = document.querySelector('.lastResult')
const loworhigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1;
let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

const validateGuess = (guess) => {
    if (isNaN(guess)) {
        alert("please enter a valid number")
    } else if (guess < 1) {
        alert('PLease enter a number more than 1');
    } else if (guess > 100) {
        alert('PLease enter a  number less than 100');
    } else {
        prevGuess.push(guess)
        if (numGuess === 11) {
            displayGuess(guess);
            displyMessage(`game over. random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
const checkGuess = (guess) => {
    if (guess === randomNumber) {
        displyMessage(`you guessed it right`)
        endGame();
    } else if (guess < randomNumber) {
        displyMessage(`Number is Tooo Low`);
    } else if (guess > randomNumber) {
        displyMessage(`Number is Tooo High`);
    }
}
const displayGuess = (guess) => {
    userInput.value = ''
    gusseslot.innerHTML += `${guess},`
    numGuess++;
    remaing.innerHTML = `${11 - numGuess}`
}

const displyMessage = (message) => {
    loworhigh.innerHTML = `<h2>${message}</h2>`
}

const endGame = () => {
    userInput.value = ''
    userInput.setAttribute('disabled', '');
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    newGame();
}

const newGame = () => {
  const newGmaeButton = document.querySelector('#newGame');
  newGmaeButton.addEventListener('click', (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    gusseslot.innerHTML = ''
    remaing.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true
  })  
}
