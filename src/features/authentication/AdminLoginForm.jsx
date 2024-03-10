import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "./useLogin";
import Form from "../../ui/form/Form";
import AuthHeader from "./AuthHeader";
import Buttion from "../../ui/Buttion";
import FormRow from "../../ui/form/FormRow";
import MiniLoader from "../../ui/MiniLoader";
import FormInput from "../../ui/form/FormInput";
import ShowPassword from "../../ui/form/ShowPassword";

const validationSchema = yup
  .object({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

function AdminLoginForm() {
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "sulaimanalungal410@gmail.com",
      password: "000000",
    },
  });

  const { login, isPending } = useLogin();

  function onSubmit({ email, password }) {
    login(
      { email, password },
      {
        onSuccess: () => toast.success("Welcome"),
        onError: ({ message }) => {
          if (message === "Failed to fetch") {
            toast.error(
              `Failed to fetch, 
              Please check your internet connection`,
            );
          } else toast.error("Inorrect email or password");
        },
      },
    );
  }

  return (
    <>
      <AuthHeader
        heading="Admin login"
        message="Login to your admin account to manage"
      />

      <Form onSubmit={handleSubmit(onSubmit)} type="auth">
        <FormRow label="Email address" error={errors?.email?.message}>
          <FormInput
            id="email"
            register={register}
            disabled={isPending}
            autoComplete="email"
            placeholder="Enter your email address"
          />
        </FormRow>

        <FormRow label="Password" error={errors?.password?.message}>
          <ShowPassword show={show} setShow={setShow}>
            <FormInput
              id="password"
              type={`${show ? "text" : "password"}`}
              register={register}
              disabled={isPending}
              autoComplete="password"
              placeholder="Enter your password"
            />
          </ShowPassword>
        </FormRow>

        <Buttion> {isPending ? <MiniLoader /> : "Login"} </Buttion>

        <Link
          to="/forgotPassword"
          className="relative bottom-2 text-right text-color_text hover:text-color_primary hover:underline"
        >
          Forgot Password
        </Link>
      </Form>
    </>
  );
}

export default AdminLoginForm;
