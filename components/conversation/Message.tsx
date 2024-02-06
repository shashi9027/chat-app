import { Box, Stack } from "@mui/material";
import { faker } from "@faker-js/faker";
import { LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from "./MsgType";
const ChatHistory = [
    {
        type: "msg",
        message: "Hi, how are you",
        incoming: true,
        outgoing: false
    },
    {
        type: "divider",
        text: "Today"
    },
    {
        type: "msg",
        message: "Hi, how are you",
        incoming: false,
        outgoing: true
    },
    {
        type: "msg",
        subtype: "img",
        message: "Here you go",
        img: faker.image.abstract(),
        incoming: true,
        outgoing: false
    },
    {
        type: "msg",
        message: "Can you please send this in file format",
        incoming: false,
        outgoing: true
    },
    {
        type: "msg",
        subtype: "doc",
        message: "Can you please send this in file format",
        incoming: false,
        outgoing: true
    },
    {
        type: "msg",
        subtype: "link",
        preview: faker.image.cats(),
        message: "Yep I can also do that",
        incoming: true,
        outgoing: false
    },
    {
        type: "msg",
        subtype: "reply",
        reply: "This is a reply",
        preview: faker.image.cats(),
        message: "Yep I can also do that",
        incoming: false,
        outgoing: true
    },

]

export default function Message(){
    return(
        <Box p={3}>
             <Stack spacing={3}>
               {ChatHistory?.map((el)=>{
                  switch (el.type){
                    case "divider":
                      return <Timeline el={el}/>
                     break;
                    case "msg":
                        switch (el.subtype){
                           case "img":
                            return <MediaMsg el={el}/> 
                            break;
                           case "doc":

                            break;
                           case "link":
                             return <LinkMsg el={el}/>
                            break;
                           case "reply":
                              return <ReplyMsg el={el}/>
                            break;

                            default:
                             return  <TextMsg el={el}/>
                             break;
                        }

                     break;
                  }
               })} 
             </Stack>
        </Box>
    )
}