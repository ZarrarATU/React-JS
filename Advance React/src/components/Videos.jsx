import React, { useEffect, useState } from 'react'


function Videos({video}) {

   let [playing,setPlaying] = useState(false)

 


  return (
   
         <div onClick={()=>setPlaying(!playing)} key={video.title} className='video'>
                <img src={video.img}/>
                <p>{video.title}</p>
                <p>{video.subscribers} | {video.liked ? 'liked': null}</p>
                <p>{playing ? 'PLAYING...' : 'PAUSED'}</p> 
            </div>

  )
}

export default Videos