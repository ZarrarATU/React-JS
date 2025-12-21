import Videos from "./components/videos"
import { useEffect, useReducer, useState } from "react"
import { data } from './data/data'
import { VideosContext } from "./context/videosContext"
import { VideoDispatchContext } from "./context/videoDispatchContext"
import { LightTheme } from './context/ThemeContext'
import AddVideo from "./components/addVideo"


function App() {

  function VideoReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return [...state, { ...action.payload, id: state.length }];
      case 'DELETE':
        return state.filter(vid => vid.id !== action.payload);
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

  const [videos, dispatch] = useReducer(VideoReducer, data)
  // const [videos,setVideos] = useState(data)
  const [editableVid, setEditableVid] = useState(null)
  const [playingVid, setPlayingVid] = useState(null)
  const [lightTheme,setLightTheme] = useState(false)



  function getEditVideo(id) {
    setEditableVid(videos.find(vid => vid.id === id))
  }

  function handleTheme(){
     setLightTheme(!lightTheme)
  }



  function getPlayingVideo(playingVid) {
    setPlayingVid(playingVid)
  }

  useEffect(() => {
    if (playingVid) {
      console.log(playingVid.id);

    }

  }, [playingVid])






  return (
    <>
      <LightTheme.Provider value={lightTheme}>
        <VideosContext.Provider value={videos}>
          <VideoDispatchContext.Provider value={dispatch}>



            <div>

              <button onClick={handleTheme} className="themeSwitcher">LIGHT MODE</button>

              <AddVideo editableVid={editableVid}></AddVideo>

              <div className={lightTheme ? 'lightTheme videos' : 'videos'}>
                {videos.map(video => <Videos getPlayingVideo={getPlayingVideo} GetEditVideo={getEditVideo} key={video.title} video={video}></Videos>)}
              </div>

            </div>
          </VideoDispatchContext.Provider>
        </VideosContext.Provider>
      </LightTheme.Provider>
    </>


  )
}

export default App