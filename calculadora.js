//Calculadora bem simples em JS

const valor1 = Number(prompt("Digite um número:"));
const valor2 = Number(prompt("Digite um número:"));
let operador = prompt("Escolha qual operação deseja realizar: + (soma), - (subtração), / (divisão) ou x (multiplicação)");

let resultado;
let resto; 

switch (operador) {
    case '+':
        resultado = valor1 + valor2;
        break;

    case '-':
        resultado = valor1 - valor2;
        break;

    case '/':
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
            resto = valor1 % valor2;
        } else {
            alert("Erro: Divisão por zero.");
        }
        break;

    case 'x':
        resultado = valor1 * valor2;
        break;

    default:
        alert("Operador inválido.");
        break;
}

if (resultado !== undefined) {
    if (operador === '/') {
        alert(`O resultado da divisão é: ${resultado}`);
        if (resto !== undefined) {
            alert(`A sobra da divisão é: ${resto}`);
        }
    } else {
        alert(`O resultado da operação é: ${resultado}`);
    }
}
