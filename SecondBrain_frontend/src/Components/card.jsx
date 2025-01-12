import Share from '../icons/share'
import Delete from '../icons/delete'
import Video from '../icons/video';



export default function Card(props){



    return(
        <>
        <div className="shadow-md rounded-lg bg-white max-w-60 px-2 h-56 mx-3 hover:shadow-xl  transform hover:-translate-y-1 transition-transform duration-300">
        <ul className='flex items-center justify-evenly gap-x-2 pt-2 pb-1'>
            <li className='text-gray-500 pt-[1px]'><Video></Video></li>
            <li className='text-xs  font-bold '>{props.title}</li>
            <li className='text-gray-500'><Share/></li>
            <li className='text-gray-500'><Delete></Delete></li>
        </ul>
        <div >
            
            {props.type=='youtube'? <iframe className='w-full p-2' src={props.link.replace("watch","embed").replace('?v=','/')} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            :                <div className="transform scale-90 origin-top-left pt-3">

<blockquote class="twitter-tweet"  data-media-max-width="560" data-lang="en" data-theme="light"><p lang="en" dir="ltr">It is a big day for Andhra Pradesh as we launch significant green energy initiatives and crucial infrastructure development projects. Watch live from Visakhapatnam. <a href="https://t.co/UyP1ILEs1W">https://t.co/UyP1ILEs1W</a></p>&mdash; Narendra Modi (@narendramodi) <a href={props.link.replace('x.com','twitter.com')}>January 8, 2025</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>
            }
            
        </div>
        </div>
        </>
    );
}