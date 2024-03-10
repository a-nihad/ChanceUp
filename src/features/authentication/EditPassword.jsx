import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdateAdmin } from "./useUpdateAdmin";
import FormInput from "../../ui/form/FormInput";
import FormRow from "../../ui/form/FormRow";
import Buttion from "../../ui/Buttion";
import Form from "../../ui/form/Form";

const validationSchema = yup
  .object({
    password: yup.string().required("This field is required").min(6),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("This field is required"),
  })
  .required();

function EditPassword({ type }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { updateAdmin, isUpdating } = useUpdateAdmin();

  function onSubmit({ password }) {
    updateAdmin(password, {
      onSuccess: () => {
        navigate("/login");
        reset();
      },
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} type={type}>
      <FormRow label="New Password" error={errors?.password?.message}>
        <FormInput
          id="password"
          register={register}
          disabled={isUpdating}
          autoComplete="password"
          placeholder="New Password"
        />
      </FormRow>

      <FormRow
        label="Confirm Password"
        error={errors?.passwordConfirm?.message}
      >
        <FormInput
          id="passwordConfirm"
          register={register}
          disabled={isUpdating}
          autoComplete="password"
          placeholder="Confirm Password"
        />
      </FormRow>

      <Buttion className="h-max">Update Password</Buttion>
    </Form>
  );
}

export default EditPassword;
