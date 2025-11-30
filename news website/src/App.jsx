import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import DefaultHeadlines from './components/DefaultHeadlines';
import { Outlet } from 'react-router-dom';

function App() {

   let [headlines,setHeadlines] = useState([])
   let [search,setSearch] = useState('world')



   useEffect(()=>{

   fetch(`https://newsapi.org/v2/everything?q=${search}&language=en&sortBy=publishedAt&apiKey=cbb5a69668a64f579241f2672d921ad0`)
   .then(res=> res.json())
   .then(data=> setHeadlines(data.articles))

   },[search])

   let handleSearch = (value)=>{
        setSearch(value)
        console.log(value);
        
   }
  
  return (
    <div className="main">
      
       <Navbar handleSearch={handleSearch}></Navbar>


       <DefaultHeadlines  headlines={headlines}></DefaultHeadlines>


    </div>
  )
}

export default App