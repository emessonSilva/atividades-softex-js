//Descreva para que serve o comando "for".
//Serve para executar uma ação varias vezes até alcançar uma condição de parada estabelecida. O "for" é controlado por uma variável, que é testada
//a cada repetição até que se encontre a condição de parada.

//Como o comando "for" define o início de uma repetição?
//A partir de uma condição de início estabelecida.

//Como o comando "for" determina o fim da execução?
//Quando a condição de parada for verdadeira ou quando encontrar o comando "break".

//Como ocorre a alteração do valor em cada repetição dentro da estrutura de repetição "for"?
//Ocorre a partir do incremento adicionado.

//Implemente o código do slide de número 18.

for (let i = 0; i < 10; i++) {
  console.log("Testanto uma frase!");
}

//Implemente o código do slide de número 26.

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//Implemente o código do slide de número 36.

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    break;
  }

  console.log(i);
}

//Implemente o código do slide de número 38.

for (let i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }

  console.log(i);
}

//Implemente o código do slide de número 44.

const nomes = ["João", "Paulo", "Pedro", "Gustavo", "Maria"];
for (const nome of nomes) {
  console.log(nome);
}

//Faça um programa que exiba os números de 1 a 10 em ordem crescente.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//Crie um programa que exiba os números de 10 a 1 em ordem decrescente.

for (let i = 10; i > 0; i--) {
  console.log(i);
}

//Elabore um programa que calcule a soma dos números de 1 a 100.

let soma = 0;

for (let i = 0; i <= 100; i++) {
  soma += i;
}
console.log(`A soma dos números de 1 a 100 é ${soma}.`);

//Desenvolva um programa que exiba todos os números pares de 1 a 50.

for (let i = 0; i <= 50; i = i + 2) {
  console.log(i);
}

//Faça um programa que calcule o produto dos números de 1 a 5.

let produto = 1;

for (let i = 1; i <= 5; i++) {
  produto *= i;
}

console.log(`O produto dos números de 1 a 5 é ${produto}`);

//Crie um programa que exiba a tabuada do 7.

const number = 7;

for (let i = 0; i <= 10; i++) {
  const result = number * i;
  console.log(`${number} x ${i} = ${result}`);
}

//Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.

let averageSum = 0;

for (i = 1; i <= 5; i++) {
  let average = parseFloat(prompt(`Digite a nota ${[i]}:`));
  averageSum += average;
}

alert(`A média aritmética das 5 notas é ${averageSum / 5}.`);

//Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50.

console.log("Múltiplos de 3 no intervalo de 1 a 50:");

for (let i = 0; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log(`${i} é múltiplo de 3.`);
  }
}

//Crie um programa que leia 10 números do usuário e exiba o maior e o menor valor digitado.

const numbers = [];
let biggest = Number.MIN_SAFE_INTEGER;
let smallest = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < 10; i++) {
  let number = Number(prompt(`Digite um número:`));
  numbers.push(number);

  if (number > biggest) {
    biggest = number;
  }
  if (number < smallest) {
    smallest = number;
  }
}

console.log(`O maior número digitado é: ${biggest}`);
console.log(`O menor número digitado é: ${smallest}`);

//Faça um programa que exiba os números ímpares de 1 a 100.

console.log("Os números ímpares entre o intervalo de 1 a 100:");

for (let i = 1; i <= 100; i++) {
  if (!(i % 2 == 0)) {
    console.log(`${i}`);
  }
}

//Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7).

let approved = 0;

for (let i = 1; i <= 5; i++) {
  let grade = Number(prompt(`Digite a nota ${i}:`));

  if (grade >= 7) {
    approved++;
  }
}

if (approved > 1) {
  alert(`${approved} alunos foram aprovados!`);
} else if (approved == 1) {
  alert(`${approved} aluno foi aprovado!`);
} else {
  alert(`Nenhum aluno foi aprovado!`);
}

//Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário.

const number6 = prompt("Digite um número inteiro com dois algarismos no mínimo:");
let digitSum = 0;

if (number6 < 0) {
    for (let i = 1; i < number6.length; i++) {
        const digit = parseInt(number6[i]);
        digitSum += digit;
    }
    digitSum *= -1;
} else {
    for (let i = 0; i < number6.length; i++) {
        const digit = parseInt(number6[i]);
        digitSum += digit;
    }
}

alert (`A soma dos digitos do número ${number6} é ${digitSum}.`);

//Elabore um programa que leia um número inteiro e exiba todos os seus divisores.

let number2 = parseInt(prompt("Digite um número inteiro:"));

console.log("Os divisores desse número:");

for (let i = 1; i < number2; i++) {
  if (number2 % i === 0) {
    console.log(`${i}`);
  }
}

//Desenvolva um programa que calcule a média de altura de 5 pessoas.

let heightSum = 0;

for (i = 1; i <= 5; i++) {
  let height = parseFloat(prompt(`Digite a altura ${[i]}:`));
  heightSum += height;
}

alert(`A média aritmética das 5 alturas é ${heightSum / 5}.`);

//Faça um programa que exiba os números de 1 a 100, substituindo os múltiplos de 3 pela palavra "Fizz" e os múltiplos de 5 pela palavra "Buzz". Para os números que são múltiplos de ambos,
//utilize a palavra "FizzBuzz".

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else {
    if (i % 5 === 0) {
      console.log(`${i} Buzz`);
    }
  }
}

//Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.

const number3 = prompt("Digite um número inteiro:");
let evenDigitSum = 0;

for (let i = 0; i < number3.length; i++) {
    const digit = parseInt(number3[i]);

    if (digit % 2 === 0) {
        evenDigitSum += digit;
    }
}

console.log(`A soma dos dígitos pares de ${number3} é ${evenDigitSum}.`);

//Faça um programa que leia um número inteiro e exiba o número invertido. Por exemplo, se o número lido for 123, o programa deve exibir 321.

const number4 = prompt("Digite um número inteiro:");
let reversed = '';

for (let i = number4.length - 1; i >= 0; i--) {
    reversed += number4[i];
}

alert (`O número ${number4} invertido é ${reversed}.`);
