import { useEffect, useState } from 'react'
import {Button1} from './Components/Buttons';
import Youtubecard from './Components/Youtubecard';
import AddPostModel from './Components/AddPostModel';
import Sidebar from './Components/Sidebar';
import axios from 'axios';
import Twittercard from './Components/Twittercard';




function App() {
  


  //chosen from the side bar elements

  const [SideBarType,setSideBarType] = useState('all')

  function SideBarAll(){
    setSideBarType('all')
  }
  function SideBarTweet(){
    setSideBarType('tweet')

  }
  function SideBarYoutube(){
    setSideBarType('youtube')
  }



// type from databse
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
  const res =  await axios.get('https://second-brain-backend-eta.vercel.app/read',{
    headers:{
     authorization:localStorage.getItem('token')
    }})
    const contentArray = Object.values(res.data.content); // Transform object to array
    setcontent(contentArray);
}

useEffect(()=>{fetchdata()},[]);

  return (

    <>
    <body className='h-screen bg-gray-100'>
    <div>
    <Sidebar SideBarAll={SideBarAll} SideBarTweet={SideBarTweet} SideBarYoutube={SideBarYoutube}/>
    {openAddPostModel?
    <AddPostModel popup={popup} fetchdata={fetchdata} twitter={twitter} youtube={youtube} Type={Type} />:null}
     <div className='flex justify-end gap-x-4 mr-6 relative bottom-4'>
    <Button1 popup={popup}></Button1>
    </div>
    <div className="flex flex-wrap ml-60 relative bottom-10">
  {SideBarType=='all' ? content.map((x) =>
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
  ):SideBarType=='youtube'? content.map(x=>x.type==='youtube' ? (   <Youtubecard
    key={x._id}
    title={x.title}
    link={x.link}
    content_id={x._id}
    fetchdata={fetchdata}
  />):null): SideBarType == 'tweet' ? content.map(x=>x.type==='twitter' ? (
    <Twittercard
      key={x._id}
      title={x.title}
      link={x.link}
      content_id={x._id}
      fetchdata={fetchdata}
    />
  ):null): null}
</div>
</div>
</body>
    </>
  )
}

export default App
