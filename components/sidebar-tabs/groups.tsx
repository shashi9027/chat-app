import Image from "next/image"
import SearchInput from "../cards/SearchInput"
import UserChatCard from "../cards/UserChatCard"
import { Plus } from "@phosphor-icons/react/dist/ssr/Plus"
import { useState } from "react"
import CreateGroup from "../cards/CreateGroup"
import { IconButton } from "@mui/material"

export default function Groups(){
   const [openDialog, setOpenDialog] = useState(false)

   const handleClose = () =>{
      setOpenDialog(false)
   }
    return (
        <div className="tab-box bg-lightBlue100 ">
             <div className="flex justify-between">
                <div className="font-bold text-lg">Groups</div>
             </div>
             <div className="mt-4">
                <SearchInput />
             </div>
             <div className="flex justify-between gap-3 mt-4 text-blueText">
                <div>
                Create New Group
                </div>
                <IconButton onClick={()=> setOpenDialog(true)}>
                <Plus size={25}/>
                </IconButton>
             </div>
             <div className="hr w-full mt-3"/>
             <div className="text-greyText mt-3 font-medium">Pinned</div>
             <UserChatCard/>
             <div className="text-greyText mt-3 font-medium">All Chats</div>
             <UserChatCard/>
             {openDialog && <CreateGroup open={openDialog} handleClose={handleClose}/>}
        </div>
    )
}