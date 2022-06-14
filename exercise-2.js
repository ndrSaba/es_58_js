const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id);
      if (person) {
        return resolve(person)
      }

      return reject(`la persona con ${id} non esiste`);
    }, 1000);
  })
}

let promiseError = fetchPersonById(4);
promiseError
  .then((person) => {
    console.log(person)
  })
  .catch((err) => {
    console.log(`è stato provocato un errore:`, err)
  })