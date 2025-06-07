let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetBtn = document.getElementById('resetBtn');

guessBtn.addEventListener('click', () => {
  const userGuess = parseInt(guessInput.value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = "🚫 Please enter a number between 1 and 100.";
    message.style.color = "#fdcb6e";
    return;
  }

  attempts++;
  if (userGuess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}.`;
    message.style.color = "#55efc4";
    guessInput.disabled = true;
    guessBtn.disabled = true;
    resetBtn.classList.remove('hidden');
  } else if (userGuess > randomNumber) {
    message.textContent = "📉 Too high! Try a smaller number.";
    message.style.color = "#fab1a0";
  } else {
    message.textContent = "📈 Too low! Try a bigger number.";
    message.style.color = "#74b9ff";
  }

  attemptsDisplay.textContent = `Attempts: ${attempts}`;
  guessInput.value = '';
  guessInput.focus();
});

resetBtn.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  guessInput.disabled = false;
  guessBtn.disabled = false;
  message.textContent = '';
  attemptsDisplay.textContent = '';
  guessInput.value = '';
  resetBtn.classList.add('hidden');
});
