function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'fotomenino.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotojovem-m.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoadulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidoso.png')
            }
        } else if (fSex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'fotomenina.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'fotojovem-f.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'fotoadulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'fotoidosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}