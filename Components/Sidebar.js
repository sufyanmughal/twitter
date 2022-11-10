import Image from "next/image";
import SidebarMenuitem from "./SidebarMenuitem";
import {HomeIcon} from "@heroicons/react/solid"

export default function Sidebar() {
  return (
    <div>
        {/*Twitter Logo*/}
        <Image src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" width="50" height="50"></Image>
        <SidebarMenuitem text="Home" Icon={HomeIcon}/>
        {/*Menu*/}
        {/*Button*/}
        {/*Mini - Profile*/}
    </div>
  )
}
