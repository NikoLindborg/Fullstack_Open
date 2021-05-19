import React, { useState, useEffect } from 'react'
import Contact from './components/Contact'
import PersonForm from './components/PersonForm'
import FilterForm from './components/FilterForm'
import phoneService from './services/phoneservice'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [filter, setFilter] = useState('')
  const [filteredList, setList] = useState([{}])
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorOrNot, setErrorValue] = useState(false)

  useEffect(() => {
    phoneService
      .getAll()
        .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {    
      name: newName,
      number: newNumber
    }
    if(persons.map(e => e.name).includes(personObject.name)){
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with the new one?`)){
        const person = persons.filter(e => e.name === newName)
        console.log(person)
        phoneService
          .update(person[0].id, personObject)
            .then(returnedPerson => {
              setPersons(persons.map(e => e.id !== person[0].id ? e : returnedPerson))
              setErrorMessage(
                `Updated phonenumber for ${newName}`
              )
              setErrorValue(false)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            }) .catch(e => {
              setErrorMessage(
                `Information of ${newName} has already been removed from sever`
              )
              setErrorValue(true)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            })
      }
      return null
    }
    phoneService
      .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setErrorMessage(
            `Added ${newName}`
          )
          setErrorValue(false)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setNewName('')
      })
  }
  
  const addFilter = (e) => {
    e.preventDefault()
    if(showAll) {
      console.log('changed')
      setShowAll(!showAll)
    }
    const lowerList = persons.map(el => el.name).map(el => el.toLowerCase())

    const lowerFilter = filter.toLowerCase()
    const filteredLowerList = lowerList.filter(el => el.includes(lowerFilter))

    setList(filteredList.splice(0,filteredList.length))
    setList(filteredList.concat(persons.filter(e => 
      filteredLowerList.includes(e.name.toLowerCase())
    )))
  
  }
  
  const deletePerson = (person) => {
    console.log(person)
    if(window.confirm(`Delete ${person.name}?`)){
      phoneService
        .remove(person.id)
        .then( () => {
          setErrorMessage(
            `Deleted ${person.name}`
          )
          setErrorValue(false)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(n => n.id !== person.id))
        }).catch(e => {
          setErrorMessage(
            `Couldn't delete ${person.name}, perhaps he was already gone?`
          )
          setErrorValue(true)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })

    }
  }

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }
  const contactsToShow = showAll 
  ? persons
  : filteredList


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} error={errorOrNot}/>
      <FilterForm 
        addFilter={addFilter}
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <button onClick={() => setShowAll(true)}>Remove filter</button>
      <h3>Add a new</h3>
        <PersonForm
          addPerson={addPerson}
          newName={newName}
          handleNameChange={handleNameChange}
          newNumber={newNumber}
          handleNumberChange={handleNumberChange}
        />
      <h2>Numbers</h2>
      <div>
      {contactsToShow.map(person => 
            <Contact 
              key={person.name} 
              contact={person} 
              remove={deletePerson}
            />
          )}
      </div>
    </div>
  )

}

export default App