import { LinkSimple } from "@phosphor-icons/react/dist/ssr/LinkSimple"
import { Smiley } from "@phosphor-icons/react/dist/ssr/Smiley"
import { styled } from '@mui/system';
import { Fab, IconButton, InputAdornment, Stack, TextField, Tooltip } from "@mui/material";
import { Image } from "@phosphor-icons/react/dist/ssr/Image"
import { Sticker } from "@phosphor-icons/react/dist/ssr/Sticker"
import { Camera } from "@phosphor-icons/react/dist/ssr/Camera"
import { File } from "@phosphor-icons/react/dist/ssr/File"
import { User } from "@phosphor-icons/react/dist/ssr/User";
import { useState } from "react";

const StyledInput = styled(TextField)(({ theme }) => (
    {
        "& .MuiInputBase-input": {
            paddingTop: "5px",
            paddingBottom: "5px",
            maxHeight: "48px"
        }
    }
))

const Actions = [
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 102,
        title: "Photo / Video"
    },
    {
        color: "#1b8cfe",
        icon: <Sticker size={24} />,
        y: 172,
        title: "Stickers"
    },
    {
        color: "#0172e4",
        icon: <Camera size={24} />,
        y: 242,
        title: "Image"
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 312,
        title: "File"
    },
    {
        color: "#013f7f",
        icon: <User size={24} />,
        y: 382,
        title: "Contact"
    }

]
type PickerType = { setOpenPicker: React.Dispatch<React.SetStateAction<boolean>> }
export default function ChatInput({ setOpenPicker }: PickerType) {
    const [openActions, setOpenActions] = useState(false)
    return (

        <StyledInput fullWidth placeholder="Write a message..." variant="filled" InputProps={{
            disableUnderline: true,
            startAdornment:
                <Stack sx={{ width: "max-content" }}>
                    <Stack sx={{ position: "relative" , display: openActions ? "inline-block": "none"}}>
                        {Actions.map((val: any, index:number) => {
                            return (
                                <Tooltip placement="right" key={index}  title={val.title}>
                                <Fab sx={{position:"absolute", top: -val.y, backgroundColor: val.color}} >
                                    {val.icon}
                                </Fab>
                                </Tooltip>
                            )
                        })}

                    </Stack>
                    <InputAdornment position="center">
                        <IconButton onClick={()=> setOpenActions((prev) => !prev)}>
                        <LinkSimple size={25} />
                        </IconButton>
                    </InputAdornment>
                </Stack>,
            endAdornment:
                <InputAdornment position="center">
                    <IconButton onClick={() => setOpenPicker((prev: boolean) => !prev)}>
                        <Smiley size={25} />
                    </IconButton>
                </InputAdornment>

        }} />

    )
}