import { useForm } from "react-hook-form";
import { useSettings } from "./useSettings";
import { useEditSettings } from "./useEditSettings";
import Loader from "../../ui/Loader";
import Input from "../../ui/Input";
import Buttion from "../../ui/Buttion";
import Label from "../../ui/Label";

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
      className="flex max-w-[400px] flex-col gap-3 rounded-lg px-4 py-2 text-sm sm:px-8 sm:py-5 sm:text-base "
    >
      <div className="flex items-center justify-between gap-5">
        <Label id="totalInstallment"> Total Installment </Label>
        <Input
          type="number"
          id="totalInstallment"
          register={register}
          defaultValue={totalInstallment}
          className="w-[150px]"
        />
      </div>

      <div className="flex items-center justify-between gap-5">
        <Label id="perLotPrice"> Lot Price </Label>
        <Input
          type="number"
          id="perLotPrice"
          register={register}
          defaultValue={perLotPrice}
          className="w-[150px]"
        />
      </div>

      <div className="flex items-center justify-between gap-5">
        <Label id="currentInstalment"> Current Installment </Label>
        <Input
          type="number"
          id="currentInstalment"
          register={register}
          defaultValue={currentInstalment}
          className="w-[150px]"
        />
      </div>

      <Buttion className="mt-5">Update Setting</Buttion>
    </form>
  );
}

export default EditSettingsForm;
