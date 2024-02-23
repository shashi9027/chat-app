import {  Stack, Typography } from "@mui/material"
import Link from "next/link"
import MainLayout from "./MainLayout"
import SocialLogin from "./cards/SocialLogin"

const Login = () =>{
    return(
        <>
        <MainLayout>
        <Stack spacing={2} sx={{mb:5, position: "relative"}}>
            <Typography variant="h5">Login to Tawk</Typography>
            <Stack direction="row" spacing={0.5} alignContent={"center"}>
                <Typography variant="body2">New User ?</Typography>
                <Link href="/Signup" ><div style={{color: "blue", textDecoration:"underline"}}>Create an account</div></Link>
            </Stack>
            <SocialLogin/>

        </Stack>
        </MainLayout>
        </>
    )
}

export default Login