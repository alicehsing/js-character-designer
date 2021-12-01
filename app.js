// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');

const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');

const reportEl = document.getElementById('report');

const chatchphrasesEl = document.getElementById('catchphrases');
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
    let headValue = headDropdown.value;
    // increment the head change count state
    headCount++;
     // clear out the DOM
    headEl.textContent = '';
    // update the dom for the head
    // use the value to change the correct img tag's `.src` property 
    let img = document.createElement('img');
    img.src = `./assets/${headValue}-head.png`;
    headEl.append(img);
    // update the stats to show the new count
    displayStats();
});


middleDropdown.addEventListener('change', () => {
    let middleValue = middleDropdown.value;
    middleCount++;
    headEl.textContent = '';
    let img = document.createElement('img');
    img.src = `./assets/${middleValue}-middle.png`;
    middleEl.append(img);
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    let bottomValue = bottomDropdown.value;
    bottomCount++;
    bottomEl.textContent = '';
    let img = document.createElement('img');
    img.src = `./assets/${bottomValue}-pants.png`;
    bottomEl.append(img);
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    
    // push the new catchphrase to the catchphrase array in state
    // update the dom for the bottom
    // clear out the form input's value so it's empty to the user
    // update the dom to show the new catchphrases (call a function to do this work)

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    reportEl.textContent = `You have changed the head ${headCount} times, the body ${middleCount} times, and the pants ${bottomCount} times. And nobody can forget your character\'s classic catchphrase:`
    const statsString = makeStatsString(); // call this function with the correct arguments
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases

    // loop through each catchphrase in state
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
}
