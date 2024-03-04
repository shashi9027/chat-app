import { Dialog, DialogContent, DialogTitle, Slide } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;

});

type DialogProps = {
    open: Boolean,
    handleClose: () => void 
}

export default function CreateGroup({open, handleClose}: DialogProps){
    return(
       <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted sx={{p:4}}>
           <DialogTitle>Create New Group</DialogTitle>
           <DialogContent>
            
           </DialogContent>
       </Dialog>
    )
}