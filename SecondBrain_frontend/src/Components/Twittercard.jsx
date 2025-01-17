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
    await axios.delete('http://localhost:3000/delete', {
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
        <div className="shadow-md rounded-lg bg-white max-w-60 px-2 min-h-56 mx-3 hover:shadow-xl my-2 transform hover:-translate-y-1 transition-transform duration-300">
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
<blockquote class="twitter-tweet"  data-media-max-width="560" data-lang="en" data-theme="light"><p lang="en" dir="ltr">It is a big day for Andhra Pradesh as we launch significant green energy initiatives and crucial infrastructure development projects. Watch live from Visakhapatnam. <a href="https://t.co/UyP1ILEs1W">https://t.co/UyP1ILEs1W</a></p>&mdash; Narendra Modi (@narendramodi) <a href={props.link.replace('x.com','twitter.com')}>January 8, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>     
   
            
        </div>
        </div>:null}
        </>
    );
}