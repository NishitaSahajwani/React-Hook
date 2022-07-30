import React, { useRef } from 'react'

function UseRef() {
   const myRefValue = useRef('100px')
   console.log(myRefValue.current)
  return (
    <div>
      <input type="text" ref={myRefValue}/>
      <button onClick={()=>myRefValue.current.style.width = "300px"}>Click Me</button>
    </div>
  )
}

export default UseRef
