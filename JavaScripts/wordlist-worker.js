// wordlist-worker.js
function generateAllCombinations(characters, minLength, maxLength, startIndex, endIndex) {
  let combinations = [];

  function generateCombination(current, remainingLength) {
    if (remainingLength === 0) {
      combinations.push(current);
      return;
    }

    for (let i = 0; i < characters.length; i++) {
      generateCombination(current + characters[i], remainingLength - 1);
    }
  }

  for (let length = minLength; length <= maxLength; length++) {
    for (let i = startIndex; i <= endIndex; i++) {
      generateCombination(characters[i], length - 1);
    }
  }

  return combinations;
}

self.onmessage = function (event) {
  const { characters, minRange, maxRange, minLength, maxLength, customChars } = event.data;
  const chunkSize = 1000;
  let charactersText = '';

  for (let i = 0; i < customChars.length; i += chunkSize) {
    const endIndex = Math.min(i + chunkSize - 1, customChars.length - 1);
    const currentChunk = generateAllCombinations(customChars, minLength, maxLength, i, endIndex);

    for (let j = 0; j < currentChunk.length; j++) {
      charactersText += currentChunk[j] + '\n';
    }

    self.postMessage({ charactersText, fileName: 'wordlist.txt', error: null, password: null, finished: false });
  }

  self.postMessage({ charactersText, fileName: 'wordlist.txt', error: null, password: null, finished: true });
};
