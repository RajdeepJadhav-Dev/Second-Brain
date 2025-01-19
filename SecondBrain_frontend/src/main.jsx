import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Signup,Signin} from './auth.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { RecoilRoot } from 'recoil'



createRoot(document.getElementById('root')).render(
<RecoilRoot>
  <BrowserRouter>
  <StrictMode>
        <Routes>
          <Route path='/dashboard' element={<App/>}></Route>
          <Route path='/' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
  </StrictMode>,
  </BrowserRouter>
  </RecoilRoot>
)
