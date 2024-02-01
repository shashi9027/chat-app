import Image from "next/image"
import SearchInput from "../search-input"
import UserChatCard from "../cards/user-chat-card"
import { Phone } from "@phosphor-icons/react/dist/ssr/Phone"
import UserLogCard from "../cards/user-call-log-card"



export default function CallLog(){
    return (
        <div className="tab-box bg-lightBlue100 ">
             <div >
                <div className="font-bold text-lg">Call Log</div>
             </div>
             <div className="mt-4">
                <SearchInput />
             </div>
             <div className="flex justify-between mt-4 text-blueText">
                <div>
                Start new converstaion
                </div>
                {/* <Image width={20} height={15} src="/icons/phone-blue.png" alt="phone-blue" /> */}
                <Phone size={25} />
             </div>
             <div className="hr w-full mt-3"/>
             <UserLogCard/>
        </div>
    )
}