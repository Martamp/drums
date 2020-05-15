'use strict';
const keys = document.querySelectorAll('.key');

function getSound(ev) {
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);
  if (!audio) {
    return;
  }
  audio.currentTime = 0;
  audio.play();
  console.log(key);
  key.classList.add('playing');
}
function stopSound() {
  this.classList.remove('playing');
}
keys.forEach((key) => key.addEventListener('transitionend', stopSound));
window.addEventListener('keydown', getSound);
