//Regular function without parameters

function say() {
    console.log('Hello World!');
  }
  
say();  
  

//Regular function  with parameters

function function2(operator, num1, num2) {
    
    switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          result = 'Operador inválido';
      }
    
      return `O retorno é ${result}`;
    };
    
    console.log(function2('+', 20, 10)); 

//Arrow function

const function3 = (operator, num1, num2) => {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = 'Operador inválido';
    }
  
    return `O retorno é ${result}`;
  };
  
  console.log(function3('-', 20, 10)); 
  