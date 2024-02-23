import { Container, Stack } from "@mui/material";
import Login from "./Login"

export default function MainLayout({children}:any) {
    return (
        <>
            <Container sx={{ mt: 5 }} maxWidth="sm">
                <Stack spacing={5}>
                    <Stack sx={{ width: "100%" }} direction="column" alignItems={"center"}>
                        <img style={{ height: 60, width: 60 }} src="/sidebar/Budgie.png" alt="logo" />
                    </Stack>
                </Stack>
                {/* <div>Main Layout</div> */}
               {children}
               

            </Container>
        </>
    )
}