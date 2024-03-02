import { useState } from "react";
import { FormProvider } from "react-hook-form";
import * as Yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

export default function LoginForm(){
    const [showPassword, setShowPassword] = useState(false);
    const LoginSchema = Yup.object().shape({
        email: Yup.string().required("Email is required").email("Email must be a valid email address"),
        password: Yup.string().required("Password is required")
    })
    const defaultValues ={
        email: "demo@tawk.com",
        password: "demo1234"
    }
    const methods = useForm({
        resolver: yupResolver(LoginForm),
        defaultValues
    })

    const {reset, setError , handleSubmit, formState:{errors, isSubmitting, isSubmitSuccessful}} = methods;
    
    const onSubmit = async (data:any) =>{
       try{

       }
       catch(error:any){
       
        reset()
        setError("afterSubmit", {
            ...error,
            message: errors.message
            
        })
       }
    }

    return(
       <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        
       </FormProvider>
    )
}