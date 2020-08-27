const keys = document.querySelectorAll('.key');
const fileName = document.querySelectorAll('.file');

keys.forEach((div) =>{
    fileName.forEach((audio) => {
        if(audio.getAttribute('data-key') === div.getAttribute('data-key')){
            let text = audio.getAttribute('src').replace(/.+\//, "").replace(/\..+/, "").toLowerCase();
            text = text.charAt(0).toUpperCase() + text.slice(1,10);
           
            const span = document.createElement('span');
            span.textContent = text;
            span.classList.toggle('sound');
            div.appendChild(span);
            console.log(span.textContent);
        }

    });
});


window.addEventListener('keyup', (e) => {
    play(e.keyCode);
});

function play(keyCode) {
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if(!audio) return;
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.toggle("playing");
    
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}