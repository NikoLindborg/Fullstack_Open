import React from 'react'



const Contact = props => {
  return (
    <div>
      <p>{props.contact.name} {props.contact.number}</p>
      <button onClick={() => props.remove(props.contact)}>delete</button> 
    </div>
  )
}

export default Contact