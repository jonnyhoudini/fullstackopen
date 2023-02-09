import React from 'react'
import Person from './Person'

const Numbers = ({ persons, handleDelete }) => {
    return (
        <ul>
            {persons.map(person => <Person key={person.id} person={person} handleDelete={handleDelete} />)}
        </ul>
    )
}

export default Numbers