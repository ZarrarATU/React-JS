import Videos from "./components/videos"
import { useState } from "react"
import {data} from './data/data'
import AddVideo from "./components/addVideo"


function App() {

  const [videos,setVideos] = useState(data)
  const [editableVid,setEditableVid] = useState(null)

  function addVideo(video){
     setVideos([...videos,{...video,id: videos.length}])
  }

  function deleteVideo(id){
    
    setVideos(videos.filter(vid=>vid.id !== id ))
  }

  function getEditVideo(id){
    setEditableVid(videos.find(vid=>vid.id === id )) 
  }

  function editVideo(e,editedVideo){
          e.preventDefault()
          setVideos(prev=>prev.map(vid=>{
           return vid.id === editedVideo.id ? editedVideo : vid
          }))


          setEditableVid(null) 
  }


//    function editVideo(e,editedVideo) {
//   e.preventDefault()
//   setVideos(prev =>
//     prev.map(vid =>
//       vid.id === editedVideo.id
//         ? editedVideo   
//         : vid
//     )
//   )

//   setEditableVid(null) 
// }



  return (
    <div>

      <AddVideo editVideo={editVideo} editableVid={editableVid} addVideo={addVideo}></AddVideo>

       <div className='videos'>
      {videos.map(video=> <Videos editVideo={getEditVideo} deleteVideo={deleteVideo} key={video.title} video={video}></Videos>)}
       </div>
      
    </div>
  )
}

export default App