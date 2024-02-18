"use client"
import Profile from "@/components/sidebar-tabs/profile";
import ChatScreen from "@/components/ChatScreen";
import ChatTabs from "@/components/sidebar-tabs/chat";
import CallLog from "@/components/sidebar-tabs/call-log";
import Groups from "@/components/sidebar-tabs/groups";
import Contact from "@/components/Contact";
import { useSelector } from "react-redux";
import { Sidebar } from "phosphor-react";
import SharedMessages from "@/components/SharedMessages";
import StarredMessages from "@/components/StarredMessages";

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
                <Groups/>
                </div>
                <ChatScreen/>
                {sidebar.open && renderSidebarComponent()}
               
            </div>
        </div>
    )
}

