import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Numbers from './components/Numbers'
import Message from './components/Message'
import axios from 'axios'
import services from './services'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
  const [message, setMessage] = useState(null)

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
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        console.log('yes')
        const person = persons.find(person => person.name == newName)
        services
          .update(person.id, personObj)
          .then(updatedPerson => {
            console.log(updatedPerson)
            setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
            setMessage(`Updated ${updatedPerson.name}`)
            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }
    } else {
      services
        .create(personObj)
        .then(newPerson => {
          console.log(newPerson)
          setPersons(persons.concat(newPerson))
          setMessage(`Added ${newPerson.name}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
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

  const handleDelete = (id, name) => {
    console.log(id)
    if (window.confirm(`Delete ${name}?`)) {
      console.log('yes')
      services
        .deletePerson(id)
        .then(response => {
          console.log(response)
          setPersons(persons.filter(person => person.id !== id))
          setMessage(`Deleted ${name}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
        .catch(error => {
          console.log(error)
          setMessage(`Information of ${name} has already been removed from server`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter} />
      <br /><br />
      <Message message={message} />
      <h2>Add a new</h2>
      <Form handleNameInput={handleNameInput} handleNumberInput={handleNumberInput} handleSubmit={handleSubmit} newName={newName} newNumber={newNumber} />
      <h2>Numbers</h2>
      <Numbers persons={filter.length > 0 ? filteredPersons : persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App
