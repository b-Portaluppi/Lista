const formulario = document.getElementById("form");
const itensSalvos = JSON.parse(localStorage.getItem("itens")) || [];

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const item = event.target.elements["lista"].value;
    itensSalvos.push(item);

    localStorage.setItem("itens", JSON.stringify(itensSalvos));

    mostraItens(item)
    
});

function mostraItens(item) {
    const ul = document.createElement("ul");
    ul.className = "itens__listados";

    ul.innerHTML = `
            <li class="itens"><button class="botao"></button>${ item } <img src="images/icon-cross.png" alt="" class="apagar"></li>
    `

    const containerDiv = document.getElementById('container__div');
    containerDiv.appendChild(ul)
    removeItem(ul)
}

function removeItem(ul) {
    const botaoRemover = ul.querySelector('.apagar');
    botaoRemover.addEventListener("click", () => {
        const indice = ul.parentNode.getAttribute("data-index");
        itensSalvos.splice(indice, 1);
        localStorage.setItem("itens", JSON.stringify(itensSalvos));
        ul.parentNode.remove();
    })
}

