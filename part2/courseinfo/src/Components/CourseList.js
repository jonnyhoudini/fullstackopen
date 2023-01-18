import React from 'react'
import Course from './Course'

const CourseList = ({ courses }) => {

    const list = courses.map(course => {
        return <Course key={course.id} name={course.name} parts={course.parts} />
    })

    return (
        <>
            {list}
        </>

    )
}

export default CourseList