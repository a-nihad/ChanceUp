import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoverPassword } from "./useRecoverPassword";
import FormInput from "../../ui/form/FormInput";
import BackButtion from "../../ui/BackButtion";
import MiniLoader from "../../ui/MiniLoader";
import FormRow from "../../ui/form/FormRow";
import Buttion from "../../ui/Buttion";
import AuthHeader from "./AuthHeader";
import Form from "../../ui/form/Form";

const validationSchema = yup
  .object({
    email: yup.string().email().required("Email is required"),
  })
  .required();

function ForgotPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { recoverPassword, isPending } = useRecoverPassword();

  function onSubmit({ email }) {
    recoverPassword(email);
    navigate("/login", { replace: true });
  }

  return (
    <>
      <AuthHeader
        heading="Recover your password"
        message="You'll recive an email to recover your password"
      />
      <Form onSubmit={handleSubmit(onSubmit)} type="auth">
        <FormRow error={errors?.email?.message}>
          <FormInput
            id="email"
            type="email"
            register={register}
            disabled={isPending}
            placeholder="Enter your email"
            className="sm:placeholder:text-color_text"
          />
        </FormRow>
        <Buttion> {isPending ? <MiniLoader /> : "Send"} </Buttion>
      </Form>
      <BackButtion />,
    </>
  );
}

export default ForgotPassword;
