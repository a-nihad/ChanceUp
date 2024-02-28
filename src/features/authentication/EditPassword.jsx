import { useForm } from "react-hook-form";
import { useUpdateAdmin } from "./useUpdateAdmin";
import Buttion from "../../ui/Buttion";
import Label from "../../ui/Label";
import { useNavigate } from "react-router-dom";

function EditPassword({ type }) {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateAdmin, isUpdating } = useUpdateAdmin();

  const settings =
    "grid max-w-[800px] gap-y-3 p-2 px-5 pb-5 sm:grid-cols-2 sm:gap-x-8 lg:px-8 lg:pb-8";
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

      <Buttion className="h-max">Update Password </Buttion>
    </form>
  );
}

export default EditPassword;
