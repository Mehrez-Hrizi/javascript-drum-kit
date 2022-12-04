function playSound(e) {
    const key = this.document.querySelector(`.key[data-key=${e.key}]`);
    const audio = this.document.querySelector(`audio[data-key=${e.key}]`);
    if (!audio) {
        return; //stop the function from runnig all together
    }
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it is not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);