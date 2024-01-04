function generateWordlist() {
    const characters = document.querySelector(".w-wordlist-char").value;
    const minLength = parseInt(document.querySelector(".w-wordlist-range-min").value);
    const maxLength = parseInt(document.querySelector(".w-wordlist-range-max").value);

    if (minLength > maxLength) {
        alert("Error: Max length cannot be less than Min length");
        return;
    }

    const wordlist = generateWordlistHelper(characters, minLength, maxLength);
    const wordlistTextarea = document.querySelector(".w-wordlist-list");
    const downloadButton = document.querySelector(".w-wordlist-list-down");

    // Split the wordlist into an array of words
    const wordArray = wordlist.split('\n');

    // Display words gradually
    displayWordsGradually(wordArray, wordlistTextarea, 0);

    downloadButton.disabled = false;
}

function displayWordsGradually(words, textarea, index) {
    if (index < words.length) {
        textarea.value += words[index] + '\n';
        index++;
        setTimeout(function () {
            displayWordsGradually(words, textarea, index);
        }, 100); // يمكنك تعديل الوقت حسب متطلباتك
    }
}

function generateWordlistHelper(characters, minLength, maxLength) {
    let result = "";

    function generate(current, length) {
        if (length >= minLength && length <= maxLength) {
            result += current + '\n';
        }
        if (length < maxLength) {
            for (let i = 0; i < characters.length; i++) {
                generate(current + characters[i], length + 1);
            }
        }
    }

    generate("", 0);
    return result;
}

function downloadWordlist() {
    const wordlist = document.querySelector(".w-wordlist-list").value;
    const blob = new Blob([wordlist], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "wordlist.txt";
    link.click();
}
