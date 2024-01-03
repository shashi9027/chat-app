import Image from "next/image"
import User from "./avatar"
import { TextField } from "@mui/material"

export default function Profile() {
    return (
        <div className="profile-box bg-lightBlue100 ">
            <div className="flex  gap-5">
                <Image width={20} height={0} src="/icons/CaretDown.png" alt="backarrow" />
                <div className=" text-lg">Profile</div>
            </div>
            <div className="flex flex-col items-center  mt-6">
                <User width={80} height={80} />
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