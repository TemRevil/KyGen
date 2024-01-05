// Worker.js
self.onmessage = function (e) {
    // This function is called when a message is received from the main thread
    // e.data contains the data sent from the main thread

    // Perform the calculations
    const result = generateWordlistHelper(e.data.characters, e.data.minLength, e.data.maxLength);

    // Send the result back to the main thread
    self.postMessage(result);
};

function displayWordsGradually(words, textarea, index) {
    if (index < words.length) {
        textarea.value += words[index] + '\n';
        index++;
        // تحديد موضع السكرول للحفاظ على آخر سطر مرئي
        textarea.scrollTop = textarea.scrollHeight;
        setTimeout(function () {
            displayWordsGradually(words, textarea, index);
        }, 1); // يمكنك تعديل الوقت حسب متطلباتك
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
