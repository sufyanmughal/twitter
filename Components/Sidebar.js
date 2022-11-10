import Image from "next/image";
import SidebarMenuitem from "./SidebarMenuitem";
import {HomeIcon} from "@heroicons/react/solid"
import {HashtagIcon} from "@heroicons/react/solid"
import {BellIcon} from "@heroicons/react/solid"
import {InboxIcon} from "@heroicons/react/solid"
import {BookmarkIcon} from "@heroicons/react/solid"
import {ClipboardIcon} from "@heroicons/react/solid"
import {UserIcon} from "@heroicons/react/solid"
import {DotsCircleHorizontalIcon} from "@heroicons/react/solid"
import {DotsHorizontalIcon} from "@heroicons/react/solid"

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
        {/*Twitter Logo*/}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" width="50" height="50"></Image>
        </div>
         {/*Menu*/}
        <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuitem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuitem text="Explore" Icon={HashtagIcon}/>
        <SidebarMenuitem text="Notification" Icon={BellIcon}/>
        <SidebarMenuitem text="Messages" Icon={InboxIcon}/>
        <SidebarMenuitem text="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarMenuitem text="Lists" Icon={ClipboardIcon}/>
        <SidebarMenuitem text="Profile" Icon={UserIcon}/>
        <SidebarMenuitem text="More" Icon={DotsCircleHorizontalIcon}/>
        </div>
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <Image className="w-10 h-10 rounded-full xl:mr-2" width={50} height={50} alt="userimage" src={"https://www.upwork.com/profile-portraits/c1GwQzOgWR4bnBto0ssa6my1CYrQq2Dz8wFZN-XnUDUX50AM0aa99UvP-FAxUP16FD"}></Image>
            <div className="leading-5">
                <h4 className="font-bold">Sufyan ahmad</h4>
                <p className="text-gray-500">@sufyanmughal</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8"  />
        </div>
       
        {/*Button*/}
        {/*Mini - Profile*/}
    </div>
  )
}
