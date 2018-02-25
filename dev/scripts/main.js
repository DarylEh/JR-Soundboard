
function onKeyDown(e){
    //grabbing keyboard keycodes
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) {
        return;
    }
    key.classList.add('playing');
    audio.currentTime = 0; //rewind to the start
    audio.play();
    
}
function onClick(e) {
    //takes in the nodelist and grabs the keycode via this.dataset.key
    const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
    const key = document.querySelector(`div[data-key="${this.dataset.key}"]`);
    playSound(audio, key);
}
function playSound(audio, key) {
    if (!audio) return;
    //adding .playing class for transition and animations
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
} 

function removeTransition(e) {
    if (e.propertyName !== 'box-shadow') return;
    e.target.classList.remove('playing');
    console.log(e);
}

// variable grabs all divs labeled .key
const keys = document.querySelectorAll('.key');

//returns a node list and goes thru each item to listen for a click event and runs onClick function
keys.forEach(key => key.addEventListener('click', onClick));

//returns a node list and goes thru each item to listen for a transitionend event and runs
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//listens for a keydown event and runs onKeyDown function
window.addEventListener('keydown', onKeyDown);

//used to remove sticky hover states on touch devices
const touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)
if (!touchsupport) { // browser doesn't support touch
    document.documentElement.className += " non-touch"
}