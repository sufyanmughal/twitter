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
    <div>
        {/*Twitter Logo*/}
        <Image src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" width="50" height="50"></Image>
        <SidebarMenuitem text="Home" Icon={HomeIcon}/>
        <SidebarMenuitem text="Explore" Icon={HashtagIcon}/>
        <SidebarMenuitem text="Notification" Icon={BellIcon}/>
        <SidebarMenuitem text="Messages" Icon={InboxIcon}/>
        <SidebarMenuitem text="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarMenuitem text="Lists" Icon={ClipboardIcon}/>
        <SidebarMenuitem text="Profile" Icon={UserIcon}/>
        <SidebarMenuitem text="More" Icon={DotsCircleHorizontalIcon}/>

        <button>Tweet</button>
        <div className="">
            <Image width={50} height={50} alt="userimage" src={"https://www.upwork.com/profile-portraits/c1GwQzOgWR4bnBto0ssa6my1CYrQq2Dz8wFZN-XnUDUX50AM0aa99UvP-FAxUP16FD"}></Image>
            <div>
                <h4>Sufyan ahmad</h4>
                <p>@sufyanmughal</p>
            </div>
            <DotsHorizontalIcon className="h-5"  />
        </div>
        {/*Menu*/}
        {/*Button*/}
        {/*Mini - Profile*/}
    </div>
  )
}
