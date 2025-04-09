import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingPage from './pages/LandingPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Navbar from './components/Navbar.jsx'



const router = createBrowserRouter([{
  path:'/',
  element:<LandingPage/>,
},
{
  path:'/home',
  element: <HomePage/>
}
  

])

createRoot(document.getElementById('root')).render(
  <>
    <Navbar/>
    <RouterProvider router={router}/>
  </>
    
  
 
)
