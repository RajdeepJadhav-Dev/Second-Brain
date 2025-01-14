import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Button1,Button2} from './Components/Buttons';
import Card from './Components/card';
import AddPostModel from './Components/AddPostModel';
import Sidebar from './Components/Sidebar';
import axios from 'axios';



function App() {
  

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
    <AddPostModel popup={popup} fetchdata={fetchdata} />:null}

     <div className='flex justify-end gap-x-4 mr-6 relative bottom-4'>
    <Button2 ></Button2>
    <Button1 popup={popup}></Button1>
    </div>

<div className='flex flex-wrap ml-72 relative bottom-10'>
  {content.map(x=> <Card title={x.title} link={x.link} content_id={x._id} type={'youtube'}></Card>)}
</div>
</div>
    </>
  )
}

export default App
