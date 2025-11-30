import { useRef, useState } from "react";

let Input=({setVideos})=>{


    
    let nameRef = useRef(null)
    let channelNameRef = useRef(null)

    let handleSubmit = e=>{
         e.preventDefault()

         setVideos(pre=>([
            ...pre,
            { 
            name: nameRef.current.value,
            channel: channelNameRef.current.value,
            }
         ]))
    }


return <form onSubmit={handleSubmit} >
  
  <label htmlFor="name">
    NAME:
    <input type="text" ref={nameRef} />
  </label> 

  <label htmlFor="channelName">
    CHANNEL NAME
    <input type="text" ref={channelNameRef} />
  </label>

  <button className="submit">SUBMIT</button>

</form>
}


export default Input;