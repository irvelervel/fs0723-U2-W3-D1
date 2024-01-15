// le CLASSI in JS sono un metodo -alternativo- per creare delle funzioni costruttore
// lo scopo è sempre il medesimo: creare in modo robusto una struttura capace di costruire oggetti dello stesso tipo in serie
// è semplicemente un altro modo di scrivere una funzione costruttore

class FullPerson {
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

// l'utilizzo di una classe è identico all'utilizzo di una funzione costruttore

const marioBros = new FullPerson('Mario', 'Bros', 50, 'mariobros@gmail.com')
console.log(marioBros)

const stefano = new FullPerson('Stefano', 'Casasola', 18, 'stefano@gmail.com')

console.log(marioBros.game)
