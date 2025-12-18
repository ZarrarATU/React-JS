import React, { useEffect, useState } from 'react'


function Videos({video,deleteVideo,editVideo}) {

   let [playing,setPlaying] = useState(false)


   

 


  return (
   
         <div onClick={()=>setPlaying(!playing)} className='video'>
                <img src={video.img}/>
                <p>{video.title}</p>
                <p>{video.subscribers} | {video.liked ? 'liked': null}</p>
                <p>{playing ? 'PLAYING...' : 'PAUSED'}</p> 
                <button onClick={(e)=>{ e.stopPropagation()
                      deleteVideo(video.id)
                      }} className="delete">X</button>
                <button onClick={e=>{
                   e.stopPropagation()
                   editVideo(video.id)
                }} className="edit">[]</button>
            </div>

  )
}

export default Videos