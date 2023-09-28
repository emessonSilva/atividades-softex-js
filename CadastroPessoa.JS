//crie um cadastro de pessoa com os dados: nome, salário, idade e se possui diploma. Desenvolva o código utilizando exemplos para cada variável 
//que respeitem os tipos identificados. Certifique-se que os valores correspondam ao tipo certo. 

const pessoa = {
    nome: '',      
    salario: 0,  
    idade: 0,       
    possuiDiploma: false  
  };
  

  pessoa.nome = 'João Silva';
  pessoa.salario = 10000.00;  
  pessoa.idade = 30;         
  pessoa.possuiDiploma = true;  
  
  console.log('Nome: ' + pessoa.nome);
  console.log('Salário: ' + pessoa.salario);
  console.log('Idade: ' + pessoa.idade);
  console.log('Possui diploma: ' + (pessoa.possuiDiploma ? 'Sim' : 'Não'));