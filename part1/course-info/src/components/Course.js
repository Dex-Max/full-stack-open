const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
}
  
const Total = ({ course }) => {
    let sum = 0;
  
    for(let part of course.parts){
      sum += part.exercises;
    }
  
    return(
      <b>Number of exercises {sum}</b>
    ) 
}
  
const Part = ({ name, exercises}) => {
    return (
      <p>
        {name} {exercises}
      </p>    
    )
}
  
const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        <Total course={course} />
      </div>
      
    )
}

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course}/>
        <Content course={course}/>
      </div>
    )
}

export default Course