import React, { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  
  return (
  <div>

    <Header></Header>
    <br />
    <br />
    <br />

  <Outlet></Outlet>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />

<Footer></Footer>
    
  </div>
  )
}

export default App