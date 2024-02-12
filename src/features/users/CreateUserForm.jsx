import { Form, useForm } from "react-hook-form";
import Buttion from "../../ui/Buttion";
import FormRow from "../../ui/form/FormRow";
import Input from "../../ui/form/Input";
import { DevTool } from "@hookform/devtools";
import { useCreateUser } from "./useCreateUser";
import { useEditUser } from "./useEditUser";

function CreateUserForm({ userToEdit = {}, onClose }) {
  const { id: userId, ...editValue } = userToEdit;
  const isEditSession = Boolean(userId);

  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: isEditSession ? editValue : {},
  });

  const { createUser } = useCreateUser();
  const { editingUser } = useEditUser();

  function onSubmit(data) {

    data.amount = data.lot * 1000;
    data.pending = 8 - data.count;

    if (isEditSession)
      editingUser(
        { newUser: data, id: userId },
        {
          onSuccess: () => {
            reset(), onClose?.();
          },
        },
      );
    else
      createUser(data, {
        onSuccess: () => {
          reset(), onClose?.();
        },
      });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-max divide-y rounded-lg bg-color_white px-10 py-5 shadow-lg"
      >
        <FormRow label="Full Name" error={errors?.name?.message}>
          <Input type="text" id="name" register={register} required={true} />
        </FormRow>

        <FormRow label="Phone" error={errors?.phone?.message}>
          <Input type="text" id="phone" register={register} required={true} />
        </FormRow>

        <FormRow label="Email" error={errors?.email?.message}>
          <Input type="email" id="email" register={register} required={true} />
        </FormRow>

        <FormRow label="Place" error={errors?.place?.message}>
          <Input type="text" id="place" register={register} required={true} />
        </FormRow>

        <FormRow label="Address" error={errors?.address?.message}>
          <Input type="text" id="address" register={register} required={true} />
        </FormRow>

        <FormRow label="Lot" error={errors?.lot?.message}>
          <Input type="number" id="lot" register={register} required={true} />
        </FormRow>

        {/* <FormRow label="Amount" error={errors?.amount?.message}>
          <Input type="number" id="amount" register={register} />
        </FormRow> */}

        <FormRow label="Count" error={errors?.count?.message}>
          <Input
            type="number"
            id="count"
            register={register}
            defaultValue={0}
          />
        </FormRow>

        {/* <FormRow label="Pending" error={errors?.pending?.message}>
          <Input type="text" id="pending" register={register} />
        </FormRow> */}

        <FormRow label="Status" error={errors?.status?.message}>
          <Input
            type="text"
            id="status"
            register={register}
            defaultValue="waiting"
          />
        </FormRow>

        <FormRow>
          <div className="col-start-3 space-x-3">
            <Buttion onClick={onClose} variation="secondary" type="reset">
              Cancel
            </Buttion>
            <Buttion> Create New </Buttion>
          </div>
        </FormRow>
      </form>
      <DevTool control={control} />
    </>
  );
}

export default CreateUserForm;
