import { useForm } from "react-hook-form";
import { useUpdateAdmin } from "./useUpdateAdmin";
import { useAdmin } from "./useAdmin";
import Buttion from "../../ui/Buttion";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

function UpdatePassword() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { admin } = useAdmin();
  const { updateAdmin, isUpdating } = useUpdateAdmin();

  function onSubmit(data) {
    updateAdmin(data.password, { onSuccess: reset });
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid max-w-[800px] gap-y-3 p-2 px-5 pb-5 sm:grid-cols-2 sm:gap-x-8 lg:px-8 lg:pb-8 "
    >
      <div className="grid text-color_text ">
        <Label id="email"> Email address </Label>
        <Input
          type="text"
          id="email"
          className="hover:text-color_text"
          value={admin.email}
          required={true}
          disabled
        />
      </div>

      <div className="grid ">
        <Label id="password"> New Password </Label>
        <input
          className="rounded-md border px-4 py-2 hover:text-color_primary disabled:bg-color_grey_light disabled:text-color_text disabled:hover:text-color_text"
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password needs a minimum of 6 characters",
            },
          })}
        />
        <p className="text-xs text-color_red"> {errors?.password?.message} </p>
      </div>

      <div className="grid ">
        <Label id="passwordConfirm"> Confirm Password </Label>
        <input
          className="rounded-md border px-4 py-2 hover:text-color_primary disabled:bg-color_grey_light disabled:text-color_text disabled:hover:text-color_text"
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
        <p className="text-xs text-color_red">
          {errors?.passwordConfirm?.message}
        </p>
      </div>

      <div className="flex items-end justify-end gap-3">
        <Buttion variation="secondary" type="reset" className="h-max">
          Cancel
        </Buttion>
        <Buttion className="h-max">Update Password </Buttion>
      </div>
    </form>
  );
}

export default UpdatePassword;
