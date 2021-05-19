import React from 'react'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    );
  };
  
  const Part = (props) => {
    return(
        <p>{props.name} {props.exercise}</p>
    );
  };
  
  const Content = ({course}) => {
    const exercises = course.map(e => e.exercises)
    const total = exercises.reduce( (s, p) => {
  
      return s + p
    })
    return (
      <>
        {course.map(course => 
              <Part key={course.id} name={course.name} exercise={course.exercises}/>
            )}
          <p style={{fontWeight: 'bold'}}>Total of {total} exercises</p>
      </>
    );
  };
  
  
  const Course = ({course}) => {
    return(
      <div>
        <Header course={course.name}/>
        <Content course={course.parts}/>
      </div>
    )
  }
  
  export default Course