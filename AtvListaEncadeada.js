//Crie uma lista encadeada em que cada elemento representa uma pessoa.
//Ela precisa conter informações como nome, idade e referência ao filho dela.

function createPersonNode(name, age) {
    return { name: name, age: age, child: null };
  }
  
  function addPerson(list, name, age) {
    const newNode = createPersonNode(name, age);
  
    if (!list) {
      return newNode;
    } else {
      let current = list;
      while (current.child) {
        current = current.child;
      }
      current.child = newNode;
      return list;
    }
  }
  
  function printPeople(list) {
    let current = list;
    while (current) {
      console.log(`Name: ${current.name}, Age: ${current.age}`);
      current = current.child;
    }
  }
  
  let peopleList = null;
  peopleList = addPerson(peopleList, "Alice", 25);
  peopleList = addPerson(peopleList, "João", 30);
  peopleList = addPerson(peopleList, "Maria", 22);
  
  console.log("People List:");
  printPeople(peopleList);
  