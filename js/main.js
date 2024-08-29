const IncBtn = document.querySelector('.div__incbutton');
const DecBtn = document.querySelector('.div__decbutton');
const counterDisplay = document.querySelector('.div__counter');

let counter = 0

function Inc () {
    counter = counter + 1
    counterDisplay.textContent = counter
}

function Dec () {
    counter = counter - 1 
    counterDisplay.textContent = counter
}

IncBtn.addEventListener ("click", Inc)
DecBtn.addEventListener ("click", Dec)