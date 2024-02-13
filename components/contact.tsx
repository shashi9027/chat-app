import { ToggleSidebar } from "@/redux/slices/app";
import { Avatar, Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import { Phone, Video, X } from "@phosphor-icons/react/dist/ssr/index";
import { useDispatch } from "react-redux";
import UserAvatar from "./cards/Avatar";
import { faker } from "@faker-js/faker";
import { Bell, CaretRight, Prohibit, Star, Trash } from "phosphor-react";
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Contact() {
    const dispatch = useDispatch();

    return (
        <Box sx={{ width: "500px", height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                <Box sx={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: "100%", backgroundColor: "#F8FAFF" }}>
                    <Stack direction="row" sx={{ height: "100%", p: 2 }} alignItems={"center"} justifyContent="space-between" spacing={3}>
                        <Typography variant="subtitle2">
                            Contact Info
                        </Typography>
                        <IconButton onClick={() => { dispatch(ToggleSidebar()) }}>
                            <X size={20} />
                        </IconButton>
                    </Stack>
                </Box>

                <Stack sx={{ height: "100%", position: "relative", flexGrow: 1, overflowY: "scroll" }} p={3} spacing={3}>
                    <Stack alignItems={"center"} direction={"row"} spacing={2}>
                        <UserAvatar width={50} height={50} />
                        <Stack spacing={0.5}>
                            <Typography fontWeight={600}>
                                {faker.name.fullName()}
                            </Typography>
                            <Typography variant="subtitle2" fontWeight={500}>
                                {'+91 729 2829 2992'}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
                        <Stack spacing={1} alignItems="center">
                            <IconButton>
                                <Phone size={25} />
                            </IconButton>
                            <Typography>
                                Voice
                            </Typography>
                        </Stack>
                        <Stack spacing={1} alignItems="center">
                            <IconButton>
                                <Video size={25} />
                            </IconButton>
                            <Typography>
                                Video
                            </Typography>
                        </Stack>
                    </Stack>
                    <Divider />
                    <Stack spacing={0.5}>
                        <Typography variant="article">
                            About
                        </Typography>
                        <Typography variant="body2">
                            Imagination is the only limit
                        </Typography>
                    </Stack>
                    <Divider />
                    <Stack direction="row" alignItems={"center"} justifyContent="space-between">
                        <Typography variant="subtitle2">
                            Media, Links & Docs
                        </Typography>
                        <Button endIcon={<CaretRight />}>
                            401
                        </Button>
                    </Stack>
                    <Stack direction={"row"} spacing={2} alignItems="center">
                        {[1, 2, 3].map((el, index) => (
                            <Box key={index}>
                                <img src={faker.image.food()} alt={faker.name.fullName()} />
                            </Box>
                        )
                        )}
                    </Stack>
                    <Divider />
                    <Stack direction="row" alignItems={"center"} justify-content="space-between">
                        <Stack direction="row" alignItems={"center"} spacing={2}>
                            <Star size={21} />
                            <Typography variant="subtitle2">Starred Message</Typography>
                        </Stack>
                        <IconButton>
                            <CaretRight />
                        </IconButton>
                    </Stack>
                    <Divider/>
                    <Stack direction="row" alignItems={"center"} justify-content="space-between">
                        <Stack direction="row" alignItems={"center"} spacing={2}>
                            <Bell size={21}/>
                            <Typography variant="subtitle2">Mute Notifications</Typography>
                        </Stack>
                        <IconButton>
                        <Switch {...label} />
                        </IconButton>
                    </Stack>
                    <Divider/>
                    <Typography>
                        1 group in common
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems={"center"}>
                        <UserAvatar  width={25} height={25}/>
                        <Stack spacing={0.5}>
                               <Typography variant="subtitle2">Coding Monk</Typography>
                               <Typography variant="caption">Owl, Parrot, Rabbit, You</Typography>
                        </Stack>
                    </Stack>
                    <Stack direction="row" alignItems={"center"} spacing={2}>
                          <Button startIcon={<Prohibit/>} fullWidth variant="outlined">
                            Block
                          </Button>
                          <Button startIcon={<Trash/>} fullWidth variant="outlined">
                            Delete
                          </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}