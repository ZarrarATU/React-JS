import React, { useEffect, useEffectEvent, useState } from 'react'

function Mount() {

    let [count,setCount] = useState(0)

   let onTick =  useEffectEvent(()=>{
        setCount(count=>count+1)
        console.log(count);

    })
    useEffect(()=>{

       let id = setInterval(() => {

        onTick()

            
        }, 1000);

        return ()=>{
         clearInterval(id)
        }
         
    },[])

  return (
    <div>MOUNT SAAR {count}</div>
  )
}

export default Mount