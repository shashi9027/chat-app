import { Divider, Stack, Typography } from "@mui/material";

const Timeline = ({el}:any) =>{
    return(
        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Divider width="46%"/>
            <Typography variant="caption">{el.text}</Typography>
            <Divider width="46%"/>
        </Stack>
    )
}

export {Timeline};