import Share from '../icons/share'
import Delete from '../icons/delete'
import Video from '../icons/video';
import {useState,useEffect} from 'react';
import axios from 'axios';



export default function Twittercard(props){
const contentId = props.content_id
const [openCard,setopenCard] = useState(true);
async function CardPopup(){
   setopenCard(prev=>!prev)
    await axios.delete('https://second-brain-backend-e7xp.onrender.com/delete', {
        headers: {
            authorization: localStorage.getItem('token') // Send token in the headers
        },
        data: { contentId: contentId }
    })

    }

    useEffect(() => {
        // Trigger Twitter embed rendering after the component renders or updates
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
        }
      }, [props.link]);


    return(
        <>
        {openCard ? 
        <div className="shadow-md rounded-lg bg-white w-64 px-2 h-56 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-400 overflow-y-auto mx-3 hover:shadow-xl my-2 transform hover:-translate-y-1 transition-transform duration-300">
        <ul className='flex items-center justify-between gap-x-2 pt-2 pb-1'>
            <li className='text-gray-500 pt-[1px]'><Video></Video></li>
            <li className='text-xs  font-bold '>{props.title}</li>
            <div className='flex gap-x-3'>
            <li className='text-gray-500'><Share/></li>
            <li className='text-gray-500'><Delete CardPopup={CardPopup}></Delete></li>
            </div>
        </ul>
        <div >
                <div>
<blockquote class="twitter-tweet"  data-media-max-width="560" data-lang="en" data-theme="light"><p lang="en" dir="ltr"><a href="https://t.co/UyP1ILEs1W">loading....</a></p><a href={props.link.replace('x.com','twitter.com')}></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>        
        </div>
        </div>:null}
        </>
    );
}
