document.addEventListener("DOMContentLoaded", function () {
  // ... الكود السابق ...

  // Example: Function to download wordlist
  function downloadWordlist() {
      // Example implementation
      alert('Downloading wordlist...');
      // Re-enable Generate button
      generateButton.disabled = false;
  }

  // Event listener for Download button
  downloadButton.addEventListener('click', downloadWordlist);

  // Event listener for Generate button
  generateButton.addEventListener('click', function () {
      // Valid input, proceed with generation
      // Example: Call a function to generate wordlist here
      const worker = new Worker('wordlist-worker.js');

      worker.onmessage = function (event) {
          if (event.data.type === 'loading') {
              // Notify the user or show loading indicator
              alert('Loading wordlist...');
          } else if (event.data.type === 'loaded') {
              // Wordlist generation completed
              const generatedWordlist = event.data.wordlist;
              alert('Wordlist generated!');
              console.log(generatedWordlist); // Log the wordlist to console

              // Disable Generate button and enable Download button
              generateButton.disabled = true;
              downloadButton.disabled = false;

              // Terminate the worker
              worker.terminate();
          }
      };

      // Send data to the worker for wordlist generation
      worker.postMessage({
          characters: charInput.value.trim(),
          minLength: parseInt(minInput.value),
          maxLength: parseInt(maxInput.value)
      });
  });
});