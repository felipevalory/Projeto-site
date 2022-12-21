function verificar() {
    var fcargo = document.getElementsByName("radcargo")
    var estado = document.querySelector('[name="estados"]')
    var res = document.querySelector("div#res")
    if (fcargo[0].checked) {
        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Presidente Lula<br>eleito com 50,90% no 2º turno</strong>`
    }    
    if (fcargo[1].checked) {
        if (estado.value == 'AC') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Gladson Cameli<br>eleito com 56,75% no 1º turno</strong>`
        }
        if (estado.value == 'AL') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Paulo Dantas<br>eleito com 52,33% no 2º turno</strong>`
        }
        if (estado.value == 'AM') {
            res.style.textAlign = 'center'
            res.innerHTML = '<strong>Wilson Lima<br>eleito com 56,65% no 2º turno</strong>'
        }
        if (estado.value == 'AP') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Clécio Luis<br>eleito com 53,69% no 1º turno</strong>`
        }
        if (estado.value == 'BA') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Jerônimo Rodrigues<br>eleito com 52,79% no 2º turno</strong>`
        }
        if (estado.value == 'CE') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Elmano de Freitas<br>eleito com 54,02% no 1º turno</strong>`
        }
        if (estado.value == 'DF') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Ibaneis Rocha<br>eleito com 50,30% no 1º turno</strong>`
        }
        if (estado.value == 'ES') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Renato Casagrande<br>eleito com 53,80% no 2º turno</strong>`
        }
        if (estado.value == 'GO') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Ronaldo Caiado<br>eleito com 51,81% no 1º turno</strong>`
        }
        if (estado.value == 'MA') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Carlos Brandão<br>eleito com 51,29% no 1º turno</strong>`
        }
        if (estado.value == 'MT') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Mauro Mendes<br>eleito com 68,45% no 1º turno</strong>`
        }
        if (estado.value == 'MS') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Eduardo Riedel<br>eleito com 56,90% no 2º turno</strong>`
        }
        if (estado.value == 'MG') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Romeu Zema<br>eleito com 56,18% no 1º turno</strong>`
        }
        if (estado.value == 'PA') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Helder Barbalho<br>eleito com 70,41% no 1º turno</strong>`
        }
        if (estado.value == 'PR') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Ratinho Jr.<br>eleito com 69,64% no 1º turno</strong>`
        }
        if (estado.value == 'PB') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>João Azevedo<br>eleito com 52,51% no 2º turno</strong>`
        }
        if (estado.value == 'PE') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Raquel Lyra<br>eleita com 58,70% no 2º turno</strong>`
        }
        if (estado.value == 'PI') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Rafael Fonteles<br>eleito com 57,17% no 1º turno</strong>`
        }
        if (estado.value == 'RJ') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Cláudio Castro<br>eleito com 58,67% no 1º turno</strong>`
        }
        if (estado.value == 'RN') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Fátima Bezerra<br>eleita com 58,32% no 1º turno</strong>`
        }
        if (estado.value == 'RS') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Eduardo Leite<br>eleito com 57,12% no 2º turno</strong>`
        }
        if (estado.value == 'RO') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Marcos Rocha<br>eleito com 52,47% no 2º turno</strong>`
        }
        if (estado.value == 'RR') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Antônio Denarium<br>eleito com 56,47% no 1º turno</strong>`
        }
        if (estado.value == 'SP') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Tarcísio de Freitas<br>eleito com 55,27% no 2º turno</strong>`
        }
        if (estado.value == 'SC') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Jorginho Mello<br>eleito com 70,69% no 2º turno</strong>`
        }
        if (estado.value == 'SE') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Fábio Mitidieri<br>eleito com 51,70% no 2º turno</strong>`
        }
        if (estado.value == 'TO') {
            res.style.textAlign = 'center'
            res.innerHTML = `<strong>Wanderlei Barbosa<br>eleito com 58,14% no 1º turno</strong>`
        }
    }
}   