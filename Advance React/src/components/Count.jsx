import React, { useRef } from 'react'

function Count() {

    const countValue = useRef(0)
    
    function handleClick(){
        countValue.current = countValue.current + 1
        console.log('without render ',countValue.current);
        
    }

  return (
    <div>
        <button className="count">COUNT</button>
    </div>
  )
}

export default Count