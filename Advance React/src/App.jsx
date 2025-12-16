import Videos from "./components/videos"
import { useState } from "react"
import {data} from './data/data'
import AddVideo from "./components/addVideo"


function App() {

  const [videos,setVideos] = useState(data)

  function addVideo(video){
     setVideos([...videos,{...video,id: videos.length}])
  }

  return (
    <div>

      <AddVideo addVideo={addVideo}></AddVideo>

       <div className='videos'>
      {videos.map(video=> <Videos key={video.title} video={video}></Videos>)}
       </div>
      
    </div>
  )
}

export default App