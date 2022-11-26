import React from 'react'
// import PropTypes from 'prop-types'

function Todoitem({todo, onDelete}) {
  return (
    <div>
        <h3>{todo.title}</h3>
        <p>{todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}} >Delete</button>
    </div>
  )
}

// Todoitem.defaultProps = {
//     title: "Work name D",
//     desc: "Work details D ",
// }

// Todoitem.propTypes = {
//     title: PropTypes.string,
//     desc: PropTypes.string,
// }

export default Todoitem
