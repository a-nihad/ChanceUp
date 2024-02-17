import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useCreateMember } from "./useCreateMember";
import { useEditMember } from "./useEditMember";
import { useSettings } from "../settings/useSettings";
import Buttion from "../../ui/Buttion";
import FormRow from "../../ui/form/FormRow";
import Input from "../../ui/form/Input";

function CreateMemberForm({ memberToEdit = {}, onClose }) {
  const { settings: { perLotPrice, currentInstalment } = {} } = useSettings();

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

  function onSubmit(data) {
    data.amount = data.lot * perLotPrice;
    data.pending = currentInstalment - data.instalment;
    data.lotCount = !data.lotCount ? data.lot : data.lotCount;
    data.status = !data.status ? "waiting" : data.status;

    if (isEditSession)
      editMember(
        { newMember: data, id: memberId },
        {
          onSuccess: () => {
            reset(), onClose?.();
          },
        },
      );
    else
      createMember(data, {
        onSuccess: () => {
          reset(), onClose?.();
        },
      });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="no-scrollbar z-50 max-h-[500px] w-max divide-y overflow-y-scroll rounded-lg bg-color_white px-10 py-5 shadow-lg md:pr-12 lg:max-h-[580px] lg:pr-0"
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

        <FormRow label="Lots" error={errors?.lot?.message}>
          <Input type="number" id="lot" register={register} required={true} />
        </FormRow>

        <FormRow label="Instalments" error={errors?.instalment?.message}>
          <Input
            type="number"
            id="instalment"
            register={register}
            defaultValue={0}
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

export default CreateMemberForm;
