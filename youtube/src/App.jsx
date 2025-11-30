import Input from './components/input'
import './App.css'
import Videos from './components/videos'
import { useState } from 'react'



function App() {

      let [data,setData] = useState([
          {name: 'The Quiz works',channel: 'Duckyy'},
          {name: 'The Quiz works',channel: 'Duckyy'},
          {name: 'The Quiz works',channel: 'Duckyy'},
      ])


  return (
    <div>
      <Input setVideos={setData}></Input>
      <Videos videos={data} setVideos={setData}></Videos>
    </div>
  )  
}

export default App
