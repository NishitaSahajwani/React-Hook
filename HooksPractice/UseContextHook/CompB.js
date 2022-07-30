import React, { useContext, useState } from 'react'
import { myCountValue } from './UseContext'

function CompB() {
    const count = useContext(myCountValue)
    console.log(count)
    // const [countvalue, setCountvalue] = useState(count)
    
  return (
    <div>
      <p className='text-center'>Current Count : {count}</p>
    </div>
  )
}

export default CompB
