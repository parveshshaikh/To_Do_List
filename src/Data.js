
import React from 'react'

const Data = (props) => {
         
  return (
    <div className='todo_style'>
          <i className='fa fa-times' onClick={()=>{
            props.select(props.id)
          }}/>
       <li>{props.text}</li>
    </div>
  )
}

export default Data
