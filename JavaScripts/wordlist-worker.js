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
  const { characters, minRange, maxRange } = event.data;
  const chunkSize = 1000;  // تعديل حجم الدفعة حسب احتياجاتك
  let charactersText = '';

  for (let i = 0; i < characters.length; i += chunkSize) {
    const endIndex = Math.min(i + chunkSize - 1, characters.length - 1);
    const currentChunk = generateAllCombinations(characters, minRange, maxRange, i, endIndex);

    for (let j = 0; j < currentChunk.length; j++) {
      charactersText += currentChunk[j] + '\n';
    }

    self.postMessage({ charactersText, fileName: 'wordlist.txt', error: null, password: null, finished: false });
  }

  self.postMessage({ charactersText, fileName: 'wordlist.txt', error: null, password: null, finished: true });
};
