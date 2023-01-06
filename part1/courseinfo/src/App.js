const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.module} - {props.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises: {props.total}</p>
  )
}

const Content = (props) => {
  return (
    <>
      <Part module={props.parts[0].part} exercises={props.parts[0].exercises} />
      <Part module={props.parts[1].part} exercises={props.parts[1].exercises} />
      <Part module={props.parts[2].part} exercises={props.parts[2].exercises} />
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </>
  )
}


export default App;
