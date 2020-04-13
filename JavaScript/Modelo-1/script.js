
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    //var hora = data.getHours()

    var hora = 21
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        // bom dia
        img.src = 'imgs/1.jpg'
        document.body.style.background = '#e2cd9f'
        
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = 'imgs/2.jpg'
        document.body.style.background = '#67ff49'
    } else {

        //boa noite
        img.src = 'imgs/3.jpg'
        document.body.style.background = '#7a49ff'
    }
}

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(`Erro, digite novamente `)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/h1.png')
            } else if (idade >= 10 && idade < 20) {
                img.setAttribute('src', 'imgs/h2.png' )
            } else if (idade >= 20 && idade < 20) {
                img.setAttribute('src', 'imgs/h3.png')
            } else {
                img.setAttribute('src', 'imgs/h4.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imgs/m1.png')
            } else if (idade >= 10 && idade < 20) {
                img.setAttribute('src', 'imgs/m2.png')
            } else if (idade >= 20 && idade < 20) {
                img.setAttribute('src', 'imgs/m3.png')
            } else {
                img.setAttribute('src', 'imgs/m4.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
        res.appendChild(img)
    }
}