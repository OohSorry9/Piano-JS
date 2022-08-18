console.log('Piano Says: \"hello\"')

const pianoKeys = document.querySelectorAll('.key');

function playSound(newURL){
    new Audio (newURL).play();
    console.log(newURL)
}

pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i+1) : (i+1);
    const newURL = '24-piano-keys/key' + number + '.mp3';

    
    pianoKey.addEventListener('click', ()=>{

        playSound(newURL)
    })
})