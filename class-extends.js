// ricopio la classe FullPerson da class.js

class HumanBeing {
  // per inizializzare l'istanza a partire da parametri è necessario utilizzare la funzione constructor dentro la classe
  constructor(_firstName, _lastName, _age, _email) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.email = _email
    // stiamo dichiarando che ogni oggetto (istanza) di questa classe FullPerson avrà le seguenti proprietà:
    // firstName, lastName, age e email
    // inoltre stiamo anche dando un valore iniziale a queste proprietà, grazie ai parametri del constructor
  }

  numberOfLegs = 2 // sto aggiungendo ad ogni istanza una proprietà chiamata "numberOfLegs" dotata di valore "fisso"
  // se esistono delle proprietà con valore fisso, ovvero con lo stesso valore per ogni istanza
  showCompleteName() {
    return 'Ciao! Io mi chiamo ' + this.firstName + ' ' + this.lastName
  }
}

const human1 = new HumanBeing('Mario', 'Rossi', 30, 'mario@rossi.com')
console.log('HUMAN1', human1)

// ora sfruttiamo una caratteristica delle classi: la capacità di creare una classe non da zero, ma a partire da un'altra
// quando si sfrutta questa cosa? beh, ogni volta che è necessario creare una nuova entità con delle caratteristiche
// parzialmente già definite in un'altra classe

class Developer extends HumanBeing {
  // ho appena creato una classe estendendone un'altra
  // così facendo mi sono automaticamente importato tutti i metodi e le proprietà della classe che sto estendendo
  constructor(_firstName, _lastName, _age, _email, _skills = []) {
    super(_firstName, _lastName, _age, _email) // grazie a super() sto invocando il costruttore di HumanBeing
    this.skills = _skills // proprietà uniche dei developer
  }
}

const developer1 = new Developer('Mario', 'Bianchi', 25, 'mario@bianchi.com', [
  'HTML',
  'CSS',
  'JS',
])

console.log('DEVELOPER1', developer1)
console.log('DEVELOPER1', developer1.showCompleteName()) // invoco un metodo non inserito nella classe Developer
// ma automaticamente ereditato dalla classe HumanBeing
