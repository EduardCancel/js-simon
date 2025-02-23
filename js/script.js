// Element Functions
const countdownEl = document.getElementById('countdown');
const instructionsEl = document.getElementById('instructions');
const numberListEl = document.getElementById('numbers-list');
const answerFormEl = document.getElementById('answers-form');
const inputGroupEl = document.getElementById('input-group');
const btnEl = document.querySelector('.btn'); // Seleziona il primo bottone con classe "btn"
const messageEl = document.getElementById('message');

console.log(countdownEl, instructionsEl, numberListEl, answerFormEl, inputGroupEl, btnEl, messageEl);

// Add variables 
let numbGenerate = [];
let listItems = '';
let timer = 20;

// Add random generator function

function generateRandomNumber (){
    numbGenerate = [];
    listItems = ''
    for (let i = 0; i < 5; i++){
        const randomNumber =Math.round(Math.random() * 50) + 1;
        numbGenerate.push(randomNumber)
        listItems += `<li>${randomNumber}</li>`;

    }

    console.log(numbGenerate);
numberListEl.innerHTML = `<ul>${listItems}</ul>`;


    // Countdown timer 
    const intervalID = setInterval(function(){
        timer --;
        countdownEl.innerText = timer;

        if(timer === 0){
            clearInterval(intervalID);
            numberListEl.classList.add("d-none");
            answerFormEl.classList.remove("d-none");
        }
    }, 1000)
}


// Start generate random number
generateRandomNumber();

// Add eventListener at form for the submit
answerFormEl.addEventListener("submit", function(e){
    e.preventDefault();

    let userInput = [];
    let inputEl = document.querySelectorAll("#input-group input");

    for (let i = 0; i < inputEl.length; i++) {
        userInput.push(parseInt(inputEl[i].value));
    }

    let correctNumbers = [];
    let wrNumbers = [];

    for (let i = 0; i < userInput.length; i++) {
        if (numbGenerate.includes(userInput[i])) {
            correctNumbers.push(userInput[i]);
        } else {
            wrNumbers.push(userInput[i]);
        }
    }

    if (correctNumbers.length > 0) {
        alert(`Hai vinto indovinando i numeri: ${correctNumbers.join(", ")}`);
    } else {
        alert(`Non hai azzeccato nessun numero, GG!`);
    }
    console.log(`Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(", ")}`);
});




