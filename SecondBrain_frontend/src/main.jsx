import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Signup,Signin} from './auth.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([{
  path:'/',
  element: <App/>
},{
  path:'/signup',
  element:<Signup/>
}
,{
  path:'/signin',
  element:<Signin/>
}


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router = {router}/>
  </StrictMode>,
)
