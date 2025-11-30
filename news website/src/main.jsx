import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AboutArticle from './components/AboutArticle.jsx'


let router = createBrowserRouter([
{path: '/', element: <App></App>, },
 {
    path: '/about-article',
    element: <AboutArticle></AboutArticle>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
