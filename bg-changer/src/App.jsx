import'./App.css'
import Buttons from './assets/buttons';

function App(){
  return <div className="main">
        <div className="buttons">
             <Buttons color={'red'}></Buttons>
             <Buttons color={'green'}></Buttons>
             <Buttons color={'yellow'}></Buttons>
             <Buttons color={'pink'}></Buttons>
             <Buttons color={'brown'}></Buttons>
         
        </div>
  </div>
}


export default App;