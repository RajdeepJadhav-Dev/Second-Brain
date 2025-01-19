import SidebarElements from "./SidebarElements";

export default function Sidebar({SideBarAll,SideBarTweet,SideBarYoutube}){


    return(
        <>
       <div className="h-screen fixed w-60 bg-white shadow-md">
        <SidebarElements  SideBarAll={SideBarAll} SideBarTweet={SideBarTweet} SideBarYoutube={SideBarYoutube} />
       </div>
        </>
    );
}