import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Signup,Signin} from './auth.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { RecoilRoot } from 'recoil'










{/*const router = createBrowserRouter([{
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

])*/}

createRoot(document.getElementById('root')).render(
<RecoilRoot>
  <BrowserRouter>
  <StrictMode>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/sigin' element={<Signin/>}></Route>
        </Routes>
  </StrictMode>,
  </BrowserRouter>
  </RecoilRoot>
)
