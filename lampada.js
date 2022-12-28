var lamp = window.document.getElementById('lampada')

function estaQubrada(){
    return lamp.src.indexOf('quebrada') > -1
}

function ligar(){
    if (!estaQubrada()){
    lamp.src = 'ligada.svg'}
}

function desligar(){
    if (!estaQubrada()){
    lamp.src = 'desligada.svg'}
}

lamp.addEventListener ('click', quebrar)
function quebrar(){
    lamp.src = 'quebrada.svg'
}