const bgMusic = document.getElementById('bgMusic');
const celebrationSound = document.getElementById('celebrationSound');
const button = document.getElementById('btn');

// Automatically unmute background music after first user interaction
document.addEventListener('click', () => {
  if (bgMusic.muted) {
    bgMusic.muted = false;
    bgMusic.volume = 0.3;
    bgMusic.play();
  }
}, { once: true });

// Button click → celebration only
button.addEventListener('click', () => {
  celebrationSound.currentTime = 0;
  celebrationSound.play();

  for (let i = 0; i < 150; i++) {
    createConfetti();
  }
});

// Confetti creation
function createConfetti() {
  const confetti = document.createElement('div');
  confetti.className = 'confetti';

  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = randomColor();
  confetti.style.animationDuration = Math.random() * 3 + 2 + 's';

  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), 5000);
}

function randomColor() {
  const colors = ['red', 'blue', 'yellow', 'green', 'pink', 'purple', 'orange'];
  return colors[Math.floor(Math.random() * colors.length)];
}
