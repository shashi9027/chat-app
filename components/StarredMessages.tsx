import { UpdateSidebarType } from "@/redux/slices/app";
import { faker } from "@faker-js/faker";
import { Box, IconButton, Stack, Typography, Tabs, Tab, Grid, useTheme , Link} from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react/dist/ssr/CaretLeft";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr/DownloadSimple";
import Message from "./conversation/Message";

export default function StarredMessages() {
    const dispatch = useDispatch();
   
    return (
        <Box sx={{ minWidth: "350px", maxHeight: "100vh", overflow:"auto" }}>
            <Stack sx={{ height: "100%" }}>
                <Box sx={{ boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", width: "100%", backgroundColor: "#F8FAFF" }}>
                    <Stack direction="row" sx={{ height: "100%", p: 2 }} alignItems={"center"} spacing={3}>
                        <IconButton onClick={() => { dispatch(UpdateSidebarType("CONTACT")) }}>
                            <CaretLeft size={20} />
                        </IconButton>
                        <Typography variant="subtitle2">
                            Starred Messages
                        </Typography>
                    </Stack>
                </Box>
                <Stack sx={{height: "100%", position: "relative"}}>
                       <Message/>
                </Stack>
            </Stack>
        </Box>
    )
}
