import React from 'react'

const Form = ({ handleNameInput, handleNumberInput, handleSubmit, newName, newNumber }) => {
    return (
        <>
            <form>
                <div>
                    name: <input onChange={handleNameInput} value={newName} />
                </div>
                <div>number: <input onChange={handleNumberInput} value={newNumber} /></div>
                <div>
                    <button onClick={handleSubmit} type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default Form