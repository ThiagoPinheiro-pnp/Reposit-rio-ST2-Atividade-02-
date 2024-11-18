var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() =>{
    proximaImg()
}, 5000)

function proximaImg(){
    cont++
    if(cont > 3){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true
}

function clickMenu() {
    menu.style.display = "block"
}

const BotaoComprar = document.getElementById('botaocomprar');

BotaoComprar.addEventListener("click", () => {
    window.alert("Produto adicionado ao carrinho")
})

const BotaoComprar1 = document.getElementById('botaocomprar1');

BotaoComprar1.addEventListener("click", () => {
    window.alert("Produto adicionado ao carrinho")
})

const BotaoComprar2 = document.getElementById('botaocomprar2');

BotaoComprar2.addEventListener("click", () => {
    window.alert("Produto adicionado ao carrinho")
})

const BotaoComprar3 = document.getElementById('botaocomprar3');

BotaoComprar3.addEventListener("click", () => {
    window.alert("Produto adicionado ao carrinho")
})

const BotaoComprar4 = document.getElementById('botaocomprar4');

BotaoComprar4.addEventListener("click", () => {
    window.alert("Produto adicionado ao carrinho")
})