function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add(`playing`);
}

function removeTransition(e) {
  if (e.propertyName !== `transform`) return;
  this.classList.remove(`playing`);
}

document.addEventListener(`click`, function(e) {
  const clickAudio = document.querySelector(`audio[id="${e.srcElement.innerText}"]`);
  if(!clickAudio) return;
  clickAudio.currentTime = 0;
  clickAudio.play();
  console.log(e.target.dataset.key);
});

const keys = document.querySelectorAll(`.key`);
keys.forEach(key => key.addEventListener(`transitionend`,removeTransition));

window.addEventListener(`keydown`, playSound);
