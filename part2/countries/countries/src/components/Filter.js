import React from 'react'

const Filter = ({ handleFilter }) => {
    return (
        <>
            <span>Choose country: </span>  <input onChange={handleFilter} />
        </>
    )
}

export default Filter