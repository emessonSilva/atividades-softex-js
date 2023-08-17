//Enumere as diferenças entre os comandos "for" e "while".
/* For:   Usado quando o número de repetições é conhecido
          O contador é definido no mesmo momento da estrutura
          Se a condição não é especificada, apresenta um erro
          Itera sobre listas.
    
    While: Usado quando o número de iterações não é conhecido
           Não precisa definir um contador na estrutura
           Repete infinitamente enquanto a condição não é atendida
           Não itera sobre listas
          */

//Descreva em quais circunstâncias os comandos "for" e "while" devem ser empregados.
/* O comando "for" deve ser empregado quando se conhece previamente o número de iterações que um loop 
   deve executar. É útil para percorrer sequências como listas ou intervalos.
   O comando "while" deve ser empregado quando o número de iterações não é conhecido antecipadamente e 
   depende de uma condição que precisa ser avaliada a cada repetição. 
   É útil quando o loop deve continuar até que uma condição específica seja atendida. */

//Implemente o código do slide de número 9.

let i = 0;
while (i < 10) {
  console.log("Testando uma frase!");
  i++;
}

//Implemente o código do slide de número 16.

let x = 465484133;

while (x > 10) {
  console.log(x);
  x /= 35;
}

//Implemente o código do slide de número 26.

let y = 0;
do {
  console.log(y);
  y++;
} while (y < 5);

//Escreva um programa que exiba os números de 1 a 10 em ordem crescente utilizando o while.
let z = 1;

while (z <= 10) {
  console.log(z);
  z++;
}

//Crie um programa que exiba os números de 10 a 1 em ordem decrescente utilizando o while.
let a = 1;

while (a == 10) {
  console.log(z);
  a--;
}

//Elabore um programa que calcule a soma dos números de 1 a 100 utilizando o while.
let b = 1;
let soma = 0;

while (b <= 100) {
  soma += b;
  b++;
}
console.log(`A soma dos números entre 1 a 100 é ${soma}.`);

//Faça um programa que calcule o produto dos números de 1 a 5 utilizando o while.
let c = 1;
let mult = 1;

while (c <= 5) {
  mult *= c;
  c++;
}
console.log(`O produto entre 1 a 5 é ${mult}.`);

//Crie um programa que exiba a tabuada do 9 utilizando o while.
let multiplier = 1;
let result = 0;

while (multiplier <= 10) {
  result = 9 * multiplier;
  console.log(`9 x ${multiplier} = ${result}`);
  multiplier++;
}

//Crie um programa que leia uma sequência de números inteiros do usuário e exiba o maior e o menor valor digitado. 
//O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
let arr = [];
let number = -1;
let minValue = Number.MAX_SAFE_INTEGER;
let maxValue = Number.MIN_SAFE_INTEGER;

while (number !== 0) {
    number = parseInt(prompt("Digite um número inteiro:"));

    if (number !== 0) {
        arr.push(number);

        if (number > maxValue) {
            maxValue = number;
        }

        if (number < minValue) {
            minValue = number;
        }
    }
}

console.log(`O maior número digitado foi ${maxValue}.`);
console.log(`O menor número digitado foi ${minValue}.`);

//Crie um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números digitados.
//O programa deve parar de ler quando o usuário digitar o número -1 utilizando o while.

let arr2 = [];
let number2 = 0;
let sum = 0;

while (number2 !== -1) {
    number2 = parseInt(prompt("Digite um número inteiro:"));
    arr2.push(number2);
    sum += number2;    
}

let average = sum / arr2.length;

alert (`A média dos números digitados é ${average}.`)


//Faça um programa que leia um número inteiro e exiba a soma dos seus dígitos elevados ao cubo utilizando o while.

let sumCubed = 0;

let number3 = parseInt(prompt("Digite um número inteiro:"));

while (number3 !== 0) {

    if (number3 < 0) {
        let numDigits = Math.abs(number3).toString().split(''); 

        for (let i = 0; i < numDigits.length; i++) {
            sumCubed += Math.pow(parseInt(numDigits[i]), 3);
        }
    } else {
        let numDigits = number3.toString().split(''); 

        for (let i = 0; i < numDigits.length; i++) {
            sumCubed += Math.pow(parseInt(numDigits[i]), 3); 
        }
    }

    number3 = parseInt(prompt("Digite outro número inteiro (ou pressione 0 para encerrar):"));
}

alert (`A soma absoluta dos dígitos do número elevados ao cubo é: ${sumCubed}.`);

//Faça um programa que exiba os números ímpares de 1 a 100 utilizando o while.

let number4 = 1;

console.log(`Os números primos de 1 a 100 são:`);
while (number4 <= 100) {
    if (!(number4 % 2 === 0)) {
        console.log(number4);
    }
    number4++;
}

//Desenvolva um programa que exiba todos os múltiplos de 3 no intervalo de 1 a 50 utilizando o while.

let number5 = 1;

console.log(`Os multiplos de 3 de 1 a 50 são:`);

while (number5 <= 50) {
    if (number5 % 3 === 0) {
        console.log(number5);
    }
    number5++;
}

//Crie um programa que leia 5 notas de alunos e exiba quantos deles foram aprovados (nota maior ou igual a 7) utilizando o while.

let d = 1;
let numApproved = 0; 
let grades = [];

while (d <= 5) {
    let grade = parseFloat(prompt(`Digite a nota do aluno ${i}:`)); 
    grades.push(grade);

    if (grade >= 7) {
        numApproved++;
    } 
    i++;
} 

console.log(`Notas: ${grades}`)
console.log(`Quantidade de alunos aprovados: ${numApproved}.`);

//Elabore um programa que leia uma sequência de números inteiros do usuário e determine quantos números pares foram digitados 
//antes do primeiro número ímpar. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let number6 = -1;
let evenCounter = 0;
let oddCounter = false;

while (number6 !== 0) {

    number6 = parseInt(prompt("Digite um número inteiro:"));

    if (number6 !== 0) {
        if (number6 % 2 === 0 && !oddCounter) {
            evenCounter++;
        } else if (number6 % 2 !== 0) {
            oddCounter = true;
        }
    }
}

console.log(`Foram digitados ${evenCounter} números pares antes do primeiro número ímpar!`);

//Crie um programa que leia uma sequência de números inteiros do usuário e exiba quantos números pares e quantos números ímpares
//foram digitados. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let number7 = -1;
let evenCounter2 = 0;
let oddCounter2 = 0;

while (number7 !== 0) {
  
    number7 = parseInt(prompt("Digite um número inteiro:"));

    if (number7 !== 0) {
        if (number7 % 2 === 0) {
            evenCounter2++;
        } else if (number7 % 2 !== 0) {
            oddCounter2 ++;
        }
    }
}

console.log(`Foram digitados ${evenCounter2} números pares e ${oddCounter2} números ímpares!`);

//Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números são divisíveis por 2, 
//quantos são divisíveis por 3 e quantos são divisíveis por 5. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.
 
let number8 = 0;
let evenCounter3 = 0;
let oddCounter3 = 0;

do {
    number8 = parseInt(prompt("Digite um número inteiro:"));

    if (number8 !== 0) {
        if (number8 % 2 === 0) {
            evenCounter3++;
        } else {
            oddCounter3++;
        }
    }

} while (number8 !== 0);

alert(`Foram digitados ${evenCounter3} números pares e ${oddCounter3} números ímpares.`);

//Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números divisíveis por 3. 
//O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let number9 = -1;
let sumNumbersDividedByThree = 0;
let arr3 = [];

while (number9 !== 0) {
    
    number9 = parseInt(prompt("Digite um número inteiro:"));
    
    if (number9 !== 0) {
      if (number9 % 3 === 0) {
        arr3.push(number9);
        sumNumbersDividedByThree += number9;
      }
    }
}

if (arr3.length > 0) {
    const average2 = sumNumbersDividedByThree / arr3.length;
    alert(`A média dos números divisíveis por 3 é: ${average2}`);
} else {
    alert("Nenhum número divisível por 3 foi digitado.");
}

//Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números possuem mais de três dígitos. 
//O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let number10 = -1; 
let sumNumberMoreThreeDigits = 0;

while (number10 !== 0) {
    number10 = parseInt(prompt("Digite um número inteiro (ou pressione 0 para encerrar):"));
    
    if (number10 !== 0) {
        if ((number10 >= 1000 || number10 <= -1000)) {
            sumNumberMoreThreeDigits++;
        }
    }
}

console.log(`Foram digitados ${sumNumberMoreThreeDigits} números com mais de três dígitos.`);


//Desenvolva um programa que leia uma sequência de números inteiros do usuário e exiba a média dos números 
//que estão entre 50 e 100. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let number11 = -1;
let sumNumbersBetween50And100 = 0
let arr4 = [];

while (number11 !== 0) {
    
    number11 = parseInt(prompt("Digite um número inteiro (ou pressione 0 para encerrar):"));
    
    if (number11 !== 0) {
      if (number11 >= 50 && number11 <= 100) {
        arr4.push(number11);
        sumNumbersBetween50And100 += number11; 
      }
    }
}

if (arr4.length > 0) {
    const average3 = sumNumbersBetween50And100 / arr4.length;
    alert (`A média dos números que estão entre 50 e 100 é: ${average3}.`);
} else {
    alert("Nenhum número entre 50 e 100 foi digitado!");
}

//Elabore um programa que leia uma sequência de números inteiros do usuário e exiba o menor
//valor digitado que seja positivo e ímpar. O programa deve parar de ler quando o usuário digitar o
//número 0 utilizando o while.

let MinOddValue = Number.MAX_SAFE_INTEGER;
let number12 = -1;

while (number12 !== 0) {
  number12 = parseInt(prompt("Digite um número inteiro (ou pressione 0 para encerrar):"));

  if (number12 > 0 && number12 % 2 !== 0 && number12 < MinOddValue) {
    MinOddValue = number12;
  }
}

if (MinOddValue !== Number.MAX_SAFE_INTEGER) {
  alert(`O menor valor digitado positivo e ímpar foi: ${MinOddValue}.`);
} else {
  alert("Nenhum valor digitado foi positivo e ímpar ao mesmo tempo!");
}



//Faça um programa que leia uma sequência de números inteiros do usuário e exiba quantos números são pares e quantos números são ímpares
//entre o primeiro e o último número digitado. O programa deve parar de ler quando o usuário digitar o número 0 utilizando o while.

let number13 = -1;
let evenCounter4 = 0;
let oddCounter4 = 0;

while (number13 !== 0) {
    number13 = parseInt(prompt("Digite outro número inteiro (ou pressione 0 para encerrar):"));

    if (number13 !== 0) {
        if (number13 % 2 === 0) {
            evenCounter4++;
        } else {
            oddCounter4++;
         }
     }
}

if (evenCounter4 > 0 || oddCounter4 > 0) {
    alert(`Quantidade de números pares digitados: ${evenCounter4}.
Quantidade de números ímpares digitados: ${oddCounter4}.`);
} else {
    alert("Nenhum valor diferente de zero foi digitado!");
}
