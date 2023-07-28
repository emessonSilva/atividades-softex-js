//Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. 
//A partir dessas informações, o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2023).
//Caso o usuário não digite um número ou apareça um inválido no campo do ano,
//o sistema informará o erro e continuará perguntando até que um valor correto seja preenchido.

function dadosUsuario() {
    const nomeCompleto = prompt("Digite seu nome completo:");
    const anoNascimento = parseInt(prompt("Digite seu ano de nascimento(entre 1922 - 2021):"));
  
    
    if (nomeCompleto === null || nomeCompleto === "" || isNaN(anoNascimento)) {
      alert("Por favor, preencha todas as informações corretamente.");
      dadosUsuario(); 
      return;
    }
  
    calcularIdade(nomeCompleto, anoNascimento);
  }

function calcularIdade(nomeCompleto, anoNascimento) {
    
    if (isNaN(anoNascimento) || anoNascimento < 1922 || anoNascimento > 2021) {
      alert("Ano de nascimento inválido. Digite um ano entre 1922 e 2021.");
      dadosUsuario(); 
      return;
    }
  
    const idade = 2023 - anoNascimento;
    alert(`Olá, ${nomeCompleto}! Você completou ou completará ${idade} anos em 2023.`);
  }
  
  dadosUsuario();   
  
