import Videos from "./components/videos"
import { useState } from "react"
import {data} from './data/data'


function App() {

  const [videos,setVideos] = useState(data)

  return (
    <div>
       <div className='videos'>

      {videos.map(video=> <Videos key={video.title} video={video}></Videos>)}
       </div>
      
    </div>
  )
}

export default App