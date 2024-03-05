import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Dialog, DialogContent, DialogTitle, Slide, Stack } from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup"
import FormProvider from "../hook-form/FormProvider";
import { RHFTextField } from "../hook-form";
import RHFAutocomplete from "../hook-form/RHFAutocomplete";

type DialogProps = {
    open: boolean,
    handleClose: () => void
}

const MEMBERS = ["Name 1", "Name 2", "Name 3"]

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;

});


const CreateGroupForm = ({handleClose}) => {
    const NewGroupSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        members: Yup.array().min(2, "Must have at least 2 members")
    })

    const defaultValues = {
        title: "",
        members: [],
    }

    const methods = useForm({
        resolver: yupResolver(NewGroupSchema),
        defaultValues
    })

    const {
        reset,
        watch,
        setError,
        handleSubmit,
        formState: { errors, isSubmitSuccessful, isSubmitting, isValid },
    } = methods;

    const onSubmit = async (data: any) => {
        try {

        }
        catch (error) {
            console.log("error", error)
        }
    }

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
                <RHFTextField name="title" label="Title" />
                <RHFAutocomplete name="members" label="Members" multiple freeSolo options={MEMBERS.map((option:any)=> option )} ChipProps={{size: "medium"}}/>
                <Stack spacing={2} direction="row" alignItems={"center"} justifyContent={"end"}>
                    <Button onClick={()=> handleClose()}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained">
                        Create
                    </Button>
                </Stack>
            </Stack>

        </FormProvider>
    )

}



export default function CreateGroup({ open, handleClose }: DialogProps) {
    return (
        <Dialog fullWidth maxWidth="xs" open={open} TransitionComponent={Transition} keepMounted sx={{ p: 4 }}>
            <DialogTitle sx={{mb: 3}}>Create New Group</DialogTitle>
            <DialogContent>
                <CreateGroupForm handleClose={handleClose} />
            </DialogContent>
        </Dialog>
    )
}