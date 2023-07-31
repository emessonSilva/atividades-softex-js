//questão 01
let frase = prompt ("Entre a primeira frase:");
console.log(frase);

//questão 02
let string = "123";
console.log(typeof Number(string));

let number = 321;
console.log(typeof String(number));

//questão 3
let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

let resultado = numero1 + numero2;
console.log(resultado);

//questão 4
string1 = "Estudar ";
string2 = "é bom!";
console.log(string1 + string2);

//Solicite ao usuário seu nome e imprima uma mensagem de boas-vindas na tela.
const name = prompt("Digite seu nome:");
console.log("Bem vindo(a),"+ " "+ name+ "!");

//Peça ao usuário que digite sua idade em texto (por exemplo, "18") e converta-a em um número inteiro.
const age = prompt("Digite sua idade:");
const intAge = parseInt(age);
console.log(typeof intAge);

//Receba um número inteiro do usuário e converta-o em um número decimal (float). 
const number0 = prompt("Digite um número inteiro:");
const floatNumber = parseFloat(number);
console.log(floatNumber);

// Peça ao usuário para digitar dois números inteiros e exiba a soma deles. 
const num1 = Number(prompt("Digite o primeiro número:"));
const num2 = Number(prompt("Digite o segundo número"));
const result = num1 + num2;
console.log("A soma é: "+result);

//Receba um número decimal do usuário e calcule o seu quadrado. 
const numDec = Number(prompt("Digite um número decimal:"));
const result0 = numDec * numDec;
console.log(result0);

//Peça ao usuário que insira o seu ano de nascimento e, em seguida, exiba a sua idade. 
const year = Number(prompt("Digite o ano do seu nascimento:"));
const actualYear = new Date().getFullYear();
const yourAge = actualYear - year;
console.log("Sua idade é:"+ " "+yourAge);


//Peça ao usuário que digite seu primeiro nome e seu sobrenome separadamente. Em seguida, concatene-os em uma única string e exiba o nome completo. 
const firstName = prompt("Digite seu primeiro nome:");
const lastName = prompt("Digite seu sobrenome:");
console.log("Seu nome é: "+firstName+ " "+ lastName);

//Solicite ao usuário uma sequência de números separados por espaço e exiba quantos números foram digitados. 
const numbers = prompt("Digite uma sequência de números separados por espaço:");
const div = numbers.split(" ");
const length0 = div.length;
console.log("A quantidade de números digitados é: "+length0);

//Receba o nome de um animal digitado pelo usuário e exiba uma mensagem informando qual animal foi digitado. 
const animal = prompt("Digite o nome de um animal:");
console.log("O animal digitado foi: "+animal);

//Peça ao usuário que digite o seu nome e o seu sobrenome. Em seguida, exiba o nome completo invertido (sobrenome, nome). 
const name1 = prompt("Digite seu primeiro nome:");
const name2 = prompt("Digite seu sobrenome:");
console.log("Seu nome invertido: "+name2+" "+name1);

//Receba uma string digitada pelo usuário e imprima o seu tamanho (número de caracteres). 
const text = prompt("Digite algo:");
console.log("Tamanho do texto(contando espaços): "+text.length+" "+"caracteres");

//Solicite ao usuário um número inteiro e exiba se ele é par ou ímpar. 
const num3 = prompt("Digite um número:");
if (num3 % 2 === 0) {
    console.log("O número "+num3+" é par!");
} else {
    console.log("O número "+num3+" é ímpar!");
}

// Receba um número inteiro digitado pelo usuário e verifique se ele é positivo ou negativo. 
const num4 = prompt("Digite um número:");
if (num4 > 0) {
    console.log("O número "+num4+" é positivo!");
} else {
    console.log("O número "+num4+" é negativo!");
}

//Peça ao usuário que insira dois números e exiba o maior deles.
const num5 = prompt("Digite o primeiro número:");
const num6 = prompt("Digite o segundo número:");
if (num5 > num6) {
    console.log("O número "+num5+" é o maior!");
} else if (num5 < num6) {
    console.log("O número "+num6+" é o maior!");
} else {
    console.log(num5+" e "+num6+" são iguais!");
}

//Receba a altura e o peso de uma pessoa digitados pelo usuário. 
//Em seguida, calcule o seu índice de massa corporal (IMC) utilizando a fórmula: IMC = peso / (altura * altura) e exiba o resultado. 
const height = parseFloat(prompt("Digite sua altura:"));
const weight = parseFloat(prompt("Digite seu peso:"));
const IMC = weight / (height * height);
console.log("Seu IMC é "+IMC);

//Peça ao usuário que digite o seu nome e verifique se ele contém mais de 5 caracteres.
const userName = prompt("Digite seu nome:");
const verify = userName.length > 5 ? "Seu nome possui mais que 5 caracteres!" : "Seu nome possui 5 caracteres ou menos";
console.log(verify);

//Solicite ao usuário que insira o seu estado civil e exiba uma mensagem apropriada 
//(por exemplo: "Você é casado(a)", "Você é solteiro(a)", etc.).
function civilState() {
    const validStates = ["solteiro", "solteira", "casado", "casada", "namorando", "viúvo", "viúva", "divorciado", "divorciada", "separado", "separada"];
    const inputCivilState = prompt("Informe seu estado civil (solteiro(a), casado(a), namorando, viúvo(a), divorciado(a), separado(a):");
  
    if (!validStates.includes(inputCivilState.toLowerCase())) {
      alert("Informe um valor válido!");
      civilState();
      return;
    }
  
    alert(`Você é ${inputCivilState}`);
  }
  
  civilState();

//Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule a sua área e
//exiba o resultado.
const rectangleBase = Number(prompt("Digite o valor da base do retângulo (em metros):"));
const rectangleHeight = Number(prompt("Digite o valor da altura do retângulo (em metros):"));
const rectangleResult = rectangleBase * rectangleHeight;
console.log(`A área do retângulo é de ${rectangleResult} metros!`);

//Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" 
//(ou outra letra de sua escolha).
const city = prompt("Digite o nome de sua cidade:");
if (city.charAt[0] == 'S' || city.charAt[0] == 's' ) {
    console.log(`A cidade de ${city} inicia com S!`);
} else {
    console.log(`A cidade de ${city} não inicia com S!`);
}

//Solicite ao usuário que insira dois números decimais e calcule o resto da divisão entre eles.
const floatNumber1 = parseFloat(prompt("Digite o primeiro número decimal (com o ponto):"));
const floatNumber2 = parseFloat(prompt("Digite o segundo número decimal (com o ponto):"));
const floatResult = floatNumber1 % floatNumber2;
console.log(`O resto da divisão entre ${floatNumber1} e ${floatNumber2} é ${floatResult}.`);

//Solicite ao usuário um número decimal e converta-o em um número inteiro.
const floatNumber3 = parseFloat(prompt("Digite um número decimal (com o ponto):"));
let intNumber = Math.round(floatNumber3); // Arredonda o número de acordo com a regra da matemática
console.log(`O número decimal ${floatNumber3} foi arredondado para o inteiro ${intNumber}.`);

//Receba uma string contendo um número inteiro e some 10 a esse número, convertendo-o
//novamente para uma string antes de exibi-lo.
const stringNumber = prompt("Digite um número:");
const convertNumber = parseInt(stringNumber);
const add10 = convertNumber + 10;
const convertNumber2 = add10.toString();
console.log(`O valor é ${convertNumber2} do tipo ${typeof convertNumber2}!`);

//Solicite ao usuário que digite uma data no formato "dd/mm/aaaa" e extraia o dia, o mês e o ano
//separadamente, convertendo-os em números inteiros.
const date = prompt("Informe uma data no formato dd/mm/aaaa:");
const [dayDate, monthDate, yearDate] = date.split('/').map(Number);
console.log(`O dia ${dayDate} é do tipo ${typeof dayDate}!`);
console.log(`O mês ${monthDate} é do tipo ${typeof monthDate}!`);
console.log(`O ano ${yearDate} é do tipo ${typeof yearDate}!`);

//Receba o nome de uma cidade do usuário e concatene-o com o nome do estado para formar uma
//mensagem completa, como "Você mora em [cidade], [estado].".
const userCity = prompt("Digite o nome da cidade que mora:");
const userState = prompt("Digite o nome do estado que mora:");
console.log(`Você mora em ${userCity}, ${userState}.`);

//Solicite ao usuário que insira seu ano de nascimento e concatene-o com uma mensagem de
//boas-vindas, como "Bem-vindo ao nosso programa, nascido em [ano de nascimento]!".
const userBirthYear = parseInt(prompt("Insira seu ano de nascimento:"));
console.log(`Bem-vindo(a) ao nosso programa, nascido em ${userBirthYear}!`);

//Receba um número inteiro e uma string do usuário. Em seguida, concatene-os em uma única
//string, separando-os com um espaço.
const userNumber = Number(prompt("Digite um número:"));
const userString = prompt("Digite uma palavra:");
console.log(`Você digitou: ${userNumber} ${userString}.`);

//Receba o nome de um produto digitado pelo usuário e concatene-o com o preço do produto,
//adicionando o símbolo de moeda da sua escolha.
const userProduct = prompt("Digite o nome de um produto:");
const userPrice = prompt("Digite o valor do produto:");
console.log(`O/A ${userProduct} custa R$ ${userPrice}.`);

//Receba um número inteiro do usuário e concatene-o com uma mensagem, informando o dobro desse número.
const userNumber2 = Number(prompt("Digite um número:"));
const doubleNumber = userNumber2 * 2;
console.log(`Você digitou o número ${userNumber2} e o dobro dele é ${doubleNumber}`);

//Receba uma string contendo um endereço de e-mail e concatene-a com uma mensagem de agradecimento personalizada.
const userEmail = prompt("Digite seu email:");
const message = "Obrigado(a) por realizar o cadastro na nossa plataforma!";
console.log(`${message} Seu email de acesso é: ${userEmail}`);

//Receba dois números inteiros do usuário e exiba a soma, a diferença, o produto e o quociente
//(divisão inteira) entre eles.
const userNumber3 = parseInt(prompt("Digite o primeiro número inteiro:"));
const userNumber4 = parseInt(prompt("Digite o segundo número inteiro:"));
const sum = userNumber3 + userNumber4;
const subt = userNumber3 - userNumber4;
const mult = userNumber3 * userNumber4;
const div2 =  userNumber3/userNumber4;
console.log(`Soma: ${sum}`);
console.log(`Subtração: ${subt}`);
console.log(`Multiplicaçõ: ${mult}`);
console.log(`Divisão: ${div2}`);

//Peça ao usuário para digitar a base e a altura de um triângulo. 
//Em seguida, calcule e exiba a área do triângulo.
const triangleBase = Number(prompt("Digite a medida da base do triângulo:"));
const triangleHeight = Number(prompt("Digite a medida da altura do triângulo:"));
const triangleArea = (triangleBase * triangleHeight) / 2;
console.log(`A área do triangulo é ${triangleArea}.`);

//Receba o raio de uma circunferência digitado pelo usuário e calcule o seu perímetro (2 * π * raio).
const circleRadius = Number(prompt("Digite o valor do raio da circunferência:"));
const π = 3.14;
const circlePerimeter = 2 * π * circleRadius;

////Receba a base e a altura de um retângulo digitados pelo usuário. Em seguida, calcule e exiba o
//perímetro do retângulo.
const rectangleBase2 = Number(prompt("Digite o valor da base do retangulo:"));
const rectangleHeight2 = Number(prompt("Digite o valor da altura do retangulo:"));
const rectanglePerimeter = rectangleBase2 * 2 + rectangleHeight2 * 2;
console.log(`O perímetro da retangulo é ${rectanglePerimeter}.`);

//Solicite ao usuário que insira três números decimais. Em seguida, calcule e exiba a média
//aritmética desses números.
let sum2 = 0;
for (let i = 1; i <= 3; i++) {
  let floatNumbers = parseFloat(prompt(`Digite um número decimal:`));
  sum2 += floatNumbers;
}
const arithmeticAverage = sum2/3;
console.log(`A média dos números aritmética dos números é ${arithmeticAverage}.`)

//Peça ao usuário para digitar a sua idade e, em seguida, informe quantos meses e quantos dias ele já
//viveu (considerando um ano com 365 dias).
const userAge = parseInt(prompt("Digite sua idade:"));
let currentMonth = new Date().getMonth();
const monthsAlive = userAge * 12 + currentMonth;
const daysAlive = userAge * 365 + Math.floor(currentMonth * 30.4375);
console.log(`Você já viveu ${monthsAlive} meses e ${daysAlive} dias.`);

//Receba um valor em reais e a cotação do dólar digitados pelo usuário. Em seguida, converta o valor
//para dólares e exiba o resultado.
const realValue = Number(prompt("Digite um valor em reais:"));
const dollarQuotation = Number(prompt("Digite a cotação atual do dolar estadunidense:"));
const realIntoDollar = realValue / dollarQuotation;
console.log(`R$ ${realValue} equivale a US$ ${realIntoDollar}`);

//Solicite ao usuário para digitar um número decimal e arredonde-o para o inteiro mais próximo.
const floatNumber4 = parseFloat(prompt("Digite um número decimal (com o ponto):"));
let intNumber2 = Math.round(floatNumber4); // Arredonda o número de acordo com a regra da matemática
console.log(`O número decimal ${floatNumber4} foi arredondado para o inteiro ${intNumber2}.`);

//Receba três números inteiros digitados pelo usuário e exiba o resultado da operação (n1 + n2) * n3.
const intNumber3 = parseInt(prompt("Digite um número inteiro:"));
const intNumber4 = parseInt(prompt("Digite um número inteiro:"));
const intNumber5 = parseInt(prompt("Digite um número inteiro:"));
const numberOperation = (intNumber3 + intNumber4) * intNumber5;
console.log(`O resultado da operação (n1 + n2) * n3 é igual a ${numberOperation}.`);

//Peça ao usuário que digite uma temperatura em graus Celsius e a converta para Fahrenheit usando
//a fórmula: Fahrenheit = (Celsius * 9/5) + 32.
const celciusTemperature = Number(prompt("Digite o valor da temperatura em graus celcius (com ponto, caso seja decimal):"));
const fahrenheitTemperature = (celciusTemperature * 9/5) + 32;
console.log (`A temperatura ${celciusTemperature}°C é equivale a ${fahrenheitTemperature}°F.`);


