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
      className="grid max-w-[800px] gap-y-3 p-2 px-5 pb-5 sm:grid-cols-2 sm:gap-x-8 lg:px-8 lg:pb-8 "
    >
      <div className="grid ">
        <Label id="totalInstallment"> Total Installment </Label>
        <Input
          type="number"
          id="totalInstallment"
          register={register}
          defaultValue={totalInstallment}
        />
      </div>

      <div className="grid ">
        <Label id="perLotPrice"> Lot Price </Label>
        <Input
          type="number"
          id="perLotPrice"
          register={register}
          defaultValue={perLotPrice}
        />
      </div>

      <div className="grid ">
        <Label id="currentInstalment"> Current Installment </Label>
        <Input
          type="number"
          id="currentInstalment"
          register={register}
          defaultValue={currentInstalment}
        />
      </div>

      <div className="flex items-end">
        <Buttion className="h-max w-full">Update Setting</Buttion>
      </div>
    </form>
  );
}

export default EditSettingsForm;
