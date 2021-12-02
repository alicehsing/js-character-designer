// import functions and grab DOM elements
import { makeStatsString } from './utils.js';

const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');

const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');

const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;
// set state for all of the character's catchphrases
let catchphraseArray = [];

headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const selection = headDropdown.value;
    // increment the head change count state
    headCount++;
     // clear out the DOM
    headEl.textContent = '';
    // update the dom for the head, use the value to change the correct img tag's `.src` property 
    let img = document.createElement('img');
    img.src = `./assets/${selection}-head.png`;
    headEl.append(img);
    // update the stats to show the new count
    displayStats();
});

middleDropdown.addEventListener('change', () => {
    let selection = middleDropdown.value;
    middleCount++;
    middleEl.textContent = '';
    let img = document.createElement('img');
    img.src = `./assets/${selection}-middle.png`;
    middleEl.append(img);
    displayStats();
});

bottomDropdown.addEventListener('change', () => {
    let selection = bottomDropdown.value;
    bottomCount++;
    bottomEl.textContent = '';
    let img = document.createElement('img');
    img.src = `./assets/${selection}-pants.png`;
    bottomEl.append(img);
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const newInput = catchphraseInput.value;
    // push the new catchphrase to the catchphrase array in state
    catchphraseArray.push(newInput);
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (call a function to do this work)
    displayCatchphrases();
});

function displayStats() {
    // change the text content of the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(headCount, middleCount, bottomCount);// call this function with the correct arguments
    reportEl.textContent = statsString;
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphraseInput.value = '';
    // clear Catchphrases();
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state  
    for (let catchphrase of catchphraseArray) {
        const p = document.createElement('p');
    // and append that HTML element to the cleared-out DOM
        catchphrasesEl.append(p);
        p.textContent = catchphrase;
    }
}
