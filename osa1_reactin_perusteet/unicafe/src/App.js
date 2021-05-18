import React, { useState } from 'react'

const Header = ({text}) => <h1>{text}</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = ({text, value}) => {
  if (text === "positive"){
    return (
      <tbody>
        <tr> 
          <td>{text}</td> 
          <td>{value}%</td>
        </tr>
      </tbody>
    )
  }
  return (
    <tbody>
        <tr> 
          <td>{text}</td> 
          <td>{value}</td>
        </tr>
    </tbody>
  )
}

const Statistics = (props) => {

  const calcAvg = () => {
    const positives = props.good
    const negatives = -Math.abs(props.bad)
    const length = props.good + props.bad + props.neutral
    return Math.round((positives + negatives ) / length * 100) / 100
  }

  if(props.good === 0 && props.neutral === 0 && props.bad === 0){
    return(
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <table>
      <StatisticLine text="good" value = {props.good} />
      <StatisticLine text="neutral" value = {props.neutral} />
      <StatisticLine text="bad" value = {props.bad}/>
      <StatisticLine text="all" value = {props.good + props.neutral + props.bad} />
      <StatisticLine text="average" value = {calcAvg()}/>
      <StatisticLine text="positive" value = {Math.round(props.good/(props.good + props.bad + props.neutral) * 100) / 100 }/>
    </table>
  )
}
  

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text = "give feedback"/>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Header text = "statistics"/>
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App