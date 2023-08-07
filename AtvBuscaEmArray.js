//Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript 
//para encontrar o valor 20. Para isso, temos que escolher entre realizar uma busca linear 
//ou binária de acordo com a que for mais adequada para essa situação. 
//Codifique a solução mais eficiente para buscar o número 20 no array.

//Neste exemplo utilizamos a busca linear, pois os elementos do array estão desordenados.

let array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementoRequerido = 20;

function buscarElemento(array, elementoRequerido) {
    let elementoEncontrado = '';

    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementoRequerido) {
            elementoEncontrado = true;
            console.log(`O elemento ${elementoRequerido} está na posição ${i} do array!`);
            break;
        }
    }

    if (elementoEncontrado == false) {
        console.log(`O elemento ${elementoRequerido} não foi encontrado no array!`);
    }
}

buscarElemento(array, elementoRequerido);
