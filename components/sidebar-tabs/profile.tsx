import Image from "next/image"
import Avatar from "../cards/Avatar"
import { TextField } from "@mui/material"
import UserAvatar from "../cards/Avatar"

export default function Profile() {
    return (
        <div className="tab-box bg-lightBlue100 ">
            <div className="flex  gap-5">
                <Image width={20} height={0} src="/icons/CaretDown.png" alt="backarrow" />
                <div className="font-bold text-lg">Profile</div>
            </div>
            <div className="flex flex-col items-center  mt-6">
                <UserAvatar width={80} height={80} />
                <TextField
                    className="mt-8 w-full"
                    id="outlined-required"
                    label="Name"
                    defaultValue="Shreyansh Shah"
                    disabled
                />
                <div className="text-textColor mt-3">This name is visible to your contacts</div>
                <TextField
                    className="mt-8 w-full"
                    id="outlined-required"
                    label="Name"
                    defaultValue="Hey there , I am learning from coding monk"
                    disabled
                    multiline
                    minRows={4}
                />
                
            </div>
            <div className="save-btn float-right mt-5 flex items-center justify-center">Save</div>
        </div>
    )
}