//Criar uma solução matemática na qual os números precisa ser informado pelo usuário.
//Deve ocorrer uma exceção dentro do código. 
//Utilizar try, catch e finally para realizar a captura e tratamento da excessão.

  alert ("Para calcular a raiz quadrada de um número clique OK.")

    // Solicita ao usuário um número
    const numero = parseFloat(prompt("Digite um número positivo:"));

  try {
    // Verifica se o número é válido
    if (isNaN(numero)) {
      throw new Error("O valor informado não é um número válido.");
    }
  
    // Verifica se o número é negativo
    if (numero < 0) {
      throw new Error("Não é possível calcular a raiz quadrada de um número negativo.");
    }
  
    // Calcula a raiz quadrada
    const raizQuadrada = Math.sqrt(numero);
  
    // Exibe o resultado
    alert (`A raiz quadrada de ${numero} é: ${raizQuadrada}`);
  } catch (error) {
    // Captura e trata a exceção se necessário
    alert(`Ocorreu um erro: ${error.message}`);
  } finally {
    // O finally irá executar independente do que aconteça anteriormente
    alert("Fim do programa");
  }
  