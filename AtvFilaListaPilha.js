//Considere o array [3, 7, 9, 1, 0].
//O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.
//Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações, 
//qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado?

//Remoção em fila.
//Para esvaziar uma fila, utilizamos o comando shift(), assim, sempre o primeiro item da fila será removido.
//Neste exemplo temos 5 elementos, portanto utilizamos 5 comandos shift() para esvaziar este array.
//A sequência de remoção acontece da primeira posição até a última do array (de 3 à 0, neste exemplo).

const arrayFila = [3, 7, 9, 1, 0];

arrayFila.shift();
arrayFila.shift();
arrayFila.shift();
arrayFila.shift();
arrayFila.shift();
console.log(arrayFila);

//Remoção em pilha.
//Para esvaziar uma pilha, utilizamos o comando pop(), assim, sempre o elemento que está no topo da pilha será removido.
//Neste exemplo temos 5 elementos, portanto utilizamos 5 comandos pop() para esvaziar este array.
//A sequência de remoção acontece da última posição do array até a primeira (de 0 à 3, neste exemplo).

const arrayPilha = [3, 7, 9, 1, 0];

arrayPilha.pop();
arrayPilha.pop();
arrayPilha.pop();
arrayPilha.pop();
arrayPilha.pop();
console.log(arrayPilha);

//Remoção em lista.
//Para esvaziar uma lista, podemos utilizar o comando splice() e você pode escolhe qual elemento quer remover e a quantidade.
//Na lista não existe uma sequência de remoção, você que decide o que quer remover e a quantidade, até esvaziar o array.
//Neste exemplo podemos utilizar o splice com o índice de posição no zero e a quantidade de elementos a serem removidos sendo cinco, esvaziando assim, toda a lista. 

const arrayLista = [3, 7, 9, 1, 0];

arrayLista.splice(0,5);
console.log(arrayLista);
