

let Videos = ({videos,setVideos})=>{
  return <div className="container">
    {videos.map((video,index)=> {
        return <div key={index} className="video">
             Name: {video.name}
             Channel: {video.channel}
        </div>
    })}
  </div>
}

export default Videos