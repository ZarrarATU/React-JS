import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import About from './components/about.jsx'
import Information from './components/information.jsx'

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={App()}>
      <Route path='/about/:aboutuser' element={<About></About>}></Route>
      <Route path='/information' element={<Information></Information>}></Route>
      <Route path='*' element={'saar i m sorry 404 '}></Route>
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
