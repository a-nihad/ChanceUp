import { format } from "date-fns";
import { GiReceiveMoney } from "react-icons/gi";
import { useSettings } from "../settings/useSettings";
import { useMember } from "./useMember";
import Loader from "../../ui/Loader";
import Buttion from "../../ui/Buttion";
import { useEditMember } from "./useEditMember";

function InstalmentCollection({ id, onClose }) {
  const { isLoading, member } = useMember(id);
  const { settings, isLoading: settingsLoading } = useSettings();
  const { editMember } = useEditMember();
  if (isLoading || settingsLoading) return <Loader />;

  console.log(member);

  function handleClick() {
    editMember(
      {
        newMember: { ...member, instalment: member.instalment + 1 },
        id: member.id,
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
  }

  return (
    <div className="flex w-max flex-col items-center gap-2 rounded-lg border bg-white p-8 shadow-lg ">
      <span className="text-color_text">
        <GiReceiveMoney size={30} />
      </span>
      <h1 className="font-bold capitalize"> {member.name}</h1>
      <div className="flex flex-col items-center rounded-lg text-sm text-color_text">
        <p>
          {member.name}'s Lot is
          <span className="font-bold"> {member.lot} </span>
        </p>
        <p>
          and Payment amount :-
          <span className="font-bold text-color_red">
            {member.lot * settings.perLotPrice}
          </span>
        </p>
      </div>

      <Buttion
        variation="primary"
        className="mt-3 w-[250px]"
        onClick={handleClick}
      >
        Payment Recived
      </Buttion>

      <span className="text-sm text-color_primary">
        {format(new Date(), "LLLL dd - yyyy, EEEE")}
      </span>
    </div>
  );
}

export default InstalmentCollection;
