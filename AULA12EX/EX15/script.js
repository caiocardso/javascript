function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verificar os dados e tentar novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'masculino'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-m.jpg')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança-f.jpg')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos...`
        res.appendChild(img)
    }
}