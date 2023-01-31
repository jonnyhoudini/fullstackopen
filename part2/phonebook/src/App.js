import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  const handleNameInput = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberInput = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    if (persons.find(person => person.name == newName)) {
      alert(`${newName} is already in the phonebook!`)
    } else {
      setPersons(persons.concat({ name: newName, number: newNumber }))
      setNewName('')
    }
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    setFilteredPersons(getFilteredPersons())
  }

  const getFilteredPersons = () => {
    if (filter.length > 0) {
      return persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    } else {
      return persons
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input onChange={handleFilter} />
      <br /><br />
      <form>
        <div>
          name: <input onChange={handleNameInput} value={newName} />
        </div>
        <div>number: <input onChange={handleNumberInput} value={newNumber} /></div>
        <div>
          <button onClick={handleSubmit} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(person => <li key={person.id}>{person.name} {person.number}</li>)}
      </ul>
    </div>
  )
}

export default App
