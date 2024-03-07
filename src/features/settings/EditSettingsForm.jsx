import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEditSettings } from "./useEditSettings";
import { useSettings } from "./useSettings";
import FormInput from "../../ui/form/FormInput";
import FormRow from "../../ui/form/FormRow";
import Buttion from "../../ui/Buttion";
import Loader from "../../ui/Loader";

const validationSchema = yup
  .object({
    totalInstallment: yup.number(),
    perLotPrice: yup.number(),
    currentInstalment: yup.number(),
  })
  .required();

function EditSettingsForm() {
  const {
    settings: { totalInstallment, perLotPrice, currentInstalment } = {},
    isLoading,
  } = useSettings();

  const { editSettings } = useEditSettings();

  const { handleSubmit, register } = useForm({
    resolver: yupResolver(validationSchema),
  });

  if (isLoading) return <Loader />;

  function onSubmit(data) {
    editSettings(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid max-w-[800px] gap-y-3 p-5 sm:grid-cols-2 sm:gap-x-8 lg:p-8 lg:pt-5 "
    >
      <FormRow label="Total Installment" type="secondary">
        <FormInput
          id="totalInstallment"
          register={register}
          defaultValue={totalInstallment}
        />
      </FormRow>

      <FormRow label="Lot Price" type="secondary">
        <FormInput
          id="perLotPrice"
          register={register}
          defaultValue={perLotPrice}
        />
      </FormRow>

      <FormRow label="Current Installment" type="secondary">
        <FormInput
          id="currentInstalment"
          register={register}
          defaultValue={currentInstalment}
        />
      </FormRow>

      <div className="flex items-end">
        <Buttion className="h-max w-full">Update Setting</Buttion>
      </div>
    </form>
  );
}

export default EditSettingsForm;
