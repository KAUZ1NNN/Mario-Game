const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

function jump() {  
    mario.classList.add('jump')
    setTimeout(() =>{
        mario.classList.remove('jump');
    }, 700)
}

const loop = setInterval(() => {

    const pipePisition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if(pipePisition <= 100 && pipePisition > 0 && marioPosition < 87){
        pipe.style.animation = 'none';
        pipe.style.left = '${pipePisition}px';
    }

}, 10);


document.addEventListener('keydown', jump)


