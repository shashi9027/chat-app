"use client"
import User from "./cards/Avatar"
import { VideoCamera } from "@phosphor-icons/react/dist/ssr/VideoCamera"
import { Phone } from "@phosphor-icons/react/dist/ssr/Phone"
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr/MagnifyingGlass"
import { Divider, TextField , InputAdornment, Box, IconButton, Stack} from "@mui/material"
import { styled } from '@mui/system';
import { CaretDown } from "@phosphor-icons/react/dist/ssr/CaretDown"
import { LinkSimple } from "@phosphor-icons/react/dist/ssr/LinkSimple"
import { Smiley } from "@phosphor-icons/react/dist/ssr/Smiley"
import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr/PaperPlaneTilt"
import ConversationScreen from "./ConversationScreen"
import { faker } from '@faker-js/faker';



const StyledInput = styled(TextField)(({ theme }) => (
    {
        "& .MuiInputBase-input": {
            paddingTop: "5px",
            paddingBottom: "5px",
            maxHeight: "48px"
        }
    }
))

export default function ChatScreen() {
    return (
        <div className="relative" data-component="chat-section" style={{ width: "100%" }}>
            <div className="chat-section-header flex justify-between items-center">
                <div className="flex gap-4">
                    <div>
                        <div className="relative">
                            <User width={45} height={45} />
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
            <ConversationScreen/>
            <div className="chat-section-header absolute bottom-0  flex justify-between items-center gap-5">
                <StyledInput fullWidth placeholder="Write a message..." variant="filled" InputProps={{
                    disableUnderline: true,
                    startAdornment: 
                    <InputAdornment position="center">
                     <LinkSimple size={25}/>
                    </InputAdornment>,
                    endAdornment: 
                    <InputAdornment position="center">
                     <Smiley size={25}/>
                    </InputAdornment>

                }} />
                <Box sx={{height:48, width:48, background:"#5b96f7", borderRadius: 1.5}}>
                    <Stack sx={{width: "100%", height: "100%"}} alignItems="center" justifyContent="center">
                    <IconButton>
                        <PaperPlaneTilt color="white" size={25}/>
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