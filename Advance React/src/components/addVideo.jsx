import React, { useEffect, useState } from 'react'

function AddVideo({addVideo,editableVid,editVideo}) {

    let [title,setTitle] = useState('')
    let [subs,setSubs] = useState(0)


   useEffect(()=>{
      if(editableVid){
        setTitle(editableVid.title)
        setSubs(editableVid.subscribers)
      }
   },[editableVid])     

  function handleSubmit(e){
    e.preventDefault()
    addVideo({title: title,img: `https://picsum.photos/id/${subs}/250/150`,liked: false,subscribers: subs,playing: false})
  }

  function handleChange(e){
    if(e.target.name === 'title'){
      setTitle(e.target.value)
    }
    else{
      setSubs(e.target.value)
    }
    
  }


  return (
    <form >
        <p>Title</p>
        <input value={title} name='title' onChange={handleChange} type="text" />
        <p>Subscribers</p>
        <input type="number" name='subs' value={subs} onChange={handleChange}  />
        {editableVid ? <button onClick={(e)=>editVideo(e,{...editableVid,title: title, subscribers: subs})}>Edit Video</button> : <button onClick={handleSubmit}>Add Video</button>}
        
    </form>
  )
}

export default AddVideo