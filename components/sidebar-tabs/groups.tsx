import Image from "next/image"
import SearchInput from "../search-input"
import UserChatCard from "../cards/user-chat-card"
import { Plus } from "@phosphor-icons/react/dist/ssr/Plus"

export default function Groups(){
    return (
        <div className="tab-box bg-lightBlue100 ">
             <div className="flex justify-between">
                <div className="font-bold text-lg">Groups</div>
             </div>
             <div className="mt-4">
                <SearchInput />
             </div>
             <div className="flex justify-between gap-3 mt-4 text-blueText">
                <div>
                Create New Group
                </div>
                <Plus size={25}/>
             </div>
             <div className="hr w-full mt-3"/>
             <div className="text-greyText mt-3 font-medium">Pinned</div>
             <UserChatCard/>
             <div className="text-greyText mt-3 font-medium">All Chats</div>
             <UserChatCard/>
        </div>
    )
}