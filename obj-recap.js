// GLI OGGETTI IN JS sono delle collezioni di coppie chiave/valore.
// Queste coppie chiave valore normalmente vengono chiamate "proprietà", e stabiliscono delle caratteristiche dell'oggetto.

const myDog = {
  name: 'Fido',
  numberOfPaws: 4,
  furColor: 'gold',
}

// tuttavia, un oggetto può non solo contenere delle proprietà, ma anche dei cosiddetti "metodi": un metodo non rappresenta
// una caratteristica di un oggetto quanto invece una capacità:

const myDog2 = {
  name: 'Pluto',
  numberOfPaws: 4,
  furColor: 'black',
  bark: function () {
    console.log('BAU')
  },
}

const numb = myDog2.numberOfPaws
// numb vale 4

myDog2.bark() // vedo in console la stringa 'BAU'

// abbiamo però visto che è possibile invocare delle capacità NON SOLO di oggetti { }, ma esistono metodi delle stringhe,
// degli array, dei numeri...

const school = 'EPICODE'
console.log(school.toLowerCase()) // 'epicode'
console.log(school.length) // 7

// questo avviene perchè anche se la variabile school è una stringa, eredita determinate caratteristiche e capacità da un
// oggetto chiamato String, che è possibile visionare invocando la proprietà "__proto__" di una qualsiasi entità in JS

// da questo il detto -> "In JS tutto è un oggetto"

// ---
// JS ha una caratteristica che oramai stiamo dando per scontato UNICA nel suo genere, ad esempio non disponibile
// in altri linguaggi come Java o C#:
// in JS possiamo creare un oggetto tramite la cosiddetta "notazione letterale" assolutamente dal nulla.

const teacher = {
  skills: ['JS'],
}

// in altri linguaggi, questa cosa è follia! per creare un oggetto, bisogna PRIMA stabilirne il tipo, la forma.
// perchè ogni tanto questa cosa è una limitazione in JS?
// questa cosa è una limitazione quando VOGLIO creare tanti oggetti uguali uno dopo l'altro...

// creiamo un oggetto dal nulla piuttosto complesso, grazie alla notazione letterale di JS:

const house = {
  buildingColor: 'lightgreen',
  numberOfFloors: 3,
  'garden-sqm': 25,
  families: ['Rossi', 'Bianchi'],
  explode: function () {
    console.log('BOOM!')
  },
}

console.log(house.buildingColor)
console.log(house.families[0])
house.explode() // invocazione del metodo explode

// ---

const person = {
  firstName: 'Giovanni',
  lastName: 'Storti',
  sayHello: function () {
    console.log('Ciao, io mi chiamo ' + this.firstName) // 'Ciao, io mi chiamo Giovanni'
  },
}

person.sayHello()

// limitazioni di questo approccio?

const dog1 = {
  name: 'Fifo',
  breed: 'French Bulldog',
}

const dog2 = {
  name: 'Fufy',
  breed: 'Labrador',
}

const dog3 = {
  name: 'Ciccio',
  bred: 'Pomeranian', // ERRORE TYPO
}

// come evitare questi errori?
// anche se in JS possiamo creare un oggetto senza il proprio "stampino", a volte è utile AVERE una struttura
// da seguire, in modo da non fare errori sul lungo periodo...

// questo metodo esiste, e in JS si chiama "funzione costruttore"
// passiamo a "constructor.js"
