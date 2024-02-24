import { format } from "date-fns";
import { useCreatetransaction } from "../transactions/useCreatetransaction";
import { useEditSettings } from "../settings/useEditSettings";
import { useEditMember } from "../members/useEditMember";
import { useSettings } from "../settings/useSettings";
import { useMember } from "../members/useMember";
import Buttion from "../../ui/Buttion";
import Loader from "../../ui/Loader";

function Winner({ id, onClose }) {
  const { isLoading, member } = useMember(id);
  const { editMember } = useEditMember();
  const { settings, isLoading: settingsLoading } = useSettings();
  const { editSettings } = useEditSettings();
  const { createTransaction } = useCreatetransaction();

  if (isLoading || settingsLoading) return <Loader />;

  function handleClick() {
    editMember(
      {
        newMember: {
          ...member,
          lotCount: member.lotCount - 1,
          status: member.lotCount > 1 ? "holding" : "done",
        },
        id: member.id,
      },
      {
        onSuccess: () => {
          onClose();
        },
      },
    );
    editSettings({
      ...settings,
      winner: member.name,
    });
    createTransaction({
      payment_type: "debit",
      instalment_count: settings.currentInstalment,
      member_id: member.id,
    });
  }
  return (
    <>
      <img
        className="h-20 w-20 rounded-full object-cover object-center outline outline-2 outline-offset-2 outline-color_grey"
        src={member.image}
        alt="img"
      />
      <h1 className="font-bold capitalize"> {member.name} </h1>
      <div className="flex flex-col items-center rounded-lg text-sm text-color_text">
        <p>
          {member.name}'s Lot is
          <span className="font-bold"> {member.lot} </span>
        </p>
        {member.lotCount > 1 ? (
          <div className="flex flex-col items-center">
            <p> Remaining Lot is {member.lotCount - 1} </p>
            <p>
              and status will change to
              <span className="px-1 font-bold text-color_red">Holding</span>
            </p>
          </div>
        ) : (
          <p>
            and status will change to
            <span className="px-1 font-bold text-color_red">Done</span>
          </p>
        )}
      </div>

      <Buttion
        variation="primary"
        className="mt-3 w-[250px]"
        onClick={handleClick}
      >
        Week {settings.currentInstalment} Winner
      </Buttion>

      <span className="text-xs text-color_primary">
        {format(new Date(), "LLLL dd - yyyy, EEEE")}
      </span>
    </>
  );
}

export default Winner;
