import React, { useEffect, useState } from 'react'


function Videos({video,setVideos,videos}) {

   let [playing,setPlaying] = useState(false)


   function handleDelete(id,e){
    e.stopPropagation()
    setVideos(videos.filter(vid=>vid.id !== id))
   }

 


  return (
   
         <div onClick={()=>setPlaying(!playing)} className='video'>
                <img src={video.img}/>
                <p>{video.title}</p>
                <p>{video.subscribers} | {video.liked ? 'liked': null}</p>
                <p>{playing ? 'PLAYING...' : 'PAUSED'}</p> 
                <button onClick={(e)=>handleDelete(video.id,e)} className="delete">X</button>
                <button className="edit">[]</button>
            </div>

  )
}

export default Videos