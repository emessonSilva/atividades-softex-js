//Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para 
//armazenar informações sobre animais e as suas características.
//Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, 
//como nome, espécie e idade.

const animals = [
    ["Gato", "Felino", 4],
    ["Cachorro", "Mamífero", 6],
    ["Cobra", "Reptil", 7],
    ["Pinguim", "Ave", 3],
    ["Polvo", "Molusco", 2]
];

//Acessando informações do animal da terceira linha.
console.log("Informações do animal na terceira linha (nome, espécie e idade):")
console.log(animals [2][0]);
console.log(animals [2][1]);
console.log(animals [2][2]);

//Adicionando mais um animal ao final da matriz.
animals.push (["Cachorro", "Mamífero", 1]);
console.log(animals[5][0]);

//Listando todos os animais e suas características (nome, espécie e idade).
let animalsList = '';
for (let lines = 0; lines <= 5; lines++) {
    for (let columns = 0; columns <= 2; columns++) {
        animalsList += animals[lines][columns] + ' ';
    }
    animalsList += '\n';
}
console.log(animalsList);