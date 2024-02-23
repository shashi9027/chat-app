import { useFormContext, Controller } from "react-hook-form"
import { TextField } from "@mui/material";

type rhfProps = {
    name: string,
    helperText: string,
    other: any
}


export default function RHFTextField({ name, helperText, ...other }: rhfProps) {
    const { control } = useFormContext();
    return (
        <Controller name={name} control={control} render={({ field, fieldState: { error } }) => (
            <TextField {...field} fullWidth error={!!error} helperText={error ? error.message : helperText} {...other} />)} 
        />
    )
}