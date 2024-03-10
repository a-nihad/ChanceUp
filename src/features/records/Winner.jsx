import { useCreatetransaction } from "../transactions/useCreatetransaction";
import { useEditSettings } from "../settings/useEditSettings";
import { useEditMember } from "../members/useEditMember";
import { useSettings } from "../settings/useSettings";
import { useMember } from "../members/useMember";
import ProfilePic from "../../ui/ProfilePic";
import MiniLoader from "../../ui/MiniLoader";
import Buttion from "../../ui/Buttion";
import Loader from "../../ui/Loader";
import Today from "../../ui/Today";

function Winner({ id, onClose }) {
  const { member, isLoading } = useMember(id);
  const { settings, isLoading: settingsLoading } = useSettings();
  const { editMember } = useEditMember();
  const { createTransaction } = useCreatetransaction();
  const { editSettings, isPending } = useEditSettings();

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
      <ProfilePic image={member.image} modal={true} />
      <h1 className="font-bold capitalize dark:text-color_grey">
        {member.name}
      </h1>

      <section className="text-center text-sm text-color_text">
        <p>
          {member.name.toUpperCase()}'s lot is
          <span className="font-bold"> {member.lot} </span>
        </p>

        {member.lotCount > 1 && (
          <h2> Remaining lot is {member.lotCount - 1} </h2>
        )}
        <h2>
          and status will change to
          <span className="px-1 font-bold text-color_red">
            {member.lotCount > 1 ? "Holding" : "Done"}
          </span>
        </h2>
      </section>

      <Buttion className="mt-3 w-[250px] " onClick={handleClick}>
        {isPending ? (
          <MiniLoader />
        ) : (
          `Week ${settings.currentInstalment} Winner`
        )}
      </Buttion>
      <Today />
    </>
  );
}

export default Winner;
