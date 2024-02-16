import { useForm } from "react-hook-form";
import { useSettings } from "./useSettings";
import { useEditSettings } from "./useEditSettings";
import Loader from "../../ui/Loader";
import FormRow from "../../ui/form/FormRow";
import Input from "../../ui/form/Input";
import Buttion from "../../ui/Buttion";

function EditSettingsForm() {
  const {
    settings: { totalInstallment, perLotPrice, currentInstalment } = {},
    isLoading,
  } = useSettings();

  const { editSettings } = useEditSettings();

  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    editSettings(data);
  }

  if (isLoading) return <Loader />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-3 rounded-lg"
    >
      <FormRow label="Total Instalment" variation={"special"}>
        <Input
          type="number"
          id="totalInstallment"
          register={register}
          defaultValue={totalInstallment}
        />
      </FormRow>

      <FormRow label="Lot Price" variation={"special"}>
        <Input
          type="number"
          id="perLotPrice"
          register={register}
          defaultValue={perLotPrice}
        />
      </FormRow>

      <FormRow label="Current Instalment" variation={"special"}>
        <Input
          type="number"
          id="currentInstalment"
          register={register}
          defaultValue={currentInstalment}
        />
      </FormRow>

      <Buttion className="mt-5 w-[400px]">Update Setting</Buttion>
    </form>
  );
}

export default EditSettingsForm;
