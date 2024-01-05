// Wordlist.js
// ...

// Create a new Web Worker
const worker = new Worker('JavaScripts/Worker.js');

function generateWordlist() {
    const characters = document.querySelector(".w-wordlist-char").value;
    const minLength = parseInt(document.querySelector(".w-wordlist-range-min").value);
    const maxLength = parseInt(document.querySelector(".w-wordlist-range-max").value);

    if (minLength > maxLength) {
        alert("Error: Max length cannot be less than Min length");
        return;
    }

    // Send a message to the Web Worker
    worker.postMessage({ characters, minLength, maxLength });
}

// Handle the message received from the Web Worker
worker.onmessage = function (e) {
    const wordlist = e.data;

    const wordlistTextarea = document.querySelector(".w-wordlist-list");
    const downloadButton = document.querySelector(".w-wordlist-list-down");

    // Split the wordlist into an array of words
    const wordArray = wordlist.split('\n');

    // Display words gradually
    displayWordsGradually(wordArray, wordlistTextarea, 0);

    downloadButton.disabled = false;
}

// ...
