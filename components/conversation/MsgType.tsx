import { ThemeContext } from "@emotion/react";
import { Box, Divider, Link, Stack, Typography } from "@mui/material";


import { useTheme } from "@mui/material";



const DocMsg = ({el}:any) =>{
    const theme = useTheme()
    return(
        <Stack direction="row" alignItems="center" justifyContent={el.incoming ? "start": "end"}>
        <Box p={1.5} sx={{backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width:"max-content"}}>
          <Stack spacing={2}>
               <Stack p={2} direction="row" spacing={3} alignItems="center" sx={{backgroundColor:theme.palette.background.paper, borderRadius:1}}>

               </Stack>
          </Stack>
        </Box>
        </Stack>
   
    )
}


const LinkMsg = ({el}:any) =>{
    const theme = useTheme()
    return(
        <Stack direction="row" alignItems="center" justifyContent={el.incoming ? "start": "end"}>
        <Box p={1.5} sx={{backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width:"max-content"}}>
          <Stack spacing={2}>
               <Stack p={2} spacing={3} alignItems="center" sx={{backgroundColor: theme.palette.background.paper, borderRadius: 1}}>
                   <img src={el.preview} alt={el.message} style={{maxHeight: 210, borderRadius: "10px"}}/>
               </Stack>
               <Stack spacing={2}>
                    <Typography variant="subtitle2">Creating Chat App</Typography>
                    <Typography variant="subtitle2" component={Link}>WWW.Youtube.com</Typography>
                    <Typography variant="subtitle2" color={el.incoming ? theme.palette.text: "white"}>{el.message}</Typography>

               </Stack>
          </Stack>
        </Box>
        </Stack>
   
    )
}

const MediaMsg = ({el}:any) =>{
    const theme = useTheme()
    return(
        <Stack direction="row" alignItems="center" justifyContent={el.incoming ? "start": "end"}>
           <Box p={1.5} sx={{backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width:"max-content"}}>
               <Stack spacing={1}>
                  <img src={el.img} alt={el.message} style={{maxHeight: 210, borderRadius: "10px"}} />
                  <Typography variant="body2" color={el.incoming ?"":  "white"}>
                   {el.message}
                  </Typography>
               </Stack>
            </Box>
        </Stack>
    )
}

const TextMsg = ({el}:any) =>{
    const theme = useTheme()
    return(
        <Stack direction="row" alignItems="center" justifyContent={el.incoming ? "start": "end"}>
            <Box p={1.5} sx={{backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main , borderRadius: 1.5, width:"max-content"}}>
               <Typography variant="body2" color={el.incoming ?"": "white"}>
                  {el.message}
               </Typography>
            </Box>
        </Stack>
    )
}

const ReplyMsg = ({el}:any) =>{
    const theme = useTheme()
    return(
        <Stack direction="row" alignItems="center" justifyContent={el.incoming ? "start": "end"}>
            <Box p={1.5} sx={{backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main , borderRadius: 1.5, width:"max-content"}}>
               <Stack spacing={2}>
                  <Stack p={2} direction="column" spacing={3} alignItems="center" sx={{backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                     <Typography variant="body2" color={theme.palette.text}>{el.message}</Typography>
                  </Stack>
                  <Typography variant="body2" color={el?.incoming ? theme.palette.text : "white"}>{el.reply}</Typography>
               </Stack>
            </Box>
        </Stack>
    )
}

const Timeline = ({el}:any) =>{
    return(
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Divider width="46%"/>
            <Typography variant="caption">{el.text}</Typography>
            <Divider width="46%"/>
        </Stack>
    )
}

export {Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg};