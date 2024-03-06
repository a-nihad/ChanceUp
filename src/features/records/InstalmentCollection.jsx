import { format } from "date-fns";
import { useCreatetransaction } from "../transactions/useCreatetransaction";
import { useEditMember } from "../members/useEditMember";
import { useSettings } from "../settings/useSettings";
import { useMember } from "../members/useMember";
import Buttion from "../../ui/Buttion";
import Loader from "../../ui/Loader";

function InstalmentCollection({ id, onClose, setClose }) {
  const { isLoading, member } = useMember(id);
  const { settings, isLoading: settingsLoading } = useSettings();
  const { editMember } = useEditMember();
  const { createTransaction } = useCreatetransaction();
  if (isLoading || settingsLoading) return <Loader />;

  function handleClick() {
    editMember(
      {
        newMember: { ...member, instalment: member.instalment + 1 },
        id: member.id,
      },
      {
        onSuccess: () => {
          onClose();
          setClose();
        },
      },
    );
    createTransaction({
      payment_type: "credit",
      instalment_count: member.instalment + 1,
      member_id: member.id,
    });
  }

  return (
    <div className="flex w-max flex-col items-center gap-2 rounded-lg ">
      <img
        className="h-20 w-20 rounded-full object-cover object-center outline outline-2 outline-offset-2 outline-color_grey dark:outline-color_text"
        src={member.image}
        alt="img"
      />
      <h1 className="font-bold capitalize  dark:text-color_grey"> {member.name}</h1>
      <div className="flex flex-col items-center rounded-lg text-sm text-color_text">
        <p>
          {member.name}'s Lot is
          <span className="font-bold"> {member.lot} </span>
        </p>
        <p> Current instalment :- {member.instalment + 1} </p>
        <p>
          Payment amount :-
          <span className="font-bold text-color_red">
            {member.lot * settings.perLotPrice}
          </span>
        </p>
      </div>

      <Buttion
        variation="primary"
        className="mt-3 w-[250px] border dark:border-color_primary_dark"
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
