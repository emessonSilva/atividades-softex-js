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

function removeFirst(list) {
  if (!list) {
    console.log("Lista vazia!");
    return null;
  }

  const newHead = list.child;
  list.child = null; 
  console.log(`Primeira pessoa removida: ${list.name}`);
  return newHead;
}

function removeLast(list) {
  if (!list) {
    console.log("Lista vazia!");
    return null;
  }

  if (!list.child) {
    console.log(`Última pessoa removida: ${list.name}`);
    return null;
  }

  let current = list;
  while (current.child.child) {
    current = current.child;
  }
  console.log(`Última pessoa removida: ${current.child.name}`);
  current.child = null;
  return list;
}

function search(list, name) {
    let current = list;
    while (current) {
      if (current.name === name) {
        console.log(`Found: Name: ${current.name}, Age: ${current.age}`);
        return current;
      }
      current = current.child;
    }
    console.log(`Person '${name}' not found.`);
    return null;
  }
  
  let peopleList = null;
  peopleList = addPerson(peopleList, "Alice", 25);
  peopleList = addPerson(peopleList, "João", 30);
  peopleList = addPerson(peopleList, "Maria", 22);
  
  console.log("People List:");
  printPeople(peopleList);
  search(peopleList, "Alice");
  peopleList = removeFirst(peopleList);
  peopleList = removeLast(peopleList);
  printPeople(peopleList);
  
