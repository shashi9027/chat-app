import { faker } from "@faker-js/faker";
import { Avatar, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Bell, CaretLeft , Key, Lock, PencilCircle, Image, Note, Keyboard, Info} from "phosphor-react";
import UserAvatar from "../cards/Avatar";

type listProps = {
    key: number;
    icon: JSX.Element;
    title: string;
    onclick: () => void;
}

const list = [
    {
        key: 0,
        icon: <Bell size={20}/>,
        title: "Notifications",
        onclick: () => {}
    },
    {
        key: 1,
        icon: <Lock size={20}/>,
        title: "Privacy",
        onclick: () => {}
    },
    {
        key: 2,
        icon: <Key size={20}/>,
        title: "Security",
        onclick: () => {}
    },
    {
        key:3,
        icon: <PencilCircle size={20}/>,
        title: "Theme",
        // onclick: handleOpenTheme
        onclick: () => {}
    },
    {
        key: 4,
        icon: <Image size={20}/>,
        title: "Chat Wallpaper",
        onclick: () => {}
    },
    {
        key: 5,
        icon: <Note size={20}/>,
        title: "Request Account Info",
        onclick: () => {}
    },
    {
        key: 6,
        icon: <Keyboard size={20}/>,
        title: "Keyboard Shortcuts",
        // onclick: handleOpenShortCuts
        onclick: () => {}
    },
    {
        key: 7,
        icon: <Info size={20}/>,
        title: "Help",
        onclick: () => {}
    }
]


export default function Settings(){
return(
    <div className="tab-box bg-lightBlue100 " style={{maxHeight: "100vh", overflow: "auto"}}>
          <Stack direction="row" alignItems={"center"} spacing={3}>
            <IconButton>
                <CaretLeft size={24} color={"#4b4b4b"} />
            </IconButton>
            <Typography variant="h6">
                Settings
            </Typography>
          </Stack>
          <Stack className="mt-3" direction="row" spacing={3}>
               <UserAvatar width={45} height={45}/>  
               <Stack spacing={0.5} >
                <Typography variant="article">
                      {faker.name.fullName()}
                </Typography>
                <Typography variant="body2">
                      {faker.random.words()}
                </Typography>
               </Stack>
          </Stack>
          <Stack className="mt-3" spacing={4}>
              {list.map(({key,icon, title, onclick}:listProps)=><>
              <Stack spacing={2} sx={{cursor:"pointer"}} onClick={onclick}>
                   <Stack direction="row" spacing={2} alignItems={"center"}>
                         {icon}
                         <Typography variant="body2">{title}</Typography>
                   </Stack>
              </Stack>
              <Divider/>
              </>)}
          </Stack>
    </div>
)  
}