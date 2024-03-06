import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useSignup } from "../authentication/useSignup";
import { useCreateMember } from "./useCreateMember";
import { useEditMember } from "./useEditMember";
import Buttion from "../../ui/Buttion";
import FormRow from "../../ui/form/FormRow";
import FormInput from "../../ui/form/FormInput";

function CreateMemberForm({ memberToEdit = {}, onClose }) {
  const { id: memberId, ...editValue } = memberToEdit;
  const isEditSession = Boolean(memberId);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: isEditSession ? editValue : {},
  });

  const { createMember } = useCreateMember();
  const { editMember } = useEditMember();
  const signup = useSignup();

  function onSubmit(data) {
    data.instalment = !data.instalment ? 0 : data.instalment;
    data.lotCount = !data.lotCount ? data.lot : data.lotCount;
    data.status = !data.status ? "waiting" : data.status;

    const imageType =
      typeof data.image === "string" ? data.image : data.image[0];
    const image = imageType === undefined ? "default-user.jpg" : imageType;

    if (isEditSession)
      editMember(
        { newMember: { ...data, image }, id: memberId },
        {
          onSuccess: () => {
            reset(), onClose?.();
          },
        },
      );
    else {
      createMember(
        { ...data, image },
        {
          onSuccess: () => {
            reset(), onClose?.();
          },
        },
      );
      signup({ email: data.email, password: data.phone });
    }
  }

  return (
    <div className={`w-screen sm:w-fit`}>
      <div
        className={`no-scrollbar z-50 mx-5 overflow-y-scroll rounded-xl border shadow-lg sm:m-0 dark:border-color_dark_text`}
      >
        <header className="dark:bg-dark_primary_dark sticky top-0 bg-color_primary p-3 text-lg font-semibold text-color_light sm:px-5 dark:text-color_grey">
          {isEditSession ? "Edit" : "Create"} Member
        </header>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-color_white dark:bg-dark_grey_light px-5 py-2 sm:px-8 sm:py-5"
        >
          <div className=" gap-x-3 sm:grid">
            <FormRow label="Full Name" error={errors?.name?.message}>
              <FormInput
                type="text"
                id="name"
                register={register}
                required={true}
                placeholder="Full Name"
              />
            </FormRow>

            <FormRow label="Phone Number" error={errors?.phone?.message}>
              <FormInput
                type="text"
                id="phone"
                register={register}
                required={true}
                placeholder="Phone Number"
              />
            </FormRow>

            <FormRow label="Email" error={errors?.email?.message}>
              <FormInput
                type="email"
                id="email"
                register={register}
                required={true}
                placeholder="Email"
              />
            </FormRow>

            <FormRow label="Place" error={errors?.place?.message}>
              <FormInput
                type="text"
                id="place"
                register={register}
                required={true}
                placeholder="Place"
              />
            </FormRow>

            <FormRow label="Address" error={errors?.address?.message}>
              <FormInput
                type="text"
                id="address"
                register={register}
                required={true}
                placeholder="Address"
              />
            </FormRow>

            <FormRow label="Lots" error={errors?.lot?.message}>
              <FormInput
                type="number"
                id="lot"
                register={register}
                required={true}
                placeholder="Lots"
              />
            </FormRow>

            <input
              type="file"
              id="image"
              accept="image/*"
              className=" col-span-2 p-2 text-color_text file:cursor-pointer file:rounded-lg file:border-none file:bg-color_grey file:px-4 file:py-2 "
              placeholder="Chose Profile pic"
              {...register("image")}
            />

            <div className="col-span-2 flex justify-end space-x-4 px-2 py-4">
              <Buttion onClick={onClose} variation="secondary" type="reset">
                Cancel
              </Buttion>
              <Buttion className='dark:border dark:border-color_primary_dark ' > {isEditSession ? "Update " : "Create "} </Buttion>
            </div>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
}

export default CreateMemberForm;
