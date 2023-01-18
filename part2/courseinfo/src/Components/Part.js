import React from 'react'

const Part = (props) => {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.exercises}</li>
        </ul>
    )
}

export default Part