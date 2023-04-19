const robotron = document.querySelector('.robotron');
const controle = document.querySelectorAll('[data-controle]');
const estatistica = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        const operacao = evento.target.dataset.controle;
        const peca = evento.target.dataset.peca

        const contador = manipulaDados(operacao, evento.target.parentNode)
        if (contador !== false) {
            atualizaEstatistica(peca, operacao);
        } else {
            alert('Valor não pode ser menor que zero!');
        }
        
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')
    var valor = parseInt(peca.value)
    if (operacao === '-') {
        switch (true) {
            case (valor -1 >= 0):
                peca.value = parseInt(peca.value) - 1;
                return peca.value;
            default:
                return false;
        }
    } else if (operacao === '+') {
        switch (true) {
            case (valor + 1 <= 10):
                peca.value = parseInt(peca.value) + 1;
                return peca.value;
            default:
                return false;
        }
    }
}

function atualizaEstatistica(peca, operacao, evento) {

    if (operacao === '+') {
        estatistica.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
        })
    } else if (operacao === "-") {
        estatistica.forEach((elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica];
        })
    }

}