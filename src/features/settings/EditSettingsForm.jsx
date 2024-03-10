import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEditSettings } from "./useEditSettings";
import { useSettings } from "./useSettings";
import FormInput from "../../ui/form/FormInput";
import FormRow from "../../ui/form/FormRow";
import Buttion from "../../ui/Buttion";
import Form from "../../ui/form/Form";
import Loader from "../../ui/Loader";
import MiniLoader from "../../ui/MiniLoader";

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

  const { editSettings, isPending } = useEditSettings();
  const { handleSubmit, register } = useForm({
    resolver: yupResolver(validationSchema),
  });

  if (isLoading) return <Loader />;

  function onSubmit(data) {
    editSettings(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Total Installment" type="secondary">
        <FormInput
          id="totalInstallment"
          register={register}
          disabled={isPending}
          defaultValue={totalInstallment}
        />
      </FormRow>

      <FormRow label="Lot Price" type="secondary">
        <FormInput
          id="perLotPrice"
          register={register}
          disabled={isPending}
          defaultValue={perLotPrice}
        />
      </FormRow>

      <FormRow label="Current Installment" type="secondary">
        <FormInput
          id="currentInstalment"
          register={register}
          disabled={isPending}
          defaultValue={currentInstalment}
        />
      </FormRow>

      <div className="flex items-end">
        <Buttion className="h-max w-full">
          {isPending ? <MiniLoader /> : "Update Setting"}
        </Buttion>
      </div>
    </Form>
  );
}

export default EditSettingsForm;
