const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");
const navlink = document.querySelector(".navlink");
const navlink1 = document.querySelector("#navlink");
const navitem = document.querySelector(".navitem");
const dropdown = document.querySelector(".dropdown-toggle");
const collapse = document.querySelector(".collapse");
const navbar = document.querySelector(".navbar");
const barra = document.querySelector(".barra");
const botoes = document.querySelector(".botoes")


botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    body.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/sun.png")
    }
    else {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/moon.png")
    }
});

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = navlink.classList.contains("modo-escuro")

    navlink.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/sun.png")
    }
    else {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/moon.png")
    }
});

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = navitem.classList.contains("modo-escuro")

    navitem.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/sun.png")
    }
    else {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/moon.png")
    }
});

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = navlink1.classList.contains("modo-escuro")

    navlink1.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/sun.png")
    }
    else {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/moon.png")
    }
});

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = dropdown.classList.contains("modo-escuro")

    dropdown.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/sun.png")
    }
    else {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/moon.png")
    }
});

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = collapse.classList.contains("modo-escuro")

    collapse.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/sun.png")
    }
    else {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/moon.png")
    }
});

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = navbar.classList.contains("modo-escuro")

    navbar.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/sun.png")
    }
    else {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/moon.png")
    }
});

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = barra.classList.contains("modo-escuro")

    barra.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/sun.png")
    }
    else {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/moon.png")
    }
});

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = botoes.classList.contains("modo-escuro")

    botoes.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/sun.png")
    }
    else {
        imagemBotaoTrocaTema.setAttribute("src", "src/images/moon.png")
    }
});




