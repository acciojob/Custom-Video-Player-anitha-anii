/* Edit this file */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Get the elements from the DOM
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Function to toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
    toggle.textContent = '❚ ❚';
  } else {
    video.pause();
    toggle.textContent = '►';
  }
}

// Function to update the progress bar
function updateProgressBar() {
  const progress = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${progress}%`;
}

// Function to handle skip buttons
function skipVideo() {
  const skipTime = parseFloat(this.dataset.skip);
  video.currentTime += skipTime;
}

// Add event listeners
toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgressBar);
skipButtons.forEach(button => button.addEventListener('click', skipVideo));
