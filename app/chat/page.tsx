import Profile from "@/components/sidebar-tabs/profile";
import ChatScreen from "@/components/chat-screen";
import ChatTabs from "@/components/sidebar-tabs/chat";

export default function Chat(){
    return (
        <div className="grow">
            <div className="flex">
                {/* <Profile/> */}
                <ChatTabs/>
                <ChatScreen/>
                
            </div>
        </div>
    )
}

