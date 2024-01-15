// devo fare in modo di creare col e card dinamicamente raccogliendo i dati inseriti nel form

// 1) prendiamo dei riferimenti agli input
const nameInput = document.getElementById('firstName')
const surnameInput = document.getElementById('lastName')
const phoneInput = document.getElementById('phone')
const emailInput = document.getElementById('email')

const saveButton = document.querySelector('form button') // il tag button dentro il tag form

// 2) creo la mia rubrica in memoria
const contacts = [] // un array di oggetti inizialmente vuoto

// creo una classe Contact, per creare un oggetto a partire dai dati recuperati dal form
class Contact {
  constructor(_firstName, _lastName, _phone, _email) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.phone = _phone
    this.email = _email
  }
}

const fillRowWithCards = function () {
  // devo creare delle cards a partire dall'array di oggetti "contacts"
  // 1) prendo un riferimento alla row
  const row = document.getElementById('contacts')
  // svuoto la lista prima di ricreare le col
  row.innerHTML = ''
  // 2) ciclo l'array contacts: per ogni contatto creo una col, creo una card e appendo il tutto
  contacts.forEach((contact) => {
    const newCol = document.createElement('div') // <div></div>
    newCol.classList.add('col') // aggiungo la classe col
    // riempio il contenuto della col
    newCol.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${contact.firstName} ${contact.lastName}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${contact.phone}</h6>
                <h6 class="card-subtitle mb-2 text-body-secondary">${contact.email}</h6>
            </div>
        </div>
        `
    // appendere la col alla row
    row.appendChild(newCol)
  })

  // svuoto il form ad operazione completata
  nameInput.value = ''
  surnameInput.value = ''
  phoneInput.value = ''
  emailInput.value = ''
}

// 3) assegno un comportamento all'invio del form
const formReference = document.getElementsByTagName('form')[0]
formReference.addEventListener('submit', function (e) {
  e.preventDefault() // fermiamo la pagina dal refresh
  // raccolgo i dati dagli input, e ne creo un oggetto

  const contact = new Contact(
    nameInput.value,
    surnameInput.value,
    phoneInput.value,
    emailInput.value
  )

  console.log('CONTATTO CREATO', contact)
  // riempio la rubrica
  contacts.push(contact)
  // popolare la seconda row della pagina con tante card quanti sono gli elementi di contacts
  fillRowWithCards()
})
