// Get references to the video and button
const video = document.getElementById('wildlifeVideo');
const toggleBtn = document.getElementById('toggleBtn');

// Toggle: if video is playing, hide it (pause + hide).
// If it's not playing, show it and play it.
toggleBtn.addEventListener('click', function () {
  if (video.paused) {
    video.style.display = 'block';
    video.play();
    toggleBtn.setAttribute('aria-pressed', 'true');
  } else {
    video.pause();
    video.style.display = 'none';
    toggleBtn.setAttribute('aria-pressed', 'false');
  }
});
