import { useForm } from "react-hook-form";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSignup } from "../authentication/useSignup";
import { useCreateMember } from "./useCreateMember";
import { useEditMember } from "./useEditMember";
import TableHeader from "../../ui/table/TableHeader";
import FormInput from "../../ui/form/FormInput";
import StyledModal from "../../ui/StyledModal";
import FormRow from "../../ui/form/FormRow";
import Buttion from "../../ui/Buttion";
import Form from "../../ui/form/Form";

const validationSchema = yup
  .object({
    name: yup.string().lowercase().required("Full Name is required"),
    phone: yup.string().required("Phone number is required").min(10),
    email: yup
      .string()
      .required("Email Address is required")
      .email("Invalid email format"),
    address: yup.string().required("Address is required"),
    lot: yup.number().required("lot size is required").positive(),
  })
  .required();

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
    resolver: yupResolver(validationSchema),
    defaultValues: isEditSession
      ? editValue
      : {
          lot: 1,
        },
  });

  const { createMember, isPending } = useCreateMember();
  const { editMember, isPending: isEditing } = useEditMember();
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
      <StyledModal form={true}>
        <TableHeader form={true}>
          {isEditSession ? "Edit" : "Create"} Member
        </TableHeader>

        <Form onSubmit={handleSubmit(onSubmit)} type="form">
          <div className=" gap-x-3 space-y-3 sm:grid">
            <FormRow label="Full Name" error={errors?.name?.message}>
              <FormInput
                id="name"
                register={register}
                placeholder="Full Name"
                disabled={isPending || isEditing}
              />
            </FormRow>

            <FormRow label="Phone Number" error={errors?.phone?.message}>
              <FormInput
                id="phone"
                register={register}
                placeholder="Phone Number"
                disabled={isPending || isEditing}
              />
            </FormRow>

            <FormRow label="Email" error={errors?.email?.message}>
              <FormInput
                id="email"
                register={register}
                placeholder="Email"
                disabled={isPending || isEditing}
              />
            </FormRow>

            <FormRow label="Place" error={errors?.place?.message}>
              <FormInput
                id="place"
                register={register}
                placeholder="Place"
                disabled={isPending || isEditing}
              />
            </FormRow>

            <FormRow label="Address" error={errors?.address?.message}>
              <FormInput
                id="address"
                register={register}
                placeholder="Address"
                disabled={isPending || isEditing}
              />
            </FormRow>

            <FormRow label="Lots" error={errors?.lot?.message}>
              <FormInput
                id="lot"
                register={register}
                placeholder="Lots"
                disabled={isPending || isEditing}
              />
            </FormRow>

            <input
              type="file"
              id="image"
              accept="image/*"
              {...register("image")}
              className=" col-span-2 w-[220px] py-2 text-color_text file:cursor-pointer file:rounded-lg file:border-none file:bg-color_grey file:px-3 file:py-2 sm:w-max "
              placeholder="Chose Profile pic"
              disabled={isPending || isEditing}
            />

            <div className="col-span-2 flex justify-end space-x-4 px-2 py-4">
              <Buttion
                onClick={onClose}
                variation="secondary"
                type="reset"
                disabled={isPending || isEditing}
              >
                Cancel
              </Buttion>
              <Buttion disabled={isPending || isEditing}>
                {isEditSession ? "Update " : "Create "}
              </Buttion>
            </div>
          </div>
        </Form>
        <DevTool control={control} />
      </StyledModal>
    </div>
  );
}

export default CreateMemberForm;
