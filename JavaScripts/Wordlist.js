let isGenerating = false;
let generatedBlob = null;

function generate() {
  const charInput = document.querySelector('.w-wordlist-char');
  const generateButton = document.querySelector('.w-wordlist-buttons-gen');
  const downloadButton = document.querySelector('.w-wordlist-buttons-down');
  const loading = document.querySelector('.w-wordlist-alert-loading');
  const loadingPercent = document.querySelector('.w-wordlist-alert-loading-percent');
  const readyMessage = document.querySelector('.w-wordlist-alert-ready');
  const errorNoCharacters = document.querySelector('.w-wordlist-alert-error-4');
  const errorProblemInCharacters = document.querySelector('.w-wordlist-alert-error-5');
  const errorMaxLessThanMin = document.querySelector('.w-wordlist-alert-error-1');
  const errorMinMoreThanMax = document.querySelector('.w-wordlist-alert-error-2');
  const errorNoMinMax = document.querySelector('.w-wordlist-alert-error-3');

  if (isGenerating) {
    console.log('Still generating, please wait...');
    return;
  }

  const characters = charInput.value.trim().split('');

  if (characters.filter(Boolean).length === 0) {
    errorNoCharacters.style.display = 'block';
    errorProblemInCharacters.style.display = 'none';
    errorMaxLessThanMin.style.display = 'none';
    errorMinMoreThanMax.style.display = 'none';
    errorNoMinMax.style.display = 'none';
    return;
  }  

  const minRangeInput = document.querySelector('.w-wordlist-range-min');
  const maxRangeInput = document.querySelector('.w-wordlist-range-max');
  const minRange = parseInt(minRangeInput.value);
  const maxRange = parseInt(maxRangeInput.value);

  if (isNaN(minRange) || isNaN(maxRange)) {
    errorNoCharacters.style.display = 'none';
    errorProblemInCharacters.style.display = 'none';
    errorMaxLessThanMin.style.display = 'none';
    errorMinMoreThanMax.style.display = 'none';
    errorNoMinMax.style.display = 'block';
    return;
  }

  if (maxRange < minRange) {
    errorNoCharacters.style.display = 'none';
    errorProblemInCharacters.style.display = 'none';
    errorMaxLessThanMin.style.display = 'block';
    errorMinMoreThanMax.style.display = 'none';
    errorNoMinMax.style.display = 'none';
    return;
  }

  if (minRange > maxRange) {
    errorNoCharacters.style.display = 'none';
    errorProblemInCharacters.style.display = 'none';
    errorMaxLessThanMin.style.display = 'none';
    errorMinMoreThanMax.style.display = 'block';
    errorNoMinMax.style.display = 'none';
    return;
  }

  isGenerating = true;
  generateButton.style.backgroundColor = '#333';

  loading.style.display = 'block';
  readyMessage.style.display = 'none';
  errorNoCharacters.style.display = 'none';
  errorProblemInCharacters.style.display = 'none';
  errorMaxLessThanMin.style.display = 'none';
  errorMinMoreThanMax.style.display = 'none';
  errorNoMinMax.style.display = 'none';

  const worker = new Worker('JavaScripts/wordlist-worker.js');

  worker.onmessage = function (event) {
  const { charactersText, fileName, error, password, finished } = event.data;

  if (error) {
    // Handle specific errors
    if (error === 'noCharacters') {
      errorNoCharacters.style.display = 'block';
      errorProblemInCharacters.style.display = 'none';
    } else if (error === 'problemInCharacters') {
      errorNoCharacters.style.display = 'none';
      errorProblemInCharacters.style.display = 'block';
    }
    } else if (password) {
      // Handle generated password
      console.log(password);
    } else if (finished) {
      // Finish generating passwords
      generatedBlob = new Blob([charactersText], { type: 'text/plain;charset=utf-8' });
      isGenerating = false;
      worker.terminate();
      generateButton.style.backgroundColor = '';
      loading.style.display = 'none';
      downloadButton.disabled = false;
      readyMessage.style.display = 'block';
    }
  };

  const minLength = parseInt(minRangeInput.value);
  const maxLength = parseInt(maxRangeInput.value);
  const customChars = charInput.value.trim();

  worker.postMessage({ characters, minRange, maxRange, minLength, maxLength, customChars });

  const updatePercentage = () => {
    const currentPercentage = parseInt(loadingPercent.textContent) || 0;
    if (currentPercentage < 99) {
      loadingPercent.textContent = currentPercentage + 1 + '%';
      setTimeout(updatePercentage, 10);
    }
  };

  updatePercentage();
}

function downloadWordlist() {
  if (generatedBlob) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(generatedBlob);
    link.download = 'wordlist.txt';
    link.click();
    URL.revokeObjectURL(link.href);
  }
}

function validateNumberInput(input) {
  input.value = input.value.replace(/[^0-9]/g, '');
}
