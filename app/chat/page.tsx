"use client"
import Profile from "@/components/sidebar-tabs/profile";
import ChatScreen from "@/components/ChatScreen";
import ChatTabs from "@/components/sidebar-tabs/chat";
import CallLog from "@/components/sidebar-tabs/call-log";
import Groups from "@/components/sidebar-tabs/groups";
import Contact from "@/components/Contact";
import { useSelector } from "react-redux";
import { Sidebar } from "phosphor-react";

export default function Chat(){
    const {sidebar} = useSelector((store) =>  store.app)
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
                {sidebar.open &&  <Contact/> }
               
            </div>
        </div>
    )
}

