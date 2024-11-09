import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/home'
import Layout from './Layout'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import GitHub, { gitHubInfoLoader } from './components/GitHub/GitHub'

const router =createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"About",
      element:<About/>
    },
    {
      path:"Contact",
      element:<Contact/>
    },
    {
      path:"User/:userID",
      element:<User/>
    },
    {
      loader:gitHubInfoLoader,
      path:"GitHub",
      element:<GitHub/>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
