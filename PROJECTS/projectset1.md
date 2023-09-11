# Projects related to DOM

# solution code

## project 1 (background change with box color)

``` javascript
  const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (button) => {
//   console.log(button);
     button.addEventListener("click", (e) => {
        // console.log(e);
        // console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
     })
});
   
```
## project 2  (BMI Calculator)

``` javascript

const form = document.querySelector('form')
// this useCase will give you empty
// const height =  document.querySelector(('#height').valueOf)

form.addEventListener('submit', (e) => {
    e.preventDefault()

   const height =  parseInt(document.querySelector('#height').value)
   const weight =  parseInt(document.querySelector('#weight').value)
   const result =  document.querySelector('#results')
   const  text = document.querySelector('#text')

   if(height == '' || height < 0 || isNaN(height)){
    result.innerHTML = `please give a valid height ${height}`;
   }
   else if(weight == '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `please give a valid weight ${weight}`;
   }else{
    const BMI = (weight / ((height*height)/10000).toFixed(2));
    //show the result
    result.innerHTML = `<span>${BMI}</span>`;
       if(BMI <= 18.6){
        text.innerHTML = `<span>Under Weight</span>`
       }
       else if(BMI >= 18.6 && BMI <= 24.9){
        text.innerHTML = `<span>Normal Range</span>`
       }
       else{
        text.innerHTML = `<span>Over Weight</span>`
       }
   }
})
```
## project 3 (digital clock)

```javascript

const clock = document.querySelector('#clock')
//smae as
// const clock = document.getElementById('clock');


setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();

}, 1000)
```

## project 4(guess the number)

```javascript

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

```