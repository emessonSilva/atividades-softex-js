//Escreva um programa que leia um número inteiro e verifique se ele é positivo, negativo ou igual a zero.
const number = Number(prompt("Digite um número:"));
if (number === 0) {
    console.log("O número informado é igual a zero!")
} else if (number > 0) {
    console.log("O número informado é positivo!")
} else {
    console.log("O número informado é negativo!")
}

//Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de idade.
const personAge = parseInt(prompt("Digite sua idade:"));
if (personAge >= 18) {
    console.log("Você é maior de idade!")
} else {
    console.log("Você é menor de idade!")
}

//Desenvolva um programa que leia dois números inteiros e mostre qual deles é o maior, ou se são iguais.
const number1 = Number(prompt("Digite um número:"));
const number2 = Number(prompt("Digite outro número:"));
if (number1 > number2) {
    console.log(`${number1} é maior do que ${number2}.`);
} else if (number1 < number2) {
    console.log(`${number2} é maior do que ${number1}.`);
} else {
    console.log(`${number1} e ${number2} são iguais.`);
}

//Faça um programa que verifique se um número é par ou ímpar.
const number3 = Number(prompt("Digite um número:"));
if ( number3 % 2 == 0) {
    console.log(`${number3} é um número par!`);
} else {
    console.log(`${number3} é um número impar!`);
}

//Elabore um programa que leia três notas de um aluno e calcule a média. Em seguida, exiba se o
//aluno está aprovado (média maior ou igual a 7) ou reprovado.
const  grade1 = parseFloat(prompt("Digite a primeira nota:"));
const  grade2 = parseFloat(prompt("Digite a segunda nota:"));
const  grade3 = parseFloat(prompt("Digite a terceira nota:"));
const arithmeticAverage = (grade1 + grade2  + grade3) / 3;
const verify = arithmeticAverage >= 7 ? `Aluno aprovado com média ${arithmeticAverage}.`: `Aluno reprovado com média ${arithmeticAverage}.`;
console.log(verify);

//Crie um programa que receba o nome de duas pessoas e exiba qual delas possui o maior número
//de caracteres em seu nome.
const name1 = prompt("Digite o nome da primeira pessoa:");
const name2 = prompt("Digite o nome da segunda pessoa:");
if (name1.length > name2.length) {
    console.log(`${name1} possui ${name1.length} caracteres, sendo maior que ${name2}.`);
} else if (name2.length > name1.length) {
    console.log(`${name2} possui ${name2.length} caracteres, sendo maior que ${name1}.`)
} else {
    console.log(`${name1} e ${name2} possuem o mesmo valor de caracteres!`);
}

//Desenvolva um programa que leia um caractere e verifique se ele é uma vogal ou uma consoante.
const letter = prompt("Digite uma letra:");
if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' || 
letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'U') {
    console.log(`${letter} é uma vogal!`);
} else {
    console.log(`${letter} é uma consoante!`);
}

//Faça um programa que receba três números e os imprima em ordem crescente.
const number4 = Number(prompt("Digite o primeiro número:"));
const number5 = Number(prompt("Digite o segundo número:"));
const number6 = Number(prompt("Digite o terceiro número:"));

if (number4 <= number5 && number4 <= number6) {
    if (number5 <= number6) {
        console.log(`Números em ordem crescente: ${number4}, ${number5}, ${number6}`);
    } else {
        console.log(`Números em ordem crescente: ${number4}, ${number6}, ${number5}`);
    }
} else if(number5 <= number4 && number5 <= number6) {
    if (number4 <= number6) {
        console.log(`Números em ordem crescente: ${number5}, ${number4}, ${number6}`);
    } else {
        console.log(`Números em ordem crescente: ${number5}, ${number6}, ${number4}`);
    }
} else {
    if (number4 <= number5) {
      console.log(`Números em ordem crescente: ${number6}, ${number4}, ${number5}`);
    } else {
       console.log(`Números em ordem crescente: ${number6}, ${number5}, ${number4}`)
    }
}

//Elabore um programa que calcule o IMC (Índice de Massa Corporal) de uma pessoa, dado o peso e
//a altura. Em seguida, exiba se a pessoa está abaixo do peso, com peso normal, com sobrepeso,
//obesa ou muito obesa.
// Abaixo do peso: IMC abaixo de 18,5 
//Peso normal: IMC entre 18,5 e 24,9 
//Sobrepeso: IMC entre 25 e 29,9 
//Obesidade Grau I: IMC entre 30 e 34,9 
//Obesidade Grau II: IMC entre 35 e 39,9 
//Obesidade Grau III: IMC acima de 40

const weight = Number(prompt("Digite seu peso:"));
const height = Number(prompt("Digite sua altura"));
const IMC = (weight / (height * height));
if (IMC < 18.5) {
    console.log(`Seu IMC é ${IMC} e você está abaixo do peso!`);
} else if (IMC >= 18.5 && IMC <= 24.9) {
    console.log(`Seu IMC é ${IMC} e você está com peso normal!`);
} else if (IMC >= 25 && IMC <= 29.9) {
    console.log(`Seu IMC é ${IMC} e você está com sobrepeso!`);
} else if (IMC >= 30 && IMC <= 34.9) {
    console.log(`Seu IMC é ${IMC} e você está com obesidade de grau 1!`);
} else if (IMC >= 35 && IMC <= 39.9) {
    console.log(`Seu IMC é ${IMC} e você está com obesidade de grau 2!`);
} else {
    if (IMC >= 40) {
        console.log(`Seu IMC é ${IMC} e você está com obesidade de grau 3!`);
    }
}

//Escreva um programa que receba um número de mês (1 a 12) e exiba o nome do mês correspondente.
const number7 = parseInt(prompt("Digite um número inteiro entre 1 - 12:"));
switch (number7) {
    case 1:
        console.log("Corresponde ao mês de Janeiro!");
        break;
    case 2:
        console.log("Corresponde ao mês de Fevereiro!");
        break;
    case 3: 
        console.log("Corresponde ao mês de Março!");
        break;
    case 4: 
        console.log("Corresponde ao mês de Abril!");
        break;
    case 5: 
        console.log("Corresponde ao mês de Maio!");
        break;
    case 6: 
        console.log("Corresponde ao mês de Junho!");
        break;
    case 7: 
        console.log("Corresponde ao mês de Julho!");
        break;
    case 8: 
        console.log("Corresponde ao mês de Agosto!");
        break;
    case 9: 
        console.log("Corresponde ao mês de Setembro!");
        break;
    case 10: 
        console.log("Corresponde ao mês de Outubro!");
        break;
    case 11: 
        console.log("Corresponde ao mês de Novembro!");
        break;
    case 12: 
        console.log("Corresponde ao mês de Dezembro!");
        break;
    default:
        console.log("Valor inválido, insira um valor inteiro entre 1 - 12.");
        break;
}

//Desenvolva um programa que leia o salário de um funcionário e calcule o valor do seu aumento.
//Para salários superiores a R$ 1.500,00, o aumento deve ser de 10%. Caso contrário, o aumento é de 15%.
const salary = parseFloat(prompt("Digite o seu salário:"));
if (salary > 1500) {
    const salaryRaisedBy10 = salary * 0.1 + salary;
    console.log(`O seu salário teve um aumento de 10%, o novo valor é R$ ${salaryRaisedBy10}.`);
} else {
    const salaryRaisedBy15 = salary * 0.15 + salary;
    console.log(`O seu salário teve um aumento de 15%, o novo valor é R$ ${salaryRaisedBy15}.`)
}

//Receba um número inteiro do usuário e verifique se ele é divisível por 3 e por 5 ao mesmo tempo,
//exibindo uma mensagem apropriada.
const intNumber = parseInt(prompt("Digite um número inteiro:"));
const verifyNumber = intNumber % 3 === 0 && intNumber % 5 === 0 ? console.log(`${intNumber} é divisível por 3 e 5 ao mesmo tempo!`) 
: console.log(`${intNumber} não é divisível por 3 e 5 ao mesmo tempo!`);

//Peça ao usuário que insira o dia da semana (por extenso) e, em seguida, exiba uma mensagem
//informando se é um dia útil ou um fim de semana.
const weekDay = prompt("Digite um dia de semana (por extenso em caixa baixa):");
if (weekDay === "segunda" || weekDay === "terça" || weekDay === "quarta" || 
weekDay === "quinta" || weekDay === "sexta") {
    console.log(`${weekDay} é um dia útil da semana.`);
} else {
    if (weekDay === "sábado" || weekDay === "domingo") {
         console.log(`${weekDay} é um fim de semana.`);
    } else {
        console.log("Digite um dia válido em caixa baixa!")
    }
}

//Elabore um programa que leia um número inteiro de 1 a 5 e exiba a mensagem "Muito bom",
//"Bom", "Regular", "Insuficiente" ou "Muito insuficiente", de acordo com o valor lido, utilizando
//switch/case.
const intNumber1 = parseInt(prompt("Digite um número inteiro entre 1 - 5:"));
switch (intNumber1) {
    case 1:
        console.log("Muito insuficiente!");
        break;
    case 2:
        console.log("Insuficiente!");
        break;
    case 3:
        console.log("Regular!");
        break;
    case 4:
        console.log("Bom!");
        break;
    case 5:
        console.log("Muito bom!");
        break;
}

//Peça ao usuário que digite um número entre 1 e 7 e exiba o dia da semana correspondente 
//(1 - Domingo, 2 - Segunda-feira, etc.).
const weekDay1 = parseInt(prompt("Digite um número inteiro entre 1 - 7:"));
switch (weekDay1) {
    case 1:
        console.log(`${weekDay1} - Domingo.`);
        break;
    case 2:
        console.log(`${weekDay1} - Segunda.`);
        break;
    case 3:
        console.log(`${weekDay1} - Terça.`);
        break;
    case 4:
        console.log(`${weekDay1} - Quarta.`);
        break;
    case 5:
        console.log(`${weekDay1} - Quinta.`);
        break;
    case 6:
        console.log(`${weekDay1} - Sexta.`);
        break;
    case 7:
        console.log(`${weekDay1} - Sábado.`);
        break;
    default:
        console.log("Entrada inválida, digite um número inteiro entre 1 - 7.");
        break;
}

//Receba um número decimal do usuário e arredonde-o para o inteiro mais próximo usando a
//estrutura de controle try/catch para tratar exceções.
const floatNumber = parseFloat(prompt("Digite um número décimal:"));

try {

    const intNumber2 = Math.round(floatNumber);
    if (!isNaN(intNumber2)) {
        console.log(`O número ${floatNumber} arredondado é ${intNumber2}.`);

    } else {

        throw new Error("Entrada inválida. Por favor, digite um número válido.");

      }
    
} catch (error) {

    console.error("Ocorreu um erro:", error.message);
        
}

//Peça ao usuário que insira a sua idade e verifique se ele é um bebê (0 a 1 ano), 
//criança (1 a 12 anos), adolescente (13 a 18 anos) ou adulto (mais de 18 anos).
const userAge = parseInt(prompt("Digite sua idade:"));

if (userAge >= 0 && userAge < 1) {
    console.log("Você é um bebê!");
} else if (userAge >= 1 && userAge <= 12 ) {
    console.log("Você é uma criança!");
} else if (userAge >= 13 && userAge <= 18) {
    console.log("Você é um(a) adolescente!");
} else {
    console.log("Você é um adulto!");
}

//Peça ao usuário que insira o seu estado civil e, usando a estrutura switch/case, exiba uma
//mensagem informando se é solteiro, casado, divorciado ou viúvo.

const civilStatus = prompt("Informe seu estado civil (solteiro, casado, divorciado ou viúvo):");

switch (civilStatus) {
    case "solteiro":
        console.log("Você é solteiro(a)!");
        break;
    case "casado":
        console.log("Você é casado(a)!");
        break;
    case "divorciado":
        console.log("Você é divorciado(a)!");
        break;
    case "viúvo":
        console.log("Você é viúvo(a)!");
        break;
    default:
        console.log("Digite um valor válido entre solteiro, casado, divorciado ou viúvo!");
        break;
}

//Solicite ao usuário dois números inteiros e, usando a estrutura switch/case, exiba o resultado da
//operação escolhida pelo usuário (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão).
const option = parseInt(prompt("Digite a operação que deseja realizar (1 - soma, 2 - subtração, 3 - multiplicação, 4 - divisão):"));
const intNumber3 = parseInt(prompt("Digite um valor inteiro:"));
const intNumber4 = parseInt(prompt("Digite outro valor inteiro:"));

switch (option) {
    case 1: 
       console.log(`A soma entre ${intNumber3} e ${intNumber4} é ${intNumber3 + intNumber4}.`);
       break;
    case 2:
        console.log(`A subtração entre ${intNumber3} e ${intNumber4} é ${intNumber3 - intNumber4}.`);
        break; 
    case 3:
        console.log(`A multiplicação entre ${intNumber3} e ${intNumber4} é ${intNumber3 * intNumber4}.`);
       break;
    case 4:
        if (intNumber4 !== 0) {
            console.log(`A divisão entre ${intNumber3} e ${intNumber4} é ${intNumber3 / intNumber4}.`);
        } else {
            console.log("Não é possível dividir por zero.");
        }
        break;
    default:
        console.log("Opção inválida.");
}

//Desenvolva um programa que leia o nome e a idade de uma pessoa. Utilize o bloco try/catch para
//garantir que a idade digitada seja um valor inteiro válido.
const userName = prompt("Digite o seu nome:");
const userAge2 = parseInt(prompt("Digite sua idade:"))

try {

    if (userAge2 > 0) {
        console.log(`${userName} tem ${userAge2} anos de idade.`);

    } else {

        throw new Error("Entrada inválida. Por favor, digite uma idade válida.");

      }
    
} catch (error) {

    console.error("Ocorreu um erro:", error.message);
        
}

//Crie um programa que leia um valor em metros e o converta para centímetros, milímetros e
//quilômetros. Utilize o bloco try/catch para tratar possíveis exceções durante os cálculos.
const valueInMeters = Number(prompt("Digite um valor em metros maior que zero:"));

try {

    if (valueInMeters > 0) {
        console.log(`${valueInMeters} metros corresponde a ${valueInMeters * 100} centímetros.`);
        console.log(`${valueInMeters} metros corresponde a ${valueInMeters * 1000} milímetros.`);
        console.log(`${valueInMeters} metros corresponde a ${valueInMeters / 1000} quilômetros.`);
    } else {

        throw new Error("Entrada inválida. Por favor, digita um valor em metros maior que zero.");

      }
    
} catch (error) {

    console.error("Ocorreu um erro:", error.message);
        
}


