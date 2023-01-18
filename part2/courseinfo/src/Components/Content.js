import React from 'react'
import Part from './Part'

const Content = ({ course }) => {

    const parts = course.parts.map(part => {
        return <Part name={part.name} exercises={part.exercises} key={part.id} />
    })

    return (
        <>
            {parts}
        </>
    )
}

export default Content