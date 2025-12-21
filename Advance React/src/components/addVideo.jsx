import React, { useContext, useEffect, useState } from 'react'
import { VideoDispatchContext } from '../context/videoDispatchContext'

function AddVideo({ editableVid }) {

  let [title, setTitle] = useState('')
  let [subs, setSubs] = useState(0)
  const dispatch = useContext(VideoDispatchContext)


  useEffect(() => {
    if (editableVid) {
      setTitle(editableVid.title)
      setSubs(editableVid.subscribers)
    }
  }, [editableVid])

  function handleSubmit(e) {
    e.preventDefault()
    if (editableVid) {
      dispatch({ type: 'EDIT', payload: { ...editableVid, title: title, subscribers: subs } })

    }
    else {
      const newVid = { title: title, img: `https://picsum.photos/id/${subs}/250/150`, liked: false, subscribers: subs, playing: false }
      dispatch({ type: 'ADD', payload: newVid })

    }
    setTitle('')
    setSubs('')
  }

  function handleChange(e) {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    }
    else {
      setSubs(e.target.value)
    }

  }


  return (
    <form onSubmit={handleSubmit} >
      <p>Title</p>
      <input value={title} name='title' onChange={handleChange} type="text" />
      <p>Subscribers</p>
      <input type="number" name='subs' value={subs} onChange={handleChange} />



      <button type='submit'>{editableVid ? 'EDIT' : 'ADD'}</button>

    </form>
  )
}

export default AddVideo