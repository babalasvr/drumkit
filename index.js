'use strict';

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav',
}

const criarDivs = (texto) =>
{
    const div = document.createElement('div');
    div.classList.add('keys');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

const exibir = (sons) =>
{
    Object.keys(sons).forEach(criarDivs);
}

const tocarSom = (letra) =>
{   
    // import sound from `./sounds/${sons[letra]}`
    const audio = new Audio(`./sounds/${sons[letra]}`);
    console.log(audio);
    audio.play();
}

const ativarDiv = (evento) =>
{
    let letra = '';
    if(evento.type == 'click')
    {
        letra = evento.target.id;
        console.log(letra);
    }else{
        letra = evento.key.toUpperCase();
        console.log(letra);
    }
    const letraPermitida = sons.hasOwnProperty(letra);
    if(letraPermitida)
    {
        // const letra = evento.target.id;
        tocarSom(letra);
    }
}

exibir(sons);
document.getElementById('container')
        .addEventListener('click', ativarDiv);
window.addEventListener('keydown', ativarDiv);
