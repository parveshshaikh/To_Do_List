import { useState } from 'react'
import './Card.css'
import Data from './Data'
const Card=(props)=>{
          const [item,setitme]=useState("")
          const[data,setdata]=useState([])
          
          function input(e){
                    const value=e.target.value
                    setitme(value)

          }
          const show=()=>{
            setdata((prevval)=>{
              return[...prevval ,item]
            })
            setitme("")
          }

          const del =(id)=>{
           setdata((pre)=>{
            return pre.filter((arr,index)=>{
              return index!==id
            })
           })
          }
          
return(
<div className='cards'>
<div className="box">
  <h1>Todo List</h1>
  <input type='text' placeholder='Enter item' value={item} onChange={input}/>
  <button onClick={show}>+</button>

<ol>
          {
            data.map((i,index)=>{
              return <Data
              id={index}
              key={index}
              text={i}
              select={del}/>
            })
          }
</ol>
   </div>
   
          
</div>
          )
}
export default Card