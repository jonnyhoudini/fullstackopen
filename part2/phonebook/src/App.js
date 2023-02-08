import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Numbers from './components/Numbers'
import axios from 'axios'
import services from './services'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)

  useEffect(() => {
    console.log('effect')
    services
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setFilteredPersons(initialPersons)
      })
  }, [])

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
    const personObj = { name: newName, number: newNumber }
    console.log('button clicked', event.target)
    if (persons.find(person => person.name == newName)) {
      alert(`${newName} is already in the phonebook!`)
    } else {
      services
        .create(personObj)
        .then(newPerson => {
          console.log(newPerson)
          setPersons(persons.concat(newPerson))
        })
      setNewName('')
      setNewNumber('')
    }
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
    setFilteredPersons(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }



  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <br /><br />
      <Form handleNameInput={handleNameInput} handleNumberInput={handleNumberInput} handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Numbers persons={filter.length > 0 ? filteredPersons : persons} />
    </div>
  )
}

export default App
