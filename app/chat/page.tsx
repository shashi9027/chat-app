"use client"
import Profile from "@/components/sidebar-tabs/Profile";
import ChatScreen from "@/components/ChatScreen";
import ChatTabs from "@/components/sidebar-tabs/Chat";
import CallLog from "@/components/sidebar-tabs/CallLog";
import Groups from "@/components/sidebar-tabs/Groups";
import Contact from "@/components/Contact";
import { useSelector } from "react-redux";
import { Sidebar } from "phosphor-react";
import SharedMessages from "@/components/SharedMessages";
import StarredMessages from "@/components/StarredMessages";
import Settings from "@/components/sidebar-tabs/Settings";

export default function Chat(){
    const {sidebar} = useSelector((store:any) =>  store.app)
    const renderSidebarComponent = () => {
        switch (sidebar.type) {
            case "CONTACT":
                return <Contact />;
            case "STARRED":
                return <StarredMessages/>; // Handle other cases as needed
            case "SHARED":
                return <SharedMessages />;
            default:
                return null; // Handle default case or unknown types
        }
    };
    return (
        <div className="grow">
        
            <div className="flex">
                <div style={{border: "1px solid #F8F8F8"}}>
                <Settings/>
                </div>
                <ChatScreen/>
                
                {sidebar.open && renderSidebarComponent()}
               
            </div>
        </div>
    )
}

