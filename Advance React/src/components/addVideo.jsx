import React, { useState } from 'react'

function AddVideo({addVideo}) {

    let [title,setTitle] = useState('')
    let [subs,setSubs] = useState(0)


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
    console.log(e);
    
  }


  return (
    <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input value={title} name='title' onChange={handleChange} type="text" />
        <p>Subscribers</p>
        <input type="number" name='subs' value={subs} onChange={handleChange}  />
        <button type='submit'>Add Video</button>
    </form>
  )
}

export default AddVideo