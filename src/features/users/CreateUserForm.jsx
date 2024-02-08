import { Form, useForm } from "react-hook-form";
import Buttion from "../../ui/Buttion";
import FormRow from "../../ui/form/FormRow";
import Input from "../../ui/form/Input";
import { DevTool } from "@hookform/devtools";

function CreateUserForm() {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-max divide-y rounded-lg bg-color_white px-10 py-5 shadow-lg"
      >
        <FormRow label="Full Name" error={errors?.name?.message}>
          <Input type="text" id="name" register={register} />
        </FormRow>

        <FormRow label="Phone" error={errors?.phone?.message}>
          <Input type="text" id="phone" register={register} />
        </FormRow>

        <FormRow label="Email" error={errors?.mail?.message}>
          <Input type="email" id="mail" register={register} />
        </FormRow>

        <FormRow label="Place" error={errors?.place?.message}>
          <Input type="text" id="place" register={register} />
        </FormRow>

        <FormRow label="Lot" error={errors?.lot?.message}>
          <Input type="number" id="lot" register={register} />
        </FormRow>

        <FormRow label="Amount" error={errors?.amount?.message}>
          <Input type="number" id="amount" register={register} />
        </FormRow>

        <FormRow label="Count" error={errors?.count?.message}>
          <Input type="number" id="count" register={register} />
        </FormRow>

        <FormRow label="Status" error={errors?.status?.message}>
          <Input type="text" id="status" register={register} />
        </FormRow>

        <FormRow>
          <div className="col-start-3 space-x-3">
            <Buttion variation="secondary" type="reset">
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
