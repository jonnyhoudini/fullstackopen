import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>
const Display = (props) => <p>{props.feedback} {props.number}</p>
const Statistics = ({ name, number }) => <p>{name} {number}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const total = good + neutral + bad;

  const average = good - bad;

  const percent = !isNaN((good / total * 100).toFixed(1)) ? `${(good / total * 100).toFixed(1)}%` : 0

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h2>Statistics</h2>
      {total < 1 ? <p>No feedback given</p> : <Statistics name='good' number={good} />}
      {total < 1 ? "" : <Statistics name='neutral' number={neutral} />}
      {total < 1 ? "" : <Statistics name='bad' number={bad} />}
      {total < 1 ? "" : <Statistics name='average' number={average} />}
      {total < 1 ? "" : <Statistics name='total' number={total} />}
      {total < 1 ? "" : <Statistics name='positive' number={percent} />}
    </div>
  )
}

export default App