//Desenvolva um código que simule uma eleição com três candidatos.
//- candidato_X => 889
//- candidato_Y => 847
//- candidato_Z => 515
//- branco => 0
//O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda 
//a nenhum candidato ou seja branco, ele deve ser tratado como nulo. 
//Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.
//Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e,
// também, a quantidade de votos de cada candidato, os brancos e nulos. 

function votar(voto) {
    switch (voto) {
      case 889:
        candidato_X++;
        break;
      case 847:
        candidato_Y++;
        break;
      case 515:
        candidato_Z++;
        break;
      case 0:
        branco++;
        break;
      default:
        nulo++;
        break;
    }
  }
  
  function candidatos() {
    const votoUsuario = parseInt(prompt(
      "Digite o número do candidato que deseja votar (889: candidato X, 847: candidato Y, 515: candidato Z, 0: voto branco) ou 'FIM' para encerrar a votação: "
    ));
  
    if (isNaN(votoUsuario) || votoUsuario === "") {
      alert("Voto inválido, digite novamente!");
      candidatos();
      return;
    }

    if (votoUsuario === 889 || votoUsuario === 847 || votoUsuario === 515 || votoUsuario === 0) {
        votar(votoUsuario);
      } else {
        console.log("Voto inválido, digite novamente!");
        candidatos();
      }
  }

 
let candidato_X = 0;
let candidato_Y = 0;
let candidato_Z = 0;
let branco = 0;
let nulo = 0;
    
do {
    candidatos();
      
    const encerrarEleicao = prompt("Deseja finalizar a eleição (s/n)?");
    if (encerrarEleicao === 's' || encerrarEleicao === 'S') {
        break;
    } else {
         candidatos();
    }
      
} while (true);

console.log("Resultado da eleição:");
console.log(`Candidato X: ${candidato_X} votos`);
console.log(`Candidato Y: ${candidato_Y} votos`);
console.log(`Candidato Z: ${candidato_Z} votos`);
console.log(`Votos em branco: ${branco}`);
console.log(`Votos nulos: ${nulo}`);

let vencedor;
let baseVotos = 0;

if (candidato_X > baseVotos) {
  vencedor = 'Candidato X';
  baseVotos = candidato_X;
}

if (candidato_Y > baseVotos) {
  vencedor = 'Candidato Y';
  baseVotos = candidato_Y;
}

if (candidato_Z > baseVotos) {
  vencedor = 'Candidato Z';
  baseVotos = candidato_Z;
}

if (vencedor) {
  console.log(`O vencedor é: ${vencedor}!`);
} else {
    console.log("Eleição sem vencedor!");
}
