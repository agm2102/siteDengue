let sintomas = document.querySelector("#sintomas")
let proliferacao = document.querySelector("#proliferacao")
let diagnostico = document.querySelector("#diagnostico")
let prevencao = document.querySelector("#prevencao")
let tratamento = document.querySelector("#tratamento")
let btnInicio = document.querySelector(".btnInicio")

const alturaTela = window.screen.height

sintomas.addEventListener('click', () => {

    switch (alturaTela) {
        case 1440:
            window.scroll({
                top: ((alturaTela * 68.5) / 100),
                behavior: "smooth"
            })
            break;
        case 1080:
            window.scroll({
                top: ((alturaTela * 96) / 100),
                behavior: "smooth"
            })
            break
        case 720:
            window.scroll({
                top: ((alturaTela * 149) / 100),
                behavior: "smooth"
            })
            break
    }
})
diagnostico.addEventListener('click', () => {
    switch (alturaTela) {
        case 1440:
            window.scroll({
                top: ((alturaTela * 128) / 100),
                behavior: "smooth"
            })
            break;
        case 1080:
            window.scroll({
                top: ((alturaTela * 112) / 100),
                behavior: "smooth"
            })
            break
        case 720:
            window.scroll({
                top: ((alturaTela * 176) / 100),
                behavior: "smooth"
            })
            break
    }
})
prevencao.addEventListener('click', () => {
    switch (alturaTela) {
        case 1440:
            window.scroll({
                top: ((alturaTela * 139) / 100),
                behavior: "smooth"
            })
            break;
        case 1080:
            window.scroll({
                top: ((alturaTela * 187) / 100),
                behavior: "smooth"
            })
            break
        case 720:
            window.scroll({
                top: ((alturaTela * 291) / 100),
                behavior: "smooth"
            })
            break
    }   
})

btnInicio.addEventListener('click', () => {
    window.scroll({
        top: 0,
        behavior: "smooth"
    })
})