  import Tweet from '../icons/tweet';
  import Youtube from '../icons/youtube';
  import MainIcon from '../icons/mainIcon';
  
  export default function SidebarElements(){


    return(
        <>
        <div className='flex text-2xl items-center px-9 fixed py-6'><MainIcon/>Second Brain</div>
        <div className='my-24 mx-12'>
        <div className='flex gap-x-3 items-center my-2 px-2 text-gray-800 hover:bg-gray-300 hover:rounded-lg hover:shadow-xl  transform hover:-translate-y-1 transition-transform duration-300  '><Tweet/>Tweets</div>
        <div className='flex gap-x-3 items-center my-2 px-2 text-gray-800 hover:bg-gray-300 hover:rounded-lg hover:shadow-xl  transform hover:-translate-y-1 transition-transform duration-300'><Youtube/>Videos</div>
        </div>
        </>

    );
}