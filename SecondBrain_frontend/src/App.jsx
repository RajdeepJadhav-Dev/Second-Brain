import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button1} from './Components/Buttons';
import Youtubecard from './Components/Youtubecard';
import AddPostModel from './Components/AddPostModel';
import Sidebar from './Components/Sidebar';
import axios from 'axios';
import Twittercard from './Components/Twittercard';




function App() {
  
  const [Type,setType] = useState('youtube')

  function youtube(){
    setType('youtube')
  }

  function twitter(){
    setType('twitter')
  }



const [openAddPostModel, setOpenAddPostModel] = useState(false);
const [content,setcontent] = useState([]);

function popup(){
  setOpenAddPostModel(prev=>!prev);
}

async function fetchdata(){
  const res =  await axios.get('http://localhost:3000/read',{
    headers:{
     authorization:localStorage.getItem('token')
    }})
    const contentArray = Object.values(res.data.content); // Transform object to array
    setcontent(contentArray);
}

useEffect(()=>{fetchdata()},[]);

  return (

    <>
    <div className='h-screen bg-gray-100'>
    <Sidebar/>
    {openAddPostModel?
    <AddPostModel popup={popup} fetchdata={fetchdata} twitter={twitter} youtube={youtube} Type={Type} />:null}
     <div className='flex justify-end gap-x-4 mr-6 relative bottom-4'>
    <Button1 popup={popup}></Button1>
    </div>
    <div className="flex flex-wrap ml-72 relative bottom-10">
  {content.map((x) =>
    x.type === 'youtube' ? (
      <Youtubecard
        key={x._id}
        title={x.title}
        link={x.link}
        content_id={x._id}
        fetchdata={fetchdata}
      />
    ) : (
      <Twittercard
        key={x._id}
        title={x.title}
        link={x.link}
        content_id={x._id}
        fetchdata={fetchdata}
      />
    )
  )}
</div>

</div>
    </>
  )
}

export default App
