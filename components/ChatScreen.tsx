"use client"
import Avatar from "./cards/Avatar"
import { VideoCamera } from "@phosphor-icons/react/dist/ssr/VideoCamera"
import { Phone } from "@phosphor-icons/react/dist/ssr/Phone"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass"
import { Divider, Box, IconButton, Stack } from "@mui/material"
import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown"
import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr/PaperPlaneTilt"
import ConversationScreen from "./ConversationScreen"
import ChatInput from "./conversation/ChatInput"
import { useTheme } from "@mui/material"
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { useState } from "react"
import UserAvatar from "./cards/Avatar"
import Contact from "./contact"



export default function ChatScreen() {
    const theme = useTheme();
    const [openPicker, setOpenPicker] = useState(false);
    return (
        <div className="relative" data-component="chat-section" style={{ width: "100%" }}>
            <div className="chat-section-header flex justify-between items-center">
                <div className="flex gap-4">
                    <div>
                        <div className="relative">
                            <UserAvatar width={45} height={45} />
                            <div className="green-dot" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold ">Pink Panda</div>
                        <div>Online</div>
                    </div>
                </div>
                <div className="flex gap-7">
                    <VideoCamera size={25} />
                    <Phone size={25} />
                    <MagnifyingGlass size={25} />
                    <Divider orientation="vertical" flexItem />
                    <CaretDown size={25} />
                </div>
            </div>
            <div className="conversation-screen" style={{ maxHeight: "calc(100vh - 160px)", overflow: "auto", backgroundColor: "#F0F4FA" }}>
                <ConversationScreen />
                
            </div>
            <div className="chat-section-header absolute bottom-0  flex justify-between items-center gap-5">
                <Stack sx={{width: "100%"}}>
                    <Box sx={{display: openPicker ? "inline": "none", zIndex: 10, position: "fixed", bottom: 81, right: 100}}>
                    <Picker theme={theme.palette.mode} data={data} onEmojiSelect={console.log} />
                    </Box>
                    <ChatInput setOpenPicker={setOpenPicker} />
                </Stack>
                <Box sx={{ height: 48, width: 48, background: "#5b96f7", borderRadius: 1.5 }}>
                    <Stack sx={{ width: "100%", height: "100%" }} alignItems="center" justifyContent="center">
                        <IconButton>
                            <PaperPlaneTilt color="white" size={25} />
                        </IconButton>
                    </Stack>
                </Box>
            </div>
        </div>
        // <div data-component = "chat-section" className="w-full h-lvh flex justify-center items-center">
        //     <div className="chat-section-header">

        //     </div>
        //     <Image width={200} height={200}  src="/chat-first-screen.png" alt="chat-screen"/>
        // </div>
    )
}