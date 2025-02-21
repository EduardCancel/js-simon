// Element functions
const countdownEl = document.getElementById('countdown');
const instructionsEl = document.getElementById('instructions');
const numberListEl = document.getElementById('numbers-list');
const answerFormEl = document.getElementById('answers-form');
const inputGroupEl = document.getElementById('input-group');
const formControlEl = document.getElementsByClassName('form-control'); // Fixed selector
const btnEl = document.getElementsByClassName('btn');
const messageEl = document.getElementById('message');

console.log(countdownEl, instructionsEl, numberListEl, answerFormEl, inputGroupEl, formControlEl, btnEl, messageEl);

let numbGenerate = [];
let listItems = '';
let timer = 20;

// Generate five random numbers
function generateRandomNumber() {
    numbGenerate = [];
    listItems = ''; // Reset listItems before each generation

    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.round(Math.random() * 50) + 1;
        numbGenerate.push(randomNumber);
        listItems += `<li>${randomNumber}</li>`;
    }

    console.log(numbGenerate); // Logs the generated numbers correctly
    numberListEl.innerHTML = `<ul>${listItems}</ul>`;
}

// Call the function to generate numbers
generateRandomNumber();
