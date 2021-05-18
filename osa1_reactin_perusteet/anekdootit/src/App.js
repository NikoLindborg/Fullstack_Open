import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display = ({anecdote, votes}) => (
  <p>{anecdote}<br/>
    has {votes} votes</p>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   console.log(anecdotes.length)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0)) 
  const [topVoted, setTop] = useState(selected)

 
  const add = () =>{
    const copy = [...votes] 
    copy[selected] += 1 
    setVotes(copy)
    
    if(copy[selected] > copy[topVoted]){
      setTop(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <Button handleClick={() => setSelected(Math.floor(Math.random() * 6))} text="next anecdote"/>
      <Button handleClick = {add} text="vote"/>
      <h1> Anecdote with most votes</h1>
      <Display anecdote={anecdotes[topVoted]} votes={votes[topVoted]} />
    </div>
  )
}

export default App