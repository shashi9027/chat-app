import Image from "next/image"
import SearchInput from "../cards/search-input"
import UserChatCard from "../cards/user-chat-card"

export default function ChatTabs(){
    return (
        <div className="tab-box bg-lightBlue100 ">
             <div className="flex justify-between">
                <div className="font-bold text-lg">Chats</div>
                <Image width={25} height={15} src="/icons/CircleDashed.png" alt="dashed-circle"/>
             </div>
             <div className="mt-4">
                <SearchInput />
             </div>
             <div className="flex gap-3 mt-4 text-blueText">
               <Image width={20} height={15} src="/icons/ArchiveBox.png" alt="archive-box"/> Archived
             </div>
             <div className="hr w-full mt-3"/>
             <div className="text-greyText mt-3 font-medium">Pinned</div>
             <UserChatCard/>
             <div className="text-greyText mt-3 font-medium">All Chats</div>
             <UserChatCard/>
        </div>
    )
}