var num1 = '';
var num2 = '';
var operacion = '';

function setearValor(valor) {
    document.getElementById('id-display').innerText = valor;
}

function recibirValor(valor) {
    const display = document.getElementById('id-display');
    display.innerText += valor;
    console.log(valor);
}

function recibirOperacion(op) {
    const display = document.getElementById('id-display');
    if (op === 'C') {
        limpiarDisplay();
    } else if (op === 'back') {
        display.innerText = display.innerText.slice(0, -1);
    } else if (op === '=') {
        if (num1 !== '' && operacion !== '') {
            num2 = parseFloat(display.innerText);
            calcular();
        }
    } else {
        if (display.innerText !== '') {
            num1 = parseFloat(display.innerText);
            operacion = op;
            limpiarDisplay();
        }
    }
}

function limpiarDisplay() {
    document.getElementById('id-display').innerText = '';
}

function calcular() {
    let valorFinal;
    switch (operacion) {
        case '+':
            valorFinal = num1 + num2;
            break;
        case '-':
            valorFinal = num1 - num2;
            break;
        case 'X':
            valorFinal = num1 * num2;
            break;
        case '/':
            valorFinal = num1 / num2;
            break;
        case '%':
            valorFinal = num1 % num2;
            break;
        default:
            valorFinal = 'Error';
    }
    console.log(valorFinal);
    setearValor(valorFinal);
    num1 = '';
    num2 = '';
    operacion = '';
}