import { Divider, IconButton, Stack } from "@mui/material"
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/GithubLogo"
import { GoogleLogo } from "@phosphor-icons/react/dist/ssr/GoogleLogo"
import { TwitterLogo } from "@phosphor-icons/react/dist/ssr/TwitterLogo"


const SocialLogin = () => {
    return (
        <div>
            <Divider sx={{
                my: 2.5,
                typography: "overline",
                color: "text.disabled",
                '&::before, &::after':
                {
                    borderTopStyle: "dashed"
                }
            }}>
                OR
            </Divider>
            <Stack direction={"row"} justifyContent={"center"} spacing={2}>
                 <IconButton>
                    <GoogleLogo size={22} color="#DF3E30"/>
                 </IconButton>
                 <IconButton>
                    <GithubLogo size={22} color="inherit"/>
                 </IconButton>
                 <IconButton>
                    <TwitterLogo size={22} color="#1C9CEA"/>
                 </IconButton>
            </Stack>
        </div>
    )
}

export default SocialLogin