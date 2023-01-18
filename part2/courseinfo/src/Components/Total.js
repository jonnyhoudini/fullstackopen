import React from 'react'

const Total = (props) => {

    const total = props.parts.reduce((acc, part) => acc + part.exercises, 0)
    return (
        <div>Total exercises: {total} <br /><br /></div>
    )
}

export default Total