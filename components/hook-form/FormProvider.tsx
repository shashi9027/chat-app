import React, {ReactNode} from "react"
import {FormProvider as Form} from "react-hook-form"


interface FormProviderProps {
    children: ReactNode;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    methods: any; 
  }

const FormProvider = ({children, onSubmit, methods}: FormProviderProps) =>{
    return(
        <Form {...methods}>
          <form onSubmit={onSubmit}>
           {children}
           </form>
        </Form>
    )
}