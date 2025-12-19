import Videos from "./components/videos"
import { useEffect, useReducer, useState } from "react"
import {data} from './data/data'
import AddVideo from "./components/addVideo"


function App() {

  function VideoReducer(state,action){
     switch(action.type){
        case 'ADD':
          return [...state,{...action.payload,id: state.length}];
        case 'DELETE':
          return state.filter(vid=>vid.id !== action.payload );
        case 'EDIT':
         return state.map(vid =>
    vid.id === action.payload.id
      ? action.payload
      : vid
  )
        default:
          return state  
     }
  }

  const [videos,dispatch] = useReducer(VideoReducer,data)
  // const [videos,setVideos] = useState(data)
  const [editableVid,setEditableVid] = useState(null)
  const [playingVid,setPlayingVid] = useState(null)

  // function addVideo(video){
  //    setVideos([...videos,{...video,id: videos.length}])
  // }

  // function deleteVideo(id){
    
    
  // }

  function getEditVideo(id){
    setEditableVid(videos.find(vid=>vid.id === id )) 
  }

  // function editVideo(e,editedVideo){
  //      
  //         setVideos()


  //         setEditableVid(null) 
  // }

  function getPlayingVideo(playingVid){
      setPlayingVid(playingVid)
    }

    useEffect(()=>{
      if(playingVid){
        console.log(playingVid.id);

      }

    },[playingVid])


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

      <AddVideo dispatch={dispatch} editableVid={editableVid}></AddVideo>

       <div className='videos'>
      {videos.map(video=> <Videos dispatch={dispatch} getPlayingVideo={getPlayingVideo} GetEditVideo={getEditVideo}  key={video.title} video={video}></Videos>)}
       </div>
      
    </div>
  )
}

export default App