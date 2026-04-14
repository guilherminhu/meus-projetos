


let inputTexto = document.querySelector(".input-texto")
let traducaoTexto = document.querySelector(".traducao")
let idioma = document.querySelector(".idioma")



async function traduzir() {

    let endereco = "https://api.mymemory.translated.net/get?q="
        + inputTexto.value
        + "&langpair=pt-BR/en"


    let resposta = await fetch(endereco)



    let dados = await resposta.json()


    traducaoTexto.textContent = dados.responseData.translatedText

    function ouvirVoz() {
        console.log("funcionou")

    }
    console.log(dados)
}

window.webkitSpeechRecognition || window.SpeechRecognition