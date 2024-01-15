console.log('la funzione constructor')

// la funzione constructor permette una facile creazione in serie di oggetti dotati tutti delle stesse caratteristiche
// e funzionalità

// se volessi "generalizzare" la struttura di un oggetto al fine di crearne tanti simili in serie, ha senso utilizzare
// una "funzione costruttore" (D R Y)

// creiamo una funzione construttore per un oggetto di tipo Person
// la nomenclatura da seguire per il nome è la PascalCase (come camelCase ma anche la prima lettera è maiuscola)
const Person = function () {
  // questa è una funzione COSTRUTTORE
  this.firstName = ''
  this.lastName = ''
  this.age = 0
  this.email = ''
  this.showCompleteName = function () {
    return 'Ciao! Io mi chiamo ' + this.firstName + ' ' + this.lastName
    // return `Ciao! Io mi chiamo ${this.firstName} ${this.lastName}`
  }
}

// abbiamo creato uno stampino, una fabbrica di Person
// come creo un oggetto con questo stampino?

const marioBros = new Person()
console.log('marioBros', marioBros)
console.log(marioBros.firstName) // -stringa vuota-

marioBros.firstName = 'Mario'
marioBros.lastName = 'Bros'
marioBros.age = 50

const luigiBros = new Person()
console.log('luigiBros', luigiBros)
luigiBros.firstName = 'Luigi'
luigiBros.lastName = 'Bros'
luigiBros.age = 48
console.log(luigiBros.showCompleteName())

// al momento grazie alla funzione costruttore stiamo creando dei "gusci vuoti", con tutte le proprietà stabilite
// ma con i valori tutti vuoti...
// miglioriamo ora la nostra funzione costruttore implementandone la capacità di ricevere i valori iniziali tramite parametri!

const FullPerson = function (_firstName, _lastName, _age, _email) {
  this.firstName = _firstName
  this.lastName = _lastName
  this.age = _age
  this.email = _email
  this.showCompleteName = function () {
    return 'Ciao! Io mi chiamo ' + this.firstName + ' ' + this.lastName
    // return `Ciao! Io mi chiamo ${this.firstName} ${this.lastName}`
  }
}

const anotherMarioBros = new FullPerson(
  'Mario',
  'Bros',
  50,
  'mariobros@gmail.com'
)
const anotherLuigiBros = new FullPerson(
  'Luigi',
  'Bros',
  48,
  'luigibros@gmail.com'
)

console.log(anotherMarioBros)
console.log(anotherLuigiBros)

const message = anotherLuigiBros.showCompleteName() // ora message è una stringa!
console.log(message.toUpperCase())

anotherLuigiBros.wendy = true // aggiungo a anotherLuigiBros una proprietà "wendy", questa proprietà riguarda
// solo lui, essendo stata inserita a livello di "istanza"
