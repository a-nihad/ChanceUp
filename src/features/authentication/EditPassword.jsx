import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUpdateAdmin } from "./useUpdateAdmin";
import FormInput from "../../ui/form/FormInput";
import FormRow from "../../ui/form/FormRow";
import Buttion from "../../ui/Buttion";

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
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const { updateAdmin, isUpdating } = useUpdateAdmin();

  const settings =
    "grid max-w-[800px] gap-y-3 p-5 sm:grid-cols-2 sm:gap-x-8 lg:p-8 lg:pt-5";
  const login =
    "flex w-full max-w-[400px] flex-col gap-3 px-10 lg:max-w-[500px]";

  function onSubmit(data) {
    updateAdmin(data.password, { onSuccess: reset });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={type === "login" ? login : settings}
    >
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
    </form>
  );
}

export default EditPassword;
