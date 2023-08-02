//Você deve criar três listas em JavaScript:
//1. para guardar os nomes de dez pessoas;
//2. para guardar as suas idades;
//3. para guardar as suas cores favoritas.
//Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. 
//Ao terminar, imprima novamente todas as informações das três listas.

let names = ["João", "Maria", "Lucas", "Luiza", "Pedro", "Ana", "Thiago", "Joana", "Heitor", "Júlia"];
let ages = [18, 20, 15, 60, 66, 12, 30, 26, 8, 10];
let favoriteColors = ["Preto,", "Azul", "Rosa", "Branco", "Lilás", "Vermelho", "Amarelo", "Roxo", "Laranja", "Verde"];

console.log(names);
console.log(ages);
console.log(favoriteColors);

names.splice(2,1,"Henrique", "Vitória");
ages.splice(2,1,24,35);
favoriteColors.splice(2,1,"Verde", "Rosa");

console.log(names);
console.log(ages);
console.log(favoriteColors);

