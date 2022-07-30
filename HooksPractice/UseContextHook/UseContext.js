import React, { createContext, useState } from 'react'
import CompA from './CompA'
export const myCountValue= createContext()
function UseContext() {
   
    const [countValue, setCountValue] = useState(0)
  return (
    <div className='text-light' style={{backgroundColor: '#2980B9', height: '100vh'}}>
      <div style={{ paddingTop:'23%'}} className='d-flex flex-column align-items-center'>
      <h1>{countValue}</h1>
      
      <button onClick={() => setCountValue(countValue+1)} className='btn btn-warning'>Increment</button>
      <myCountValue.Provider value={countValue}>
      <CompA/>
      </myCountValue.Provider>
      </div>
    </div>
  )
}

export default UseContext
