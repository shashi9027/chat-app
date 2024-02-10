import { DownloadSimple } from "@phosphor-icons/react/dist/ssr/DownloadSimple";
import { Box, Divider, IconButton, Link, Stack, Typography, Menu, MenuItem } from "@mui/material";
import { Image } from "@phosphor-icons/react/dist/ssr/Image";
import { useTheme } from "@mui/material";
import { DotsThreeVertical } from "@phosphor-icons/react/dist/ssr/DotsThreeVertical";
import { useState } from "react";

const Message_Options = [
    {
        title: "Reply",
    },
    {
        title: "React to message"
    },
    {
        title: "Forward message"
    },
    {
        title: "Star message"
    },
    {
        title: "Report"
    },
    {
        title: "Delete Message"
    }
]


const DocMsg = ({ el }: any) => {
    const theme = useTheme()
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content" }}>
                <Stack spacing={2}>
                    <Stack p={2} direction="row" spacing={3} alignItems="center" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                        <Image size={48} />
                        <Typography variant="caption">
                            Abstract.png
                        </Typography>
                        <IconButton>
                            <DownloadSimple />
                        </IconButton>
                    </Stack>
                    <Typography variant="subtitle" sx={{ color: el.incoming ? theme.palette.text : "white" }}>
                        {el.message}
                    </Typography>
                </Stack>
            </Box>
            <MessageOptions />
        </Stack>

    )
}


const LinkMsg = ({ el }: any) => {
    const theme = useTheme()
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content" }}>
                <Stack spacing={2}>
                    <Stack p={2} spacing={3} alignItems="center" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                        <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
                    </Stack>
                    <Stack spacing={2}>
                        <Typography variant="subtitle2">Creating Chat App</Typography>
                        <Typography variant="subtitle2" component={Link}>WWW.Youtube.com</Typography>
                        <Typography variant="subtitle2" color={el.incoming ? theme.palette.text : "white"}>{el.message}</Typography>

                    </Stack>
                </Stack>
            </Box>
            <MessageOptions />
        </Stack>

    )
}

const MediaMsg = ({ el }: any) => {
    const theme = useTheme()
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content" }}>
                <Stack spacing={1}>
                    <img src={el.img} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
                    <Typography variant="body2" color={el.incoming ? "" : "white"}>
                        {el.message}
                    </Typography>
                </Stack>
            </Box>
            <MessageOptions />
        </Stack>
    )
}

const TextMsg = ({ el }: any) => {
    const theme = useTheme()
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content" }}>
                <Typography variant="body2" color={el.incoming ? "" : "white"}>
                    {el.message}
                </Typography>
            </Box>
            <MessageOptions />
        </Stack>
    )
}

const ReplyMsg = ({ el }: any) => {
    const theme = useTheme()
    return (
        <Stack direction="row" justifyContent={el.incoming ? "start" : "end"}>
            <Box p={1.5} sx={{ backgroundColor: el.incoming ? theme.palette.background.default : theme.palette.primary.main, borderRadius: 1.5, width: "max-content" }}>
                <Stack spacing={2}>
                    <Stack p={2} direction="column" spacing={3} alignItems="center" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                        <Typography variant="body2" color={theme.palette.text}>{el.message}</Typography>
                    </Stack>
                    <Typography variant="body2" color={el?.incoming ? theme.palette.text : "white"}>{el.reply}</Typography>
                </Stack>
            </Box>
            <MessageOptions />
        </Stack>
    )
}

const Timeline = ({ el }: any) => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Divider width="46%" />
            <Typography variant="caption">{el.text}</Typography>
            <Divider width="46%" />
        </Stack>
    )
}

const MessageOptions = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event:any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>  <button id="basic-button" aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={(e) => handleClick(e)}>
            <DotsThreeVertical size={20} />
        </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Stack spacing={1} px={1}>
                    {Message_Options?.map((val: any, index: number) => {
                        return (
                            <MenuItem key={index} onClick={(e) => handleClick(e)} >{val.title}</MenuItem>
                        )
                    })}
                </Stack>
            </Menu>
        </>
    )
}



export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };