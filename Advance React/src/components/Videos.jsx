import React, { useContext, useEffect, useState } from 'react'
import { VideoDispatchContext } from '../context/videoDispatchContext'
import { LightTheme } from '../context/ThemeContext'


function Videos({ video, GetEditVideo, getPlayingVideo }) {

   // let [playing,setPlaying] = useState(false)
   const dispatch = useContext(VideoDispatchContext)
   const lightTheme = useContext(LightTheme)


   const fallbackImage = './FALLBACK.jpg'


   useEffect(() => {
      // let id = setInterval(() => {
      //    console.log('playing......', video.id);

      // }, 2000)

      // return () => {
      //    clearInterval(id)
      // }

   }, [])




   return (
      <div onClick={() => {
         getPlayingVideo(video)

      }} className={lightTheme ? 'lightVideo' : 'video'}>
         <img src={video.img || fallbackImage} onError={(e) => 
            {
               e.target.src = fallbackImage;
               console.log(e);
            }
         } />
         <p>{video.title}</p>
         <p>{video.subscribers} | {video.liked ? 'liked' : null}</p>
         {/* <p>{playing ? 'PLAYING...' : 'PAUSED'}</p>  */}
         <button onClick={(e) => {
            e.stopPropagation()
            dispatch({ type: 'DELETE', payload: video.id })
         }} className="delete">X</button>
         <button onClick={e => {
            e.stopPropagation()
            GetEditVideo(video.id)
         }} className="edit">[]</button>
      </div>

   )
}

export default Videos