
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
document.addEventListener('keydown', (eve)=>{
    const key = eve.key
    if(key == 'Tab'){
        sessaoPrevencao.style.transform = 'translateX(200%)'
        sessaoTratamento.style.transform = 'translateX(200%)'
        sessaoProliferacao.style.transform = 'translateX(200%)'
        sessaoDiagnostico.style.transform = 'translateX(200%)'
        sessaoOqueEdengue.style.transform = 'translateX(200%)'
        sessaoSintomas.style.transform = 'translateX(0%)'
        window.location.reload()
    }
})