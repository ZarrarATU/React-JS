import React, { useEffect, useState } from 'react'


function Videos({video,dispatch,GetEditVideo,getPlayingVideo}) {

   // let [playing,setPlaying] = useState(false)


   

 


  return (
   
         <div onClick={()=>{
            getPlayingVideo(video)
            
            }} className='video'>
                <img src={video.img}/>
                <p>{video.title}</p>
                <p>{video.subscribers} | {video.liked ? 'liked': null}</p>
                {/* <p>{playing ? 'PLAYING...' : 'PAUSED'}</p>  */}
                <button onClick={(e)=>{ e.stopPropagation()
                      dispatch({type: 'DELETE',payload: video.id })
                      }} className="delete">X</button>
                <button onClick={e=>{
                   e.stopPropagation()
                   GetEditVideo(video.id)
                }} className="edit">[]</button>
            </div>

  )
}

export default Videos