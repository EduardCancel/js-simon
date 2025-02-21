//  Element functions

const countdownEl = document.getElementById('countdown')
const instructionsEl = document.getElementById('instructions')
const numberListEl = document.getElementById('numbers-list')
const answerFormEl = document.getElementById('answers-form')
const inputGroupEl = document.getElementById('input-group')
const formControlEl = document.getElementsByClassName('.form-control')
const btnEl = document.getElementsByClassName('btn')
const messageEl= document.getElementById('message')
console.log(countdownEl,instructionsEl, numberListEl,answerFormEl, inputGroupEl, formControlEl, btnEl, messageEl  );
let correctNuber = 0;

// Generate five random numbers
let randomNumbArr = []
for(let i = 0; i < 5; i++){
    randomNumbArr.push(Math.floor(Math.random() * 50) +1)
}
console.log(randomNumbArr);

// Show the number in console with a space


// Functions

// function