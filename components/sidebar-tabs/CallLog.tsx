import Image from "next/image"
import SearchInput from "../cards/SearchInput"
import UserChatCard from "../cards/UserChatCard"
import { Phone } from "@phosphor-icons/react/dist/ssr/Phone"
import UserLogCard from "../cards/UserCallLogCard"
import StartCall from "../conversation/StartCall"
import { useState } from "react"
import { IconButton } from "@mui/material"



export default function CallLog() {
   const [openDialog, setOpenDialog] = useState(false);
   const handleClose = () =>{
      setOpenDialog(false)
   }
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
            <IconButton onClick={()=> setOpenDialog(true)}>
            <Phone size={25} />
            </IconButton>
         </div>
         <div className="hr w-full mt-3" />
         <UserLogCard />
         {openDialog && <StartCall open={openDialog} handleClose={handleClose}/>}
      </div>
   )
}