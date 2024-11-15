//your JS code here. If required.
// Function to introduce a delay
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Async function to display the message after a delay
async function displayMessage() {
  const textInput = document.getElementById('text').value;
  const delayInput = document.getElementById('delay').value;
  const outputDiv = document.getElementById('output');

  // Check if inputs are valid
  if (textInput === '' || delayInput === '' || delayInput <= 0) {
    outputDiv.textContent = 'Please enter valid text and a positive delay value.';
    return;
  }

  // Clear previous output and introduce delay
  outputDiv.textContent = 'Loading...';
  await wait(Number(delayInput));

  // Display the user-provided text
  outputDiv.textContent = textInput;
}

// Event listener for the button click
document.getElementById('btn').addEventListener('click', displayMessage);
