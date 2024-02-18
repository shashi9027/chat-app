import { UpdateSidebarType } from "@/redux/slices/app";
import { faker } from "@faker-js/faker";
import { Box, IconButton, Stack, Typography, Tabs, Tab, Grid, useTheme , Link} from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr/DownloadSimple";

export default function SharedMessages() {
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);
    const theme = useTheme()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const renderTabs = (value: number) => {
        switch (value) {
            case 0:
                return <Grid container spacing={2}>
                    {
                        [0, 1, 2, 3, 4, 5, 6].map((el: any, index: number) => (
                            <Grid key={index} item xs={4}>
                                <img src={faker.image.avatar()} alt={faker.name.fullName()} />
                            </Grid>)
                        )
                    }
                </Grid>
            case 1:
                return <Grid container spacing={2}>
                    {
                        [0, 1, 2, 3, 4, 5, 6].map((el: any, index: number) => (
                            <Grid key={index} item xs={4}>
                                <Box p={1.5} sx={{ backgroundColor: theme.palette.background.default, borderRadius: 1.5, width: "max-content" }}>
                                    <Stack spacing={2}>
                                        <Stack p={2} spacing={3} alignItems="center" sx={{ backgroundColor: theme.palette.background.paper, borderRadius: 1 }}>
                                            <img src={el.preview} alt={el.message} style={{ maxHeight: 210, borderRadius: "10px" }} />
                                        </Stack>
                                        <Stack spacing={2}>
                                            <Typography variant="subtitle2">Creating Chat App</Typography>
                                            <Typography variant="subtitle2" component={Link}>WWW.Youtube.com</Typography>
                                            <Typography variant="subtitle2" color={theme.palette.text}>This is a message</Typography>
                                        </Stack>
                                    </Stack>
                                </Box>
                            </Grid>)
                        )
                    }
                </Grid>
            case 2:
                return <Grid container spacing={2}>
                    {
                        [0, 1, 2, 3, 4, 5, 6].map((el: any, index: number) => (
                            <Grid key={index} item xs={4}>
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
                            </Grid>)
                        )
                    }
                </Grid>
            default:
                break;
        }
    }
    return (
        <Box sx={{ minWidth: "350px", maxHeight: "100vh", overflow:"auto" }}>
            <Stack sx={{ height: "100%" }}>
                <Box sx={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: "100%", backgroundColor: "#F8FAFF" }}>
                    <Stack direction="row" sx={{ height: "100%", p: 2 }} alignItems={"center"} spacing={3}>
                        <IconButton onClick={() => { dispatch(UpdateSidebarType("CONTACT")) }}>
                            <CaretLeft size={20} />
                        </IconButton>
                        <Typography variant="subtitle2">
                            Shared Messages
                        </Typography>
                    </Stack>
                </Box>
                <Tabs sx={{ px: 2, pt: 2 }} value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Media" value={0} />
                    <Tab label="Links" value={1} />
                    <Tab label="Docs" value={2} />
                </Tabs>
                <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }} p={3} spacing={3}>
                    {renderTabs(value)}
                </Stack>
            </Stack>
        </Box>
    )
}