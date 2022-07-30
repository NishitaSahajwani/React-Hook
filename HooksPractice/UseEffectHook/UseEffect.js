import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
      console.log('useEffect called')
      if(count>=1) {

          document.title= `chats(${count})`
      } 
      else{
       document.title=`chats`
      }
    })

  return (
    <div style={{backgroundColor: '#2980B9', height: '100vh'}}>
        <div style={{ paddingTop:'23%'}} className='d-flex flex-column align-items-center'>
      <h2 className='text-light'>{count}</h2>
      <button onClick={()=>setCount(count+1)} className='btn btn-warning'>Click Me</button>
      </div>
    </div>
  )
}

export default UseEffect
