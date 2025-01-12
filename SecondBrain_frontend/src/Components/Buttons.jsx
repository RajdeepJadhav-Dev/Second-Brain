import PlusIcon from '../icons/plusicon.jsx';
import Share from '../icons/share.jsx';

export function Button1({popup}){
    return(
<>
<button onClick={popup} className="bg-1 px-4 rounded-md flex  text-white gap-x-2 items-center text-xs py-2 my-8 hover:shadow-xl  transform hover:-translate-y-1 transition-transform duration-300"><PlusIcon /> Add Content</button>
</>
    );
}

export function Button2(){

    return(
        <>
        <button className=' bg-2  px-5 rounded-md flex text-1 text-xs justify-center gap-x-2 py-2 my-8 hover:shadow-xl  transform hover:-translate-y-1 transition-transform duration-300'><Share/>Share Brain</button>
    
        </>
    );
}