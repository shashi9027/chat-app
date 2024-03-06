import { Dialog, DialogContent, DialogTitle, Slide, Stack } from "@mui/material"
import { TransitionProps } from "@mui/material/transitions";
import React, { forwardRef } from "react"
import SearchInput from "../cards/SearchInput";
import { CallElement } from "../cards/CallElement";

type DialogProps = {
    open: Boolean,
    handleClose: () => void 
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;

});

const StartCall = ({open, handleClose}: DialogProps) =>{
    return(
       <Dialog
       fullWidth
       maxWidth="xs"
       open={open}
       TransitionComponent={Transition}
       keepMounted
       sx={{p: 4}}
       onClose={handleClose}
       >    
         <DialogTitle sx={{mb: 3}}>Start Call</DialogTitle>
         <DialogContent>
             <SearchInput/>
             <CallElement/>
         </DialogContent>
       </Dialog>
    )
}

export default StartCall