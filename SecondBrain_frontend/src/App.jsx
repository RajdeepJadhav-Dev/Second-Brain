import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button1,Button2} from './Components/Buttons';
import Card from './Components/card';
import AddPostModel from './Components/addPostModel';
import Sidebar from './Components/Sidebar';


function App() {
const [open, setOpen] = useState(false);

function popup(){
  setOpen(prev=>!prev);
}

  return (
    <>
    <div className='h-screen bg-gray-100'>
    <Sidebar/>
    
    {open?
    <AddPostModel popup={popup} />:null}

     <div className='flex justify-end gap-x-4 mr-6'>
    <Button2 ></Button2>
    <Button1 popup={popup}></Button1>
    </div>

<div className='flex ml-72'>
<Card  type='youtube' link={'https://www.youtube.com/watch?v=dm1dSSZ7k3w'} title='oujfefiejifjeijfiejfi fiejige geojg' ></Card>
<Card type="twitter" link={'https://x.com/narendramodi/status/1876980119111442610'} title={'how to build a second brain'}>
</Card>
</div>
</div>
    </>
  )
}

export default App
