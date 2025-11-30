import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import LoginForm from './components/LoginForm.jsx'
import Home from './components/Home.jsx'


let router = createBrowserRouter([ 
  {path: '/', element: <App></App>, children: [
    {path: 'login', element: <LoginForm/>},
    {path: 'home', element: <Home/>},
  ]},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
