
let sintomas = document.querySelector("#sintomas")
let proliferacao = document.querySelector("#proliferacao")
let diagnostico = document.querySelector("#diagnostico")
let prevencao = document.querySelector("#prevencao")
let tratamento = document.querySelector("#tratamento")
let oqueEdengue = document.querySelector("#oqueEdengue")

let sessaoOqueEdengue = document.getElementById("sessaoOqueEdengue")
let sessaoSintomas = document.getElementById("sessaoSintomas")
let sessaoProliferacao = document.getElementById("sessaoProliferacao")
let sessaoDiagnostico = document.getElementById("sessaoDiagnostico")
let sessaoPrevencao = document.getElementById("sessaoPrevencao")
let sessaoTratamento = document.getElementById("sessaoTratamento")

let btnInicio = document.querySelector(".btnInicio")
const alturaTela = window.screen.height

sintomas.addEventListener('click', () => {

    sessaoPrevencao.style.transform = 'translateX(200%)'
    sessaoTratamento.style.transform = 'translateX(200%)'
    sessaoProliferacao.style.transform = 'translateX(200%)'
    sessaoDiagnostico.style.transform = 'translateX(200%)'
    sessaoOqueEdengue.style.transform = 'translateX(200%)'
    sessaoSintomas.style.transform = 'translateX(0%)'
})
diagnostico.addEventListener('click', () => {

    sessaoPrevencao.style.transform = 'translateX(200%)'
    sessaoTratamento.style.transform = 'translateX(200%)'
    sessaoProliferacao.style.transform = 'translateX(200%)'
    sessaoDiagnostico.style.transform = 'translateX(0%)'
    sessaoOqueEdengue.style.transform = 'translateX(200%)'
    sessaoSintomas.style.transform = 'translateX(200%)'

})
prevencao.addEventListener('click', () => {
    sessaoPrevencao.style.transform = 'translateX(0%)'
    sessaoTratamento.style.transform = 'translateX(200%)'
    sessaoProliferacao.style.transform = 'translateX(200%)'
    sessaoDiagnostico.style.transform = 'translateX(200%)'
    sessaoOqueEdengue.style.transform = 'translateX(200%)'
    sessaoSintomas.style.transform = 'translateX(200%)'

})
tratamento.addEventListener('click', () => {
    sessaoPrevencao.style.transform = 'translateX(200%)'
    sessaoTratamento.style.transform = 'translateX(0%)'
    sessaoPrevencao.style.transform = 'translateX(200%)'
    sessaoDiagnostico.style.transform = 'translateX(200%)'
    sessaoOqueEdengue.style.transform = 'translateX(200%)'
    sessaoSintomas.style.transform = 'translateX(200%)'

})
proliferacao.addEventListener('click', () => {
    sessaoPrevencao.style.transform = 'translateX(200%)'
    sessaoTratamento.style.transform = 'translateX(200%)'
    sessaoProliferacao.style.transform = 'translateX(0%)'
    sessaoDiagnostico.style.transform = 'translateX(200%)'
    sessaoOqueEdengue.style.transform = 'translateX(200%)'
    sessaoSintomas.style.transform = 'translateX(200%)'

})
oqueEdengue.addEventListener('click', () => {
    sessaoPrevencao.style.transform = 'translateX(200%)'
    sessaoTratamento.style.transform = 'translateX(200%)'
    sessaoProliferacao.style.transform = 'translateX(200%)'
    sessaoDiagnostico.style.transform = 'translateX(200%)'
    sessaoOqueEdengue.style.transform = 'translateX(0%)'
    sessaoSintomas.style.transform = 'translateX(200%)'

})
document.addEventListener('keydown', (eve) => {
    const key = eve.key
    if (key == 'Tab') {
        sessaoPrevencao.style.transform = 'translateX(200%)'
        sessaoTratamento.style.transform = 'translateX(200%)'
        sessaoProliferacao.style.transform = 'translateX(200%)'
        sessaoDiagnostico.style.transform = 'translateX(200%)'
        sessaoOqueEdengue.style.transform = 'translateX(200%)'
        sessaoSintomas.style.transform = 'translateX(0%)'
        window.location.reload()
    }
})
window.addEventListener('load', () => {
    redimensionar();
})
function redimensionar() {

    let sobreDengue = document.getElementById('sobreDengue')
    var windowHeight = window.innerHeight;
    var screenHeight = screen.height;

    if (screenHeight >= 1140) {
        sobreDengue.style.height = (windowHeight - 171) + "px"
        console.log(windowHeight - 171)
    }
    else if (screenHeight >= 1080) {    
        sobreDengue.style.height = (windowHeight - 172) + "px"
        console.log(windowHeight - 172)
    }
    else if(screenHeight >= 720){
        sobreDengue.style.height = (windowHeight - 170) + "px"
        console.log(windowHeight - 173)
    }

}