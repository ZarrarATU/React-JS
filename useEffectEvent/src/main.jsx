import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterContextProvider, RouterProvider } from 'react-router-dom'
import Home from './component/Home.jsx'
import About from './component/About.jsx'
import Contact from './component/Contact.jsx'


let router = createBrowserRouter([
   {path: '/', element: <App></App>,
     children: [
        {path: '', element: <Home></Home>},
        {path: '/about/:vara', element: <About></About>},
        {path: '/contact', element: <Contact></Contact>}
     ]
   }, 
])

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}>

    </RouterProvider>
  
)
