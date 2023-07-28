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
console.log(`A área do retângule é de ${rectangleResult} metros!`);

//Peça ao usuário que digite a sua cidade e verifique se ela começa com a letra "S" 
//(ou outra letra de sua escolha).
const city = prompt("Digite o nome de sua cidade:");
if (city.charAt[0] == 'S' || city.charAt[0] == 's' ) {
    console.log(`A cidade de ${city} inicia com S!`);
} else {
    console.log(`A cidade de ${city} não inicia com S!`);
}
