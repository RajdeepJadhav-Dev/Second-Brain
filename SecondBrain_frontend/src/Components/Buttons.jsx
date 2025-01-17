import PlusIcon from '../icons/plusicon.jsx';
import Share from '../icons/share.jsx';
import axios from 'axios';
import {useState} from 'react';
import { useRecoilState } from 'recoil';


export function Button1({popup}){
    return(
<>
<button onClick={popup} className="bg-1 px-4 rounded-md flex  text-white gap-x-2 items-center text-xs py-2 my-8 hover:shadow-xl mr-3  transform hover:-translate-y-1 transition-transform duration-300"><PlusIcon /> Add Content</button>
</>
    );
}

