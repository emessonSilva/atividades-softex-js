//Solicite ao usuário que insira três notas. Em seguida, calcule e exiba a média
//aritmética dessas notas.

const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));
const nota3 = Number(prompt("Digite a terceira nota:"));

const media = (nota1 + nota2 + nota3) / 3;

console.log(`A média aritmética das notas é ${media}.`);