import React, { useRef, useState } from 'react'

function Count() {

    const countValue = useRef(0)
    const [state,setState] = useState(null)
    
    function handleClick(){
        countValue.current = countValue.current + 1
        console.log('without render ',countValue.current);
        
    }

    function handlePrint(){
        setState(countValue.current)
        console.log(countValue.current);
        
    }



  return (
    <div>
        <button onClick={handleClick} className="count">COUNT</button>
        <button onClick={handlePrint} className="printCount">PRINT</button>
    </div>
  )
}

export default Count