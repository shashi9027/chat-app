import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import FormProvider, { RHFTextField } from "../../components/hook-form";
import LoadingButton, { Button} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ForgotPassword } from "../../redux/slices/auth";



// ----------------------------------------------------------------------

export default function AuthResetPasswordForm() {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Email must be a valid email address"),
  });

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues: { email: "demo@tawk.com" },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data:any) => {
    try {
      //   Send API Request
      dispatch(ForgotPassword(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField name="email" label="Email address" />

      <LoadingButton
        loading={isLoading}
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{
          mt: 3,
          bgcolor: "text.primary",
          color: "common.white",
          "&:hover": {
            bgcolor: "text.primary",
            color:  "common.white",
          },
        }}
      >
        Send Request
      </LoadingButton>
    </FormProvider>
  );
}