import SidebarElements from "./SidebarElements";

export default function Sidebar(){


    return(
        <>
       <div className="h-screen fixed w-72 bg-white shadow-md">
        <SidebarElements/>
       </div>
        </>
    );
}