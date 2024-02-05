import Profile from "@/components/sidebar-tabs/profile";
import ChatScreen from "@/components/ChatScreen";
import ChatTabs from "@/components/sidebar-tabs/chat";
import CallLog from "@/components/sidebar-tabs/call-log";
import Groups from "@/components/sidebar-tabs/groups";

export default function Chat(){
    return (
        <div className="grow">
            <div className="flex">
                {/* <Profile/> */}
                {/* <ChatTabs/> */}
                {/* <CallLog/> */}
                <div style={{border: "1px solid #F8F8F8"}}>
                <Groups/>
                </div>
                <ChatScreen/>
                
            </div>
        </div>
    )
}

