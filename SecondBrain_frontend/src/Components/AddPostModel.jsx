import { useState,useRef } from "react";
import axios from 'axios';


export default function AddPostModel({popup,fetchdata,youtube,twitter,Type}){


const type = Type;
 const titleref = useRef();
const linkref = useRef();

async function AddContent(){
 const title = titleref.current.value;
 const link = linkref.current.value;
  await axios.post('http://localhost:3000/add',{
      title:title,
      link:link,
      type:type

  },{
   headers:{
    authorization:localStorage.getItem('token')
   }})
  alert("succefully posted");
popup();
fetchdata();

}








  return(
    <>
    <div className="fixed bg-gray-400/60 z-20 w-screen h-screen flex justify-center items-center">
    <div className="w-60 h-60 bg-white flex flex-col p-4">
    <label htmlFor="title">title</label>
    <input ref={titleref} className="bg-gray-300 " type="text" id="title" />
    <label  htmlFor="link">link</label>
    <input ref={linkref} className="bg-gray-300 " type="text" id="link" />

    <span onClick = {youtube} className={Type =='youtube' ? "border-black border-2 m-2 rounded-lg bg-1 ": "border-black border-2 m-2 rounded-lg " }>youtube</span>
    <span onClick = {twitter} className={Type =='twitter' ? "border-black border-2 m-2 rounded-lg bg-1":"border-black border-2 m-2 rounded-lg"}>twitter</span>
    <button onClick = {AddContent} className="bg-gray-300 my-2 rounded-lg">add</button>
    </div>
    </div>
    </>
  );
}