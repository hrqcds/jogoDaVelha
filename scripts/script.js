//Tabela de placar
let placar = { vitorias: 0, derrotas: 0, empates: 0, pontos: 0, }

let bot = ["pedra", "papel", "tesoura"]

let tagHTML = ""

document.querySelector("#pedra")
document.querySelector("#papel").addEventListener("click", clicarPapel)
document.querySelector("#tesoura")

let pedra = document.querySelector("#pedra")
let papel = document.querySelector("#papel")
let tesoura = document.querySelector("#tesoura")
let resPlayer = document.querySelector("#resPlayer")
let resBot = document.querySelector("#resBot")


//funções

pedra.addEventListener("click", clicarPedra)
papel.addEventListener("click", clicarPapel)
tesoura.addEventListener("click", clicarTesoura)

//Pedra

function clicarPedra() {

    let jogadaBot = parseInt(Math.random() * 3)


    if (bot[jogadaBot] == "pedra") {
        // alert("empate")
        placar.empates++
        placar.pontos = calcularPontos(placar)
        //trocando cor de fundo
        resPlayer.style.backgroundColor = "rgb(255, 133, 255)" //cor pedra
        resBot.style.backgroundColor = "rgb(255, 133, 255)" //cor pedra
        //trocando cor da sombra
        resBot.style.boxShadow = "2px 8px 3px rgb(229, 255, 0)"
        resPlayer.style.boxShadow = "2px 8px 3px rgb(229, 255, 0)"
        //trocando imagem
        resPlayer.innerHTML = `<img src="img/pedra.jpg">`
        resBot.innerHTML = `<img src="img/pedra.jpg">`
        exibirPlacar(placar)
    } else if (bot[jogadaBot] == "papel") {
        // alert("derrota")
        placar.derrotas++
        //trocando cor de fundo
        resPlayer.style.backgroundColor = "rgb(255, 133, 255)" //cor pedra
        resBot.style.backgroundColor = "rgb(252, 236, 26)" //cor papel
        //trocando cor da sombra
        resBot.style.boxShadow = "2px 8px 3px rgb(255, 0, 0)"
        resPlayer.style.boxShadow = "2px 8px 3px rgb(255, 0, 0)"
        //trocando imagem
        resPlayer.innerHTML = `<img src="img/pedra.jpg">`
        resBot.innerHTML = `<img src="img/papel.jpg">`
        exibirPlacar(placar)
    } else {
        // alert("vitória")
        placar.vitorias++
        placar.pontos = calcularPontos(placar)
        //Trocando cor de fundo
        resPlayer.style.backgroundColor = "rgb(255, 133, 255)" //cor pedra
        resBot.style.backgroundColor = "rgb(63, 220, 255)" //cor tesoura
        //Trocando cor da sombra
        resPlayer.style.boxShadow = "2px 8px 3px rgb(94, 255, 0)"
        resBot.style.boxShadow = "2px 8px 3px rgb(94, 255, 0)"
        //trocando imagem
        resBot.style.boxShadow = "2px 8px 3px rgb(94, 255, 0)"
        resPlayer.innerHTML = `<img src="img/pedra.jpg">`
        resBot.innerHTML = `<img src="img/tesoura.jpg">`
        exibirPlacar(placar)
    }


}

//Papel

function clicarPapel() {

    let jogadaBot = parseInt(Math.random() * 3)


    if (bot[jogadaBot] == "papel") {
        // alert("empate")
        placar.empates++
        placar.pontos = calcularPontos(placar)
        //trocando cores
        resPlayer.style.backgroundColor = "rgb(252, 236, 26)" //cor papel
        resBot.style.backgroundColor = "rgb(252, 236, 26)" //cor papel
        //trocando cor da sombra
        resBot.style.boxShadow = "2px 8px 3px rgb(229, 255, 0)"
        resPlayer.style.boxShadow = "2px 8px 3px rgb(229, 255, 0)"
        //Trocando imagem
        resPlayer.innerHTML = `<img src="img/papel.jpg">`
        resBot.innerHTML = `<img src="img/papel.jpg">`
        exibirPlacar(placar)
    } else if (bot[jogadaBot] == "tesoura") {
        // alert("derrota")
        placar.derrotas++
        //trocando cores
        resPlayer.style.backgroundColor = "rgb(252, 236, 26)" //cor papel
        resBot.style.backgroundColor = "rgb(63, 220, 255)" //cor tesoura
        //trocando cor da sombras
        resBot.style.boxShadow = "2px 8px 3px rgb(255, 0, 0)"
        resPlayer.style.boxShadow = "2px 8px 3px rgb(255, 0, 0)"
        //trocando imagem
        resPlayer.innerHTML = `<img src="img/papel.jpg">`
        resBot.innerHTML = `<img src="img/tesoura.jpg">`
        exibirPlacar(placar)
    } else {
        placar.vitorias++
        //trocando cores
        resPlayer.style.backgroundColor = "rgb(252, 236, 26)" //cor papel
        resBot.style.backgroundColor = "rgb(255, 133, 255)" //cor pedra
        //trocando cor da sombra
        resPlayer.style.boxShadow = "2px 8px 3px rgb(94, 255, 0)"
        resBot.style.boxShadow = "2px 8px 3px rgb(94, 255, 0)"
        //trocando imagem
        resPlayer.innerHTML = `<img src="img/papel.jpg">`
        placar.pontos = calcularPontos(placar)
        resBot.innerHTML = `<img src="img/pedra.jpg">`
        exibirPlacar(placar)
    }

}

//Tesoura

function clicarTesoura() {

    let jogadaBot = parseInt(Math.random() * 3)


    if (bot[jogadaBot] == "tesoura") {
        // alert("empate")
        placar.empates++
        placar.pontos = calcularPontos(placar)
        //trocando cores
        resPlayer.style.backgroundColor = "rgb(63, 220, 255)" //cor tesoura
        resBot.style.backgroundColor = "rgb(63, 220, 255)" //cor tesoura        
        //trocando cor da sombras
        resBot.style.boxShadow = "2px 8px 3px rgb(229, 255, 0)"
        resPlayer.style.boxShadow = "2px 8px 3px rgb(229, 255, 0)"
        //trocando imagem
        resPlayer.innerHTML = `<img src="img/tesoura.jpg">`
        resBot.innerHTML = `<img src="img/tesoura.jpg">`
        exibirPlacar(placar)
    } else if (bot[jogadaBot] == "pedra") {
        // alert("derrota")
        placar.derrotas++
        //trocando cores
        resPlayer.style.backgroundColor = "rgb(63, 220, 255)" //cor tesoura
        resBot.style.backgroundColor = "rgb(255, 133, 255)" //cor pedra
        //Trocando cor da sombras
        resBot.style.boxShadow = "2px 8px 3px rgb(255, 0, 0)"
        resPlayer.style.boxShadow = "2px 8px 3px rgb(255, 0, 0)"
        //Mudando Imagem
        resPlayer.innerHTML = `<img src="img/tesoura.jpg">`
        resBot.innerHTML = `<img src="img/pedra.jpg">`
        exibirPlacar(placar)
    } else {
        // alert("vitória")
        placar.vitorias++
        placar.pontos = calcularPontos(placar)
        //Trocando cores
        resPlayer.style.backgroundColor = "rgb(63, 220, 255)" //cor tesoura
        resBot.style.backgroundColor = "rgb(252, 236, 26)" //cor papel
        //Trocando cor da sombra
        resPlayer.style.boxShadow = "2px 8px 3px rgb(94, 255, 0)"
        resBot.style.boxShadow = "2px 8px 3px rgb(94, 255, 0)"
        //Mudando imagem
        resPlayer.innerHTML = `<img src="img/tesoura.jpg">`
        resBot.innerHTML = `<img src="img/papel.jpg">`
        exibirPlacar(placar)
    }

}

function exibirPlacar(placar) {

    let tabela = document.querySelector("#tabelaPlacar")
    let tagHTML = ""
    tagHTML += `<tr><td>${placar.vitorias}</td>`
    tagHTML += `<td>${placar.derrotas}</td>`
    tagHTML += `<td>${placar.empates}</td>`
    tagHTML += `<td>${placar.pontos}</td></tr>`

    tabela.innerHTML = tagHTML

}

function calcularPontos(pontos) {

    let pontuacao = (pontos.vitorias * 3) + pontos.empates
    return pontuacao

}